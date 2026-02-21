(function () {
    'use strict';

    const CONFIG = {
        WAVE_LAYERS: 4,
        PARTICLES_PER_LAYER: 180,
        COLOR_LOOP_SPEED: 0.012,
        FRICTION: 0.982,
        JITTER: 0.15,
        PASTEL_LUM: 72,
        PASTEL_SAT: 55,
        SUB_STEP: 3,
        WAVE_OPACITY_BASE: 0.15,
        GLOW_STRENGTH: 0.4,
        PARTICLE_SIZE_BASE: 0.4,
        PARTICLE_SIZE_VARIANCE: 0.5,
        GRAVITY_INFLUENCE: 0.001
    };

    // Pre-compute constants
    const TWO_PI = Math.PI * 2;

    const MathUtils = {
        lerp: (a, b, t) => a + (b - a) * t,
        lerpAngle: (a, b, t) => {
            const d = b - a;
            const delta = d > 180 ? d - 360 : (d < -180 ? d + 360 : d);
            return a + delta * t;
        },
        clamp: (val, min, max) => Math.max(min, Math.min(max, val))
    };

    class WavePhysics {
        constructor(params) {
            this.amplitude = params.amplitude;
            this.wavelength = params.wavelength;
            this.speed = params.speed;
            this.phase = params.phase;
            // Pre-compute wave numbers for main + harmonics
            this.k = TWO_PI / this.wavelength;
            this.harmonicData = new Float64Array(9);
            const rawHarmonics = [0.25, 0.4, 1.2, 0.12, 1.6, 0.6, 0.05, 2.8, 2.0];
            for (let i = 0; i < 3; i++) {
                const base = i * 3;
                this.harmonicData[base] = this.amplitude * rawHarmonics[base];     // pre-multiplied amplitude
                this.harmonicData[base + 1] = TWO_PI / (this.wavelength * rawHarmonics[base + 1]); // pre-computed k
                this.harmonicData[base + 2] = rawHarmonics[base + 2];              // time multiplier
            }
        }

        calculate(x, t) {
            let y = Math.sin(x * this.k + t) * this.amplitude;
            const hd = this.harmonicData;
            y += Math.sin(x * hd[1] + t * hd[2]) * hd[0];
            y += Math.sin(x * hd[4] + t * hd[5]) * hd[3];
            y += Math.sin(x * hd[7] + t * hd[8]) * hd[6];
            return y;
        }

        // Build a lookup table of wave Y values for integer x positions
        // Returns Float32Array where index = x pixel, value = wave Y
        buildSurfaceLUT(width, t) {
            const step = CONFIG.SUB_STEP;
            const len = Math.ceil(width / step) + 2;
            const lut = new Float32Array(len);
            const k = this.k;
            const hd = this.harmonicData;
            const amp = this.amplitude;

            for (let i = 0; i < len; i++) {
                const x = i * step;
                let y = Math.sin(x * k + t) * amp;
                y += Math.sin(x * hd[1] + t * hd[2]) * hd[0];
                y += Math.sin(x * hd[4] + t * hd[5]) * hd[3];
                y += Math.sin(x * hd[7] + t * hd[8]) * hd[6];
                lut[i] = y;
            }
            return lut;
        }

        // Interpolate wave Y from LUT
        sampleLUT(lut, x) {
            const step = CONFIG.SUB_STEP;
            const fi = x / step;
            const i = fi | 0; // fast floor
            const frac = fi - i;
            const a = lut[i] || 0;
            const b = lut[i + 1] || a;
            return a + (b - a) * frac;
        }

        // Get slope from LUT (finite difference)
        slopeLUT(lut, x) {
            const step = CONFIG.SUB_STEP;
            const fi = x / step;
            const i = fi | 0;
            const a = lut[i] || 0;
            const b = lut[i + 1] || a;
            return (b - a) / step;
        }
    }

    class ParticleSystem {
        constructor(count, layerIndex) {
            this.count = count;
            this.layerIndex = layerIndex;
            // x(0), yOffset(1), vx(2), size(3), phaseOff(4), shimmerSpeed(5), drawX(6), drawY(7), weight(8)
            this.data = new Float32Array(count * 9);
            for (let i = 0; i < count; i++) this.initParticle(i);
        }

        initParticle(i) {
            const idx = i * 9;
            this.data[idx] = Math.random();
            this.data[idx + 1] = Math.random() * 90 + 5;
            this.data[idx + 2] = 0;
            this.data[idx + 3] = CONFIG.PARTICLE_SIZE_BASE + Math.random() * CONFIG.PARTICLE_SIZE_VARIANCE;
            this.data[idx + 4] = Math.random() * TWO_PI;
            this.data[idx + 5] = Math.random() * 0.0015 + 0.0005;
            this.data[idx + 8] = 0.8 + Math.random() * 0.4;
        }

        update(time, w, h, physics, lut) {
            const tPhysics = time * 0.0007 * physics.speed + physics.phase;
            const driftBase = 0.00012 * physics.speed;
            const friction = CONFIG.FRICTION;
            const gravInfluence = CONFIG.GRAVITY_INFLUENCE;
            const jitter = CONFIG.JITTER;
            const baseH = h * (0.6 + this.layerIndex * 0.1);
            const d = this.data;
            const t008 = time * 0.008;

            for (let i = 0; i < this.count; i++) {
                const idx = i * 9;
                const weight = d[idx + 8];
                const xNorm = d[idx];
                const xPos = xNorm * w;

                // Slope from LUT instead of calling calculate() twice
                const slope = physics.slopeLUT(lut, xPos);
                d[idx + 2] = (d[idx + 2] + slope * gravInfluence * weight) * friction;

                d[idx] = xNorm + (d[idx + 2] / w) + (driftBase * weight);

                if (d[idx] > 1.05) d[idx] = -0.05;
                else if (d[idx] < -0.05) d[idx] = 1.05;

                const finalX = d[idx] * w;

                // Surface Y from LUT instead of calling calculate()
                const waveY = physics.sampleLUT(lut, finalX);
                const surfaceY = baseH - waveY;

                d[idx + 6] = finalX + Math.sin(t008 + d[idx + 4]) * jitter;
                d[idx + 7] = surfaceY + d[idx + 1];
            }
        }
    }

    class VolumetricEngine {
        constructor(canvasId) {
            this.container = document.getElementById(canvasId);
            if (!this.container) return;

            this.canvas = document.createElement('canvas');
            this.ctx = this.canvas.getContext('2d', {
                alpha: true,
                desynchronized: true
            });
            this.container.appendChild(this.canvas);

            this.waves = [];
            this.systems = [];
            this.palette = [
                { h: 220, s: CONFIG.PASTEL_SAT, l: CONFIG.PASTEL_LUM },
                { h: 260, s: CONFIG.PASTEL_SAT, l: CONFIG.PASTEL_LUM },
                { h: 180, s: CONFIG.PASTEL_SAT, l: CONFIG.PASTEL_LUM }
            ];

            this.isVisible = false;
            this.rafId = null;
            this._resizeTimer = 0;

            this.setup();
            this.resize();
            this.initEvents();
            this.initVisibility();
        }

        setup() {
            for (let i = 0; i < CONFIG.WAVE_LAYERS; i++) {
                this.waves.push(new WavePhysics({
                    amplitude: 34 - i * 6,
                    wavelength: 1100 - i * 160,
                    speed: 0.35 + i * 0.2,
                    phase: i * Math.PI * 0.5
                }));
                this.systems.push(new ParticleSystem(CONFIG.PARTICLES_PER_LAYER, i));
            }
        }

        resize() {
            this.dpr = Math.min(window.devicePixelRatio || 1, 2);
            this.width = this.container.clientWidth;
            this.height = this.container.clientHeight;
            this.canvas.width = this.width * this.dpr;
            this.canvas.height = this.height * this.dpr;
            this.canvas.style.width = this.width + 'px';
            this.canvas.style.height = this.height + 'px';
            this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
        }

        initEvents() {
            // Debounced resize
            window.addEventListener('resize', () => {
                clearTimeout(this._resizeTimer);
                this._resizeTimer = setTimeout(() => this.resize(), 150);
            });
        }

        // Only animate when the footer is actually visible on screen
        initVisibility() {
            const observer = new IntersectionObserver((entries) => {
                this.isVisible = entries[0].isIntersecting;
                if (this.isVisible && !this.rafId) {
                    this.rafId = requestAnimationFrame((t) => this.render(t));
                }
            }, { rootMargin: '100px 0px' });
            observer.observe(this.container);
        }

        render(time) {
            if (!this.isVisible) {
                this.rafId = null;
                return;
            }

            const ctx = this.ctx;
            const w = this.width;
            const h = this.height;

            ctx.clearRect(0, 0, w, h);

            // Compute color once per frame
            const tCol = time * 0.0004;
            const progress = (tCol * CONFIG.COLOR_LOOP_SPEED) % 1;
            const idx = Math.floor(tCol * CONFIG.COLOR_LOOP_SPEED) % this.palette.length;
            const nextIdx = (idx + 1) % this.palette.length;

            const colorH = MathUtils.lerpAngle(this.palette[idx].h, this.palette[nextIdx].h, progress);
            const colorS = MathUtils.lerp(this.palette[idx].s, this.palette[nextIdx].s, progress);
            const colorL = MathUtils.lerp(this.palette[idx].l, this.palette[nextIdx].l, progress);

            for (let i = 0; i < CONFIG.WAVE_LAYERS; i++) {
                this.drawLayer(i, time, colorH, colorS, colorL);
            }

            this.rafId = requestAnimationFrame((t) => this.render(t));
        }

        drawLayer(index, time, colorH, colorS, colorL) {
            const physics = this.waves[index];
            const system = this.systems[index];
            const w = this.width;
            const h = this.height;
            const ctx = this.ctx;
            const baseH = h * (0.6 + index * 0.1);
            const tPhysics = time * 0.0007 * physics.speed + physics.phase;

            // Build surface LUT once per layer per frame
            const lut = physics.buildSurfaceLUT(w, tPhysics);
            const step = CONFIG.SUB_STEP;
            const lutLen = lut.length;

            ctx.save();

            // Draw wave clip path from LUT directly (no recalculation)
            ctx.beginPath();
            ctx.moveTo(0, h);
            for (let i = 0; i < lutLen; i++) {
                ctx.lineTo(i * step, baseH - lut[i]);
            }
            ctx.lineTo(w, h);
            ctx.closePath();
            ctx.clip();

            // Fill gradient
            const opacity = CONFIG.WAVE_OPACITY_BASE + index * 0.08;
            const grad = ctx.createLinearGradient(0, baseH - 60, 0, h);
            grad.addColorStop(0, `hsla(${colorH},${colorS + 15}%,${colorL}%,${opacity + 0.3})`);
            grad.addColorStop(1, `hsla(${colorH},${colorS}%,${colorL - 25}%,${opacity})`);
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, w, h);

            // Update particles using LUT
            ctx.globalCompositeOperation = 'lighter';
            system.update(time, w, h, physics, lut);

            // Batch particles by alpha ranges to reduce fillStyle changes
            // Group into 4 alpha buckets
            const d = system.data;
            const count = system.count;
            const indexMul = 1 - index * 0.12;
            const pColorS = colorS + 10;
            const pColorL = colorL + 18;

            // Pre-compute alpha for each particle and sort into buckets
            const buckets = [[], [], [], []];
            for (let j = 0; j < count; j++) {
                const pIdx = j * 9;
                const sinVal = Math.sin(time * d[pIdx + 5] + d[pIdx + 4]);
                const shimmer = ((sinVal + 1) * 0.5);
                const shimmerCubed = shimmer * shimmer * shimmer;
                const alpha = (0.12 + shimmerCubed * 0.5) * indexMul;
                // Bucket: 0-0.1, 0.1-0.2, 0.2-0.35, 0.35+
                const bucket = alpha < 0.1 ? 0 : (alpha < 0.2 ? 1 : (alpha < 0.35 ? 2 : 3));
                buckets[bucket].push(pIdx);
            }

            // Draw each bucket with a single fillStyle
            const alphaValues = [0.06, 0.15, 0.27, 0.42];
            for (let b = 0; b < 4; b++) {
                const particles = buckets[b];
                if (particles.length === 0) continue;

                ctx.fillStyle = `hsla(${colorH},${pColorS}%,${pColorL}%,${alphaValues[b]})`;
                ctx.beginPath();
                for (let p = 0; p < particles.length; p++) {
                    const pIdx = particles[p];
                    const px = d[pIdx + 6];
                    const py = d[pIdx + 7];
                    const sz = d[pIdx + 3];
                    // Inline arc: moveTo + arc is faster than separate beginPath per particle
                    ctx.moveTo(px + sz, py);
                    ctx.arc(px, py, sz, 0, 6.28);
                }
                ctx.fill();
            }

            ctx.restore();
        }
    }

    window.initFooterWave = () => new VolumetricEngine('footer-wave-container');
    window.initFooterGlitter = window.initFooterWave;

    if (document.readyState === 'complete') {
        window.initFooterWave();
    } else {
        window.addEventListener('load', window.initFooterWave);
    }

    const cleanupLegacy = () => {
        const oldWaves = document.querySelectorAll('.wave-layer');
        if (oldWaves.length > 0) oldWaves.forEach(el => el.remove());
    };
    cleanupLegacy();

})();