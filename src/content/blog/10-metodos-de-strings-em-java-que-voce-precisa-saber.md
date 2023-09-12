---
title: "10 métodos de Strings em Java que você precisa saber"
description: Domine Java com os 10 métodos de Strings mais utilizados. Aprenda a manipular textos de forma eficiente. Aprimore suas habilidades de programação agora!
pubDate: '2023-08-20'
cover: ~/assets/letras.webp
coverAlt: 'Blocos de Letras'
citations: [
    {
        author: 'JAIN, S',
        title: '10 Important String Methods In Java You Must Know.',
        url: 'https://www.crio.do/blog/string-methods-in-java/'
    },
    {
        author: 'SINGH, P',
        title: '10 most useful string methods in Java.',
        url: 'https://dev.to/pankaj_singhr/10-most-useful-string-methods-in-java-4lag'
    }
]
tags: 
    - java
---
Strings são uma parte essencial de praticamente qualquer código. Por isso, é importante que uma linguagem de programação forneça suporte robusto para a sua manipulação. Dada a importância dessa tarefa, este artigo se propõe a mostrar de forma clara os dez principais métodos para a manipulação de Strings em Java. E vamos a eles! 


## 1. indexOf()

Usado para encontrar caracteres e substrings em uma string. Ele retorna o índice da primeira ocorrência da substring passada como parâmetro dentro desta string; além disso, se fornecermos o fromIndex, ele começa a procurar a partir do índice indicado.

### Sintaxe de indexOf()

```java
public int indexOf(int str, int fromIndex)
```

### Parâmetro(s)

- ***str:*** Substring a ser procurada
- ***fromIndex:*** A pesquisa começa a partir deste índice

### Valor de Retorno

- Índice da primeira ocorrência da substring especificada;
- 0 se uma string vazia for passada, ou;
- -1 se não houver tal ocorrência.

### Variantes sobrecarregadas
```java
public int indexOf(int ch)

public int indexOf(int ch, int fromIndex)

public int indexOf(String str)

public int indexOf(String str,int fromIndex)
```

### **Utilização prática do indexOf()**

*Já se questionou sobre o funcionamento do recurso de busca nos seus editores de código preferidos?*

O método *indexOf()* pode ser empregado para implementar essa funcionalidade. Como?

A abordagem consiste em iterar por todas as linhas e utilizar o *indexOf()* com a string alvo. Se houver múltiplas ocorrências da string alvo na mesma linha, o processo começa a partir do ponto onde a última substring encontrada terminou.

```java
public static int buscarOcorrencias(String[] paragrafo, String alvo) {
    int totalOcorrencias = 0;
    int indice = 0;

    for (int numeroLinha = 0; numeroLinha < paragrafo.length; ++numeroLinha) {
        String linha = paragrafo[numeroLinha];
        indice = linha.indexOf(alvo, indice);

        while (indice != -1) {
            System.out.println("Encontrado na linha " + numeroLinha + " na posição " + indice);
            indice += alvo.length();
            totalOcorrencias++;
            indice = linha.indexOf(alvo, indice);
        }
    }

    return totalOcorrencias;
}

```

Neste exemplo, a função `buscarOcorrencias` varre um array de strings que representa um parágrafo. Ela procura por ocorrências da string alvo e, se encontradas, imprime a linha e a posição onde a ocorrência foi localizada. O índice é então atualizado para continuar a busca a partir do próximo caractere após a ocorrência encontrada. A função retorna o número total de ocorrências encontradas.

## 2. toCharArray()
O método **toCharArray()** é utilizado para criar um novo array de caracteres a partir de uma string. O conteúdo deste novo array é inicializado para conter os caracteres presentes na string original, e seu comprimento é igual ao comprimento da string.

### Sintaxe de toCharArray()
```java
public char[] toCharArray()
```

### Parâmetro(s)
Nenhum

### Valor de Retorno
Um array de caracteres é alocado na memória, contendo os caracteres da string original, e uma referência para esse array é retornada.

### **Utilização prática** do toCharArray()

Durante operações intensivas de manipulação de strings, frequentemente são criados novos objetos de strings, o que pode ser ineficiente em termos de uso de memória. Uma estratégia eficaz é converter a string em um array de caracteres primeiro, realizar as operações de manipulação necessárias e, posteriormente, converter o array de caracteres de volta para uma string.

Vejamos um exemplo onde verificamos se uma determinada string é um palíndromo:

```java
String palindrome = "Dot saw I was Tod";
char[] charArray = palindrome.toCharArray();
int len = charArray.length;
boolean isPalindrome = true;

for (int i = 0, j = len - 1; i < j; i++, j--) {
    if (charArray[i] != charArray[j]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    System.out.println("É um palíndromo");
} else {
    System.out.println("Não é um palíndromo");
}
```

## 3. charAt()

O método **charAt()** permite extrair o caractere presente no índice especificado da string. Esse método é útil quando se deseja verificar o valor de um caractere em um índice específico sem a necessidade de percorrer toda a string.

### Sintaxe de charAt()

```java
public char charAt(int index)
```

### Parâmetro(s)

- ***Index:*** índice do caractere na string a ser recuperado

### Valor de Retorno

valor char da String no índice passado como argumento

- **Lança**

*IndexOutOfBoundsException* - se o argumento fornecido for negativo ou maior que o comprimento de String.

### **Utilização prática** do charAt()

O método *charAt()* pode ser empregado, por exemplo, para iterar sobre uma string e contar a frequência de um caractere em particular.

```java
String frase = "Estou aprimorando minhas habilidades aprendendo fazendo";
char caractereAlvo = 'a';
int contagemCaractere = 0;

for (int i = 0; i < frase.length(); i++) {
    if (frase.charAt(i) == caractereAlvo) {
        contagemCaractere++;
    }
}

System.out.println("A frequência do caractere '" + caractereAlvo + "' é: " + contagemCaractere);
```

Neste exemplo, o método *charAt()* é utilizado para percorrer a 
string e contar quantas vezes o caractere 'a' aparece nela. O resultado é
 impresso para indicar a frequência desse caractere na string.

## 4. concat()

A string passada é anexada ao final da string especificada.

### Sintaxe de concat()

```java
public String concat(String str)
```

### Parâmetro(s)

***str:*** string a ser anexada ao final de uma string dada

### Valor de Retorno

Um novo objeto String com a contcatenação da string passada ao final da string dada.

### **Utilização prática** do concat()

Aqui está um exemplo usando o método `concat()` para construir uma mensagem de boas-vindas personalizada.

```java
import java.util.Scanner;

public class WelcomeMessage {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite seu nome: ");
        String nome = scanner.nextLine();

        String saudacao = "Olá, ";
        String mensagem = "Bem-vindo ao nosso sistema!";

        // Usando o método concat() para juntar as strings
        String mensagemPersonalizada = saudacao.concat(nome).concat(". ").concat(mensagem);

        System.out.println(mensagemPersonalizada);

        scanner.close();
    }
}
```

## 5. replace()

Usado para substituir caracteres e substrings em uma string.

### Sintaxe de replace()

```java
public String replace(char oldChar, char newChar)
```

### Parâmetro(s)

- ***oldChar:*** Caractere que precisa ser substituído
- ***newChar:*** Caractere que substituirá o oldChar

### Valor de Retorno

Um novo objeto String contendo uma string criada substituindo todas as ocorrências de oldChar por newChar.

### **Utilização prática** do replace()

Aqui está um exemplo usando o método `replace()` para manipular um texto removendo palavras sensíveis.

```java
import java.util.Scanner;

public class CensorText {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite um texto: ");
        String textoOriginal = scanner.nextLine();

        String[] palavrasProibidas = {"violento", "ofensivo", "inadequado"};
        String textoCensurado = textoOriginal;

        // Usando o método replace() para substituir palavras proibidas
        for (String palavra : palavrasProibidas) {
            textoCensurado = textoCensurado.replace(palavra, "[CENSURADO]");
        }

        System.out.println("Texto censurado: " + textoCensurado);

        scanner.close();
    }
}
```

## 6. substring()

Usado para extrair uma parte de uma string a partir de uma string fornecida. Cria um novo objeto de string sem alterar a string original.

### Sintaxe do substring()

```java
public String substring(int beginIndex, int endIndex)
```
### Parâmetro(s)

- **beginIndex:** A busca começa a partir deste índice
- **endIndex:** A busca termina em endIndex-1

### Valor de Retorno

Um novo objeto de string resultante da parte da string original cortada com base nos índices begin e endIndex.

- Exceção:

*IndexOutOfBoundsException* - se beginIndex for negativo ou maior que o comprimento deste objeto String.

**Sobrecarga de variantes**

1. `public String substring(int beginIndex)`


### **Utilização prática** do substring()

É possível identificar todas as subcadeias dentro de uma string específica utilizando o método *substring()*. Embora essa não seja a abordagem mais otimizada, ela proporcionará uma compreensão do funcionamento do método substring.

Aqui está uma implementação do método *SubString*:

```java
public void SubString(String str, int n) {
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j <= n; j++) {
            System.out.println(str.substring(i, j));
        }
    }
}

```

Essa implementação percorre a string original, gerando todas as possíveis subcadeias a partir de índices consecutivos. Embora funcione, é importante notar que pode não ser eficiente para strings muito longas devido ao aumento no número de iterações.

## 7. split()

O método *split()* é empregado para segmentar a string especificada com base em uma expressão regular. A declaração de um limite pode ser usada para controlar o número de strings resultantes após a divisão.

### Sintaxe do split()

```java
public String[] split(String regex, int limit)

```

### Parâmetro(s)

- **regex:** Subcadeia a ser localizada.
- **limit:** A pesquisa inicia a partir deste índice.

### Valor de Retorno

Uma matriz contendo cada subcadeia desta string é concluída por uma subcadeia que corresponde à expressão fornecida ou pelo término da string. As subcadeias na matriz são organizadas na sequência em que aparecem na string original.

- **Exceção**

`PatternSyntaxException` - se a sintaxe da expressão regular for inválida.

### Variantes Sobrecarregadas

1. `public String[] split(String regex)`

### **Utilização prática** do split()

Podemos contar o número de palavras presentes em um parágrafo ao dividir a string usando o espaço como delimitador.

Exemplo:

```java
String str = "Esta string contém cinco palavras";
String[] arrayOfWords = str.split(" ");
System.out.println(arrayOfWords.length);

```

Esse trecho de código divide a string em palavras individuais, representadas como elementos em um array. O resultado é o número de palavras na string original.

## 8. compareTo()

Como programadores Java, frequentemente encontramos a necessidade de ordenar elementos em uma lista ou em uma classe. O método compareTo() é utilizado para comparar duas strings em ordem alfabética.

### Sintaxe do compareTo()

```java
public int compareTo(String anotherString)
```

### Parâmetro(s)

- **anotherString:** A string a ser comparada.

### Valor de Retorno

- Retorna 0 se a string do argumento for igual à string fornecida.
- Retorna um valor < 0 se a string fornecida for lexicograficamente menor do que a string do argumento.
- Retorna um valor > 0 se a string fornecida for lexicograficamente maior do que a string do argumento.

### **Utilização prática** do compareTo()

Algoritmos de ordenação baseados em comparação são amplamente utilizados em diversos contextos.

Nas instituições educacionais, é comum organizar os alunos com base na ordem crescente de seus primeiros nomes. Caso os primeiros nomes de dois alunos sejam idênticos, a ordenação é determinada pela ordem crescente de seus sobrenomes.

```java
class Aluno implements Comparable<Aluno> {
    String primeiroNome;
    String sobrenome;

    // Construtor e métodos aqui

    public int compareTo(Aluno aluno) {
        int comparacao = primeiroNome.compareTo(aluno.primeiroNome);
        if (comparacao == 0) {
            return sobrenome.compareTo(aluno.sobrenome);
        }
        return comparacao;
    }
}

public class OrdenarAlunos {
    List<Aluno> alunos = new ArrayList<Aluno>();

    // Adicionar alunos à lista

    Collections.sort(alunos);
}
```

Nesse exemplo, a classe `Aluno` implementa a interface `Comparable` para permitir a comparação e ordenação com base nos critérios especificados. A lista de alunos pode ser ordenada usando `Collections.sort()`.

## 9. strip()

O método *strip()* é utilizado para eliminar quaisquer espaços em branco no início e no final da string especificada.

### Sintaxe do strip()

```java
public String strip()
```

### Parâmetro(s)

Nenhum

### Valor de Retorno

Retorna uma nova string que representa o conteúdo desta string original, porém sem espaços em branco iniciais e finais.

### **Utilização prática** do strip()

Quando recebemos entradas da camada de apresentação, é crucial garantir que espaços em branco no começo e final da string não afetem os dados reais. Isso assegura que os dados sejam armazenados de maneira consistente no banco de dados e processados no backend.

O método *split()* também pode ser empregado para garantir que nossas entradas estejam livres de qualquer contaminação.

```java
public static void realizarLogin() {
    String nomeDeUsuario = obterNomeDeUsuarioDaInterface(); // "  usuario123 "
    String senhaLimpa = senha.strip(); // "abc"

    Conta conta = new Conta(nomeDeUsuario.strip(), senhaLimpa);

    bancoDeDados.salvar(conta);
}

```

Nesse exemplo, a função *realizarLogin()* exemplifica como utilizar o método *strip()* para remover espaços em branco desnecessários de entradas, assegurando a integridade dos dados manipulados e armazenados.

## 10. valueOf()

O método *valueOf()* é empregado para obter a representação em forma de string do argumento passado. O *valueOf()* possui diversas variações sobrecarregadas que facilitam a conversão de quase qualquer tipo primitivo para uma string.

### Sintaxe do valueOf()

```java
public static String valueOf(char[] data)
```

### Parâmetro(s)

- **data:** Matriz de caracteres a ser convertida em uma string.

### Valor de Retorno

Retorna um novo objeto de tipo String que contém os dados da matriz como uma representação de string do argumento passado.

### Variantes sobrecarregadas

```java
public static String valueOf(boolean b)
public static String valueOf(char c)
public static String valueOf(int i)
public static String valueOf(long l)
public static String valueOf(float f)
public static String valueOf(double d)
public static String valueOf(char[] data)
public static String valueOf(char[] data, int offset, int count)
public static String valueOf(Object obj)
```

### **Utilização prática** do valueOf()

É possível formar uma única sequência combinando todos os elementos de um array de caracteres utilizando o método *valueOf()*.

Exemplo:

```java
char[] arrayDeCaracteres = { 'a', 'b', 'c', 'd', 'e', 'f', 'g' };
String sequenciaCombinada = String.valueOf(arrayDeCaracteres);
```

Nesse exemplo, a variável `sequenciaCombinada` conterá a string "abcdefg", que é formada pela concatenação dos caracteres no array `arrayDeCaracteres`. O método *valueOf()* é uma ferramenta útil para converter diversos tipos de dados em representações de strings.

## Recapitulação

Aqui está um resumo rápido dos métodos de string Java que conquistamos no artigo.

| Método Java | Uso |
| --- | --- |
| indexOf () | Para encontrar o índice da primeira ocorrência de um caractere ou uma cadeia na string dada. |
| toCharArray () | Para formar uma nova matriz de caracteres a partir desta string |
| charAt () | Para obter o caractere no índice especificado |
| concat () | Para anexar a string passada ao final da string dada. |
| replace () | Para substituir todas as ocorrências do caractere / String fornecido pela String fornecida |
| substring () | Para obter uma parte de uma string da string dada. |
| split () | Para dividir a string dada com base na expressão regular fornecida. |
| compareTo () | Para comparar duas Strings lexicograficamente. |
| strip () | Para remover todos os espaços em branco finais e iniciais da string dada. |
| valueOf () | Para retornar a representação de string do argumento passado. |

### Lista de outros métodos de string úteis para aprendizado adicional

- contains(CharSequence s)
- isEmpty()
- join()
- repeat()
- startsWith() / endsWith()
- toLowerCase() / toUpperCase()
- indent()

## Conclusão

As strings são fundamentais na programação e o Java oferece uma classe String robusta com métodos poderosos para sua manipulação. Ao entender essas ferramentas, os desenvolvedores podem criar aplicações mais eficientes e confiáveis.
