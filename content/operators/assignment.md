Os **Operadores de Atribuição** servem para definir o valor inicial ou modificar o valor atual de uma variável. Eles são a forma como o programa "salva" o resultado de um processamento na memória para uso posterior.

## 1. Atribuição Simples (`=`)
O operador `=` não significa "igualdade" na programação (para isso usamos `==`), mas sim **atribuição**. Ele pega o valor que está à direita e o guarda na variável que está à esquerda.

**Exemplo:** `int idade = 25;` (A gaveta chamada "idade" agora guarda o número 25).

## 2. Operadores de Atribuição Composta (Atalhos)
Muitas vezes precisamos atualizar o valor de uma variável baseando-se no valor que ela já possui (ex: aumentar o saldo, diminuir o estoque). Para isso, usamos operadores compostos:

**Soma e Atribuição (`+=`):** Soma um valor ao atual.

**Subtração e Atribuição (`-=`):** Subtrai um valor do atual.

**Multiplicação e Atribuição (`*=`):** Multiplica o valor atual.

**Divisão e Atribuição (`/=`):** Divide o valor atual.

**Módulo e Atribuição (`%=`):** Guarda o resto da divisão no valor atual.

## 3. Vantagens dos Atalhos
Usar `estoque -= 5;` em vez de `estoque = estoque - 5;` traz dois grandes benefícios:

**Legibilidade:** O código fica menos poluído e mais direto ao ponto.

**Manutenção:** Evita que você precise repetir o nome da variável, o que reduz as chances de erros de digitação em nomes longos.

<div class="callout callout--tip">
    <div class="callout__title">💡 Dica de Fluidez</div>
    <div class="callout__text">
        Embora os operadores compostos sejam ótimos, use-os com moderação em expressões muito complexas para não sacrificar a clareza. O objetivo é tornar o código <strong>fluido</strong> e fácil de ler de cima para baixo, sem que o desenvolvedor precise "decifrar" o que está acontecendo.
    </div>
</div>

### Exemplo Prático em Java

Veja como esses operadores facilitam a atualização de estados em um sistema simples:

<div class="code-block">
    <div class="code-block__header">
        <span>Operadores de Atribuição</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>// Atribuição simples
double saldo = 1000.00;

// Atualizações usando operadores compostos
saldo += 250.00;  // Equivale a: saldo = saldo + 250.00 (Resultado: 1250.0)
saldo -= 50.00;   // Equivale a: saldo = saldo - 50.00 (Resultado: 1200.0)
saldo *= 1.05;    // Aplica 5% de rendimento (Resultado: 1260.0)

// Exemplo com String (Concatenação e atribuição)
String saudacao = "Olá, ";
saudacao += "Vitor!"; // Equivale a: saudacao = saudacao + "Vitor!"

System.out.println("Saldo Final: R$ " + saldo);
System.out.println("Mensagem: " + saudacao);</code></pre>
</div>