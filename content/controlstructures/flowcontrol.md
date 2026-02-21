Às vezes, mesmo dentro de um loop, precisamos de um controle mais refinado. O **break** e o **continue** são comandos que alteram o comportamento padrão de uma estrutura de repetição no momento exato em que um evento ocorre.

## 1. O Comando break (Interromper)
O `break` é o botão de emergência. Quando o computador encontra um `break`, ele sai imediatamente do loop atual e segue para a próxima linha de código fora dele.

**Quando usar:** Quando você já encontrou o que procurava em uma lista e não precisa continuar percorrendo o restante dos itens.

**Efeito:** Encerra o loop por completo.



## 2. O Comando continue (Pular)
O `continue` é mais sutil. Ele não encerra o loop, mas interrompe a iteração atual e "pula" diretamente para a próxima rodada do laço.

**Quando usar:** Quando você encontra um item que não atende aos critérios e quer ignorá-lo, passando para o próximo da lista sem executar o restante do código abaixo dele.

**Efeito:** Interrompe apenas a volta atual e volta para o teste da condição do loop.

## 3. Impacto na Performance e Legibilidade
Saber usar esses comandos ajuda a evitar o processamento desnecessário de dados, o que é essencial para manter a fluidez do sistema.

**Eficiência:** Usar o `break` assim que um objetivo é atingido economiza ciclos de CPU e tempo de execução.

**Clareza:** O `continue` ajuda a evitar grandes blocos de `if/else` dentro de um loop, deixando o código mais "limpo".

<div class="callout callout--tip">
    <div class="callout__title">💡 Qual a diferença na prática?</div>
    <div class="callout__text">
        Imagine que você está conferindo uma caixa de frutas:<br>
        - <strong>Break:</strong> Você achou uma fruta estragada e decide jogar a caixa inteira fora imediatamente.<br>
        - <strong>Continue:</strong> Você achou uma fruta estragada, joga apenas ela fora e continua conferindo o restante das frutas na caixa.
    </div>
</div>

### Exemplo Prático em Java

Veja como esses comandos funcionam dentro de um laço de repetição:

<div class="code-block">
    <div class="code-block__header">
        <span>Controle de Fluxo</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>// Exemplo de CONTINUE
System.out.println("--- Exemplo de Continue (Pular o número 3) ---");
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        // Pula o restante deste bloco e vai para o i = 4
        continue; 
    }
    System.out.println("Número: " + i);
}

// Exemplo de BREAK
System.out.println("\n--- Exemplo de Break (Parar ao achar o 3) ---");
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        // Encerra o loop completamente agora mesmo
        break; 
    }
    System.out.println("Número: " + i);
}</code></pre>
</div>