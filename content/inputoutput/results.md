A exibição de resultados é o processo de enviar informações processadas pelo programa para um dispositivo de saída, geralmente a tela do computador. Em Java, utilizamos a classe `System` e o objeto `out` para realizar essa tarefa de forma simples e direta.

## 1. O Objeto `System.out`
O `System.out` é o que chamamos de "Saída Padrão" (*Standard Output*). Ele representa o console ou o terminal onde o programa está sendo executado. Existem três métodos principais que você deve conhecer para exibir dados:

**`print()`:** Exibe o texto ou valor na tela, mas mantém o cursor na mesma linha. O próximo dado exibido aparecerá logo em seguida.

**`println()`:** Abreviação de *print line*. Exibe o dado e pula para a próxima linha automaticamente. É o método mais utilizado.

**`printf()`:** Usado para exibição formatada. Permite controlar o número de casas decimais, o alinhamento e a estrutura do texto de forma mais precisa.


## 2. Concatenando Informações
Muitas vezes precisamos misturar textos fixos com valores que estão guardados em variáveis. Para isso, utilizamos o operador de adição (`+`), que no contexto de textos é chamado de **concatenação**.

**Exemplo:** `"O resultado é: " + resultado` junta a frase com o valor da variável.

## 3. Formatação de Números e Caracteres Especiais
Para que a saída seja legível e profissional, às vezes precisamos de caracteres de escape:

**`\n`:** Insere uma quebra de linha manualmente dentro de uma String.

**`\t`:** Insere um recuo de parágrafo (Tabulação).

<div class="callout callout--tip">
    <div class="callout__title">💡 Boas Práticas na Exibição</div>
    <div class="callout__text">
        Evite exibir mensagens genéricas como "Erro 1" ou "Sucesso". Procure sempre fornecer contextos claros ao usuário, como "O cálculo da média foi concluído com sucesso". Além disso, mantenha um padrão visual na saída do console para facilitar a leitura durante o processo de depuração (debug).
    </div>
</div>

### Exemplo Prático em Java

Veja a diferença entre os tipos de exibição e como formatar as mensagens:

<div class="code-block">
    <div class="code-block__header">
        <span>Exibição de Dados</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>// Usando print (não pula linha)
System.out.print("Carregando ");
System.out.print("sistema... ");

// Usando println (pula linha ao final)
System.out.println("Pronto!");

// Exibindo variáveis e concatenação
String usuario = "Vitor";
double versao = 1.0;
System.out.println("Olá, " + usuario + ". Versão do sistema: " + versao);

// Exibição formatada (printf)
double preco = 19.90;
// %f para decimais, %.2f para limitar a 2 casas
System.out.printf("O valor do item é: R$ %.2f \n", preco);</code></pre>
</div>