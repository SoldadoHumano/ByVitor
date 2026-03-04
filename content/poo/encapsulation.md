O **Encapsulamento** é um dos pilares fundamentais da POO. Ele serve para proteger os dados de uma classe contra acessos indevidos ou modificações acidentais, garantindo que o objeto tenha controle total sobre seu próprio estado.

## O Conceito de "Caixa Preta"
Imagine um controle remoto: você sabe que apertar o botão de "Volume +" aumenta o som, mas você não precisa (e nem deve) mexer nos circuitos internos para isso. No código, o encapsulamento faz o mesmo: ele esconde a complexidade e protege a integridade dos dados.

## Modificadores de Acesso
Para aplicar o encapsulamento, utilizamos palavras-chave que definem quem pode ver o quê:

* **`private`**: O atributo ou método só é visível dentro da própria classe. É o nível máximo de proteção.
* **`public`**: O atributo ou método é visível por qualquer outra classe.
* **`protected`**: Relacionado à herança (veremos mais adiante).

## Métodos Getters e Setters
Como os atributos costumam ser `private`, usamos métodos públicos para interagir com eles de forma controlada:

* **Getters (Obter):** Métodos que retornam o valor de um atributo. Ex: `getSaldo()`.
* **Setters (Definir):** Métodos que permitem alterar o valor de um atributo, geralmente com uma validação. Ex: `setSalario(double valor)`.

<div class="callout callout--tip">
    <div class="callout__title">💡 Por que não deixar tudo público?</div>
    <div class="callout__text">
        Se o atributo <code>saldo</code> for público, qualquer um pode fazer <code>conta.saldo = -1000000;</code>. Com um <strong>Setter</strong>, você pode validar: "Se o valor for negativo, ignore a alteração". Isso traz segurança e robustez ao software.
    </div>
</div>

### Exemplo Prático: Protegendo Dados Sensíveis

Veja como encapsulamos uma classe de usuário para garantir que ninguém defina uma idade inválida:

<div class="code-block">
    <div class="code-block__header">
        <span>Encapsulamento em Java</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>class Usuario {
    private String nome;
    private int idade;
ㅤㅤ
    // Construtor
    public Usuario(String nome) {
        this.nome = nome;
    }
ㅤㅤ
    // Getter para o Nome (Apenas leitura)
    public String getNome() {
        return nome;
    }
ㅤㅤ
    // Getter para a Idade
    public int getIdade() {
        return idade;
    }
ㅤㅤ
    // Setter para a Idade com validação de segurança
    public void setIdade(int novaIdade) {
        if (novaIdade >= 0 && novaIdade <= 120) {
            this.idade = novaIdade;
            System.out.println("Idade de " + nome + " atualizada para " + novaIdade);
        } else {
            System.out.println("Erro: Idade inválida!");
        }
    }
}
ㅤㅤ
public class Sistema {
    public static void main(String[] args) {
        Usuario user = new Usuario("Vitor");
ㅤㅤ
        // user.idade = -50; // Isso causaria um erro de compilação (Privado!)
        ㅤㅤ
        user.setIdade(25);   // Funciona!
        user.setIdade(-10);  // Protegido pela validação!
        ㅤㅤ
        System.out.println("Nome: " + user.getNome());
        System.out.println("Idade final: " + user.getIdade());
    }
}</code></pre>
</div>