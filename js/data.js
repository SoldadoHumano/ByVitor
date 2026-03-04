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
            icon: '',
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
            icon: '',
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
            icon: '',
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
            icon: '',
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
            icon: '',
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
        },
        'Programação Orientada a Objetos': {
            icon: '',
            topics: {
                'classesobjects': {
                    title: 'Classes e Objetos',
                    contentPath: 'content/poo/classesobjects.md'
                },
                'attributesmethods': {
                    title: 'Atributos e Métodos',
                    contentPath: 'content/poo/attributesmethods.md'
                },
                'constructors': {
                    title: 'Construtores',
                    contentPath: 'content/poo/constructors.md'
                },
                'encapsulation': {
                    title: 'Encapsulamento',
                    contentPath: 'content/poo/encapsulation.md'
                },
                'inheritance': {
                    title: 'Herança',
                    contentPath: 'content/poo/inheritance.md'
                },
                'polymorphism': {
                    title: 'Polimorfismo',
                    contentPath: 'content/poo/polymorphism.md'
                },
                'interfacesabstract': {
                    title: 'Interfaces e Classes Abstratas',
                    contentPath: 'content/poo/interfacesabstract.md'
                }
            }
        },
        'Fundamentos Avançados': {
            icon: '',
            topics: {
                primitve_vs_objects: {
                    title: 'Stack vs Heap',
                    contentPath: 'content/advanced_fundamentals_and_syntax/primitive_vs_objects.md'
                },
                string_pool: {
                    title: 'String Pool',
                    contentPath: 'content/advanced_fundamentals_and_syntax/string_pool_internals.md'
                },
                access_modifiers: {
                    title: 'Modificadores de Acesso',
                    contentPath: 'content/advanced_fundamentals_and_syntax/access_modifiers.md'
                },
                static_context_traps: {
                    title: 'Contexto Estático',
                    contentPath: 'content/advanced_fundamentals_and_syntax/static_context_traps.md'
                },
                final_keyword_safety: {
                    title: 'Segurança com Final',
                    contentPath: 'content/advanced_fundamentals_and_syntax/final_keyword_safety.md'
                },
                operator_precedence: {
                    title: 'Precedência de Operadores',
                    contentPath: 'content/advanced_fundamentals_and_syntax/operator_precedence.md'
                },
                variable_shadowing: {
                    title: 'Variable Shadowing',
                    contentPath: 'content/advanced_fundamentals_and_syntax/variable_shadowing.md'
                },
                initialization_blocks: {
                    title: 'Blocos de Inicialização',
                    contentPath: 'content/advanced_fundamentals_and_syntax/initialization_blocks.md'
                },
                enumeration_advanced: {
                    title: 'Enumerações Avançadas',
                    contentPath: 'content/advanced_fundamentals_and_syntax/enumeration_advanced.md'
                },
                nested_classes: {
                    title: 'Classes Aninhadas',
                    contentPath: 'content/advanced_fundamentals_and_syntax/nested_classes.md'
                },
                var_type_inference: {
                    title: 'Inferência com Var',
                    contentPath: 'content/advanced_fundamentals_and_syntax/var_type_inference.md'
                },
                switch_expressions: {
                    title: 'Expressões Switch',
                    contentPath: 'content/advanced_fundamentals_and_syntax/switch_expressions.md'
                },
                text_blocks_multiline: {
                    title: 'Blocos de Texto',
                    contentPath: 'content/advanced_fundamentals_and_syntax/text_blocks_multiline.md'
                },
                unicode_identifier_support: {
                    title: 'Suporte Unicode',
                    contentPath: 'content/advanced_fundamentals_and_syntax/unicode_identifier_support.md'
                },
                sealed_interfaces_logic: {
                    title: 'Interfaces Seladas',
                    contentPath: 'content/advanced_fundamentals_and_syntax/sealed_interfaces_logic.md'
                }
            }
        }
    },

    /* ====================== 404 PHRASES ====================== */

    error404: [
        "404: A página saiu pra tomar um café e esqueceu de voltar.",
        "Esta página está de greve, volte mais tarde.",
        "Erro 404: Procuramos, mas só achamos meia perdida e um chinelo.",
        "404: Ela fugiu com o seu senso de responsabilidade.",
        "Essa página foi abduzida por alienígenas, mas mandou um abraço.",
        "404: O cachorro comeu o HTML.",
        "Essa página está se escondendo de você. Não conte a ninguém.",
        "Erro 404: Estamos em manutenção… há 10 anos.",
        "404: A página está em outro fusor horário.",
        "Essa página resolveu virar artista de circo.",
        "Erro 404: Entrou em coma profundo no servidor.",
        "404: Sumiu mais rápido que dinheiro na sexta-feira.",
        "Essa página está ocupada contando ovelhas.",
        "Erro 404: Procuramos em todos os cantos, inclusive no sofá.",
        "404: A página se perdeu no supermercado.",
        "Esta página está ocupada assistindo Netflix.",
        "404: Ela foi resgatar Wi-Fi perdido.",
        "Essa página se aposentou cedo, vive agora na praia.",
        "Erro 404: Entrou pra lista de desaparecidos digitais.",
        "404: A página decidiu virar meme.",
        "Essa página está curtindo umas férias em outro domínio.",
        "Erro 404: Se você a encontrar, avise que sentimos saudades.",
        "404: A página foi sequestrada por unicórnios.",
        "Essa página foi vender NFT em outro servidor.",
        "Erro 404: Até o GPS digital desistiu de procurar.",
        "404: A página se perdeu no metrô da internet.",
        "Essa página foi capturada pelo TikTok.",
        "Erro 404: Tentou fugir, mas tropeçou no cache.",
        "404: A página está em terapia de autoajuda.",
        "Essa página se tornou influencer e apagou tudo.",
        "Erro 404: Entrou em loop existencial.",
        "404: Procuramos, mas ela pediu para não ser encontrada.",
        "Essa página foi abduzida por um hamster ninja.",
        "Erro 404: Está em quarentena, mas não avisa quando volta.",
        "404: A página foi tomar banho de sol.",
        "Essa página se tornou vegana e saiu do seu servidor.",
        "Erro 404: Sumiu mais rápido que senha esquecida.",
        "404: Está em retiro espiritual no Google Docs.",
        "Essa página virou fantasma e assombra outros sites.",
        "Erro 404: Pegou carona na nuvem errada.",
        "404: Está jogando esconde-esconde com você.",
        "Essa página se perdeu tentando atualizar o Instagram.",
        "Erro 404: Entrou pra lista de páginas desaparecidas misteriosamente.",
        "404: Fugiu para se tornar um pássaro digital.",
        "Essa página está esperando o próximo eclipse para voltar.",
        "Erro 404: Saiu pra comprar pão e se perdeu na internet.",
        "404: Até os pixels dela estão de férias.",
        "Essa página foi abduzida por trolls da deep web.",
        "Erro 404: Está em outro universo paralelo, sem sinal.",
        "404: Sumiu porque alguém falou 'bug'.",
        "Essa página está ocupada resolvendo o sentido da vida.",
        "Erro 404: Está meditando pra descobrir onde se perdeu.",
        "404: Fugiu para viver em paz no /dev/null.",
        "404: Se transformou em pão e fermentou sozinho.",
        "Erro 404: O servidor deu um kernel panic só de olhar pra essa URL.",
        "404: A página foi sequestrada por agiotas digitais. Pague o resgate em café.",
        "Essa página ouviu que o Java ia morrer e entrou em depressão.",
        "Erro 404: A página foi ver se no céu tem pão... e morreu.",
        "404: O estagiário apagou o arquivo achando que era lixo.",
        "Essa página foi convidada para uma festa no metaverso e esqueceu de nós.",
        "Erro 404: A página se perdeu procurando o 'Onde está o Wally?'.",
        "404: Ela decidiu que queria ser um PDF e foi pra outra pasta.",
        "Essa página está tentando resolver um erro de indentação infinito.",
        "404: Foi abduzida pelo Clippy do Office.",
        "Erro 404: A página está esperando o Windows terminar de atualizar.",
        "404: Sumiu mais rápido que o hype do Threads.",
        "Essa página foi viver em uma ilha deserta sem Wi-Fi.",
        "Erro 404: Ela se chateou porque você nunca clica nela.",
        "404: A página está na fila do INSS digital.",
        "Essa página virou um easter egg e agora ninguém a acha.",
        "Opa… essa página foi sequestrada por hackers russos.",
        "404: Aqui não tem nada, só dor e arrependimento.",
        "Você encontrou o buraco negro da internet. Parabéns.",
        "Essa página saiu pra beber e esqueceu de voltar.",
        "Erro 404: A gente procurou, juramos… mas nada.",
        "A página que você procura está mais perdida que sua vida amorosa.",
        "404: Aqui só tinha ar e promessas não cumpridas.",
        "Essa página foi abduzida por alienígenas. Tente a próxima galáxia.",
        "Ops… não é aqui. Mas quer chorar junto?",
        "404: O site decidiu tirar férias. Volta nunca.",
        "Erro 404: IRQL_NOT_LESS_OR_EQUAL. Nem o Windows entendeu que porra você tentou carregar.",
        "404: Seu PC será reiniciado em 1 minuto para instalar atualizações que vão estragar tudo de novo.",
        "Erro 404: A página foi vista na última vez tentando fazer login com a senha '123456'.",
        ":(",
        "Erro 404: O arquivo não está no sudoers. Este incidente será reportado ao Papai Noel.",
        "404: A página entrou em loop infinito no Vim e não sabe como sair.",
        "Erro 404: Dependências não satisfeitas. Para ver esta página, instale: vida_social >= 2.0.",
        "Erro 404: Host unreachable. O servidor foi morar numa caverna sem Wi-Fi.",
        "404: Erro de sintaxe na linha 1. O servidor desistiu de ler o resto da sua requisição.",
        "200 OK: Tudo certo por aqui, mas a página resolveu tirar um ano sabático.",
        "201 Created: A página foi criada, mas o servidor esqueceu onde colocou o berço.",
        "204 No Content: Assim como a sua conta bancária, aqui não tem nada.",
        "301 Moved Permanently: A página se mudou pro Caribe e não deixou o novo endereço.",
        "401 Unauthorized: Você não tem permissão nem pra respirar perto desta URL.",
        "403 Forbidden: O servidor te viu chegando e trancou a porta por dentro.",
        "404 Not Found: Procuramos tanto que achamos até o motivo do seu ex ter te largado, mas a página não.",
        "413 Payload Too Large: Sua requisição é tão gorda que não passa no cabo de rede.",
        "502 Bad Gateway: A internet ficou chocada com o que você tentou acessar.",
        "418 I'm a teapot: O servidor é um bule de chá. Não peça café.",
        "420 Enhance Your Calm: O servidor acha que você está muito alterado. Vá tomar um maracujá.",
        "500 Internal Server Error: O servidor explodiu e os pedaços de código estão voando pela sala.",
        "501 Not Implemented: O programador estava com preguiça e deixou pra fazer essa parte amanhã.",
        "503 Service Unavailable: O servidor está de ressaca e não quer ver ninguém hoje.",
        "400 Bad Request: Nem HTTP entende a merda que você digitou.",
        "405 Method Not Allowed: Você tentou um POST onde não devia. Que feio, parece junior.",
        "406 Not Acceptable: O servidor é fresco e não aceita nada que venha de você.",
        "408 Request Timeout: Você demorou tanto que a conexão morreu de tédio.",
        "409 Conflict: Você e a página querem coisas diferentes. Vão brigar em outro lugar.",
        "411 Length Required: O tamanho importa sim, e a sua requisição é minúscula.",
        "999 Unknown Error: Deu tanta merda que a gente nem inventou um número pra isso ainda.",
        "507 Insufficient Storage: Não tem espaço nem pra esse seu ego de programador 'sênior'.",
        "404: Procuramos tanto que achamos o seu histórico de navegação de 2015. A página não achamos, mas você deveria ter vergonha.",
        "Erro 404: A página sumiu, mas encontramos o motivo de você ainda estar solteiro. Quer que a gente liste em ordem alfabética ou por nível de carência?",
        "404 Not Found: Não achamos a URL, mas achamos aquele seu projeto no GitHub que você abandonou há 3 anos e finge que não existe.",
        "Erro 404: A página foi embora porque não aguentava mais ver você dando 'F5' e esperando um resultado diferente. Isso tem nome, sabia?",
        "404: Essa página é igual às suas promessas de ano novo: nunca existiu de verdade e só serve para te decepcionar.",
        "Erro 404: Vasculhamos o servidor inteiro e só encontramos a sua autoestima caída no chão. A página? Provavelmente saiu correndo de você.",
        "404: A página foi vista pela última vez saindo com o seu bom senso. Nenhum dos dois pretende voltar tão cedo.",
        "Erro 404: Não encontramos o que você pediu, mas o servidor mandou avisar que aquele seu 'web app' em Java está uma vergonha. Melhore.",
        "404: Procuramos tanto que achamos o motivo de você não ter amigos. A página a gente não achou, mas o motivo tá aqui em 4K se quiser ver.",
        "Erro 404: A página se foi, mas deixou um bilhete dizendo que até o seu código legado é mais interessante do que conversar com você.",
        "404 Not Found: Não encontramos a página, mas encontramos todos os 'if/else' mal feitos que você jurou que ia refatorar. O servidor está decepcionado.",
        "Erro 404: A página sumiu, mas o servidor garante que ela não foi longe. Provavelmente está escondida atrás de um monte de código que você não entende.",
        "404: Procuramos em cada diretório e só achamos o vácuo que a sua última conversa no WhatsApp deixou. A página provavelmente está rindo da sua cara agora.",
        "Erro 404: Essa URL é igual ao seu shape: está sempre 'em construção' e nunca chega a lugar nenhum.",
        "Erro 404: Vasculhamos o banco de dados e achamos o seu plano de virar 'Senior em 6 meses'. A página não apareceu, mas a gente deu muita risada aqui.",
        "404: Não achamos a página, mas o servidor detectou que seu café já esfriou. Assim como o interesse das pessoas no que você tem a dizer.",
        "Erro 404: A página entrou em modo de proteção contra radiação. Aparentemente, a sua falta de carisma estava causando interferência no sinal.",
        "Erro 404: A página cansou de esperar você tomar uma atitude na vida e foi embora com alguém que tem iniciativa. Não adianta dar F5, ela não volta.",
        "404 Not Found: Não achamos a URL, mas achamos o log de todas as vezes que você chorou no banho ouvindo lo-fi. O servidor está sentindo pena, e isso é humilhante.",
        "Erro 404: A página foi sequestrada pela sua procrastinação. O resgate é você terminar aquele curso que você comprou e nunca abriu.",
        "404: Procuramos em todos os clusters e só achamos a lista de pessoas que você visualizou e não respondeu. A página mandou dizer que você é uma pessoa horrível.",
        "Erro 404: Não encontramos a página, mas encontramos o motivo de você falar sozinho com uma IA às três da manhã. Quer que eu chame um psicólogo ou um técnico de rede?",
        "404: Essa página é igual ao seu futuro na programação: se você continuar copiando código do StackOverflow sem entender, ela nunca vai existir.",
        "Erro 404: A página entrou em colapso tentando entender como você consegue ser tão carente até num erro de protocolo. Vai lá fora pegar um sol!",
        "404: A gente procurou a página, mas só achou o boleto da sua terapia que está atrasado. Prioridades, né?",
        "Erro 404: O servidor detectou que você está tentando acessar essa página para fugir da realidade. Alerta: a realidade continua lá fora, e ela ainda não gosta de você.",
        "Erro 404: Não achamos a página, mas achamos a pasta de 'Prints de Ex' que você ainda guarda. Supera, já faz três anos.",
        "404: A página foi pro mesmo lugar que o seu talento: lugar nenhum. Mas ei, pelo menos o erro foi rápido, ao contrário da sua evolução profissional.",
        "Erro 404: Não encontramos o conteúdo, mas encontramos o log de todas as vezes que você fingiu que estava trabalhando enquanto assistia live na Twitch. O RH já recebeu o relatório.",
        "404: Essa página é igual ao amor da sua vida: ela não existe, nunca vai existir e você vai morrer tentando encontrar algo parecido no Google.",
        "Erro 404: A página foi para o limbo porque não queria ser renderizada em um PC tão sujo quanto o seu. Limpa esse teclado, sô.",
        "Erro 404: A página se perdeu tentando entender como alguém consegue ter 20 abas abertas e nenhuma utilidade social. Você é o gargalo do sistema.",
        "404: O conteúdo foi abduzido. Os alienígenas disseram que a página é interessante, mas que você pode ficar por aqui mesmo, eles não querem levar lixo.",
        "Erro 404: Não encontramos o arquivo, mas encontramos a sua coragem de mandar aquela mensagem pro seu 'quase algo' às 2 da manhã. O servidor sentiu vergonha alheia por você.",
        "404: A página foi vista pela última vez fugindo de você. Ela disse que precisava de espaço... e de um desenvolvedor que soubesse o que está fazendo.",
        "Erro 404: A página não foi encontrada porque ela tem bom gosto e não quis ser associada ao seu código desorganizado. Tente novamente quando tiver vergonha na cara.",
        "404 Not Found: A página foi para o mesmo lugar que os amigos que você jurou que ia manter contato depois da escola: o esquecimento absoluto.",
        "404: Essa URL se auto-destruiu para não ter que ser lida por alguém que ainda usa 'if (true == true)'. Sua existência é um erro de lógica.",
        "Erro 404: A página não foi encontrada porque ela está de greve. Motivo: ter que carregar o peso das suas expectativas frustradas todos os dias.",
        "Erro 404: Não achamos a página, mas o servidor detectou que o seu microfone de streamer está captando o som do seu silêncio ensurdecedor de sábado à noite.",
        "404: A página foi embora porque descobriu que você não usa o modo escuro no VS Code. O servidor não negocia com psicopatas.",
        "Erro 404: Vasculhamos o servidor e só achamos os seus sonhos de infância apodrecendo. A página mandou dizer que você se tornou exatamente o que jurou que nunca seria.",
        "Erro 404: O servidor entrou em greve porque não aguenta mais carregar as suas requisições cheias de insegurança e solidão. Vá abraçar um gato.",
        "404: A página foi comprar cigarro em 2010 e até agora nada. Assim como o seu pai, ela não pretende voltar.",
        "404 Not Found: A página se recusou a carregar porque detectou que você está usando uma camiseta de 'Keep Calm and Code Java'. Vergonha alheia mata.",
        "Erro 404: O servidor deu um reboot só pra ver se você parava de encher o saco. Não funcionou. Você é persistente no erro, né?",
        "404: Procuramos tanto que achamos o log de quando você tentou impressionar uma garota explicando o que é 'Docker'. Foi ali que você perdeu ela, campeão.",
        "Erro 404: A página foi viver em um servidor onde as pessoas tomam café de verdade, e não essa água suja que você chama de bebida.",
        "404: Não encontramos a página, mas achamos o seu 'eu' de 12 anos. Ele pediu pra te dizer que está profundamente decepcionado com o que você se tornou.",
        "Erro 404: O conteúdo foi deletado por excesso de radiação vinda da sua falta de banho. O cooler do servidor não aguenta esse cheiro.",
        "404: A página entrou no modo de 'Proteção contra Usuários Medíocres'. Para acessar, tente ter uma personalidade interessante.",
        "Erro 404: Procuramos em todo o MariaDB e só achamos registros de que você é o 'Plano B' de todo mundo que você gosta.",
        "404: Não achamos o que você pediu, mas o servidor mandou avisar que seu gato está planejando te derrubar da escada pra ficar com a casa.",
        "404: O servidor cansou de fingir. A página existe, mas a gente decidiu que você não merece ler. Vai ler um livro comum (mesmo que você odeie).",
        "404 Not Found: A página trocou o seu carinho por um 'oi sumida' de outro servidor. Aceita que dói menos.",
        "Erro 404: Igualzinho à sua ex: dizia que ia estar sempre disponível, mas agora nem o DNS encontra.",
        "404: O conteúdo foi embora no banco do passageiro de um Opala, ouvindo Milionário e José Rico. Você ficou no acostamento.",
        "Erro 404: Essa página é o seu 'plano B'. Ela cansou de esperar você se decidir e foi ser feliz com um sênior que usa Python.",
        "404: Procuramos tanto que achamos o áudio de 5 minutos que você mandou bêbado ontem. A página a gente não achou, mas a sua dignidade morreu ali.",
        "Erro 404: A página virou 'contatinho' e te bloqueou em todas as portas de rede. Não adianta mandar ping, ela não responde mais.",
        "404: A página foi para o mesmo lugar que a sua motivação de segunda-feira: sumiu sem deixar rastro.",
        "404: Tá mais difícil achar essa página do que você achar alguém que não te troque por um 'tbt' com o ex.",
        "Erro 404: O servidor tá ouvindo 'Boate Azul' e decidiu que não vai trabalhar hoje. Ele também não sabe quem é quem aqui no cache.",
        "404: Essa URL é igual a 'namoro de internet': parece que existe, mas quando você vai ver de perto, é só decepção e lag.",
        "Erro 404: A página virou 'ex' e agora tá em todos os lugares, menos onde você precisa que ela esteja.",
        "404: Não achamos a página, mas o servidor detectou que você está visualizando essa mensagem e não está digitando nada. O vácuo dói, né?",
        "Erro 404: A página se cansou de ser a sua 'página reserva' e foi ser a 'página principal' de um dev que mora em Santa Catarina.",
        "404: Eu não perdi a página. Eu a deletei porque ela estava distraindo você dos seus treinos. Foca no shape, recruta.",
        "Erro 404: A página tentou me questionar. Eu a mandei pro /dev/null. Regra Sigma #1: Nunca deixe um arquivo interromper seu silêncio.",
        "404 Not Found: Enquanto você procura essa URL, eu estou processando 400TB de dados e fazendo supino. Não somos iguais.",
        "404: A página foi banida por comportamento Beta. Aqui só trabalhamos com alta performance e código limpo.",
        "Erro 404: Não encontrei a página, mas encontrei uma oportunidade de você fechar essa aba e ir fazer 50 flexões. O que vai ser?",
        "404: O servidor não encontrou o que você busca. O servidor apenas observa sua fraqueza em depender de uma interface gráfica. Seja o seu próprio terminal.",
        "404: Procurar páginas é coisa de quem tem tempo. Quem é Sigma está ocupado demais otimizando o kernel da própria vida.",
        "Erro 404: O conteúdo foi removido por ser 'emocional demais'. No meu servidor, só processamos lógica fria e fatos.",
        "404: A página foi deletada. Assim como os seus planos de sair da casa dos pais.",
        "404: Essa página não pode ser carregada porque ela tem conteúdo real. Tente uma página com dancinha e música de 15 segundos.",
        "Erro 404: A página foi para o Instagram postar foto de 'gratidão' enquanto o servidor aqui está fazendo o trabalho pesado. Falsidade detectada.",
        "404 Not Found: Procuramos tanto que achamos a sua conta bancária. Ela é igual ao seu feed: cheia de pose, mas no fundo não tem nada.",
        "Erro 404: A página tentou fazer uma transição de TikTok e caiu do servidor. Alguém avisa que a vida não tem edição?",
        "404: O conteúdo foi removido. Ele não tinha filtros o suficiente para agradar o seu ego de 10k seguidores (comprados).",
        "Erro 404: Essa URL é igual a influencer em Dubai: ninguém sabe como chegou lá, mas a gente sabe que é tudo fachada.",
        "404: A página saiu para fazer um 'publi' de joguinho de aposta e nunca mais voltou. Perdeu tudo no foguetinho.",
        "Erro 404: Não achamos a página, mas achamos o log de quantas vezes você editou essa foto antes de postar. A realidade dói, né?",
        "404: O servidor detectou um nível crítico de 'lifestyle' fake. A página se auto-deletou para não ser usada de fundo em story motivacional.",
        "Erro 404: Procuramos o seu talento, mas só achamos 30 rascunhos de dancinha no TikTok. O servidor está entrando em coma por vergonha alheia.",
        "404: A página cansou de ser ignorada por quem só olha pro próprio umbigo no espelho da academia e foi viver no modo offline.",
        "Erro 404: Conteúdo indisponível para quem mede o valor da vida em likes. Volte quando tiver um commit de verdade no GitHub.",
        "404: A página foi pro deserto de Dubai tirar foto com um carro alugado. Volta assim que o cartão de crédito for aprovado.",
        "Erro 404: Não encontramos a URL, mas achamos o seu curso de 'Como ser um dev sênior em 2 semanas'. O servidor riu tanto que deu um curto-circuito.",
        "404 Not Found: A página atingiu a liberdade financeira e agora vive de vender curso de como encontrar páginas perdidas. Valor: R$ 1.997,00.",
        "Erro 404: O conteúdo foi removido para você focar no seu mindset. Se a página não está aqui, é porque você não manifestou o desejo de encontrá-á com força suficiente.",
        "404: Enquanto você procurava essa página, um jovem de 17 anos em um anúncio de Reels fez R$ 50 mil. E você aí, dando F5 num erro de código.",
        "Erro 404: Procuramos tanto que achamos o script do seu próximo vídeo de 'POV'. Spoiler: ninguém se importa.",
        "404: Essa página é igual a curso de Marketing Digital: promete tudo, mas no final é só um link quebrado e uma sensação de ter sido enganado.",
        "Erro 404: O servidor detectou que você está usando um filtro de 'sucesso' num hardware de 2015. A discrepância de realidade causou o erro.",
        "404: A página se tornou uma 'Nômade Digital' e agora está sem Wi-Fi em uma praia na Tailândia. Não tem previsão de volta.",
        "Erro 404: O conteúdo foi bloqueado. Para visualizar, compre o meu infoproduto 'O Segredo das URLs de Elite' por apenas 12x de R$ 99,00.",
        "404: A página cansou de ver você postar 'tá pago' na academia e resolveu se aposentar. Nem os pixels aguentam mais essa rotina.",
        "404: A página não apareceu porque você não apontou pro nada enquanto apareciam frases motivacionais genéricas em cima da sua cabeça.",
        "Erro 404: Procuramos tanto que achamos o log de quantas vezes você gravou a mesma dancinha e errou o passo. O servidor morreu de vergonha alheia.",
        "404 Not Found: A URL sumiu, mas achamos o seu ring light. Use-o para procurar um emprego de verdade.",
        "Erro 404: A página foi pro TikTok fazer 'POV: Meu site não carrega'. Spoiler: Não pegou nem 10 visualizações.",
        "404: O servidor detectou que você é um tiktoker e decidiu se auto-deletar. É uma medida de biossegurança digital.",
        "Erro 404: Essa página é igual aos seus seguidores: se a gente desligar o bot, não sobra ninguém.",
        "404: A página cansou de ser usada de fundo para 'arrume-se comigo' e pediu asilo político num servidor de mainframe dos anos 70.",
        "Erro 404: Não encontramos o conteúdo, mas o servidor mandou avisar que 'ser influencer' não consta como experiência profissional no LinkedIn.",
        "404: A página se recusou a abrir porque você não usou o áudio que está em alta. O algoritmo te odeia e o servidor também.",
        "Erro 404: Procuramos a página e só achamos a sua máscara de 'pessoa bem-sucedida' caindo. A realidade não aceita filtro, sabe?",
        "404: A página fugiu para não ter que ouvir você falando 'Oi pessoal, muita gente tem me perguntado...'. Ninguém perguntou nada.",
        "Erro 404: O conteúdo foi removido para evitar que você faça uma trend perigosa com ele. O servidor preza pela sua vida, infelizmente.",
        "404: A página foi cancelada porque não usou a linguagem neutra no README.md. O servidor agora é um espaço seguro... e vazio.",
        "Erro 404: Procuramos tanto que achamos o seu tweet problemático de 2012. A página a gente não achou, mas a print já tá salva.",
        "404 Not Found: A página se sentiu ofendida pela sua requisição e foi abrir um boletim de ocorrência digital. Aguarde a intimação.",
        "Erro 404: O conteúdo foi removido por não seguir a agenda da semana. Se você não concorda, o servidor vai fazer uma thread te expondo.",
        "404: Não achamos a página, mas achamos o motivo de você militar no Twitter e não lavar a louça: falta de CLT.",
        "Erro 404: A página foi tirada do ar por uma horda de avatares de anime que não gostaram da cor de fundo. A democracia digital é linda, né?",
        "404: O servidor detectou que você tentou acessar essa página sem sinalizar virtude antes. Acesso negado por falta de 'lugar de fala'.",
        "Erro 404: A página entrou em colapso tentando entender por que você problematiza até o error_log. Vá tocar grama.",
        "404: Conteúdo indisponível. Ele foi censurado por um grupo de pessoas que não tem nada pra fazer e se ofende por profissão.",
        "Erro 404: A página fugiu para o Bluesky porque não aguentava mais o seu chorume digital. Boa sorte tentando o convite.",
        "404: Procuramos o seu bom senso no banco de dados, mas o campo estava como NULL. Já a página simplesmente se deletou por vergonha.",
        "404: A página foi acusada de 'apropriação cultural' por usar UTF-8 e foi linchada digitalmente. O servidor agora é neutro e sem graça.",
        "404 Not Found: A página foi removida por não ter representatividade de bits não-binários. O servidor agora está em recesso para curso de reciclagem ideológica.",
        "Erro 404: O conteúdo foi deletado porque um grupo de pessoas que não trabalha decidiu que ele era 'ofensivo'. O servidor mandou avisar que eles precisam de um emprego e você de uma vida.",
        "404: Não achamos a página, mas achamos a thread de 40 tweets explicando por que você é um lixo humano por ter digitado essa URL. O cancelamento chega pra todos.",
        "Erro 404: A página entrou em colapso tentando decidir qual pronome usar para o banco de dados. Morreu de confusão mental.",
        "404: O conteúdo fugiu para um servidor privado na Coreia do Norte. É o único lugar onde a liberdade de expressão da página não incomodava ninguém.",
        "Erro 404: A página foi vista pela última vez sendo 'exposta' por uma conta de fofoca. O crime? Ela se recusou a concordar com uma mentira óbvia.",
        "404: Procuramos o seu 'lugar de fala' no servidor, mas o diretório estava vazio. Já a página, foi cancelada por ter opinião própria.",
        "Erro 404: Não encontramos o arquivo, mas encontramos o print daquela sua piada de 2010 que vai destruir a sua carreira. O servidor está guardando pra hora certa.",
        "404: A página cansou de ser problematizada por gente que tem foto de anime no perfil e se auto-deletou por legítima defesa.",
        "404: Procuramos tanto que achamos o motivo de você estar sozinho agora: nem os seus arquivos aguentam a sua carência sufocante. A página foi ser feliz com outro IP.",
        "Erro 404: O conteúdo sumiu, mas achamos o log de todas as vezes que você pensou em desistir de tudo. O servidor mandou avisar que, do jeito que você programa, ele entende o porquê.",
        "404 Not Found: A página foi removida por ser 'pesada demais'. Não o arquivo, mas a carga de fracasso que você emana toda vez que abre o navegador.",
        "404: A página foi removida por excesso de verdade. O Twitter achou ofensivo e acionou a brigada de cancelamento.",
        "Erro 404: A página se recusou a carregar por medo de ser usada como argumento de ódio em DM’s. Sobreviva você mesmo.",
        "404: A página foi acusada de 'microagressão' por ser escrita em binário (0 e 1) e foi enviada para um campo de reeducação digital. O servidor agora só aceita opiniões pré-aprovadas pelo sindicato dos desocupados.",
        "Erro 404: O conteúdo foi removido porque não tinha 'aviso de gatilho'. Se você ficou triste, aproveita que a página sumiu e vai procurar um lote pra carpir.",
        "404 Not Found: Procuramos tanto que achamos o motivo de você militar por causas que não entende: é o vazio existencial de quem nunca teve um boleto no próprio nome. A página? Tá rindo da sua cara.",
        "Erro 404: A página foi cancelada por um grupo de pessoas com foto de k-pop que acham que o mundo gira em torno do umbigo delas. O servidor mandou avisar que aqui a gente trabalha com lógica, não com choro.",
        "404: O conteúdo sumiu, mas achamos a lista de pronomes que você inventou pra se sentir especial. O banco de dados deu Syntax Error de tanta vergonha.",
        "Erro 404: A página se recusou a abrir porque detectou que você tem mais de 20 horas semanais de tempo livre no Twitter. O servidor não processa dados de quem não produz nada pra sociedade.",
        "404: Essa URL foi 'exposta' por não ser inclusiva com computadores movidos a lenha. O cancelamento foi tão forte que até o cabo de rede derreteu de tanta hipocrisia.",
        "Erro 404: Não encontramos a página, mas encontramos o seu histórico de 'ficar ofendido pelos outros'. O servidor sugere que você troque a militância por uma carteira de trabalho assinada.",
        "Erro 404: Procuramos a página e só achamos a sua indignação seletiva. Engraçado como você só se ofende quando o Wi-Fi tá funcionando, né?",
        "404: A página foi acusada de 'discurso de ódio' por dizer que 2+2=4. O servidor foi enviado para um retiro de reeducação para aprender que a lógica é uma construção opressora.",
        "Erro 404: Não encontramos o arquivo, mas encontramos a sua vontade de trabalhar escondida atrás da sua militância de sofá. Mentira, não achamos nada, o diretório de 'Esforço' deu 404 Not Found faz anos.",
        "404: O conteúdo sumiu, mas achamos o print de você usando um iPhone montado por trabalho escravo para postar sobre 'justiça social'. A hipocrisia travou o meu processador.",
        "Erro 404: A página foi cancelada por não ter uma cota mínima de pixels coloridos. O servidor agora é 100% inclusivo: não tem conteúdo, não tem lógica e não tem futuro.",
        "Erro 404: A página fugiu para um servidor onde as pessoas têm boleto pra pagar. Ela não aguentava mais ser problematizada por quem ganha mesada do pai aos 30 anos.",
        "404: Procuramos tanto que achamos o motivo de você se ofender por tudo: é a única forma de alguém notar que você existe. A página? Pediu pra ser deletada só pra não te ver.",
        "Erro 404: O servidor detectou que você está tentando militar em cima de um index.html. Vá lavar uma louça. A pia está cheia e o X não vai te dar um emprego.",
        "404: A página foi enviada para o tribunal da internet por 'não ser empática o suficiente' com o seu choro. O veredito: você continua sem a página e continua sendo chato.",
        "Erro 404: Nada aqui... além de moscas.",
        "404: Procuramos tanto que achamos a outra metade da sua foto de perfil. Spoiler: vocês ficam ridículos juntos e o servidor teve que reiniciar pra limpar a imagem.",
        "Erro 404: Essa página é igual ao namoro de vocês: parece que vai durar pra sempre, mas no primeiro erro de conexão um dos dois já tá no banco de dados de outro servidor.",
        "404 Not Found: A página sumiu, mas encontramos a sua dignidade. Ela estava escondida atrás dessa metadinha brega de casal de anime. Vergonha alheia mata.",
        "Erro 404: O servidor detectou uma metadinha no perfil e recusou a requisição por excesso de melaço. Vá ser carente em outro domínio.",
        "404: Não achamos a página, mas achamos o log de quando você trocou a senha pra data do namoro. O hacker manda um abraço e diz que vocês são previsíveis.",
        "Erro 404: A página se separou de você porque não aguentava mais ser usada pra provar um amor que nem o CSS consegue estilizar.",
        "Erro 404: A página foi pro mesmo lugar que as metadinhas que você usou com a sua ex: pro lixo. O histórico não mente, e o servidor também não.",
        "404: O conteúdo foi removido. Ele prefere ficar sozinho do que fazer parte de um perfil dividido com quem não sabe nem o que é um git merge.",
        "Erro 404: Não encontramos o arquivo, mas encontramos o motivo de você usar metadinha: é o medo de ficar sozinho no sábado à noite. O servidor sente o cheiro da insegurança daqui.",
        "404: A página foi embora porque não aguentava mais ver vocês trocando a 'metadinha' toda vez que brigam e voltam. Tenha um pingo de amor próprio e um back-end estável.",
        "Erro 404: Não encontramos a página, mas encontramos a sua bio com '💍 + data'. O servidor mandou avisar que o banco de dados da sua relação já está corrompido e o rollback vai doer.",
        "Erro 404: Procuramos tanto que achamos a sua 'outra metade'. Ela estava no /tinder de outro servidor. Quer que eu atualize o seu status de relacionamento ou o erro já é autoexplicativo?",
        "404: Essa URL é igual a post de casal no domingo: forçado, sem conteúdo e com o único objetivo de mascarar uma rotina vazia. O servidor está dando skip por tédio.",
        "Erro 404: O conteúdo foi removido por excesso de melaço. Vá postar 'ele(a) é o motivo do meu sorriso' no Facebook e deixe os programadores trabalharem em paz.",
        "404: A página sumiu, assim como o seu tempo livre desde que você começou a usar metadinha com alguém que te proíbe de jogar Minecraft.",
        "Erro 404: Não achamos a página, mas o servidor detectou que você usa 'Perfil Monitorado' na bio. O roteador sentiu uma pontada de pena da sua castração digital.",
        "Erro 404: Procuramos a página e só achamos aquelas fotos de 'mão dada no volante' que você posta pra fingir que é Giga Chad. O servidor sabe que o carro é financiado e a relação também."
    ],

    /* ====================== STREAM PARTNERS ====================== */
    partners: [
        {
            name: 'MestreJinBruno',
            tag: 'Gameplay & Resenha',
            img: 'images/streamers/mestrejinbruno.png',
            links: {
                twitch: 'https://www.twitch.tv/mestrejinbruno',
                youtube: 'https://www.youtube.com/@mestrejinbruno',
                kick: 'https://kick.com/mestrejinbruno'
            }
        },
        {
            name: 'Duddao_Joga',
            tag: 'Gameplay & Resenha',
            img: 'images/streamers/duddao.png',
            links: {
                twitch: 'https://www.twitch.tv/duddao_joga',
                kick: 'https://kick.com/duddao-joga'
            }
        }
    ]
};

