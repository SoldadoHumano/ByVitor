Na Programação Orientada a Objetos, dizemos que um objeto é definido por seu **estado** e seu **comportamento**. Entender essa separação é fundamental para criar classes organizadas e reutilizáveis.



## Atributos (O Estado)
Os atributos são as variáveis declaradas dentro de uma classe. Eles representam as características ou propriedades de um objeto. O conjunto de valores que esses atributos possuem em um determinado momento é chamado de **Estado do Objeto**.

* **Persistência:** Enquanto o objeto existir na memória, seus atributos manterão os valores atribuídos a eles.
* **Escopo:** Podem ser acessados por qualquer método dentro da mesma classe.

## Métodos (O Comportamento)
Os métodos são blocos de código que realizam ações ou cálculos. Eles definem o que os objetos daquela classe podem fazer. 

* **Interação:** Métodos geralmente manipulam os atributos da própria classe para alterar o estado do objeto.
* **Parâmetros:** Podem receber dados externos para realizar suas tarefas.
* **Retorno:** Podem devolver um resultado para quem o chamou (usando a palavra-chave `return`).

## A Relação entre Estado e Comportamento
O comportamento (método) muitas vezes depende do estado (atributo). Por exemplo, um método `abrirPorta()` só deve funcionar se o atributo `estaTrancada` for `false`.

<div class="callout callout--tip">
    <div class="callout__title">💡 Identidade</div>
    <div class="callout__text">
        Mesmo que dois objetos tenham exatamente os mesmos valores em seus atributos (mesmo estado), eles ainda possuem <strong>identidades</strong> diferentes. No Java, cada <code>new</code> cria um endereço de memória único.
    </div>
</div>

### Exemplo Prático: Personagem de Jogo

Neste exemplo, veja como o método `receberDano` altera o estado do atributo `vida`:

<div class="code-block">
    <div class="code-block__header">
        <span>Atributos e Métodos</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>class Personagem {
    // Atributos (Estado do personagem)
    String nome;
    int vida = 100;
    boolean estaVivo = true;
ㅤㅤ
    // Método sem retorno (Comportamento de ação)
    void receberDano(int quantidade) {
        vida -= quantidade; // Altera o estado do atributo 'vida'
        ㅤㅤ
        if (vida <= 0) {
            vida = 0;
            estaVivo = false;
            System.out.println(nome + " foi derrotado!");
        } else {
            System.out.println(nome + " agora tem " + vida + " de vida.");
        }
    }
ㅤㅤ
    // Método com retorno (Comportamento de consulta)
    String obterStatus() {
        if (estaVivo) {
            return nome + " está pronto para a batalha!";
        } else {
            return nome + " está fora de combate.";
        }
    }
}
ㅤㅤ
public class Jogo {
    public static void main(String[] args) {
        Personagem heroi = new Personagem();
        heroi.nome = "SoldadoHumano";
ㅤㅤ
        // Chamando comportamentos
        heroi.receberDano(30);
        heroi.receberDano(80);
ㅤㅤ
        // Consultando o estado final
        String statusFinal = heroi.obterStatus();
        System.out.println(statusFinal);
    }
}</code></pre>
</div>