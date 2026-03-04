Em Java, a ordem em que as operações são executadas não segue apenas a leitura da esquerda para a direita. Existe uma hierarquia rigorosa de precedência que, se ignorada, pode causar bugs matemáticos sutis e comportamentos inesperados (os famosos "efeitos colaterais"). Entender essa ordem é fundamental para escrever um código limpo e seguro.

## A Tabela de Precedência

A execução segue a ordem numérica da tabela: quanto **menor** o nível, maior a prioridade (o nível 1 é executado antes do nível 2). Quando dois operadores possuem a mesma precedência, a regra de **associatividade** define a ordem (geralmente da esquerda para a direita)

| Precedência | Operador | Descrição |
| :--- | :--- | :--- |
| 1 | `()`, `[]`, `.` | Parênteses, Acesso a Array e Membros |
| 2 | `++`, `--`, `!`, `~` | Unários (Pós/Pré incremento e negação) |
| 3 | `*`, `/`, `%` | Multiplicativos |
| 4 | `+`, `-` | Aditivos |
| 5 | `<<`, `>>`, `>>>` | Deslocamento de bits (Shift) |
| 6 | `<`, `<=`, `>`, `>=` | Relacionais |
| 7 | `==`, `!=` | Igualdade |
| 8 | `&`, `^`, `\|` | Bitwise (AND, XOR, OR) |
| 9 | `&&` | AND Lógico (Curto-circuito) |
| 10 | `\|\|` | OR Lógico (Curto-circuito) |
| 11 | `?:` | Ternário |
| 12 | `=`, `+=`, `-=`, etc. | Atribuição |

## O Perigo dos Efeitos Colaterais

Um efeito colateral ocorre quando uma expressão altera o estado de uma variável enquanto ela ainda está sendo avaliada. O exemplo mais comum é o uso de incrementos (`++`) dentro de expressões complexas.

<div class="code-block">
    <div class="code-block__header">
        <span>Side Effects Trap</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>int x = 5;
// What is the value of result?
// x++ returns 5, then x becomes 6.
// ++x increments x to 7, then returns 7.
int result = x++ + ++x; 
ㅤㅤㅤㅤㅤ
System.out.println(result); // Output: 12
System.out.println(x);      // Output: 7</code></pre>
</div>

<div class="callout callout--tip">
    <div class="callout__title">💡 Boas Práticas de Programação</div>
    <div class="callout__text">
        Evite misturar incrementos e lógica aritmética na mesma linha. Isso torna o código difícil de ler e propenso a erros durante manutenções futuras.
    </div>
</div>

## Curto-Circuito (Short-Circuit)

Os operadores `&&` e `||` são inteligentes. Eles param a avaliação assim que o resultado final é garantido. Isso é vital para a segurança do código, especialmente ao validar referências nulas.

<div class="code-block">
    <div class="code-block__header">
        <span>Null Safety with Short-Circuit</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>String name = null;
ㅤㅤㅤㅤㅤ
// Safe: if name is null, the second part (length check) is NEVER executed
if (name != null && name.length() > 0) {
    System.out.println("Valid name");
}
ㅤㅤㅤㅤㅤ
// Dangerous: This would throw a NullPointerException
// if (name.length() > 0 && name != null) { ... }</code></pre>
</div>

## O Uso Estratégico de Parênteses

Mesmo que você conheça a tabela de precedência de cor, o uso de parênteses é uma boa prática de **legibilidade**. Eles explicitam a sua intenção para outros desenvolvedores e evitam que o Java interprete a lógica de forma diferente do que você planejou.

<div class="code-block">
    <div class="code-block__header">
        <span>Clarity over Cleverness</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>// Confusing: depends on memorizing that * comes before +
double val = 10 + 5 * 2; 
ㅤㅤㅤㅤㅤ
// Clear and Safe: no doubts about the intention
double result = 10 + (5 * 2);</code></pre>
</div>

<div class="callout callout--tip">
    <div class="callout__title">💡 Detalhe de Performance</div>
    <div class="callout__text">
        Operadores de deslocamento de bits (<code><<</code>, <code>>></code>) são extremamente rápidos. Multiplicar por 2 usando <code>x << 1</code> é, em nível de hardware, mais simples que <code>x * 2</code>, embora o compilador moderno já faça essas otimizações para você automaticamente.
    </div>
</div>

## Resumo
* **Hierarquia:** Nem tudo é da esquerda para a direita; multiplicação e divisão vêm antes de soma e subtração.
* **Segurança:** Use curto-circuito (`&&`) para proteger contra `NullPointerException`.
* **Legibilidade:** Na dúvida, use parênteses. Um código legível é mais valioso que um código "esperto".