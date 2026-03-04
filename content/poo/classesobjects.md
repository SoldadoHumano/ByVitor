A **Programação Orientada a Objetos (POO)** é o paradigma que define o Java. Nela, tentamos aproximar o código do mundo real, agrupando dados e comportamentos em unidades chamadas **Objetos**. Para criar esses objetos, precisamos primeiro de um "projeto" ou "planta baixa": a **Classe**.

## O que é uma Classe?
Uma classe é um modelo (template) que define as características e as ações que um objeto terá. Imagine uma classe chamada `Carro`: ela não é um carro real que você pode dirigir, mas sim o documento que diz que todo carro deve ter uma cor, um modelo e a capacidade de acelerar.

* **Atributos:** São as características (dados) da classe (ex: `cor`, `marca`, `velocidade`).
* **Métodos:** São as ações (comportamentos) que a classe pode executar (ex: `acelerar()`, `frear()`).

## O que é um Objeto?
O objeto é a **instância** física da classe. Se a classe é a planta de uma casa, o objeto é a casa construída na rua. Você pode criar vários objetos a partir de uma única classe, e cada um terá seus próprios valores para os atributos, ocupando seu próprio espaço na memória.

**Exemplos de instâncias:**
* **Objeto A:** Marca: "Toyota", Modelo: "Corolla", Cor: "Prata".
* **Objeto B:** Marca: "Honda", Modelo: "Civic", Cor: "Preto".

## Instanciando Objetos com `new`
Para criar um objeto em Java, utilizamos a palavra-chave `new`. Ela é responsável por alocar espaço na memória RAM para o seu novo objeto e retornar uma referência para ele.

<div class="callout callout--tip">
    <div class="callout__title">💡 Memória Heap e Stack</div>
    <div class="callout__text">
        Quando você declara <code>Car myCar = new Car();</code>, a variável <code>myCar</code> fica na memória <strong>Stack</strong> (guardando apenas o endereço/ponteiro), enquanto o objeto real com todos os seus dados reside na memória <strong>Heap</strong>.
    </div>
</div>

### Exemplo Prático em Java

Abaixo, definimos uma classe simples e criamos instâncias dela dentro do método principal. Note como cada objeto mantém seu próprio estado de forma independente:

<div class="code-block">
    <div class="code-block__header">
        <span>Classes e Objetos</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>// Definição da classe que serve como molde
class Carro {
    // Atributos (Estado)
    String marca;
    String modelo;
    int velocidade = 0;
    ㅤㅤ
    // Método (Comportamento)
    void acelerar(int quantidade) {
        velocidade += quantidade;
        System.out.println(modelo + " acelerou para " + velocidade + " km/h.");
    }
}
ㅤㅤ
public class Principal {
    public static void main(String[] args) {
        // Criando a primeira instância (Objeto)
        Carro meuCarro = new Carro();
        meuCarro.marca = "Toyota";
        meuCarro.modelo = "Corolla";
        ㅤㅤ
        // Criando uma segunda instância independente
        Carro carroAmigo = new Carro();
        carroAmigo.marca = "Honda";
        carroAmigo.modelo = "Civic";
ㅤㅤ
        // Interagindo com os objetos
        meuCarro.acelerar(20);      // Saída: Corolla acelerou para 20 km/h.
        carroAmigo.acelerar(50);  // Saída: Civic acelerou para 50 km/h.
        ㅤㅤ
        // Verificando que cada objeto mantém sua própria velocidade
        System.out.println("Minha velocidade: " + meuCarro.velocidade);
        System.out.println("Velocidade do amigo: " + carroAmigo.velocidade);
    }
}</code></pre>
</div>