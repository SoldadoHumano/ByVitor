Se a sequência é uma linha reta, a **Condicional** é uma bifurcação na estrada. Estruturas condicionais permitem que o programa execute diferentes blocos de código dependendo de uma condição ser verdadeira ou falsa. É aqui que o software ganha "inteligência".

## 1. O Bloco if e else
O `if` (se) avalia uma expressão booleana. Se o resultado for verdadeiro, o código dentro dele é executado. O `else` (senão) é o caminho alternativo, executado caso a condição do `if` seja falsa.

**if:** A porta de entrada da decisão.

**else if:** Permite testar múltiplas condições em sequência.

**else:** O caminho padrão quando nenhuma das condições anteriores foi atendida.

## 2. A Estrutura switch
O `switch` é uma alternativa mais limpa ao `if` quando você precisa comparar uma única variável com vários valores constantes (como os estados de um pedido ou os dias da semana).

**Vantagem:** Melhora muito a legibilidade do código quando há muitas opções (casos).

**Break:** É essencial para interromper a execução e sair do bloco após encontrar o caso correto.

## 3. Boas Práticas e Segurança
Tomar decisões no código exige cuidado para evitar comportamentos inesperados:

**Evite Ninhos de if:** Muitos `if` um dentro do outro (nested) tornam o código confuso. Tente simplificar a lógica.

**Condição Padrão:** Sempre use um `else` ou um `default` (no switch) para lidar com situações inesperadas. Isso aumenta a robustez do sistema.

**Segurança de Dados:** Antes de testar uma condição, verifique se os dados existem para evitar erros de execução.

<div class="callout callout--tip">
    <div class="callout__title">💡 Qual usar?</div>
    <div class="callout__text">
        - Use <strong>if / else</strong> quando precisar testar intervalos (ex: <code>idade > 18</code>) ou condições lógicas complexas.<br>
        - Use <strong>switch</strong> quando tiver uma lista fixa de valores exatos para comparar (ex: <code>opcao == 1</code>, <code>opcao == 2</code>).
    </div>
</div>

### Exemplo Prático em Java

Veja como implementar essas decisões de forma clara e organizada:

<div class="code-block">
    <div class="code-block__header">
        <span>Estruturas Condicionais</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>// Exemplo de if, else if e else
int nivelEnergia = 80;

if (nivelEnergia > 90) {
    System.out.println("Status: Excelente");
} else if (nivelEnergia >= 50) {
    System.out.println("Status: Estável");
} else {
    System.out.println("Status: Alerta Crítico");
}

// Exemplo de switch
int diaDaSemana = 2;

switch (diaDaSemana) {
    case 1:
        System.out.println("Segunda-feira");
        break;
    case 2:
        System.out.println("Terça-feira");
        break;
    default:
        System.out.println("Dia inválido");
        break;
}</code></pre>
</div>