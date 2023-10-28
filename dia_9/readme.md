## Iniciando reactJS

```
Ao discutir o JSX em relação ao ReactJS, é fundamental entender que o JSX não é uma linguagem separada, mas uma extensão da 
sintaxe do JavaScript. JSX, ou JavaScript XML, é uma extensão de sintaxe que permite escrever marcação XML/HTML diretamente no 
código JavaScript. No contexto do React, JSX é usado para descrever a interface do usuário, permitindo a criação de componentes
de maneira mais intuitiva e legível.

A principal razão para a existência do JSX no React é oferecer uma forma de escrever código que se assemelhe mais à estrutura
da interface do usuário, combinando elementos de marcação com lógica JavaScript. Isso facilita a construção e manutenção de
componentes, pois os desenvolvedores podem escrever código mais semelhante ao HTML, tornando-o mais compreensível e menos
propenso a erros.
```


## State e Props:
#### State:
```
O estado (state) em React refere-se aos dados internos de um componente. É um objeto que representa propriedades do componente que 
podem mudar ao longo do tempo devido a interações do usuário, eventos ou outras ações. Cada componente React pode ter seu próprio 
estado interno.

Para definir o estado de um componente, usa-se a função setState, que é fornecida pelo React. Quando o estado é atualizado com 
setState, o componente é re-renderizado para refletir essas mudanças. O estado é inicializado no método constructor do componente 
e pode ser atualizado por meio do setState.
```
#### Props:
```
Props, abreviação de propriedades, são a principal maneira de passar dados de um componente pai para um componente filho em React.
As props são somente leitura e ajudam a tornar os componentes mais reutilizáveis, permitindo a passagem de dados e configurações.

As props são passadas para um componente como atributos no momento em que são utilizados. Esses valores podem ser acessados
pelo componente filho através do objeto props.
```