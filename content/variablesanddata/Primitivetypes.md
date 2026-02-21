Na programação, os **Tipos Primitivos** são os blocos de construção básicos para o armazenamento de dados. Eles não são objetos, mas sim valores puros que ocupam um espaço fixo e otimizado na memória do computador.

Diferente de estruturas complexas, os tipos primitivos são projetados para oferecer o máximo de performance e o menor consumo de recursos possível.

## 1. Números Inteiros
Usados para representar números sem casas decimais. A escolha do tipo depende do tamanho do valor que você precisa armazenar:

**byte:** 8 bits (valores de -128 a 127). Ideal para economizar memória em grandes arrays.

**short:** 16 bits. Pouco usado hoje em dia, mas útil em sistemas com memória muito limitada.

**int:** 32 bits. O padrão para números inteiros na maioria das aplicações.

**long:** 64 bits. Essencial para números astronômicos ou IDs únicos muito grandes.



## 2. Números Decimais (Ponto Flutuante)
Usados para representar valores com casas decimais.

**float:** 32 bits. Usado quando a precisão não é o fator crítico e a memória é limitada.

**double:** 64 bits. O padrão para cálculos matemáticos, oferecendo o dobro de precisão do float.

## 3. Booleanos (Lógica)
O tipo **boolean** é o mais simples de todos. Ele pode assumir apenas dois valores: `true` (verdadeiro) ou `false` (falso). É o tipo fundamental para todas as estruturas de controle e decisões lógicas do software.

## 4. Caracteres
O tipo **char** armazena um único caractere Unicode de 16 bits. 

**Importante:** Um `char` é delimitado por aspas simples (ex: `'A'`). Ele é diferente de uma `String`, que é um conjunto de caracteres.

<div class="callout callout--tip">
    <div class="callout__title">💡 Boas Práticas: Escolha com Sabedoria</div>
    <div class="callout__text">
        Em Java, o uso do <strong>int</strong> e do <strong>double</strong> é o padrão recomendado para a maioria dos casos. No entanto, se você estiver desenvolvendo para sistemas embarcados ou lidando com bilhões de registros em memória, escolher o tipo menor (como <strong>byte</strong> ou <strong>short</strong>) pode evitar gargalos de memória e melhorar a performance geral.
    </div>
</div>

### Exemplo Prático em Java

Veja como declarar e inicializar cada um desses tipos de forma correta:

<div class="code-block">
    <div class="code-block__header">
        <span>Tipos Primitivos</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>// Inteiros
byte idade = 25;
int populacao = 150000;
long visualizacoesNoYoutube = 3000000000L; // O 'L' indica que é um Long

// Decimais
float preco = 19.99f; // O 'f' indica que é um Float
double pi = 3.1415926535;

// Lógicos e Caracteres
boolean sistemaAtivo = true;
char inicialDoNome = 'V';

// Exibindo os dados
System.out.println("Idade: " + idade);
System.out.println("Preço: " + preco);
System.out.println("Ativo: " + sistemaAtivo);</code></pre>
</div>