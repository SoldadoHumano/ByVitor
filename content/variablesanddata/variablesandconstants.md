Para que um programa processe informações, ele precisa armazená-las temporariamente. Imagine a memória do computador como um imenso armário cheio de gavetas: as **Variáveis** e **Constantes** são as etiquetas que colocamos nessas gavetas para saber o que há dentro delas e como podemos usar esse conteúdo.

## 1. O que são Variáveis?
Uma variável é um espaço na memória cujo valor pode ser **alterado** durante a execução do programa. Elas são fundamentais para armazenar estados que mudam, como a pontuação de um jogo, o saldo de uma conta ou o texto de um campo de busca.

Em linguagens como Java, uma variável precisa de três coisas:

**Tipo:** Que tipo de dado ela guarda (int, double, boolean...).

**Nome (Identificador):** Como você vai chamá-la no código.

**Valor:** A informação que ela carrega no momento.

## 2. O que são Constantes?
Uma constante é um espaço na memória que, uma vez definido, **nunca mais muda**. Se você tentar alterar o valor de uma constante após a sua criação, o compilador gerará um erro.

No Java, utilizamos a palavra-chave `final` para declarar uma constante.

**Vantagem:** Traz segurança ao código, impedindo que valores críticos (como a taxa de um imposto ou a URL de um banco de dados) sejam alterados acidentalmente.

## 3. Boas Práticas: Nomeação e Estilo
Um código limpo começa com nomes que fazem sentido. Evite nomes genéricos como `x`, `y` ou `var1`.

**CamelCase (para variáveis):** A primeira letra é minúscula e as palavras seguintes começam com maiúscula. Ex: `valorTotalDoPedido`.

**SNAKE_CASE_UPPER (para constantes):** Todas as letras em maiúsculo, separadas por underline. Ex: `VALOR_DO_PI`.

**Princípio da Imutabilidade:** Como regra de segurança, se um valor não precisa mudar, declare-o como `final`. Isso evita bugs difíceis de rastrear.

<div class="callout callout--tip">
    <div class="callout__title">💡 Por que usar constantes?</div>
    <div class="callout__text">
        Imagine um sistema de e-commerce. Se o valor do frete grátis for de 100 reais, usar uma constante <code>VALOR_FRETE_GRATIS</code> em vez de digitar o número 100 em vários lugares facilita a manutenção. Se o valor mudar para 150, você altera em apenas um lugar e o sistema inteiro se atualiza de forma segura.
    </div>
</div>

### Exemplo Prático em Java

Veja a diferença visual e funcional entre uma variável e uma constante:

<div class="code-block">
    <div class="code-block__header">
        <span>Variáveis vs Constantes</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>// Declaração de uma variável (Pode mudar)
double saldoBancario = 500.00;
saldoBancario = saldoBancario + 100.00; // Alteração permitida

// Declaração de uma constante (Imutável)
final double TAXA_DE_SAQUE = 2.50;
// TAXA_DE_SAQUE = 3.00; // Se você descomentar esta linha, o código não compilará

// Exemplo de uso conjunto
double valorFinal = saldoBancario - TAXA_DE_SAQUE;

System.out.println("Saldo Atual: " + saldoBancario);
System.out.println("Taxa Fixa: " + TAXA_DE_SAQUE);
System.out.println("Valor após saque: " + valorFinal);</code></pre>
</div>