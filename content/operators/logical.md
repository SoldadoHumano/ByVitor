Os **Operadores Lógicos** são utilizados para combinar múltiplas expressões booleanas e determinar um resultado final. Eles são fundamentais para criar filtros, validar permissões de acesso e controlar o fluxo de programas que dependem de mais de um fator para tomar uma decisão.

## 1. Operador E (AND - `&&`)
O operador `&&` retorna **verdadeiro** apenas se **todas** as condições envolvidas forem verdadeiras. Se uma única parte for falsa, o resultado final será falso.

**Exemplo:** Para entrar em uma conta, você precisa do usuário correto **E** da senha correta.

## 2. Operador OU (OR - `||`)
O operador `||` retorna **verdadeiro** se **pelo menos uma** das condições for verdadeira. Ele só retorna falso se todas as condições forem falsas.

**Exemplo:** Para ganhar desconto, você pode ser um cliente novo **OU** ter um cupom de desconto.

## 3. Operador NÃO (NOT - `!`)
O operador `!` é usado para **inverter** o estado lógico. Se algo é verdadeiro, o `!` o torna falso, e vice-versa.

**Exemplo:** Verifique se o usuário **NÃO** está logado antes de mostrar a tela de login.

## 4. Curto-Circuito (Short-Circuit)
Em linguagens como Java, os operadores `&&` e `||` são inteligentes:

No caso do **AND (`&&`)**, se a primeira condição já for falsa, o computador nem olha a segunda, pois sabe que o resultado será falso de qualquer jeito.

No caso do **OR (`||`)**, se a primeira condição já for verdadeira, ele ignora a segunda, pois o resultado já é garantidamente verdadeiro.

<div class="callout callout--tip">
    <div class="callout__title">💡 Boas Práticas: Parênteses e Clareza</div>
    <div class="callout__text">
        Ao combinar muitos operadores lógicos, o código pode ficar difícil de ler. Use sempre <strong>parênteses</strong> para agrupar as ideias, mesmo que a precedência natural funcione. Por exemplo: <code>(idade >= 18 && temIngresso) || ehConvidadoVip</code>. Isso deixa claro para quem lê qual é a prioridade da regra.
    </div>
</div>

### Exemplo Prático em Java

Veja como combinar verificações de segurança e regras de negócio usando lógica:

<div class="code-block">
    <div class="code-block__header">
        <span>Operadores Lógicos</span>
        <button class="code-block__copy" onclick="copyCode(this)">Copiar</button>
    </div>
    <pre><code>int idade = 20;
boolean temIngresso = true;
boolean ehVip = false;
boolean estaBanido = false;

// 1. Uso do AND (&&): Precisa de ambos para ser verdadeiro
boolean podeEntrarNaFesta = (idade >= 18 && temIngresso);

// 2. Uso do OR (||): Pelo menos um deve ser verdadeiro
boolean temAcessoLounge = (ehVip || temIngresso);

// 3. Uso do NOT (!): Inverte o valor (NÃO está banido)
boolean acessoAutorizado = podeEntrarNaFesta && !estaBanido;

// Exibindo resultados
System.out.println("Pode entrar na festa? " + podeEntrarNaFesta);
System.out.println("Tem acesso ao lounge? " + temAcessoLounge);
System.out.println("Acesso final autorizado? " + acessoAutorizado);</code></pre>
</div>