A **Herança** é um dos pilares mais poderosos da POO. Ela permite que uma classe (chamada de **Filha** ou Subclasse) herde todos os atributos e comportamentos de outra classe (chamada de **Pai** ou Superclasse). Isso promove o reuso de código e ajuda a criar sistemas mais organizados.



## O conceito de "É um"
A regra de ouro da herança é o relacionamento **"é um"**. Se você pode dizer que "B é um A", então B pode herdar de A.
* Um **Carro** é um **Veículo**.
* Um **Desenvolvedor** é um **Funcionário**.
* Um **Cachorro** é um **Animal**.

## A palavra-chave `extends`
No Java, utilizamos a palavra `extends` para indicar que uma classe está herdando de outra. Ao fazer isso, a subclasse ganha acesso imediato a tudo que é público ou protegido na superclasse.

## A palavra-chave `super`
O `super` é utilizado para nos referirmos diretamente à classe pai. Ele é muito comum em dois cenários:
1.  **No Construtor:** Para chamar o construtor da classe pai e garantir que os dados básicos sejam inicializados.
2.  **Nos Métodos:** Para executar a lógica original do pai antes (ou depois) de adicionar uma lógica nova na classe filha.

<div class="callout callout--tip">
    <div class="callout__title">💡 Herança Única</div>
    <div class="callout__text">
        Diferente de algumas outras linguagens, o Java permite <strong>herança única</strong>. Isso significa que uma classe pode ter apenas um pai direto. Isso evita confusões e conflitos de código, mantendo a estrutura mais limpa e segura.
    </div>
</div>

### Exemplo Prático: Sistema de Funcionários

Veja como economizamos código ao criar uma classe base `Funcionario` e extendê-la para cargos específicos:

<div class="code-block">
    <div class="code-block__header">
        <span>Herança em Java</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>// Classe Pai (Superclasse)
class Funcionario {
    String nome;
    double salario;
ㅤㅤ
    public Funcionario(String nome, double salario) {
        this.nome = nome;
        this.salario = salario;
    }
ㅤㅤ
    public void exibirDados() {
        System.out.println("Funcionário: " + nome + " | Salário: R$" + salario);
    }
}
ㅤㅤ
// Classe Filha (Subclasse)
class Desenvolvedor extends Funcionario {
    String linguagemFavorita;
ㅤㅤ
    public Desenvolvedor(String nome, double salario, String linguagem) {
        // Chama o construtor da classe pai
        super(nome, salario); 
        this.linguagemFavorita = linguagem;
    }
ㅤㅤ
    // Estendendo o comportamento
    public void programar() {
        System.out.println(nome + " está codando em " + linguagemFavorita + "...");
    }
}
ㅤㅤ
public class Empresa {
    public static void main(String[] args) {
        Desenvolvedor dev = new Desenvolvedor("Vitor", 5000.0, "Java");
ㅤㅤ
        // O método exibirDados() foi herdado, não precisamos escrevê-lo novamente!
        dev.exibirDados(); 
        dev.programar();
    }
}</code></pre>
</div>