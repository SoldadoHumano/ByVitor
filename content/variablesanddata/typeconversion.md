A conversão de tipos ocorre quando atribuímos o valor de um tipo de dado a outro tipo. No Java, existem dois tipos principais de conversão, e entender a diferença entre eles é crucial para evitar perda de dados e garantir a segurança do seu software.

## 1. Conversão Implícita (Widening Casting)
A conversão implícita acontece de forma automática pelo Java. Ela ocorre quando passamos um valor de um tipo **menor** para um tipo **maior**, onde não há risco de perder informações.

**Exemplo:** Passar um `int` (32 bits) para um `double` (64 bits). Como o `double` é maior e suporta decimais, o Java faz a transição silenciosamente.

**Ordem:** `byte` -> `short` -> `char` -> `int` -> `long` -> `float` -> `double`.



## 2. Conversão Explícita (Narrowing Casting)
A conversão explícita deve ser feita manualmente pelo programador. Ela ocorre quando tentamos passar um valor de um tipo **maior** para um tipo **menor**. 

**Risco:** Como você está tentando "espremer" um dado grande em um espaço pequeno, pode haver **perda de precisão** (como transformar `9.99` em `10`).

**Sintaxe:** Você deve colocar o tipo desejado entre parênteses antes do valor.

## 3. Conversão de Strings para Números
Muitas vezes, dados vindos de formulários ou arquivos chegam como Texto (`String`). Para realizar cálculos, precisamos convertê-los usando classes utilitárias (como `Integer` ou `Double`).

<div class="callout callout--tip">
    <div class="callout__title">💡 Boas Práticas e Segurança</div>
    <div class="callout__text">
        Sempre que realizar uma conversão explícita (Narrowing), verifique se o valor original cabe no tipo de destino. Converter um <code>long</code> muito grande para um <code>int</code> pode resultar em um número completamente diferente (overflow), o que gera bugs matemáticos graves e difíceis de rastrear.
    </div>
</div>

### Exemplo Prático em Java

Veja como aplicar as conversões no seu código de forma segura:

<div class="code-block">
    <div class="code-block__header">
        <span>Conversão de Tipos</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>// 1. Conversão Implícita (Automática)
int numeroInteiro = 9;
double numeroDouble = numeroInteiro; // O Java converte automaticamente para 9.0

// 2. Conversão Explícita (Manual)
double notaOriginal = 9.78;
int notaArredondada = (int) notaOriginal; // O valor será 9 (perda das casas decimais)

// 3. Conversão de String para Tipo Primitivo
String textoValor = "150";
int valorConvertido = Integer.parseInt(textoValor); // Transforma o texto "150" no número 150

// Exibindo resultados
System.out.println("Inteiro para Double: " + numeroDouble);
System.out.println("Double para Int: " + notaArredondada);
System.out.println("Soma com String convertida: " + (valorConvertido + 50));</code></pre>
</div>