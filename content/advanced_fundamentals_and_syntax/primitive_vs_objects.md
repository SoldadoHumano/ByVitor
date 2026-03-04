Entender como o Java gerencia a memória é vital para criar aplicações de alta performance e evitar gargalos silenciosos. A diferença entre tipos primitivos e objetos vai muito além da sintaxe; ela define onde os dados residem e como o processador interage com eles.

## Stack vs. Heap: Onde os dados moram?

A JVM divide a memória principalmente em duas áreas:

* **Stack (Pilha):** É onde vivem as variáveis locais e as chamadas de métodos. É extremamente rápida, segue a lógica LIFO (*Last In, First Out*) e cada thread possui sua própria Stack.
* **Heap (Monte):** É onde todos os objetos (`new Object()`) são armazenados. É uma área compartilhada entre todas as threads e é gerenciada pelo Garbage Collector (GC).


### Comparação de Performance
* **Primitivos (`int`, `double`, `boolean`):** Os valores são armazenados diretamente na **Stack**. O acesso é imediato e o custo de memória é fixo e baixo.
* **Objetos (`Integer`, `Double`, `Boolean`):** A **variável** na Stack guarda apenas um endereço (ponteiro). O **valor real** reside no Heap. Isso causa um "double hop" (o processador precisa buscar o endereço na Stack para depois localizar o valor no Heap).


## O Custo Oculto do Autoboxing

O **Autoboxing** é a conversão automática que o Java faz entre um tipo primitivo e seu respectivo Wrapper (ex: `int` para `Integer`). Embora facilite a escrita, ele pode ser um vilão de performance em loops intensos.

### O perigo em loops
Ao somar um primitivo a um objeto Wrapper dentro de um loop, o Java cria um novo objeto a cada iteração, sobrecarregando o Garbage Collector.

<div class="code-block">
    <div class="code-block__header">
        <span>Avoid Autoboxing in Loops</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>// Bad Practice: Creates thousands of unnecessary objects
Integer sum = 0;
for (int i = 0; i < 1000; i++) {
    sum += i; // Autoboxing: sum = Integer.valueOf(sum.intValue() + i);
}

// Good Practice: Performance and safety first
int efficientSum = 0;
for (int i = 0; i < 1000; i++) {
    efficientSum += i; // Primitive operations are atomic and fast
}</code></pre>
</div>

## Segurança e Robustez: O Problema do Null

Um dos maiores riscos de usar Wrappers (`Objects`) em vez de primitivos é o famoso `NullPointerException`. 

* Um `int` sempre terá um valor (padrão `0`).
* Um `Integer` pode ser `null`. 

Se você tentar realizar unboxing de um valor nulo, a aplicação irá quebrar:

<div class="code-block">
    <div class="code-block__header">
        <span>Unboxing Safety</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>Integer salary = null;
try {
    // Dangerous: Implicit unboxing of a null reference
    double finalSalary = salary + 100.0; 
} catch (NullPointerException e) {
    // Critical: Always validate wrappers before arithmetic operations
    System.err.println("Error: Salary reference is null.");
}</code></pre>
</div>

<div class="callout callout--tip">
    <div class="callout__title">💡 Detalhe de Implementação: Integer Cache</div>
    <div class="callout__text">
        Você sabia? O Java mantém um cache interno para valores de <code>Integer</code> entre <b>-128 e 127</b>. Se você criar dois Integers com o valor 100 usando <code>Integer.valueOf(100)</code>, eles apontarão para o <b>mesmo objeto</b> no Heap. Acima disso, novos objetos são sempre criados.
    </div>
</div>

## Quando usar cada um?

| Característica | Tipos Primitivos | Objetos (Wrappers) |
| :--- | :--- | :--- |
| **Localização** | Stack | Heap |
| **Performance** | Alta (Acesso direto) | Baixa (Indireção de memória) |
| **Pode ser nulo?** | Não | Sim |
| **Uso em Generics** | Não suportado (`List<int>` ❌) | Obrigatório (`List<Integer>` ✅) |
| **Valor Padrão** | `0`, `false`, etc. | `null` |