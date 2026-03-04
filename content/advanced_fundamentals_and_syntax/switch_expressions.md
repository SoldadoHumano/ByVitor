O `switch` tradicional do Java (herdado do C++) sempre foi alvo de críticas devido à sua verbosidade e ao risco de bugs causados pelo esquecimento do `break`. Com as **Switch Expressions**, introduzidas de forma estável no Java 14, a linguagem transformou essa estrutura em algo muito mais seguro e funcional.

## De Switch Statement para Switch Expression

A principal mudança é que o `switch` agora pode retornar um valor diretamente. Isso elimina a necessidade de variáveis temporárias e torna o código muito mais limpo.

* **Sintaxe de Seta (`->`):** Elimina a necessidade do `break`, pois não permite o "fall-through" (quando a execução cai para o próximo `case`).
* **Múltiplos Cases:** Você pode agrupar valores em uma única linha separados por vírgula.

<div class="code-block">
    <div class="code-block__header">
        <span>Modern Switch Expression</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>// Modern approach: Concise and side-effect free
String typeOfDay = switch (day) {
    case MONDAY, FRIDAY, SUNDAY -> "Feeling Good";
    case TUESDAY, THURSDAY      -> "Busy Days";
    case WEDNESDAY              -> "Hump Day";
    default                     -> "Standard Day";
};</code></pre>
</div>

## A Garantia de Exaustividade

Quando usamos o `switch` como uma expressão (atribuindo o resultado a uma variável), o compilador Java exige **exaustividade**. Isso significa que você deve cobrir todos os valores possíveis.

Se você estiver usando um `enum`, o Java sabe exatamente quais são as opções. Se você esquecer um dos valores do Enum e não colocar um `default`, o código **não irá compilar**. Essa é uma camada extra de segurança para evitar comportamentos inesperados em produção.

## O Comando `yield`

Em casos onde a lógica de um `case` é complexa e exige mais de uma linha de código, usamos o bloco de chaves `{}` e a palavra-chave `yield` para retornar o valor.

<div class="code-block">
    <div class="code-block__header">
        <span>Switch with Yield</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>int result = switch (mode) {
    case "FAST" -> 1;
    case "DETAILED" -> {
        System.out.println("Performing complex calculation...");
        int calculation = 10 * 2;
        yield calculation; // Returns the value from the block
    }
    default -> 0;
};</code></pre>
</div>

## Pattern Matching no Switch (Preview/Modern Java)

Nas versões mais recentes do Java, o `switch` foi ainda mais longe, permitindo testar o **tipo** do objeto e já realizar o casting automático (Pattern Matching).

<div class="code-block">
    <div class="code-block__header">
        <span>Pattern Matching Switch</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>static String formatter(Object obj) {
    return switch (obj) {
        case Integer i -> String.format("int %d", i);
        case Long l    -> String.format("long %d", l);
        case Double d  -> String.format("double %f", d);
        case String s  -> String.format("String %s", s);
        default        -> obj.toString();
    };
}</code></pre>
</div>

<div class="callout callout--tip">
    <div class="callout__title">💡 Adeus ao Null</div>
    <div class="callout__text">
        Em versões modernas, o <code>switch</code> também permite tratar o valor <b>null</b> diretamente como um <code>case null -> ...</code>, evitando aquele <code>if (obj == null)</code> antes de iniciar a estrutura.
    </div>
</div>

## Resumo
* **Segurança:** Exaustividade garantida pelo compilador.
* **Limpeza:** Seta (`->`) elimina a necessidade de `break` e evita bugs de fall-through.
* **Funcional:** O switch agora é uma expressão que retorna valor.
* **Evolução:** Suporte a Pattern Matching torna o código muito mais expressivo.