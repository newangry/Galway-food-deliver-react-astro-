---
title: "Java Collections: Saiba quando usar Set, Map, List ou Queue."
description: Descubra quando usar Set, Map, List ou Queue em Java. Aprenda a otimizar sua estrutura de dados para atender às necessidades específicas do seu projeto.
pubDate: '2023-09-12'
cover: https://ik.imagekit.io/josafa/OG%20Images/java-collections?updatedAt=1694788101302
citations: [
    {
        author: 'Carlos Araújo - DevMedia',
        title: 'Java Collections: Como utilizar Collections.',
        url: 'https://www.devmedia.com.br/java-collections-como-utilizar-collections/18450'
    },
    {
        author: 'Baeldung',
        title: 'Choosing the Right Java Collection.',
        url: 'https://www.baeldung.com/java-choose-list-set-queue-map'
    },
    {
        author: 'Paulo Feofiloff - Instituto de Matemática e Estatística da USP',
        title: 'O que é análise amortizada de algoritmos?',
        url: 'https://www.ime.usp.br/~pf/analise_de_algoritmos/aulas/amortized.html'
    }
]
tags: 
    - java
---
O aproveitamento das interfaces oferecidas pelo Framework de Coleções impede que o desenvolvedor gaste energia na criação de suas próprias estruturas, permitindo-lhe direcionar seus esforços para áreas cruciais do desenvolvimento. Essas estruturas de dados e algoritmos de elevada qualidade e desempenho aprimoram a excelência e a eficiência das aplicações, enquanto também fomentam a reutilização de software e possibilitam a compatibilidade entre APIs que não estão intrinsecamente relacionadas.

## O que é o Collections Framework?

O Collections Framework é uma estrutura bem definida composta por um conjunto de interfaces e classes que servem para representar e tratar grupos de dados como uma única entidade, que é comumente chamada de coleção. Dentro do Collections Framework, encontramos os seguintes elementos:

- **Interfaces**: Permitem a manipulação das coleções seguindo o princípio de "Programar para interfaces e não para implementações", o que significa que o acesso aos objetos deve ser feito apenas por meio dos métodos definidos nessas interfaces.
- **Implementações**: Referem-se às implementações concretas das interfaces. Estas são as classes que fornecem uma implementação real das interfaces e são usadas para criar instâncias específicas de coleções.
- **Algoritmos**: São métodos que executam diversas operações sobre os objetos contidos nas coleções, incluindo operações como busca e ordenação.

## Interfaces

- **Collection**: Encontra-se no topo da hierarquia. Não existem implementações diretas desta interface, mas ela define as operações fundamentais para as coleções, como adição, remoção, esvaziamento, entre outras.
- **Set**: Esta interface define uma coleção que não permite a inclusão de elementos duplicados. A interface SortedSet, que herda de Set, permite a ordenação natural dos elementos, como por exemplo, em ordem alfabética.
- **List**: Define uma coleção ordenada, onde elementos duplicados são permitidos. Esta interface é a mais apropriada quando é necessária a realização de acesso aleatório aos elementos, usando seus índices.
- **Queue**: É um tipo de coleção que mantém uma lista de prioridades, onde a ordem dos elementos é determinada pela implementação de Comparable ou Comparator. Através da interface Queue, é possível criar filas e pilhas.
- **Map**: Cada elemento contém, na verdade, dois objetos: uma chave e um valor. Valores podem ser duplicados, mas chaves não podem. A interface SortedMap estende Map e permite a classificação ascendente das chaves. Um exemplo de aplicação dessa interface é a classe Properties, que é utilizada para armazenar configurações e propriedades de um sistema.

## Implementações

| Interfaces | Tabela de Espalhamento | Array Redimensionável | Árvore | Lista Ligada | Tabela de Espalhamento + Lista Ligada |
| --- | --- | --- | --- | --- | --- |
| Set | HashSet |  | TreeSet |  | LinkedHashSet |
| List |  | ArrayList |  | LinkedList |  |
| Queue |  |  |  |  |  |
| Map | HashMap |  | TreeMap |  | LinkedHashMap |
- **ArrayList**: Funciona como um array que pode crescer em tamanho. A busca por um elemento é rápida, mas a inserção e a exclusão de elementos são mais lentas e proporcionais ao tamanho da estrutura. É a escolha ideal quando o acesso rápido aos elementos é prioritário. Por exemplo, ao criar um catálogo de sua biblioteca pessoal, onde cada livro recebe um número sequencial para acesso.
- **LinkedList**: Implementa uma lista ligada, em que cada nó contém dados e uma referência para o próximo nó. Ao contrário do ArrayList, a busca é mais lenta, mas as inserções e exclusões são rápidas. Portanto, prefira LinkedList quando houver a necessidade frequente de inserir e excluir itens, como ao gerenciar compras mensais de supermercado.
- **HashSet**: Oferece acesso rápido aos dados, mas não garante que eles estejam ordenados. É a escolha adequada quando a solução requer elementos únicos, e a ordem não é relevante. Por exemplo, ao criar um catálogo de suas músicas.
- **TreeSet**: Os dados são ordenados, mas o acesso é mais lento que no HashSet. Use TreeSet quando for necessário um conjunto de elementos únicos em ordem natural. É recomendado para as mesmas aplicações do HashSet, com a vantagem da ordenação natural.
- **LinkedHashSet**: Derivado do HashSet, mantém uma lista duplamente ligada de seus elementos. Os elementos são iterados na ordem de inserção ou na ordem em que foram acessados na última iteração. É útil para registrar a chegada de corredores em uma maratona.
- **HashMap**: Baseado em tabela de espalhamento, permite chaves e valores nulos. Não garante ordenação dos dados. Escolha quando a ordenação não é relevante e é necessário um identificador, como o ISBN em um catálogo de biblioteca pessoal.
- **TreeMap**: Implementa SortedMap e garante a ordenação ascendente das chaves. Pode especificar uma ordem personalizada. Use quando precisar de um mapa ordenado. Similar ao HashMap, mas com menor desempenho.
- **LinkedHashMap**: Mantém uma lista duplamente ligada de elementos, com iteração na ordem de inserção das chaves. Útil quando a ordem de inserção é importante, como registrar corredores em uma maratona.

Todas essas implementações possuem os métodos definidos em suas interfaces, aceitam elementos nulos e, nos mapas, tanto chaves quanto valores podem ser nulos. Não são seguras para uso concorrente e são serializáveis, o que permite salvar seus estados e suportam o método clone(), que cria cópias de objetos.

Filas são usadas quando é necessário *LIFO*, *FIFO* ou remoção por semântica de prioridade, e, finalmente, mapas são usados quando a associação de chaves e valores é necessária.

### Lists

Vamos começar com uma tabela de comparação de listas. As operações comuns para listas são adicionar e remover elementos, acessar um elemento pelo índice, percorrer os elementos e encontrar um elemento:

| Tabela de Comparação de Listas | Adicionar/Remover Elemento no Início | Adicionar/Remover Elemento no Meio | Adicionar/Remover Elemento no Fim | Obter o i-ésimo Elemento (acesso aleatório) | Encontrar Elemento | Ordem de Traversal |
| --- | --- | --- | --- | --- | --- | --- |
| ArrayList | O(n) | O(n) | O(1) | O(1) | O(n), O(log(n)) se ordenado | como inserido |
| LinkedList | O(1) | O(1) | O(1) | O(n) | O(n) | como inserido |

Como podemos ver, *ArrayList* é bom para adicionar e remover elementos no final, bem como ter acesso aleatório aos elementos. Por outro lado, é ruim para adicionar e remover elementos em posições arbitrárias. Enquanto isso, *LinkedList* é bom para adicionar e remover elementos em qualquer posição. No entanto, não suporta acesso aleatório verdadeiro *O(1)*. Portanto, em relação a listas, a escolha padrão é *ArrayList* até que precisemos de adição e remoção rápida de elementos em qualquer posição.

### Sets

Para conjuntos, estamos interessados em adicionar e remover elementos, percorrer elementos e encontrar um elemento:

| Tabela de comparação de conjuntos | Adicionar elemento | Remover elemento | Encontrar elemento | Ordem de travessia |
| --- | --- | --- | --- | --- |
| HashSet | amortizado O(1) | amortizado O(1) | O(1) | aleatória, espalhada pela função hash |
| LinkedHashSet | amortizado O(1) | amortizado O(1) | O(1) | como inserido |
| TreeSet | O(log(n)) | O(log(n)) | O(log(n)) | ordenada, de acordo com o critério de comparação dos elementos |
| EnumSet | O(1) | O(1) | O(1) | de acordo com a ordem de definição dos valores enum |

Como podemos ver, a escolha padrão é a coleção *HashSet*, pois é muito rápida para todas as operações que suporta. Além disso, se a ordem de inserção dos elementos também importar, optamos pelo *LinkedHashSet*. Basicamente, é uma extensão do *HashSet*, que mantém o controle da ordem de inserção dos elementos usando uma estrutura de lista vinculada internamente.

Se os elementos precisarem ser classificados e a ordem classificada precisar ser preservada ao adicionar e remover elementos, então optamos pelo *TreeSet*.

Se os elementos do conjunto forem apenas valores de enumeração de um único tipo de enumeração, então a escolha mais sábia é o *EnumSet*.

### Queue

As filas podem ser divididas em dois grupos:

1. *LinkedList*, *ArrayDeque* - Implementações da interface *Queue* podem atuar como pilha, fila e estruturas de dados de desenfileiramento. Geralmente, o *ArrayDeque* é mais rápido do que o *LinkedList*. Portanto, é a escolha padrão.
2. *PriorityQueue - Implementação de fila* apoiada pela estrutura de dados de heap binário. Usado para recuperação rápida (*O(1)*) de elementos com a maior prioridade. Adição e remoção funcionam em tempo *O(log(n))*.

### Maps

Da mesma forma que para conjuntos, consideramos as operações de adição e remoção de elementos, a travessia de elementos e a busca de um elemento para mapas:

| Tabela de Comparação de Mapas | Adicionar elemento | Remover elemento | Encontrar elemento | Ordem de travessia |
| --- | --- | --- | --- | --- |
| HashMap | amortizado O(1) | amortizado O(1) | O(1) | aleatório, espalhado pela função de hash |
| LinkedHashMap | amortizado O(1) | amortizado O(1) | O(1) | conforme inserido |
| TreeMap | O(log(n)) | O(log(n)) | O(log(n)) | ordenado, de acordo com o critério de comparação dos elementos |
| EnumMap | O(1) | O(1) | O(1) | de acordo com a ordem de definição dos valores de enumeração |

A lógica de seleção para mapas é semelhante à lógica de seleção para conjuntos: usamos o *HashMap* por padrão, o *LinkedHashMap* se a ordem de inserção também for importante, o *TreeMap* para classificação e o *EnumMap* quando as chaves pertencem a valores de um tipo de enumeração específico.

Por fim, existem duas implementações da interface *Map* que têm aplicações muito específicas: *IdentityHashMap* e *WeakHashMap*.
