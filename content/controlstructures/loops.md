Os **Loops** permitem que um bloco de código seja executado repetidamente enquanto uma condição específica for verdadeira. Eles são essenciais para processar listas de dados, atualizar interfaces ou manter sistemas funcionando continuamente.

## 1. O Laço `while`
O `while` (enquanto) é usado quando não sabemos exatamente quantas vezes o código será repetido. Ele verifica a condição **antes** de executar o bloco.

**Uso comum:** Manter um servidor ligado enquanto não houver comando para desligar.

## 2. O Laço `do-while`
Semelhante ao `while`, mas com uma diferença crucial: ele garante que o código seja executado **pelo menos uma vez**, pois a condição só é testada ao final do bloco.

## 3. O Laço `for`
O `for` (para) é a estrutura mais comum quando sabemos exatamente o limite da repetição. Ele agrupa a inicialização, a condição e o incremento em uma única linha, facilitando a leitura.

**Uso comum:** Percorrer um Array ou uma lista de itens.

<div class="callout callout--danger">
    <div class="callout__title">⚠️ Má Prática: O Perigo dos Loops</div>
    <div class="callout__text">
        O uso incorreto de loops é uma das causas principais de travamentos e baixo desempenho:
        <ul>
            <li><strong>Loops Infinitos:</strong> Acontecem quando a condição de parada nunca é atingida, fazendo com que o programa "congele" ao consumir 100% da CPU.</li>
            <li><strong>Aninhamento Excessivo:</strong> Colocar loops dentro de outros loops (O(n²)) de forma desnecessária aumenta drasticamente o tempo de processamento.</li>
            <li><strong>Gargalos de Thread:</strong> Executar processamentos pesados em um loop dentro da Thread principal (Main Thread) trava a interface do usuário. Sempre considere o uso de Threads separadas ou processamento assíncrono para tarefas densas.</li>
        </ul>
    </div>
</div>

## 4. Boas Práticas e Performance

**Critério de Parada:** Sempre revise se sua variável de controle está sendo atualizada corretamente para evitar loops infinitos.

**Sair Cedo (Break):** Use o comando `break` para sair do loop assim que o objetivo for alcançado, economizando processamento.

**Mantenha o Loop Leve:** Evite criar objetos pesados ou fazer consultas complexas ao banco de dados dentro de cada iteração de um loop.

### Exemplo Prático em Java

Abaixo, veja as três formas clássicas de implementar repetições de maneira segura:

<div class="code-block">
    <div class="code-block__header">
        <span>Estruturas de Repetição</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>// Exemplo de loop FOR (Contagem definida)
for (int i = 1; i <= 5; i++) {
    System.out.println("Contagem: " + i);
}

// Exemplo de loop WHILE (Condição dinâmica)
int bateria = 10;
while (bateria > 0) {
    System.out.println("Dispositivo ligado... Carga: " + bateria + "%");
    bateria--; // Importante: atualizar a condição
}

// Exemplo de loop DO-WHILE (Executa ao menos uma vez)
int tentativas = 0;
do {
    System.out.println("Tentando conectar ao banco de dados...");
    tentativas++;
} while (tentativas < 3);</code></pre>
</div>