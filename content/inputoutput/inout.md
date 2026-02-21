Na computação, o termo **I/O** (do inglês *Input/Output*) refere-se à comunicação entre um sistema de processamento de informações (como o seu programa) e o mundo externo. Sem a entrada e a saída de dados, um programa seria um sistema isolado, incapaz de receber ordens ou exibir resultados.

## 1. O que é Input (Entrada)?
A entrada é qualquer dado ou sinal enviado ao programa para ser processado. É a forma como o software "ouve" ou "lê" o que está acontecendo fora dele.

**Exemplos de fontes de entrada:**
    
* Teclado (digitação de texto).
    
* Mouse (cliques e coordenadas).
    
* Arquivos armazenados no disco.
    
* Sensores e bancos de dados.
    
* Requisições de rede (internet).

## 2. O que é Output (Saída)?
A saída é o resultado do processamento realizado pelo programa, enviado de volta para o usuário ou para outro sistema. É a forma como o software "fala" ou "escreve".

**Exemplos de destinos de saída:**
    
* Monitor (exibição de texto ou interface gráfica).
    
* Impressoras.
    
* Gravação de arquivos no disco.
    
* Envio de dados para outros servidores via rede.



## 3. O Fluxo de Dados (Streams)
Muitas linguagens, incluindo Java, tratam a entrada e a saída como um **Fluxo (Stream)**. Imagine uma mangueira de jardim: os dados fluem de uma ponta a outra. 

Se os dados entram no programa, chamamos de **InputStream**.

Se os dados saem do programa, chamamos de **OutputStream**.

<div class="callout callout--tip">
    <div class="callout__title">💡 Por que entender o I/O?</div>
    <div class="callout__text">
        Todo software útil depende desse ciclo. Um sistema de login precisa do <strong>Input</strong> (seu usuário e senha) para realizar o processamento (verificar no banco de dados) e gerar um <strong>Output</strong> (entrar no sistema ou exibir uma mensagem de erro). Dominar o I/O é o que permite criar programas que realmente interagem com pessoas.
    </div>
</div>

### Exemplo Teórico da Lógica de I/O

Embora existam bibliotecas específicas para cada linguagem, a lógica por trás de um processo de I/O segue sempre este padrão:

<div class="code-block">
    <div class="code-block__header">
        <span>Lógica de Fluxo de Dados</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>// 1. O programa fica em espera de uma Entrada (Input)
// Exemplo: Aguardando o usuário digitar um nome.

// 2. O programa captura o dado e armazena em uma variável
// Exemplo: nomeUsuario = "Vitor";

// 3. O programa realiza o processamento necessário
// Exemplo: mensagemFinal = "Olá, " + nomeUsuario;

// 4. O programa envia o resultado para uma Saída (Output)
// Exemplo: Exibir mensagemFinal na tela do monitor.</code></pre>
</div>