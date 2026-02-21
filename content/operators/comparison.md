Os **Operadores de Comparação** são utilizados para testar relações entre duas variáveis ou valores. O resultado de qualquer comparação é sempre um valor booleano (`true` ou `false`). Eles são o "coração" das tomadas de decisão em qualquer software.

## 1. Operadores de Igualdade e Diferença
Estes operadores verificam se dois valores são idênticos ou distintos:

**Igual a (== ou `==`):** Retorna verdadeiro se os valores forem iguais.

**Diferente de (!= ou `!=`):** Retorna verdadeiro se os valores forem diferentes.



## 2. Operadores Relacionais (Magnitude)
Usados principalmente com números para determinar a ordem de grandeza:

**Maior que (>):** Verdadeiro se o valor da esquerda for estritamente maior que o da direita.

**Menor que (<):** Verdadeiro se o valor da esquerda for estritamente menor que o da direita.

**Maior ou igual a (>=):** Verdadeiro se o valor da esquerda for maior ou exatamente igual ao da direita.

**Menor ou igual a (<=):** Verdadeiro se o valor da esquerda for menor ou exatamente igual ao da direita.

## 3. Comparação de Objetos vs. Primitivos
Em linguagens como Java, existe uma diferença importante entre comparar tipos primitivos e objetos (como Strings):

**Primitivos:** O operador `==` compara o **valor** real armazenado na memória.

**Objetos:** O operador `==` compara se os dois objetos ocupam o mesmo **endereço de memória**. Para comparar o conteúdo de textos (Strings), o correto é utilizar o método `.equals()`.

<div class="callout callout--tip">
    <div class="callout__title">💡 Boas Práticas: Legibilidade</div>
    <div class="callout__text">
        Evite criar expressões de comparação muito longas e confusas em uma única linha. Se a lógica for complexa, prefira armazenar o resultado da comparação em uma variável booleana com um nome claro, como <code>boolean temAcessoAutorizado = (idade >= 18 && possuiConvite == true);</code>. Isso facilita a leitura e a manutenção do código por outros desenvolvedores.
    </div>
</div>

### Exemplo Prático em Java

Veja como os operadores de comparação são aplicados para validar regras de negócio simples:

<div class="code-block">
    <div class="code-block__header">
        <span>Operadores de Comparação</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>int idadeUsuario = 20;
int idadeMinima = 18;
double precoProduto = 49.90;
double saldoDisponivel = 100.00;

// Comparações básicas
boolean podeEntrar = idadeUsuario >= idadeMinima; // true
boolean saldoInsuficiente = saldoDisponivel < precoProduto; // false

// Comparação de igualdade e diferença
boolean senhaCorreta = (1234 == 1234); // true
boolean itemDiferente = (10 != 5); // true

// Exibindo os resultados lógicos
System.out.println("O usuário pode entrar? " + podeEntrar);
System.out.println("O saldo é insuficiente? " + saldoInsuficiente);
System.out.println("Senha está correta? " + senhaCorreta);</code></pre>
</div>