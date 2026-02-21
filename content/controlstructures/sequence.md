As estruturas de controle definem a ordem em que as instruções de um programa são executadas. A forma mais básica e essencial de controle é a **Sequência**.

Em uma estrutura sequencial, as tarefas são executadas linearmente, uma após a outra, seguindo estritamente a ordem em que foram escritas, sem desvios ou repetições automáticas.

## 1. O Fluxo Linear
Imagine uma linha de montagem: para que o produto chegue ao final, ele precisa passar obrigatoriamente pelo passo A, depois pelo passo B e, finalmente, pelo passo C. Na programação, se você inverter a ordem de uma sequência lógica, o resultado final será imprevisível ou incorreto.

**Início:** O ponto onde o programa começa a ler as instruções.

**Processamento:** Cada linha de código que realiza uma operação (cálculos, atribuições, exibição de dados).

**Fim:** A conclusão daquela tarefa específica.

## 2. A Importância da Ordem Lógica
A sequência é a base de algoritmos mais complexos. Um erro comum para quem está começando é tentar usar um dado antes de ele ter sido criado ou processado.

**Exemplo:** Você não pode calcular o imposto de um produto antes de saber o valor do produto. A instrução que define o valor **deve** vir antes da instrução que calcula o imposto.

## 3. Boas Práticas na Sequência
Mesmo em códigos simples e lineares, a organização é fundamental para a manutenção futura:

**Agrupamento Lógico:** Mantenha passos relacionados próximos uns dos outros.

**Comentários de Fluxo:** Se uma sequência for longa, use comentários para explicar o objetivo de cada bloco de instruções.

**Segurança e Validação:** Em uma sequência, certifique-se de que cada passo foi concluído com sucesso antes de passar para o próximo, especialmente em operações que dependem de dados externos.

<div class="callout callout--tip">
    <div class="callout__title">💡 Pense como a Máquina</div>
    <div class="callout__text">
        O computador é extremamente literal. Ele não "deduz" o que você quis dizer; ele apenas executa a próxima linha. Se o seu programa não está dando o resultado esperado, verifique se a <strong>ordem das instruções</strong> faz sentido lógico para o objetivo final.
    </div>
</div>

### Exemplo Prático de Sequência

Abaixo, veja uma sequência lógica simples para processar um pedido. Note como a ordem das instruções é vital para o funcionamento correto:

<div class="code-block">
    <div class="code-block__header">
        <span>Lógica de Sequência</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>// 1. Entrada de dados
double precoProduto = 100.00;
double valorFrete = 15.00;

// 2. Processamento (Cálculo)
// Nota: O cálculo só pode ocorrer após as variáveis acima serem definidas
double valorTotal = precoProduto + valorFrete;

// 3. Saída de dados
// O resultado final depende de todos os passos anteriores
System.out.println("O valor total da compra é: R$ " + valorTotal);</code></pre>
</div>