Muitas pessoas associam a palavra "algoritmo" apenas a redes sociais ou cálculos complexos, mas o conceito é muito mais simples. Um algoritmo é, essencialmente, uma **sequência finita de passos bem definidos** para realizar uma tarefa ou resolver um problema.

Se a programação é a escrita, o algoritmo é a história que está sendo contada.

## 1. O Algoritmo no Dia a Dia
Nós utilizamos algoritmos o tempo todo, mesmo sem perceber. Uma receita de bolo, o manual de montagem de um móvel ou até o caminho que você faz para ir ao trabalho são exemplos de algoritmos.

Para que um algoritmo seja eficiente, ele precisa ter:

**Entrada (Input):** Os dados ou ingredientes iniciais.

**Processamento:** A execução dos passos lógicos.

**Saída (Output):** O resultado final esperado.

## 2. As Características de um Bom Algoritmo
Na computação, não basta apenas criar uma sequência de passos; o algoritmo precisa ser robusto e confiável.

**Clareza:** Cada passo deve ser unívoco (não pode gerar dúvida).

**Finitude:** O algoritmo deve chegar ao fim após um número determinado de passos.

**Eficácia:** Cada etapa deve ser básica o suficiente para ser executada com precisão.

## 3. Representação: Do Português ao Código
Antes de transformarmos uma ideia em código (como Java ou Python), geralmente passamos por formas intermediárias de representação:

**Descrição Narrativa:** Escrever os passos em linguagem natural (ex: "Se o sensor detectar movimento, acenda a luz").

**Fluxograma:** Representação visual usando símbolos gráficos para mostrar o fluxo de decisões.

**Pseudocódigo:** Uma "quase-linguagem" que ignora a sintaxe rígida para focar apenas na lógica.

<div class="callout callout--tip">
    <div class="callout__title">💡 Boas Práticas: Otimização</div>
    <div class="callout__text">
        Um problema pode ser resolvido por vários algoritmos diferentes. O papel de um bom desenvolvedor é encontrar o caminho mais <strong>eficiente</strong>, que consuma menos memória e seja processado no menor tempo possível.
    </div>
</div>

### Exemplo de Lógica Algorítmica

Imagine o algoritmo para uma porta automática simples. Note como a lógica e a segurança estar presente:

<div class="code-block">
    <div class="code-block__header">
        <span>Fluxo Lógico</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>// Pseudocódigo para um Sistema de Porta Automática
// 1. Monitoramento constante do sensor de movimento
// 2. Se um movimento for detectado:
//      a. Verifica se a porta já está aberta
//      b. Se não estiver, aciona o motor para abrir
//      c. Aguarda 5 segundos de inatividade
//      d. Fecha a porta
// 3. Caso contrário:
//      a. Mantém a porta travada e economiza energia</code></pre>
</div>
