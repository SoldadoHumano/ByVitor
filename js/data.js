/* ============================================================
   DATA.JS — All site content (projects, articles, learn topics, timeline, sponsors)
   Easy to expand: just add entries to any array/object below.
   ============================================================ */

const SITE_DATA = {

    /* ====================== NAVIGATION ====================== */
    nav: [
        { label: 'Home', href: 'index.html' },
        { label: 'Projetos', href: 'projects.html' },
        { label: 'Comunidade', href: 'community.html' },
        { label: 'Aprender', href: 'learn.html' }
    ],

    /* ====================== TIMELINE ====================== */
    timeline: [
        {
            year: '2025 - Presente', title: 'Desenvolvedor Full-Stack',
            desc: 'Atuando como Desenvolvedor Full-Stack, desenvolvendo aplicações front-end e back-end. Desde 2024, mantenho uma rotina constante de estudos, aprofundando meus conhecimentos nas linguagens que já domino e explorando novas linguagens, frameworks, tecnologias e arquitetura de software.'
        },
        {
            year: '2024', title: 'Ramificação de Conhecimento',
            desc: 'Ano marcado pela ampliação técnica: aprofundamento em banco de dados e integração de sistemas, além da exploração de linguagens como C++ e Kotlin. Paralelamente, consolidei minha base em desenvolvimento web com HTML, CSS e JavaScript.'
        },
        {
            year: '2023', title: 'Início dos Estudos',
            desc: 'Movido pela curiosidade sobre como as coisas funcionam, comecei a estudar programação de forma mais estruturada, com foco em Java e fundamentos de algoritmos.'
        },
        {
            year: '2021 - 2022', title: 'Primeiros Contatos com Programação',
            desc: 'Primeiras experiências com tecnologia através da configuração de servidores e elaboração de documentação técnica.'
        }
    ],

    /* ====================== SPONSORS / TRUST ====================== */
    sponsors: [
        {
            name: 'MestreJinBruno',
            img: 'images/sponsors/mestrejinbruno.gif',
            alt: 'MestreJinBruno logo',
            url: 'https://mestrejinbrunoficial.com.br/'
        }
    ],

    /* ====================== PROJECTS ====================== */
    projects: [
        {
            title: 'vBrands',
            desc: 'Sistema de alteração de brands do Debug para servidor de Minecraft.',
            tags: ['Java', 'Netty', 'Performance', 'Velocity', 'Minecraft'],
            github: 'https://github.com/Deep-Craft/vBrands', live: '#', icon: '🗄️'
        },
        {
            title: 'vEconomy',
            desc: 'Sistema de economia para servidores de Minecraft, com sistemas de transações, transferências, depósitos, saques e API para integração com outros sistemas.',
            tags: ['Java', 'Database', 'Performance', 'Paper', 'Minecraft'],
            github: 'https://github.com/Deep-Craft/vEconomy', live: '#', icon: '💰'
        },
        {
            title: 'vPortrait',
            desc: 'vPortrait é um plugin que permite colocar uma imagem real via interpolação bicúbica dentro do seu servidor de Minecraft, utilizando mapas e molduras.',
            tags: ['Java', 'Netty', 'Performance', 'Spigot', 'Minecraft'],
            github: 'https://github.com/SoldadoHumano/vPortrait', live: '#', icon: '🖼️'
        },
        {
            title: 'Stream Engine',
            desc: 'StreamEngine é uma aplicação que faz countdown das lives e gerencia as músicas tocando ao vivo, juntamente com o display moderno e minimalista da música.',
            tags: ['JavaScript', 'Networking', 'Node.js', 'Live', 'Performance'],
            github: 'https://github.com/SoldadoHumano/StreamEngine', live: '#', icon: '🎵'
        },
        {
            title: 'MestreJinBruno',
            desc: 'WebSite feito para meu amigo streamer MestreJinBruno, também conhecido como Bruno Silva.',
            tags: ['Front-End', 'HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/SoldadoHumano/mestrejinbruno', live: 'https://mestrejinbrunoficial.com.br/', icon: '🔍'
        },
        {
            title: 'Em Breve...',
            desc: 'Mais conteúdo aqui em breve...',
            tags: [],
            github: '#', live: '#', icon: '⏳'
        }
    ],


    /* ====================== LEARN TOPICS ====================== */
    learn: {
        'Introdução': {
            icon: '👋',
            topics: {
                'welcome': {
                    title: 'Boas Vindas',
                    contentPath: 'content/introduction/welcome.md'
                },
                'programming': {
                    title: 'O que é Programação?',
                    contentPath: 'content/introduction/programming.md'
                },
                'algorithm': {
                    title: 'O que é um Algoritmo?',
                    contentPath: 'content/introduction/algorithm.md'
                },
                'thinking': {
                    title: 'Pensamento Computacional',
                    contentPath: 'content/introduction/thinking.md'
                }
            }
        },
        'Estruturas de Controle': {
            icon: '🔄',
            topics: {
                'sequence': {
                    title: 'Sequência',
                    contentPath: 'content/controlstructures/sequence.md'
                },
                'conditions': {
                    title: 'Condicionais',
                    contentPath: 'content/controlstructures/conditions.md'
                },
                'loops': {
                    title: 'Loops',
                    contentPath: 'content/controlstructures/loops.md'
                },
                'flowcontrol': {
                    title: 'Controle de Fluxo',
                    contentPath: 'content/controlstructures/flowcontrol.md'
                }
            },
        },
        'Variáveis e Tipos de Dados': {
            icon: '📦',
            topics: {
                'primitivetypes': {
                    title: 'Tipos Primitivos',
                    contentPath: 'content/variablesanddata/primitivetypes.md'
                },
                'variablesandconstants': {
                    title: 'Variáveis e Constantes',
                    contentPath: 'content/variablesanddata/variablesandconstants.md'
                },
                'typeconversion': {
                    title: 'Conversão de Tipos',
                    contentPath: 'content/variablesanddata/typeconversion.md'
                }
            }
        },
        'Operadores': {
            icon: '🧮',
            topics: {
                'arithmetic': {
                    title: 'Operadores Aritméticos',
                    contentPath: 'content/operators/arithmetic.md'
                },
                'comparison': {
                    title: 'Operadores de Comparação',
                    contentPath: 'content/operators/comparison.md'
                },
                'logical': {
                    title: 'Operadores Lógicos',
                    contentPath: 'content/operators/logical.md'
                },
                'assignment': {
                    title: 'Operadores de Atribuição',
                    contentPath: 'content/operators/assignment.md'
                }
            }
        },
        'Entrada e Saída': {
            icon: 'I/O',
            topics: {
                'inputoutput': {
                    title: 'Conceito de Entrada e Saída',
                    contentPath: 'content/inputoutput/inout.md'
                },
                'results': {
                    title: 'Exibição de Resultados',
                    contentPath: 'content/inputoutput/results.md'
                }
            }
        }
    }
};
