Sempre que utilizamos a palavra-chave `new`, estamos invocando um **Construtor**. Ele é um método especial destinado a preparar o objeto logo no momento da sua criação, garantindo que ele comece com os dados necessários para funcionar corretamente.

## 1. O que é um Construtor?
O construtor tem o mesmo nome da classe e não possui um tipo de retorno (nem mesmo `void`). Sua principal função é inicializar os atributos do objeto com valores específicos.

* **Execução Única:** Ele só roda uma vez, exatamente quando o objeto é instanciado.
* **Nome Obrigatório:** Deve ser idêntico ao nome da classe (respeitando maiúsculas e minúsculas).

## 2. O Construtor Padrão (Default)
Se você não escrever nenhum construtor na sua classe, o Java cria automaticamente um "construtor invisível" sem parâmetros. No entanto, assim que você cria o seu próprio construtor, esse automático deixa de existir.

## 3. Sobrecarga de Construtores
Você pode ter mais de um construtor na mesma classe (desde que recebam parâmetros diferentes). Isso permite criar objetos de formas variadas. Por exemplo, um jogador pode nascer com um nome padrão ou com um nome escolhido pelo usuário.

<div class="callout callout--tip">
    <div class="callout__title">💡 A Palavra-chave</div>
    <div class="callout__text">
        Dentro de um construtor, usamos o <code>this</code> para diferenciar o atributo da classe do parâmetro que está chegando. Exemplo: <code>this.nome = nome;</code> significa "atribua o valor do parâmetro 'nome' ao atributo 'nome' desta instância".
    </div>
</div>

### Exemplo Prático: Sistema de Contas

Veja como garantimos que uma `ContaBancaria` nunca seja criada sem um número e um titular:

<div class="code-block">
    <div class="code-block__header">
        <span>Construtores em Java</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>class ContaBancaria {
    String titular;
    int numero;
    double saldo;
ㅤㅤ
    // Construtor Personalizado
    ContaBancaria(String titular, int numero) {
        this.titular = titular;
        this.numero = numero;
        this.saldo = 0.0; // Todo objeto começa com saldo zerado por segurança
        System.out.println("Conta de " + titular + " criada com sucesso!");
    }
ㅤㅤ
    // Sobrecarga: Construtor que aceita depósito inicial
    ContaBancaria(String titular, int numero, double depositoInicial) {
        this.titular = titular;
        this.numero = numero;
        this.saldo = depositoInicial;
        System.out.println("Conta de " + titular + " criada com depósito de R$" + depositoInicial);
    }
}
ㅤㅤ
public class Sistema {
    public static void main(String[] args) {
        // Usando o primeiro construtor
        ContaBancaria contaSimples = new ContaBancaria("Vitor", 1227);
        ㅤㅤ
        // Usando o segundo construtor (Sobrecarga)
        ContaBancaria contaPremium = new ContaBancaria("Alexandre", 5588, 500.00);
        ㅤㅤ
        System.out.println("Saldo Vitor: R$" + contaSimples.saldo);
        System.out.println("Saldo Alexandre: R$" + contaPremium.saldo);
    }
}</code></pre>
</div>