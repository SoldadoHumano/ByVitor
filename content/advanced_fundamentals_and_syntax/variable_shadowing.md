O **Variable Shadowing** (Sombreamento de Variável) ocorre quando uma variável declarada em um escopo interno (como dentro de um método ou bloco) possui o mesmo nome de uma variável declarada em um escopo externo (como um atributo da classe). Embora o Java permita isso, o sombreamento pode ocultar dados importantes e causar confusão lógica se não for tratado com precisão.

## Como o Sombreamento Acontece?

Quando nomes colidem, o Java dá prioridade ao escopo mais restrito (o mais "próximo"). A variável interna "sombra" a variável externa, tornando a externa inacessível pelo nome direto.

<div class="code-block">
    <div class="code-block__header">
        <span>Shadowing Example</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>public class Player {
    private String name = "Default Player"; // Instance variable
ㅤㅤㅤㅤㅤ 
    public void updateName(String name) {
        // The parameter 'name' shadows the field 'name'
        System.out.println("Local parameter: " + name);
        System.out.println("Class field: " + this.name);
        ㅤㅤㅤㅤㅤ
        // Without 'this', you only access the local parameter
        name = name; // Bug: assigning the parameter to itself!
    }
}</code></pre>
</div>

## A Importância do `this`

Para resolver o sombreamento e garantir que você está manipulando o dado correto (o atributo da classe), usamos a palavra-chave `this`. Ela funciona como uma referência à instância atual do objeto, garantindo a legibilidade e a intenção clara do código.

* **`name`**: Refere-se à variável local ou parâmetro.
* **`this.name`**: Refere-se explicitamente ao atributo da classe.

## Sombreamento em Herança (Shadowing Fields)

Diferente dos métodos, que são sobrescritos (`@Override`), os atributos (campos) são apenas sombreados se a subclasse declarar um campo com o mesmo nome. **Isso é altamente desencorajado**, pois o comportamento depende do tipo da referência, não do objeto real.

<div class="code-block">
    <div class="code-block__header">
        <span>Hidden Fields in Inheritance</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>class Superclass {
    String value = "Super";
}
ㅤㅤㅤㅤㅤ
class Subclass extends Superclass {
    String value = "Sub"; // Shadows the superclass field
}
ㅤㅤㅤㅤㅤ
// In the main method:
Subclass sub = new Subclass();
Superclass sup = sub;
ㅤㅤㅤㅤㅤ
System.out.println(sub.value); // Output: Sub
System.out.println(sup.value); // Output: Super (Confusing behavior!)</code></pre>
</div>

## Boas Práticas e Segurança

Para evitar erros derivados de sombreamento, siga estas diretrizes:

1.  **Nomes Distintos:** Sempre que possível, evite dar o mesmo nome a variáveis de escopos diferentes, a menos que seja em construtores ou setters.
2.  **Uso de Prefixos:** Em alguns padrões de projeto, usa-se prefixos para membros da classe (como `mName` ou `_name`), embora o padrão moderno do Java prefira o uso explícito do `this`.
3.  **Lidando com Variáveis Estáticas:** Para resolver sombreamento de campos estáticos, use o nome da classe (ex: `User.count`) em vez de `this.count`.

<div class="callout callout--tip">
    <div class="callout__title">💡 Shadowing vs. Overriding</div>
    <div class="callout__text">
        Lembre-se: <b>Métodos são polimórficos</b> (o Java escolhe o método do objeto real em tempo de execução). <b>Campos (variáveis) NÃO são polimórficos</b>; eles são resolvidos em tempo de compilação com base no tipo da variável de referência.
    </div>
</div>


## Resumo
* **Conflito:** Variáveis locais "escondem" atributos da classe se tiverem o mesmo nome.
* **Solução:** Use `this` para acessar membros da instância e o nome da classe para membros estáticos.
* **Segurança:** Evite sombrear campos em herança; isso cria comportamentos imprevisíveis que fogem do polimorfismo tradicional.