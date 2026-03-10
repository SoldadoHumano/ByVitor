/**
 * Procedural WebGL Background Animation
 * Dynamically injected and initialized
 */
function initWebGLBackground() {
    // 1. Ensure canvas exists
    let canvas = document.getElementById('glcanvas');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'glcanvas';
        // Set initial opacity to 0 to prevent "malfeito" frame
        canvas.style.opacity = '0';
        canvas.style.transition = 'opacity 1.5s ease-in-out';
        document.body.prepend(canvas);
    }

    const gl = canvas.getContext('webgl', {
        antialias: false,
        depth: false,
        alpha: false,
        stencil: false,
        powerPreference: 'high-performance'
    });

    if (!gl) {
        console.error('WebGL is not supported by your browser.');
        return;
    }

    // --- SHADER DEFINITIONS ---
    // (Shader sources remain unchanged)
    const vertexShaderSource = `
        attribute vec2 a_position;
        void main() {
            gl_Position = vec4(a_position, 0.0, 1.0);
        }
    `;

    // Inject procedural randomness into the shader
    const randSeedX = (Math.random() * 100.0 + 10.0).toFixed(4);
    const randSeedY = (Math.random() * 100.0 + 10.0).toFixed(4);

    const distortX1 = (Math.random() * 2.0 + 1.0).toFixed(4);
    const distortY1 = (Math.random() * 5.0 + 5.0).toFixed(4);

    const distortX2 = (Math.random() * 5.0 + 5.0).toFixed(4);
    const distortY2 = (Math.random() * 2.0 + 1.0).toFixed(4);

    const timeSpeedMod1 = (Math.random() * 0.04 + 0.03).toFixed(4);
    const timeSpeedMod2 = (Math.random() * 0.1 + 0.1).toFixed(4);

    const fragmentShaderSource = `
        precision highp float;

        uniform vec2 u_resolution;
        uniform float u_time;

        // Pseudo-random number generator
        float random(in vec2 _st) {
            return fract(sin(dot(_st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
        }

        // 2D Noise function
        float noise(in vec2 _st) {
            vec2 i = floor(_st);
            vec2 f = fract(_st);

            float a = random(i);
            float b = random(i + vec2(1.0, 0.0));
            float c = random(i + vec2(0.0, 1.0));
            float d = random(i + vec2(1.0, 1.0));

            vec2 u = f * f * (3.0 - 2.0 * f);

            return mix(a, b, u.x) +
                   (c - a) * u.y * (1.0 - u.x) +
                   (d - b) * u.x * u.y;
        }

        #define OCTAVES 5
        float fbm(in vec2 _st) {
            float v = 0.0;
            float a = 0.5;
            vec2 shift = vec2(${randSeedX}, ${randSeedY});
            mat2 rot = mat2(cos(0.5), sin(0.5),
                           -sin(0.5), cos(0.5));
            for (int i = 0; i < OCTAVES; ++i) {
                v += a * noise(_st);
                _st = rot * _st * 2.0 + shift;
                a *= 0.5;
            }
            return v;
        }

        void main() {
            vec2 st = gl_FragCoord.xy / u_resolution.xy;
            float aspect = u_resolution.x / u_resolution.y;
            
            // Normalize based on the shortest dimension for better consistency across devices
            float scale = 3.0;
            if (aspect > 1.0) {
                st.x *= aspect;
            } else {
                st.y /= aspect;
                scale *= 1.2; // Extra adjust for tall screens
            }
            st *= scale;

            vec2 q = vec2(0.0);
            q.x = fbm(st + ${timeSpeedMod1} * u_time);
            q.y = fbm(st + vec2(1.0));

            vec2 r = vec2(0.0);
            r.x = fbm(st + 1.0 * q + vec2(${distortX1}, ${distortY1}) + ${timeSpeedMod2} * u_time);
            r.y = fbm(st + 1.0 * q + vec2(${distortX2}, ${distortY2}) + 0.12 * u_time);

            float f = fbm(st + r);

            // Base background: Deep Purple
            vec3 color = vec3(0.0448, 0.0, 0.0896);
            
            // Mix in Vibrant Magenta
            color = mix(color, vec3(0.3584, 0.0, 0.224), clamp((f * f) * 3.0, 0.0, 1.0));
            
            // Mix in Electric Blue
            color = mix(color, vec3(0.0, 0.1344, 0.448), clamp(length(q), 0.0, 1.0));
            
            // Mix in Soft Pink/Purple highlights for depth
            color = mix(color, vec3(0.2688, 0.0896, 0.3584), clamp(length(r.x), 0.0, 1.0));

            float specular = pow(f, 4.0) * 1.5;
            color += vec3(0.0896, 0.0448, 0.1344) * specular;

            gl_FragColor = vec4((f * f * f + 0.6 * f * f + 0.5 * f) * color, 1.0);
        }
    `;

    function compileShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program linking error:', gl.getProgramInfoLog(program));
        return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
        -1.0, -1.0,
        1.0, -1.0,
        -1.0, 1.0,
        -1.0, 1.0,
        1.0, -1.0,
        1.0, 1.0,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeLocation = gl.getUniformLocation(program, 'u_time');

    function resizeCanvas() {
        // Optimized: Capped to 1.5 instead of 2.0 to save significant fill-rate
        const pixelRatio = Math.min(window.devicePixelRatio, 1.5);
        canvas.width = window.innerWidth * pixelRatio;
        canvas.height = window.innerHeight * pixelRatio;

        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    }

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(resizeCanvas, 100);
    });
    window.addEventListener('orientationchange', () => setTimeout(resizeCanvas, 100));
    resizeCanvas();

    // Start with a random time offset so it's instantly different on load
    const timeOffset = Math.random() * 1000.0;
    const startTime = performance.now();

    function render(now) {
        const currentTime = ((now - startTime) / 1000.0) + timeOffset;

        gl.uniform1f(timeLocation, currentTime);
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        // Fade in after the first frame is guaranteed to be ready
        if (canvas.style.opacity === '0') {
            canvas.style.opacity = '1';
        }

        requestAnimationFrame(render);
    }

    requestAnimationFrame(render);

}

// Ensure initialization happens as soon as possible but safely
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initWebGLBackground();
} else {
    document.addEventListener('DOMContentLoaded', initWebGLBackground);
}
