Introduzidas como definitivas no Java 17, as **Sealed Classes and Interfaces** (Classes e Interfaces Seladas) permitem que um desenvolvedor declare quais outras classes podem extendê-las ou implementá-las. Isso resolve uma lacuna antiga na segurança e arquitetura: a incapacidade de fechar uma hierarquia sem torná-la completamente privada ou `final`.

## O Conceito de Hierarquia Fechada

Antes das classes seladas, a herança era "tudo ou nada". Se uma classe era `public`, qualquer pessoa em qualquer pacote poderia herdá-la. Com o modificador `sealed`, você ganha o controle granular, definindo um domínio restrito e previsível.

* **Sintaxe:** Usa-se a palavra-chave `sealed` seguida de `permits` para listar as subclasses autorizadas.
* **Exigência:** Toda subclasse permitida deve obrigatoriamente declarar se ela é `final` (não pode mais ser herdada), `sealed` (continua o controle) ou `non-sealed` (abre a herança novamente).

<div class="code-block">
    <div class="code-block__header">
        <span>Sealed Interface Structure</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>// Only CreditCard and Pix can implement PaymentMethod
public sealed interface PaymentMethod permits CreditCard, Pix {
    void authorize();
}
ㅤㅤㅤㅤㅤ
public final class CreditCard implements PaymentMethod {
    @Override public void authorize() { /* Card logic */ }
}
ㅤㅤㅤㅤㅤ
public final class Pix implements PaymentMethod {
    @Override public void authorize() { /* Pix logic */ }
}</code></pre>
</div>

## Segurança e Integridade do Domínio

Para quem preza pela segurança, o uso de classes seladas impede que terceiros criem implementações "impostoras" de suas interfaces. 

Se você tem um sistema de segurança onde apenas as classes `AdminToken` e `UserToken` são válidas, selar a interface garante que ninguém possa injetar um `MaliciousToken` na hierarquia, pois o compilador bloquearia a tentativa de implementação.

## Aliança com Switch Expressions

O maior benefício prático das Sealed Interfaces aparece quando as usamos com `switch`. Como o compilador sabe exatamente quais são as únicas implementações possíveis, ele pode verificar a **exaustividade** sem a necessidade de um `default`.

<div class="code-block">
    <div class="code-block__header">
        <span>Sealed Switch Pattern</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>public void process(PaymentMethod method) {
    // No 'default' needed because the compiler knows all types!
    switch (method) {
        case CreditCard c -> System.out.println("Processing Card...");
        case Pix p       -> System.out.println("Generating QR Code...");
    }
}</code></pre>
</div>

## Regras de Localização

Para manter a organização e evitar confusão de escopo:
1.  As subclasses permitidas devem estar no mesmo **pacote** que a classe selada.
2.  Se o projeto usar o sistema de módulos do Java (Jigsaw), elas devem estar no mesmo **módulo**.
3.  Se as subclasses forem internas (nested), o uso de `permits` é opcional, pois o Java deduz a intenção automaticamente.

<div class="callout callout--tip">
    <div class="callout__title">💡 Curiosidade: O Modificador non-sealed</div>
    <div class="callout__text">
        O Java introduziu o primeiro termo hifenizado da sua história: <code>non-sealed</code>. Ele serve para permitir que uma parte específica da sua hierarquia volte a ser aberta para herança comum, enquanto o restante permanece protegido. É o equilíbrio perfeito entre controle e flexibilidade.
    </div>
</div>

## Resumo
* **Controle Total:** Você decide quem faz parte da sua árvore de herança.
* **Segurança:** Impede a extensão não autorizada de lógicas sensíveis.
* **Manutenibilidade:** Facilita a refatoração, pois o compilador avisa se uma nova subclasse não for tratada nos <code>switch</code>.
* **Design:** Ideal para representar modelos de domínio fixos (Domain-Driven Design).