No Java, é possível definir uma classe dentro de outra. Essa técnica não serve apenas para organizar o código, mas para criar um encapsulamento ainda mais rigoroso e uma conexão entre componentes que dependem intimamente um do outro. Quando bem utilizadas, elas protegem a lógica interna e reduzem a visibilidade de classes que não precisam ser expostas ao restante do sistema.

## Static Nested Classes (Classes Aninhadas Estáticas)

Uma classe estática aninhada se comporta como uma classe comum de alto nível, mas está "hospedada" dentro de outra para indicar um vínculo lógico.

* **Comportamento:** Ela **não** tem acesso aos membros de instância (não-estáticos) da classe envolvente.
* **Uso Comum:** Muito utilizada no padrão de projeto **Builder** ou para criar objetos auxiliares que não precisam conhecer o estado específico de uma instância da classe pai.

<div class="code-block">
    <div class="code-block__header">
        <span>Static Nested Class (Builder Pattern)</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>public class Computer {
    private String cpu;
ㅤㅤㅤㅤㅤ
    // Static nested class: Logical bond without needing instance access
    public static class Builder {
        public String cpu;
        ㅤㅤㅤㅤㅤ
        public Builder setCpu(String cpu) {
            this.cpu = cpu;
            return this;
        }
    }
}</code></pre>
</div>

## Inner Classes (Classes de Instância)

Diferente da estática, uma *Inner Class* está ligada a uma **instância específica** da classe externa.

* **Comportamento:** Ela tem acesso total a todos os membros da classe pai, incluindo atributos e métodos privados.
* **Restrição:** Você não pode criar uma *Inner Class* sem primeiro ter um objeto da classe externa.

<div class="code-block">
    <div class="code-block__header">
        <span>Inner Class Access</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>public class Engine {
    private boolean running = false;
ㅤㅤㅤㅤㅤ
    public class Piston {
        public void move() {
            if (running) { // Can access private field of outer class directly
                System.out.println("Piston moving...");
            }
        }
    }
}</code></pre>
</div>


## Local Classes (Classes Locais)

São classes definidas dentro de um **bloco de código**, geralmente dentro de um método. Elas são visíveis apenas naquele escopo.

* **Segurança:** Elas só podem acessar variáveis locais do método se estas forem `final` ou "efetivamente finais" (que não mudam de valor após a atribuição).

## Anonymous Classes (Classes Anônimas)

As classes anônimas permitem que você declare e instancie uma classe ao mesmo tempo. Elas são usadas quando você precisa de uma implementação única de uma interface ou classe abstrata, sem a necessidade de criar um arquivo `.java` separado.

<div class="code-block">
    <div class="code-block__header">
        <span>Anonymous Class Example</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>interface ClickHandler {
    void onClick();
}
ㅤㅤㅤㅤㅤ
public class UIButton {
    public void setup() {
        // Implementation on the fly
        ClickHandler handler = new ClickHandler() {
            @Override
            public void onClick() {
                System.out.println("Button clicked! Triggering animation.");
            }
        };
    }
}</code></pre>
</div>

<div class="callout callout--tip">
    <div class="callout__title">💡 Dica de Segurança</div>
    <div class="callout__text">
        Cuidado ao usar <b>Inner Classes</b> em contextos de longa duração (como Threads ou Handlers). Como a Inner Class mantém uma referência implícita para a instância da classe pai, ela pode impedir que o <b>Garbage Collector</b> limpe a classe externa, causando um vazamento de memória silencioso.
    </div>
</div>


## Resumo
* **Static Nested:** Organização lógica; não acessa o `this` da classe externa.
* **Inner Class:** Acesso total à classe pai; depende de uma instância.
* **Anonymous:** Implementações rápidas e descartáveis; muito comum em códigos legados ou eventos de UI.
* **Arquitetura:** Use classes aninhadas para esconder detalhes que só interessam àquela classe específica, mantendo sua API limpa.