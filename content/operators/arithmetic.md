Os **Operadores Aritméticos** são utilizados para realizar operações matemáticas comuns, como adição, subtração e multiplicação. Eles são a base para qualquer lógica que envolva cálculos, desde a pontuação de um jogo até o processamento de grandes volumes financeiros.

## 1. Operadores Básicos
Estes são os operadores que funcionam de forma idêntica à matemática que aprendemos na escola:

**Soma (`+`):** Adiciona dois valores. Também é usado para concatenar (juntar) Strings.

**Subtração (`-`):** Subtrai o valor da direita do valor da esquerda.

**Multiplicação (`*`):** Multiplica dois valores.

**Divisão (`/`):** Divide o valor da esquerda pelo da direita.

**Módulo (`%`):** Retorna o **resto** de uma divisão inteira.



## 2. Operadores de Incremento e Decremento
Muito utilizados dentro de loops (como o `for` e `while`), esses operadores aumentam ou diminuem o valor de uma variável em 1.

**Incremento (`++`):** Adiciona 1 à variável.

**Decremento (`--`):** Subtrai 1 da variável.

## 3. Precedência de Operadores
Assim como na matemática, a ordem das operações importa. Multiplicação e divisão são executadas antes de soma e subtração.

**Dica:** Sempre use **parênteses `()`** para forçar a ordem desejada e tornar seu código mais legível.

<div class="callout callout--danger">
    <div class="callout__title">⚠️ Cuidado: Divisão por Zero e Tipos Inteiros</div>
    <div class="callout__text">
        Existem dois erros comuns aqui que podem causar gargalos ou falhas no sistema:
        <ul>
            <li><strong>Divisão por Zero:</strong> Em tipos inteiros, dividir por zero causará um erro de execução (ArithmeticException), derrubando o programa se não for tratado.</li>
            <li><strong>Divisão Inteira:</strong> Se você dividir dois números inteiros (ex: <code>5 / 2</code>), o resultado será <code>2</code> e não <code>2.5</code>. Para obter o decimal, pelo menos um dos números deve ser <code>double</code> ou <code>float</code>.</li>
        </ul>
    </div>
</div>

### Exemplo Prático em Java

Veja como esses operadores se comportam na prática e como a tipagem influencia o resultado:

<div class="code-block">
    <div class="code-block__header">
        <span>Operadores Aritméticos</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>// Operações Básicas
int soma = 10 + 5;          // Resultado: 15
int resto = 10 % 3;         // Resultado: 1 (O resto da divisão de 10 por 3)

// Cuidado com a divisão inteira
int divisaoInteira = 5 / 2;    // Resultado: 2
double divisaoReal = 5.0 / 2;  // Resultado: 2.5

// Incremento e Decremento
int contador = 0;
contador++; // Agora vale 1
contador--; // Volta a valer 0

// Uso de parênteses para clareza e precedência
double resultado = (10 + 2) * 3; // Resultado: 36 (Sem parênteses seria 16)

System.out.println("Soma: " + soma);
System.out.println("Resto: " + resto);
System.out.println("Divisão Real: " + divisaoReal);</code></pre>
</div>