Até agora, vimos classes que podiam ser instanciadas como objetos reais. Mas na programação de alto nível, muitas vezes precisamos de classes que sirvam apenas como um "conceito" ou um "contrato", garantindo que todas as subclasses sigam um padrão rigoroso.



## 1. Classes Abstratas
Uma classe abstrata é uma classe que não pode ser instanciada (você não pode dar um `new` nela). Ela serve exclusivamente como base para outras classes.

* **Métodos Abstratos:** São métodos que não possuem corpo (lógica). Eles apenas dizem: "Quem herdar de mim, **obrigatoriamente** terá que implementar este método".
* **Uso:** Ideal quando você tem uma ideia geral (ex: `Animal`), mas só faz sentido criar objetos específicos (ex: `Cachorro`, `Gato`).

## 2. Interfaces
Se uma classe abstrata é uma planta parcial, uma **Interface** é um contrato 100% abstrato. Ela define **o que** uma classe deve fazer, mas não **como** ela deve fazer.

* **Múltiplas Implementações:** Diferente da herança (onde você só tem um pai), uma classe pode implementar várias interfaces ao mesmo tempo.
* **Padronização:** Garante que diferentes classes tenham os mesmos nomes de métodos, facilitando a integração.

<div class="callout callout--tip">
    <div class="callout__title">💡 Flexibilidade Total</div>
    <div class="callout__text">
        Interfaces são a base do desacoplamento. No seu site, você poderia ter uma interface <code>Autenticavel</code>. Não importa se o usuário loga via Discord, Google ou E-mail; se a classe implementa essa interface, o seu sistema sabe que ela tem o método <code>login()</code>.
    </div>
</div>

### Exemplo Prático: Sistema de Dispositivos

Veja a diferença entre uma classe abstrata (base comum) e uma interface (comportamento extra):

<div class="code-block">
    <div class="code-block__header">
        <span>Interfaces e Abstração</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>// Classe Abstrata: Define a base, mas não pode ser instanciada
abstract class Dispositivo {
    String nome;
ㅤㅤ
    public Dispositivo(String nome) {
        this.nome = nome;
    }
ㅤㅤ
    // Método comum a todos
    public void ligar() {
        System.out.println(nome + " está ligando...");
    }
ㅤㅤ
    // Método abstrato: Cada um implementa o seu
    public abstract void realizarTarefa();
}
ㅤㅤ
// Interface: Um contrato de comportamento extra
interface Carregavel {
    void carregarBateria();
}
ㅤㅤ
// Classe Concreta: Herda de Dispositivo e implementa Carregavel
class Notebook extends Dispositivo implements Carregavel {
    public Notebook(String nome) {
        super(nome);
    }
ㅤㅤ
    @Override
    public void realizarTarefa() {
        System.out.println("Processando dados no " + nome + "...");
    }
ㅤㅤ
    @Override
    public void carregarBateria() {
        System.out.println("O " + nome + " está conectado à tomada.");
    }
}
ㅤㅤ
public class Main {
    public static void main(String[] args) {
        // Dispositivo d = new Dispositivo("Genérico"); // ERRO: Não pode instanciar classe abstrata!
        ㅤㅤ
        Notebook meuNote = new Notebook("Poco Laptop");
        meuNote.ligar();
        meuNote.realizarTarefa();
        meuNote.carregarBateria();
    }
}</code></pre>
</div>