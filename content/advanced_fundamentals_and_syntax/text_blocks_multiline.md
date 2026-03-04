Antes do Java 15, lidar com strings multilinhas (como JSON, SQL ou HTML) era uma tarefa árdua e visualmente poluída. Era necessário concatenar várias linhas com o operador `+` e utilizar escapes manuais para aspas (`\"`) e quebras de linha (`\n`). Os **Text Blocks** chegaram para resolver esse problema, trazendo legibilidade ao código.

## Sintaxe e Delimitadores

Um Text Block é delimitado por três aspas duplas `"""`. A abertura deve ser seguida obrigatoriamente por uma quebra de linha. O bloco termina com outras três aspas duplas.

* **Preservação de Formato:** O Java preserva as quebras de linha e o recuo dentro do bloco, tornando o texto no código idêntico ao que será processado.
* **Aspas Sem Escape:** Você pode usar aspas duplas comuns dentro do bloco sem precisar da barra invertida.

<div class="code-block">
    <div class="code-block__header">
        <span>SQL Example with Text Blocks</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>
// Modern and clean: Exact representation of the query
String query = """
               SELECT id, name, email
               FROM users
               WHERE active = true
               ORDER BY name DESC;
               """;</code></pre>
</div>

## O Gerenciamento de Espaços (Incidental Whitespace)

Um dos detalhes mais inteligentes dos Text Blocks é como o Java lida com os espaços à esquerda. O compilador identifica a "indentação comum" (baseada na posição das aspas de fechamento ou do texto mais à esquerda) e a remove automaticamente.

Isso permite que você mantenha o bloco de texto alinhado com o restante do seu código fonte sem que esses espaços de formatação façam parte da String final.

## Sequências de Escape Estratégicas

Mesmo buscando a literalidade, os Text Blocks introduziram duas novas sequências de escape para controle fino:

1.  **`\` (Barra invertida no final da linha):** Impede a quebra de linha automática. Útil para manter uma linha muito longa legível no código, mas tratá-la como uma única linha na memória.
2.  **`\s`:** Garante a preservação de um espaço em branco no final da linha, que normalmente seria ignorado pelo compilador.

<div class="code-block">
    <div class="code-block__header">
        <span>Escape Sequences in Blocks</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>String singleLine = """
                        This is a very long text that we want to keep \
                        on a single line in the output string.
                        """;
ㅤㅤㅤㅤㅤ
String json = """
              {
                "user": "Vitor",
                "status": "online" \s
              }
              """;</code></pre>
</div>

## Integração com `formatted()`

Para tornar a manipulação ainda mais poderosa, foi adicionado o método `.formatted()`, que funciona como o `String.format()`, mas de forma mais direta no objeto.

<div class="code-block">
    <div class="code-block__header">
        <span>Dynamic Text Blocks</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>String html = """
                  &lt;html&gt;
                      &lt;body&gt;
                          &lt;h1&gt;Hello, %s!&lt;/h1&gt;
                      &lt;/body&gt;
                  &lt;/html&gt;
                  """.formatted("Vitor");
    </code></pre>
</div>

<div class="callout callout--tip">
    <div class="callout__title">💡 Boas Práticas de Segurança</div>
    <div class="callout__text">
        Embora Text Blocks facilitem a escrita de SQL e HTML, a segurança deve vir primeiro. <b>Nunca</b> concatene variáveis diretamente no bloco para evitar SQL Injection. Sempre utilize PreparedStatement ou o método <code>formatted()</code> com cautela para garantir a sanitização.
    </div>
</div>

## Resumo
* **Clareza:** O código fica visualmente idêntico ao resultado final (WYSIWYG).
* **Praticidade:** Adeus ao excesso de <code>+</code> e <code>\n</code>.
* **Inteligência:** O compilador cuida da indentação indesejada automaticamente.
* **Flexibilidade:** Suporte a templates dinâmicos com o método <code>formatted()</code>.