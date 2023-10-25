---
title: "23 métodos de strings que todo desenvolvedor Python deve saber"
description: Descubra os 23 métodos de strings mais utilizados em Python. Aprimore suas habilidades agora, e torne-se um desenvolvedor melhor!
pubDate: '2023-10-19'
cover: https://ik.imagekit.io/josafa/OG%20Images/strings-em-python.webp
citations: [
    {
        author: 'Sandipan Das',
        title: '15 insanely useful string methods in Python.',
        url: 'https://www.crio.do/blog/string-methods-in-python/'
    },
    {
        author: 'Patrick Loeber',
        title: '31 essential String methods in Python you should know.',
        url: 'https://www.python-engineer.com/posts/string-methods-python/'
    },
    {
        author: 'Fahmida Yesmin',
        title: '10 most useful Python String Methods.',
        url: 'https://linuxhint.com/python_string_methods/'
    }
]
tags: 
    - python
---
## Introdução
Antes de mergulhar nas funções de strings em Python, é essencial que você esteja bem familiarizado com a definição exata do que é uma string.

Em termos simples, uma string é um tipo de dado usado para descrever conteúdo textual em vez de números em diferentes linguagens de programação. Ela é principalmente composta por uma coleção pré-definida de caracteres, incluindo espaços em branco e dígitos numéricos, e é geralmente delimitada por aspas simples ou duplas para destacá-la durante a execução de um programa.

As literais de string em Python não têm um limite máximo de comprimento e dependem apenas dos recursos de memória do seu computador.

Em Python, índices podem ser usados para acessar caracteres individuais em uma string. Também é permitido aos usuários acessar caracteres em uma string usando referências de endereço positivas e negativas, o que é único. Índices positivos concedem acesso a caracteres a partir do início da string, enquanto índices negativos permitem acessar caracteres a partir do final.

O tipo de dado string em Python vem com um grande conjunto de métodos pré-definidos. Essas funções permitem modificar e trabalhar com literais de string em Python de forma fácil.

Por exemplo, se você deseja **converter cada caractere de sua string para minúsculas**, existe uma maneira melhor de fazer isso do que iterar por cada caractere da string.

Isso pode ser facilmente alcançado em uma única linha usando o método **lower()** em Python, que realiza exatamente a mesma tarefa. É assim que esses métodos são úteis na vida real.

Este artigo se concentrará nos principais **métodos de string** incorporados em Python, com aplicações surpreendentemente úteis na manipulação de strings em estruturas de dados e algoritmos.

## 1. len

Usado para contar o número total de caracteres em uma string.

**Sintaxe:**

```python
len(<string>)
```

**Exemplo:**

```python
texto = "Quantos caracteres tem aqui?"

print(len(texto))
# 28
```

## 2. capitalize

O método capitalize() retorna uma nova string modificada, convertendo o primeiro caractere da string original em maiúsculo e os demais em minúsculos.

**Sintaxe:**

```python
<string>.capitalize()
```

**Exemplo:**

```python
texto = "tExtO a Ser alTeRado"

print(texto.capitalize())
# Texto a ser alterado
```

## 3. upper

Retorna uma nova string com todos os caracteres maiúsculos.

**Sintaxe:**

```python
<string>.upper()
```

**Exemplo:**

```python
texto = "texto para deixar em caixa alta"

print(texto.upper())
# TEXTO PARA DEIXAR EM CAIXA ALTA
```

## 4. lower

Retorna uma nova string com todos os caracteres minúsculos.

**Sintaxe:**

```python
<string>.lower()
```

**Exemplo:**

```python
texto = "TEXTO PARA DEIXAR EM minúsculas"

print(texto.lower())
# texto para deixar em minúsculas
```

## 5. count

O método **count()** é usado para contar quantas vezes uma determinada string aparece em um texto.

**Sintaxe:**

```python
string.count(texto_de_busca)

string.count(texto_de_busca, início)

string.count(texto_de_busca, início, fim)
```

Este método possui três argumentos. O primeiro argumento é obrigatório, e os outros dois argumentos são opcionais. O primeiro argumento contém o valor que precisa ser procurado no texto. O segundo argumento contém a posição de início da busca, e o terceiro argumento contém a posição de fim da busca.

**Exemplo:**

O seguinte script mostra os três usos diferentes do método **count()**. O primeiro método irá procurar a palavra **'é'** na variável **strVal**. O segundo método procura a mesma palavra a partir da posição **20**. O terceiro método procura a mesma palavra dentro do intervalo da posição **50** a **100**.

```python

strVal = 'Python é uma linguagem de programação poderosa. É muito simples de usar. É uma excelente linguagem para iniciantes aprenderem programação.'

print("A palavra 'é' apareceu %d vezes" %(strVal.count("é")))
# A palavra 'é' apareceu 1 vezes

print("A palavra 'é' apareceu %d vezes após a posição 20" %(strVal.count("é", 20)))
# A palavra 'é' apareceu 0 vezes após a posição 20

print("A palavra 'é' apareceu %d vezes dentro do intervalo de 50 a 100" %(strVal.count("é", 50, 100)))
# A palavra 'é' apareceu 0 vezes dentro do intervalo de 50 a 100
```

## 6. find

Retorna a posição/índice da primeira ocorrência de uma substring em uma determinada string. Caso contrário, ele retorna -1.

**Sintaxe:**

```python
find(texto_de_busca)

find(texto_de_busca, posição_inicial)

find(texto_de_busca, posição_inicial, posição_final)
```

Este método pode receber três argumentos, onde o primeiro argumento é obrigatório e os outros dois argumentos são opcionais. O primeiro argumento contém o valor da string que será procurada, o segundo argumento define a posição de início da busca e o terceiro argumento define a posição de fim da busca. Ele retorna a posição do **texto_de_busca** se ele existir na string principal, caso contrário, retorna -1.

**Exemplo:**

Os usos do método **find()** com um argumento, dois argumentos e três argumentos são mostrados no seguinte script. A primeira saída será -1 porque o texto de busca é '**python**' e a variável, **str**, contém a string '**Python**'. A segunda saída retornará uma posição válida porque a palavra '**program**' existe após a posição **10**. A terceira saída retornará uma posição válida porque a palavra '**earn**' existe dentro do intervalo de 0 a 5 da string.

```python
str = 'Aprenda programação em Python'

print(str.find('python'))
# -1

print(str.find('Python'))
# 23

print(str.find('program', 8))
# 8

print(str.find('Python', 0, 5))
# -1

```

## 7. rfind

Em Python, o método `rfind()` é usado para encontrar a última ocorrência de uma substring. Ele funciona de maneira semelhante ao método `find()`, mas começa a busca do final da string em direção ao início. Se a substring for encontrada, o método retorna a posição da última ocorrência. Caso contrário, ele retorna -1.

**Sintaxe:**

```python
string.rfind(substring)

string.rfind(substring, início)

string.rfind(substring, início, fim)

```

**Exemplo:**

```python
texto = "Python é uma linguagem de programação Python."

# Encontrar a última ocorrência de "Python"
posicao = texto.rfind("Python")
print("Posição da última ocorrência de 'Python':", posicao)
# Posição da última ocorrência de 'Python': 38

# Começar a busca a partir da posição 20
posicao = texto.rfind("Python", 20)
print("Posição da última ocorrência de 'Python' a partir da posição 20:", posicao)
# Posição da última ocorrência de 'Python' a partir da posição 20: 38

# Limitar a busca até a posição 25
posicao = texto.rfind("Python", 0, 25)
print("Posição da última ocorrência de 'Python' até a posição 25:", posicao)
# Posição da última ocorrência de 'Python' até a posição 25: 0

```

## 8. startswith

Verifica se uma determinada string começa com um prefixo específico ou não, e retorna verdadeiro ou falso.

**Sintaxe:**

```python
<string>.startswith(substring)
```

**Exemplo:**

```python
texto = "Sobremesa"
texto.startswith("Sobre")
# True
texto.startswith("sobre")
# False
```

## 9. endswith

Verifica se uma determinada string termina com um sufixo específico ou não, e retorna verdadeiro ou falso.

**Sintaxe:**

```python
<string>.endswith(substring)
```

**Exemplo:**

```python
texto = "constitucionalissimamente"
texto.endswith("Mente")
# False
texto.endswith("mente")
# True
```

## 10. index

O método **index()** funciona como o método **find()**, mas há uma única diferença entre esses métodos. Ambos os métodos retornam a posição do texto de busca se a string existir na string principal. Se o texto de busca não existir na string principal, o método **find()** retorna -1, mas o método **index()** gera um **ValueError**.

**Sintaxe:**

```python
<string>.index(texto_de_busca [, início [, fim]])
```

Este método possui três argumentos. O primeiro argumento é obrigatório e contém o texto de busca. Os outros dois argumentos são opcionais e contêm a posição de início e fim da busca.

**Exemplo:**

O método **index()** é usado quatro vezes no seguinte script. Um bloco **try-except** é usado aqui para lidar com o **ValueError**. O método **index()** é usado com um argumento na primeira saída, que buscará a palavra '**powerful**' na variável **strVal**. Em seguida, o método **index()** buscará a palavra '**program**' a partir da posição **10** que existe em **strVal**. Em seguida, o método buscará a palavra '**is**' na posição **5** a **15**. O último método **index()** buscará a palavra '**his**' em **025**, que não existe em **strVal**.

```python
strVal = 'Python é uma linguagem de programação poderosa.'

try:
    print(strVal.index('poderosa'))
		# 38

    print(strVal.index('programação', 10))
		# 26

    print(strVal.index('é', 5, 15))
		# 7

    print(strVal.index('uma', 0, 25))
		# A string de busca não foi encontrada

except ValueError:
    print("A string de busca não foi encontrada")

```

## 11. split

Este método é usado para dividir qualquer dado de string com base em um separador ou delimitador específico. Ele pode receber dois argumentos, ambos são opcionais.

**Sintaxe:**

```python
<string>.split()

<string>.split(separador)

<string>.split(separador, maxsplit=maxsplit)
```

Se este método for usado sem nenhum argumento, o espaço será usado como separador por padrão. Qualquer caractere ou uma lista de caracteres pode ser usado como separador. O segundo argumento opcional é usado para definir o limite de vezes que a string será dividida. Ele retorna uma lista de strings.

**Exemplo:**

```python
s1 = 'string methods in python programming language'.split()
# ['string', 'methods', 'in', 'python']

s2 = 'string methods in python programming language'.split(' ', maxsplit=1)
# ['string', 'methods in python']
```

## 12. rsplit

Assim como o método **split**, o **rsplit** é usado para dividir qualquer dado de string com base em um separador ou delimitador específico. Ele também pode receber dois argumentos, e ambos são opcionais.

**Sintaxe:**

```python
<string>.rsplit()

<string>.rsplit(separador)

<string>.rsplit(separador, maxsplit=maxsplit)
```

**Exemplo:**

```python
s = 'string methods in python'.rsplit()
# ['string', 'methods', 'in', 'python']

s = 'string methods in python'.rsplit(' ', maxsplit=1)
# ['string methods in', 'python']

```

## 13. join

O método **join()** é usado para criar uma nova string combinando outras strings com uma string, lista de strings ou tupla de strings.

**Sintaxe:**

```python
separador.join(iterável)
```

Ele possui apenas um argumento que pode ser uma string, uma lista ou uma tupla, e o **separador** contém o valor da string que será usado para a concatenação.

**Exemplo:**

O método strip() é usado para remover espaços em branco de ambos os lados de uma string.

```python
nomes = ["Alice", "Bob", "Charlie", "David"]

nomes_formatados = ", ".join(nomes)

print("Lista de nomes formatada:", nomes_formatados)
# Lista de nomes formatada: Alice, Bob, Charlie, David
```

## 13. strip

O método **strip()** é usado para remover espaços em branco de ambos os lados de uma string. Este método não aceita nenhum argumento.

**Sintaxe:**

```python
<string>.strip()

<string>.rStrip()
```

**Exemplo:**

```python
texto = "    Texto com espaço em branco no início e no fim.   "

texto.strip()
# "Texto com espaço em branco no início e no fim."
```

## 14. lstrip

 O método **lstrip()** remove o espaço em branco do lado esquerdo.

**Sintaxe:**

```python
<string>.lstrip()
```

**Exemplo:**

```python
texto = "    Texto com espaço em branco no início e no fim.   "

texto.lstrip()
# "Texto com espaço em branco no início e no fim.   "
```

## 15. rstrip

O método **rstrip()** remove o espaço em branco do lado direito da string.

**Sintaxe:**

```python
<string>.rstrip()
```

**Exemplo:**

```python
texto = "    Texto com espaço em branco no início e no fim.   "

texto.rstrip()
# "    Texto com espaço em branco no início e no fim."
```

## 16. removeprefix

O método `removeprefix` em Python é usado para remover um 
prefixo especificado de uma string. Se a string começa com o prefixo, o 
prefixo é removido; caso contrário, a string original é mantida 
inalterada.

**Sintaxe:**

```python
<string>.removeprefix(substring)
```

**Exemplo:**

```python
texto = "Python é ótimo"
resultado = texto.removeprefix("Python é ")
print(resultado)  
# "ótimo"
```

## 17. removesuffix

O método `removesuffix` em Python é utilizado para remover um
 sufixo específico de uma string. Se a string terminar com o sufixo, 
esse sufixo é removido; caso contrário, a string original permanecerá 
inalterada.

**Sintaxe:**

```python
<string>.removesufix(substring)
```

**Exemplo:**

```python
texto = "O inverno está chegando."
resultado = texto.removesuffix(" está chegando.")
print(resultado)  
# "O inverno"
```

## 18. replace

O método **replace()** é usado para substituir uma parte específica de uma cadeia de caracteres por outra cadeia, se a correspondência for encontrada. Ele pode receber três argumentos, sendo dois obrigatórios e um opcional.

**Sintaxe:**

```python
<string>.replace(string_de_busca, string_de_substituição [,limite])
```

O primeiro argumento é a string de busca que você deseja substituir, e o segundo argumento é a string de substituição. O terceiro argumento opcional define o limite para a substituição da string.

**Exemplo:**

No script a seguir, o primeiro **replace** é usado para substituir a palavra '**PHP**' pela palavra '**Java**' no conteúdo da variável **str**. Como a palavra de busca existe na variável **str**, a palavra '**PHP**' será substituída pela palavra '**Java**'. O terceiro argumento do método **replace** é usado no próximo **replace** e ele substituirá apenas a primeira correspondência da palavra de busca.

```python

texto = "Eu gosto de PHP, mas eu gosto mais de Python"

substituicao = texto.replace("PHP", "Java")

print("String original:", texto)
# String original: Eu gosto de PHP, mas eu gosto mais de Python

print("String substituída:", substituicao)
# String substituída: Eu gosto de Java, mas eu gosto mais de Python

substituicao_2 = texto.replace("gosto", "não gosto", 1)

print("\nString original:", texto)
# String original: Eu gosto de PHP, mas eu gosto mais de Python

print("String substituída:", substituicao_2)
# String substituída: Eu não gosto de PHP, mas eu gosto mais de Python
```

## 19. format

O método **format()** é um método essencial em Python para gerar saída formatada. Ele tem muitos usos e pode ser aplicado tanto a dados de tipo string quanto numéricos para gerar uma saída formatada. Como este método pode ser usado para formatação baseada em índice de dados de tipo string é mostrado no exemplo a seguir.

**Sintaxe:**

```python
{}.format(valor)
```

A string e a posição do marcador são definidas dentro das chaves ({}). Ele retorna a string formatada com base na string e nos valores passados na posição do marcador.

**Exemplo:**

Os quatro tipos de formatação são mostrados no script a seguir. No primeiro resultado, o valor do índice {0} é usado. Nenhuma posição é atribuída no segundo resultado. Duas posições sequenciais são atribuídas no terceiro resultado. Três posições não ordenadas são definidas no quarto resultado.

```python
# Exemplo 1: Substituição direta com índice
print("Aprenda a programar em {0}.".format("Python"))
# Aprenda a programar em Python.

# Exemplo 2: Substituição sem especificar índices
print("\nTanto {} quanto {} são linguagens de script".format("Bash", "Python"))
# Tanto Bash quanto Python são linguagens de script

# Exemplo 3: Substituição com índices
print("\nID do estudante: {0}\nNome do estudante: {1}\n".format("00001", "João Ninguém"))
# ID do estudante: 00001
# Nome do estudante: João Ninguém
```

## 20. center

Retorna uma string centralizada em um comprimento especificado. O preenchimento é feito usando o caractere especificado (o padrão é um espaço).

**Sintaxe:**

```python
<string>.center(width [, char])
```

**Exemplo:**

```python
s = 'Python é incrível!'
s = s.center(30, '-')
# ------Python é incrível!------
```

## 21. ljust

Retorna a string justificada à esquerda em uma string de comprimento especificado. O preenchimento é feito usando o caractere especificado (o padrão é um espaço).

**Sintaxe:**

```python
<string>.ljust(width [, char])
```

**Exemplo:**

```python
s = 'Python é incrível!'
s = s.ljust(30, '-')
# Python é incrível!------------
```

## 22. rjust

Retorna a string justificada à direita em uma string de comprimento especificado. O preenchimento é feito usando o caractere especificado (o padrão é um espaço).

**Sintaxe:**

```python
<string>.rjust(width [, char])
```

**Exemplo:**

```python
s = 'Python é incrível!'
s = s.rjust(30, '-')
# ------------Python é incrível!
```

## 23. partition

Em Python, o método de string **partition()** procura por uma substring específica dentro de uma string e divide a string original em uma tupla contendo três elementos.

- O primeiro elemento contém uma parte da string antes da substring especificada.
- O segundo elemento contém a substring especificada.
- O terceiro elemento contém a parte restante após a substring.

**Sintaxe:**

```python
<string>.partition(substring)
```

**Exemplo:**

```python
frase = "O gato persegue o rato no jardim."
substring = "rato"
resultado = frase.partition(substring)
print(resultado)
# ["O gato persegue o ", "rato", " no jardim."]
```

## Conclusão
Em resumo, dominar os métodos de strings em Python é uma habilidade essencial para qualquer programador, pois permite a manipulação eficaz de texto, desempenhando um papel crítico em diversas áreas, desde análise de texto até desenvolvimento web. Conhecer essas ferramentas não apenas melhora a eficiência e a legibilidade do código, mas também abre portas para a criatividade, possibilitando a criação de soluções inovadoras e a resolução de desafios complexos. Portanto, investir tempo no aprendizado e aprimoramento desses métodos é fundamental para se tornar um programador mais competente e versátil.

**Resumo**

| Método | Uso |
| --- | --- |
| len | Conta o número total de caracteres em uma string. |
| capitalize | Converte o primeiro caractere em maiúsculo e os demais em minúsculos. |
| upper | Retorna uma nova string com todos os caracteres em maiúsculo. |
| lower | Retorna uma nova string com todos os caracteres em minúsculo. |
| count | Conta quantas vezes uma string específica aparece na string. |
| find | Retorna a posição da primeira ocorrência de uma substring. |
| rfind | Retorna a posição da última ocorrência de uma substring. |
| startswith | Verifica se a string começa com um prefixo específico. |
| endswith | Verifica se a string termina com um sufixo específico. |
| index | Funciona como o método find(), mas gera um ValueError se não encontrar. |
| split | Divide a string com base em um separador ou delimitador específico. |
| rsplit | Divide a string com base em um separador ou delimitador específico, começando do final. |
| join | Cria uma nova string combinando outras strings com um separador. |
| strip | Remove espaços em branco de ambos os lados da string. |
| lstrip | Remove espaços em branco do lado esquerdo da string. |
| rstrip | Remove espaços em branco do lado direito da string. |
| removeprefix | Remove um prefixo específico de uma string. |
| removesuffix | Remove um sufixo específico de uma string. |
| replace | Substitui uma parte específica de uma string por outra, se a correspondência for encontrada. |
| format | Gera saída formatada com base em índice de dados de tipo string. |
| center | Retorna uma string centralizada em um comprimento especificado. |
| ljust | Retorna a string justificada à esquerda em um comprimento especificado. |
| rjust | Retorna a string justificada à direita em um comprimento especificado. |
| partition | Divide a string em uma tupla contendo três elementos com base em uma substring específica. |
