---
title: "10 métodos de strings em JavaScript que você deveria saber"
description: Descubra os 10 métodos de strings essenciais para se destacar como um desenvolvedor Javascript. Aprimore suas habilidades agora!
pubDate: '2023-10-27'
cover: https://ik.imagekit.io/josafa/OG%20Images/java-collections?updatedAt=1694788101302
citations: [
    {
        author: 'Frugence Fidel',
        title: '10 JavaScript string methods you should know',
        url: 'https://dev.to/frugencefidel/10-javascript-string-methods-you-should-know-4l76'
    },
	{
		author: 'W3 Schools',
		title: 'JavaScript String Methods',
		url: 'https://www.w3schools.com/js/js_string_methods.asp'
	}
]
tags: 
    - javascript
---
As strings têm um papel crucial na programação em JavaScript, sendo empregadas para o armazenamento e a manipulação de texto. Neste artigo, você verá 10 métodos essenciais de strings em JavaScript que você deve conhecer para trabalhar com eficiência.

## 1. startsWith()

O método `startsWith()` verifica se uma string começa com o valor especificado. Ele retorna true se a string começar com o valor e false caso contrário.

**Sintaxe:**

```jsx
string.startsWith(searchString[, position])

```

**Exemplo:**

```jsx
const texto = "Olá, mundo!";
const começaComOla = texto.startsWith("Olá");
console.log(começaComOla); // true

```

## 2. endsWith()

O método `endsWith()` verifica se uma string termina com o valor especificado. Ele retorna true se a string terminar com o valor e false caso contrário.

**Sintaxe:**

```jsx
string.endsWith(searchString[, length])

```

**Exemplo:**

```jsx
const texto = "Olá, mundo!";
const terminaComMundo = texto.endsWith("mundo!");
console.log(terminaComMundo); // true

```

## 3. includes()

O método `includes()` verifica se uma string contém um valor especificado. Ele retorna true se a string contiver o valor e false caso contrário.

**Sintaxe:**

```jsx
string.includes(searchString[, position])

```

**Exemplo:**

```jsx
const texto = "Olá, mundo!";
const contemOla = texto.includes("Olá");
console.log(contemOla); // true

```

## 4. slice()

O método `slice()` é uma função de manipulação de strings em JavaScript que permite extrair uma parte específica de uma string e retorná-la como uma nova string.

**Sintaxe:**

```jsx
string.slice(beginIndex[, endIndex])

```

**Exemplo:**

```jsx
const texto = "Olá, mundo!";
const parte = texto.slice(5, 10);
console.log(parte); // "mundo"

```

## 5. toUpperCase()

O método `toUpperCase()` converte todos os caracteres de uma string em maiúsculas e retorna a nova string.

**Sintaxe:**

```jsx
string.toUpperCase()

```

**Exemplo:**

```jsx
const texto = "Olá, mundo!";
const maiusculas = texto.toUpperCase();
console.log(maiusculas); // "OLÁ, MUNDO!"

```

## 6. toLowerCase()

O método `toLowerCase()` converte todos os caracteres de uma string em minúsculas e retorna a nova string.

**Sintaxe:**

```jsx
string.toLowerCase()

```

**Exemplo:**

```jsx
const texto = "Olá, mundo!";
const minusculas = texto.toLowerCase();
console.log(minusculas); // "olá, mundo!"

```

## 7. charAt()

O método `charAt()` retorna o caractere na posição especificada de uma string.

**Sintaxe:**

```jsx
string.charAt(index)

```

**Exemplo:**

```jsx
const texto = "Olá, mundo!";
const caractere = texto.charAt(5);
console.log(caractere); // "m"

```

## 8. split()

O método `split()` divide uma string em um array de substrings com base em um separador especificado.

**Sintaxe:**

```jsx
string.split(separator[, limit])

```

**Exemplo:**

```jsx
const texto = "Olá, mundo!";
const palavras = texto.split(" ");
console.log(palavras); // ["Olá,", "mundo!"]

```

## 9. replace()

O método `replace()` substitui a primeira ocorrência de um valor por outro em uma string.

**Sintaxe:**

```jsx
string.replace(searchValue, replaceValue)

```

**Exemplo:**

```jsx
const texto = "Olá, mundo!";
const novoTexto = texto.replace("mundo", "amigo");
console.log(novoTexto); // "Olá, amigo!"

```

## 10. repeat()

O método `repeat()` cria e retorna uma nova string com um número especificado de cópias da string original.

**Sintaxe:**

```jsx
string.repeat(count)

```

**Exemplo:**

```jsx
const palavra = "Ora ";
const repeticoes = palavra.repeat(3);
console.log(repeticoes); // "Ora Ora Ora "

```

Dominar esses métodos de strings em JavaScript é fundamental para lidar com texto de forma eficaz e realizar diversas operações de manipulação de strings em seus projetos de desenvolvimento. Cada um desses métodos oferece funcionalidades específicas que podem tornar seu código mais eficiente e legível.