Os modificadores de acesso em Java são as ferramentas que definem a visibilidade de classes, métodos e atributos. Seguir o **Princípio do Menor Privilégio** (conceder apenas o acesso estritamente necessário) é essencial para criar um código seguro, fácil de manter e, acima de tudo, protegido contra manipulações indevidas que possam comprometer a integridade dos dados.

## Os Quatro Níveis de Visibilidade

O Java possui quatro níveis de acesso, cada um com um propósito estratégico na arquitetura do sistema:

| Modificador | Classe | Pacote | Subclasse (Herança) | Global |
| :--- | :---: | :---: | :---: | :---: |
| **`public`** | ✅ | ✅ | ✅ | ✅ |
| **`protected`** | ✅ | ✅ | ✅ | ❌ |
| **`default`** (sem termo) | ✅ | ✅ | ❌ | ❌ |
| **`private`** | ✅ | ❌ | ❌ | ❌ |

## A Estratégia do Encapsulamento

O erro mais comum em sistemas frágeis é deixar atributos como `public`. Isso quebra o encapsulamento, pois permite que qualquer parte do software altere o estado de um objeto sem passar por validações de segurança ou regras de negócio.

### Por que usar `private`?
Ao manter atributos privados e expor apenas o necessário via métodos (getters/setters ou métodos de negócio), você ganha o poder de **interceptar** e validar cada alteração.

<div class="code-block">
    <div class="code-block__header">
        <span>Secure Encapsulation Example</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>public class BankAccount {
    private double balance; // Hidden from direct external access
ㅤㅤㅤㅤㅤ
    public void deposit(double amount) {
        // Security logic: prevent invalid operations
        if (amount > 0) {
            this.balance += amount;
        } else {
            // Log security event or handle error
            System.err.println("Invalid deposit attempt.");
        }
    }
ㅤㅤㅤㅤㅤ
    public double getBalance() {
        return this.balance;
    }
}</code></pre>
</div>

## `protected` vs `default`

Muitos desenvolvedores confundem o acesso de pacote (`default`) com o `protected`.

* **`default` (Package-Private):** É o padrão quando você não define um modificador. Apenas classes dentro do **mesmo pacote** enxergam o membro. É ideal para componentes internos de um módulo que não devem ser expostos para o resto da aplicação.
* **`protected`:** Estende a visibilidade do pacote para as **subclasses**, mesmo que estejam em pacotes diferentes. Use com extrema cautela, pois ele cria um acoplamento forte entre a classe pai e a filha.

## Segurança de Arquitetura com Modificadores de Classe

Classes também possuem restrições que ajudam a desenhar APIs mais limpas:
* Uma classe **`public`** pode ser instanciada por qualquer parte do sistema.
* Uma classe **`default`** (sem o termo public) é uma "Internal Class". Ela só existe dentro do seu pacote.

Isso permite criar **Internal APIs**: você expõe apenas uma interface ou fachada pública, enquanto toda a lógica complexa e sensível fica "escondida" em classes com visibilidade de pacote.

<div class="code-block">
    <div class="code-block__header">
        <span>Package-Private Logic Isolation</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>// Only accessible within the 'com.byvitor.internal' package
class SecurityProcessor {
    void encryptData(String data) {
        // Implementation details hidden from the external world
        System.out.println("Processing encryption...");
    }
}</code></pre>
</div>

<div class="callout callout--tip">
    <div class="callout__title">💡 Boas Práticas de Segurança</div>
    <div class="callout__text">
        Sempre comece declarando tudo como <b>private</b>. Só aumente a visibilidade para <b>protected</b> ou <b>public</b> se houver uma necessidade real comprovada. Quanto menor a superfície de contato da sua classe, menos bugs de estado lateral ela terá.
    </div>
</div>

## Resumo
* **Proteção:** O encapsulamento não é sobre ocultar dados, mas sobre proteger a integridade.
* **Privacidade:** O uso de <code>private</code> é a primeira linha de defesa de um código robusto.
* **Arquitetura:** Utilize visibilidade de pacote para criar módulos coesos e esconder detalhes de implementação desnecessários.