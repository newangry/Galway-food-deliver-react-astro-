---
title: 18 Métodos de Arrays em JavaScript que Você Deveria Saber
description: Descubra os 18 métodos de arrays em JavaScript que todo desenvolvedor deve conhecer para escrever códigos eficientes e limpos.
pubDate: 2024-07-07
citations: [
    {
        author: Angela Wong,
        title: 10 Important JavaScript Array Methods You Must Know,
        url: https://javascript.plainenglish.io/10-important-javascript-array-methods-you-must-know-bd791cbd6e43
    },
    {
        author: Nusrat Jahan,
        title: Lists of Top 10 JavaScript array methods a beginner Js developer should know,
        url: https://medium.com/weekly-webtips/top-10-javascript-array-methods-all-should-know-253721609187
    }
]
tags: 
    - javascript
---

Os arrays são uma parte essencial da programação em JavaScript, proporcionando uma maneira poderosa de armazenar e manipular coleções de dados. Neste artigo, vamos explorar dezoito métodos fundamentais de arrays que todo programador JavaScript deveria conhecer para escrever código mais eficiente e claro.

## 1. Push

O método `arr.push(..element)` adiciona um novo elemento ao final de um array e retorna o novo comprimento do array. Este método altera o array original.

**Sintaxe:**

```js
arr.push(element1, element2, …)

```

**Exemplo:**

```js
let arr = [1, 2, 3];
arr.push(4); // arr agora é [1, 2, 3, 4]

```

## 2. Pop

O método `arr.pop()` remove o último elemento de um array e retorna o elemento removido. Este método também altera o array original e seu comprimento.

**Sintaxe:**

```js
arr.pop()

```

**Exemplo:**

```js
let arr = [1, 2, 3, 4];
arr.pop(); // arr agora é [1, 2, 3]

```

## 3. Shift

O método `arr.shift()` remove o primeiro elemento de um array e retorna o elemento removido. Este método também altera o comprimento do array original.

**Sintaxe:**

```js
arr.shift()

```

**Exemplo:**

```js
let arr = [1, 2, 3, 4];
arr.shift(); // arr agora é [2, 3, 4]

```

## 4. Unshift

O método `arr.unshift(elements)` adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array.

**Sintaxe:**

```js
arr.unshift(item1, item2, …)

```

**Exemplo:**

```js
let arr = [2, 3, 4];
arr.unshift(1); // arr agora é [1, 2, 3, 4]

```

## 5. Splice

O método `arr.splice()` modifica o array original removendo, substituindo ou adicionando elementos.

**Sintaxe:**

```js
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

```

**Exemplo:**

```js
let arr = [1, 2, 3, 4];
arr.splice(1, 1); // arr agora é [1, 3, 4]

```

## 6. Slice

O método `arr.slice()` seleciona uma parte de um array e retorna um novo array com os itens copiados do índice de início até o fim. O array original não é alterado.

**Sintaxe:**

```js
arr.slice(start, end)

```

**Exemplo:**

```js
let arr = [1, 2, 3, 4];
let newArr = arr.slice(1, 3); // newArr é [2, 3]

```

## 7. Includes

O método `arr.includes(item, index)` verifica se o item está presente no array a partir do índice fornecido e retorna `true` se encontrado, caso contrário, retorna `false`.

**Sintaxe:**

```js
arr.includes(item, index)

```

**Exemplo:**

```js
let arr = [1, 2, 3, 4];
arr.includes(3); // true

```

## 8. forEach

O método `arr.forEach()` executa uma função fornecida uma vez para cada elemento do array.

**Sintaxe:**

```js
arr.forEach(callback)

```

**Exemplo:**

```js
let arr = [1, 2, 3, 4];
arr.forEach(num => console.log(num)); // imprime 1, 2, 3, 4

```

## 9. Join

O método `arr.join(separator)` cria uma string com todos os elementos de um array concatenados, separados por um delimitador específico.

**Sintaxe:**

```js
arr.join(separator)

```

**Exemplo:**

```js
let arr = [1, 2, 3, 4];
arr.join('-'); // "1-2-3-4"

```

## 10. toString

O método `arr.toString()` converte um array em uma string e retorna o resultado.

**Sintaxe:**

```js
arr.toString()

```

**Exemplo:**

```js
let arr = [1, 2, 3, 4];
arr.toString(); // "1,2,3,4"

```

## 11. Map

O método map() chama uma função callback em cada elemento do array original e retorna um novo array com os resultados. Este é um método não mutante.

**Sintaxe:**

```js
  arr.map(function callback(currentValue, index, array) {
    // Retorna um novo valor
  })

```

**Exemplo:**

```javascript

let arr = [1, 2, 3, 4];
let doubled = arr.map(num => num * 2); // [2, 4, 6, 8]
```
## 12. Reduce

O método reduce() aplica uma função a um acumulador e cada elemento do array (da esquerda para a direita) para reduzir a um único valor.

**Sintaxe:**

```js
arr.reduce(function callback(accumulator, currentValue, index, array) {
  // Retorna o valor acumulado
}, initialValue)

```
**Exemplo:**
```js
let arr = [1, 2, 3, 4];
let sum = arr.reduce((acc, num) => acc + num, 0); // 10

```

## 13. Filter

O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

**Sintaxe:**
```javascript
arr.filter(function callback(element, index, array) {
  // Retorna true para manter o elemento
})

```
**Exemplo:**
```javascript
let arr = [1, 2, 3, 4];
let even = arr.filter(num => num % 2 === 0); // [2, 4]
```

## 14. Sort

O método sort() organiza os elementos de um array em ordem crescente ou conforme a função de comparação fornecida.

**Sintaxe:**
```javascript
arr.sort([compareFunction])
```

**Exemplo:**
```javascript
let arr = [4, 2, 3, 1];
arr.sort(); // [1, 2, 3, 4]
```

## 15. Find

O método find() retorna o primeiro elemento no array que satisfaz a função de teste fornecida.

**Sintaxe:**

```javascript
arr.find(function callback(element, index, array) {
  // Retorna true para encontrar o elemento
})
```
**Exemplo:**
```javascript
let arr = [1, 2, 3, 4];
let found = arr.find(num => num > 2); // 3
```

## 16. IndexOf

O método indexOf() retorna o primeiro índice no qual um dado elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente.

**Sintaxe:**

```javascript
arr.indexOf(searchElement, fromIndex)
```

**Exemplo:**
```javascript
let arr = [1, 2, 3, 4];
let index = arr.indexOf(3); // 2
```

## 17. Some

O método some() testa se ao menos um elemento no array passa na função de teste implementada.

**Sintaxe:**

```javascript
arr.some(function callback(element, index, array) {
  // Retorna true se pelo menos um elemento passar no teste
})
```

**Exemplo:**
```javascript
let arr = [1, 2, 3, 4];
let hasEven = arr.some(num => num % 2 === 0); // true
```

## 18. Concat

O método concat() é usado para mesclar dois ou mais arrays.

**Sintaxe:**
```javascript
arr.concat(array2, array3, ..., arrayN)

```

**Exemplo:**
```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = arr1.concat(arr2); // [1, 2, 3, 4]
```

Esses métodos são fundamentais para trabalhar com arrays em JavaScript. Dominar esses métodos permitirá que você manipule dados de forma mais eficiente e escreva códigos mais limpos e legíveis. Feliz codificação!
