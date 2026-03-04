O termo **Polimorfismo** vem do grego e significa "muitas formas". Na programação, ele permite que um objeto possa ser tratado de forma genérica, mas se comporte de maneira específica de acordo com sua verdadeira natureza.



## O que é Polimorfismo?
O polimorfismo acontece quando uma subclasse altera o comportamento de um método que ela herdou da classe pai. Isso é chamado de **Sobrescrita de Método** (`@Override`).

Imagine uma classe `Animal` com o método `fazerSom()`. 
* Se o objeto for um **Cachorro**, o som será "Au Au".
* Se for um **Gato**, o som será "Miau".

Embora ambos sejam chamados pelo mesmo método (`fazerSom`), o resultado é diferente.

## A Anotação `@Override`
Em Java, usamos a anotação `@Override` antes do método na classe filha. Isso informa ao compilador (e a outros desenvolvedores) que você está intencionalmente substituindo a lógica original do pai. Isso aumenta a segurança, pois se você errar o nome do método, o Java te avisará.

## Tipos de Polimorfismo
Existem duas formas principais de aplicar esse conceito:

1.  **Sobrescrita (Override):** Mesma assinatura de método em classes diferentes (Pai e Filho). Acontece em tempo de execução.
2.  **Sobrecarga (Overload):** Mesma classe, métodos com o mesmo nome, mas parâmetros diferentes (como vimos nos Construtores). Acontece em tempo de compilação.

<div class="callout callout--tip">
    <div class="callout__title">💡 Referência Genérica</div>
    <div class="callout__text">
        Você pode criar uma lista de <code>Animais</code> e colocar dentro dela cachorros, gatos e pássaros. Ao percorrer a lista e mandar todos "fazerem som", cada um usará sua própria lógica. O código fica muito mais limpo porque você não precisa de vários <code>if/else</code> para checar o tipo de cada bicho.
    </div>
</div>

### Exemplo Prático: Sistema de Pagamentos

Veja como diferentes métodos de pagamento calculam suas próprias taxas de forma polimórfica:

<div class="code-block">
    <div class="code-block__header">
        <span>Polimorfismo em Java</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>class Pagamento {
    public void processar(double valor) {
        System.out.println("Processando pagamento genérico de R$" + valor);
    }
}
ㅤㅤ
class PagamentoCartao extends Pagamento {
    @Override
    public void processar(double valor) {
        double taxa = valor * 0.05; // 5% de taxa
        System.out.println("Pagamento no Cartão: R$" + (valor + taxa) + " (com taxas)");
    }
}
ㅤㅤ
class PagamentoPix extends Pagamento {
    @Override
    public void processar(double valor) {
        System.out.println("Pagamento via Pix: R$" + valor + " (sem taxas)");
    }
}
ㅤㅤ
public class Sistema {
    public static void main(String[] args) {
        // Usando o polimorfismo: referências do tipo pai, objetos do tipo filho
        Pagamento p1 = new PagamentoCartao();
        Pagamento p2 = new PagamentoPix();
ㅤㅤ
        // O Java decide qual método chamar na hora da execução
        p1.processar(100.00); // Saída: Pagamento no Cartão...
        p2.processar(100.00); // Saída: Pagamento via Pix...
    }
}</code></pre>
</div>