Em Java, o `enum` é muito mais do que uma simples lista de constantes. Ele é uma classe especial que pode conter lógica, atributos e até implementar interfaces. Usar Enums avançados aumenta a segurança do tipo e a robustez do domínio do seu sistema, eliminando a necessidade de constantes soltas ou `if/else` repetitivos.

## Enums com Atributos e Construtores

Diferente de constantes simples, você pode associar valores a cada item de um Enum. Isso é ideal para representar códigos de erro, estados de um pedido ou configurações fixas.

* **Construtor Privado:** O construtor de um Enum é sempre privado. Você não pode criar instâncias de um Enum usando `new`.
* **Imutabilidade:** Como as instâncias de Enum são fixas, é uma boa prática manter seus atributos como `final`.

<div class="code-block">
    <div class="code-block__header">
        <span>Enum with Attributes</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>public enum StatusPedido {
    AGUARDANDO_PAGAMENTO(1, "Awaiting Payment"),
    PROCESSANDO(2, "Processing"),
    ENVIADO(3, "Shipped"),
    ENTREGUE(4, "Delivered");
ㅤㅤㅤㅤㅤ
    private final int code;
    private final String description;
ㅤㅤㅤㅤㅤ
    // Internal constructor
    StatusPedido(int code, String description) {
        this.code = code;
        this.description = description;
    }
ㅤㅤㅤㅤㅤ
    public int getCode() { return code; }
    public String getDescription() { return description; }
}</code></pre>
</div>

## Métodos Abstratos e Comportamentos Específicos

Uma funcionalidade poderosa é definir métodos que cada constante do Enum deve implementar de forma diferente. Isso aplica o conceito de **polimorfismo** diretamente na definição do Enum.

<div class="code-block">
    <div class="code-block__header">
        <span>Constant-Specific Class Bodies</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>public enum OperacaoMatematica {
    SOMA {
        @Override
        public double aplicar(double x, double y) { return x + y; }
    },
    SUBTRACAO {
        @Override
        public double aplicar(double x, double y) { return x - y; }
    };
ㅤㅤㅤㅤㅤ
    public abstract double aplicar(double x, double y);
}</code></pre>
</div>

## Implementando Interfaces

Enums podem implementar interfaces, permitindo que você trate diferentes tipos de Enums de forma genérica no seu sistema. Isso é extremamente útil para padronizar comportamentos em sistemas de larga escala.

<div class="code-block">
    <div class="code-block__header">
        <span>Enums and Interfaces</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>interface Validador {
    boolean isValid();
}
ㅤㅤㅤㅤㅤ
public enum PermissaoUsuario implements Validador {
    ADMIN, GUEST;
ㅤㅤㅤㅤㅤ
    @Override
    public boolean isValid() {
        return this == ADMIN; // Simple logic example
    }
}</code></pre>
</div>

## O Uso do `EnumSet` e `EnumMap`

Para manter a performance, o Java oferece coleções otimizadas especificamente para Enums.

* **`EnumSet`:** Uma implementação de `Set` extremamente rápida (usa operações de bits internamente).
* **`EnumMap`:** Uma `Map` onde as chaves são instâncias de um Enum, muito mais eficiente que um `HashMap` comum.

<div class="callout callout--tip">
    <div class="callout__title">💡 Dica de Segurança</div>
    <div class="callout__text">
        De acordo com Joshua Bloch (autor de Java Efetivo), usar um Enum com um único elemento é a melhor forma de implementar o padrão <b>Singleton</b> em Java. Ele garante proteção total contra problemas de serialização e ataques de reflexão (Reflection), mantendo a instância única de forma segura.
    </div>
</div>

## Resumo
* **Encapsulamento:** Guarde dados relacionados diretamente no item do Enum.
* **Polimorfismo:** Use métodos abstratos para evitar `switch/case` gigantes.
* **Performance:** Prefira `EnumSet` e `EnumMap` ao lidar com coleções de Enums.
* **Type Safety:** Diferente de constantes `int` ou `String`, Enums garantem que apenas valores válidos sejam passados.