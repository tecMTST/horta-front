## Contribuindo


Este é um guia de como contribuir para o projeto.


[criar um componente](#criar-um-componente)
*  [basico](#basico)
*  [estilos](#estilos)
*  [tema](#tema)
*  [rotas](#rotas)
*  [arquivos estaticos](#estaticos)

[criando um commit](#criar-um-commit)
[abrir um Pull Request](#abrir-pull-request)


## Criar um componente

### Basico

Os componentes serão sempre iniciados com letra maiuscula. A pasta em que o componente estará e o nome da função exportada no arquivo `index.js` devem ser o mesmo. Ex: se a pasta se chamar `Botao` dentro do arquivo `ìndex.js` a função exportada deverá ter o mesmo nome: `export default Botao`

Todo componente da aplicação seguirá a seguinte arquitetura de pastas:

*  `src`

*  `componentes`

*  `SeuComponente`  *(em camel case e sempre iniciando com letra maiuscula)*

*  `index.js`

*  `index.styled.js`  *para estilos de styled-components*

*  `utils.js`  *funções e utilidades que sejam específicas para o componente*

### Estilos
Para manter a qualidade do código vamos dar preferência à unidades de medidas flexivas no lugar das fixas.  Usar porcentagem ou `rem` ao invés `px`.  

Não utlizar cores diretamente no código mas sempre usar cores vindas do tema. Isso garante que a manutenção será muito mais fácil no futuro.

Evitar CSS aninhado com lógica muito complicado. Ex: `.secao .conteudo div .botao #texto`. Dar sempre prefência para o uso de lógica simples e à utilização do styled-components.

### Tema

Para evitar duplicação de código e facilitar a manutenção, utiliamos temas do styled-components. O tema está configurado dentro da pasta `tema/index.js`.

Este arquivo é apenas um objeto de Javascript com uma série de atributos. Cada um está agrupado por sua utlização dentro da aplicação. Por exemplo:
``` bash 
const tema: {
	cores: {
		verde: green,
		azul: blue,
	},
	fontSizes: {
		default: '1rem",
		...
	},
	...
}
```

#### Media queries

O tema tem configurado a utlização de media queries para facilitar o uso de breakpoints padrão. Foi utilizado a mesma nomeclatura que a biblioteca Bootstrap usa.
Tamanhos:
```
	sm:  576px,
	md:  768px,
	lg:  992px,
	xl:  1200px,
	xxl: 1400px,
```

Elas estão configuradas tanto para `min-width` quanto `max-width`.
Tamanho acompanhado do sufixo `Up` é equivalente a `min-width` 
Tamanho acompanhado do sufixo `Down` é equivalente a `max-width` 
Exemplo: `smUp = @media (min-width: 576px)`
`xlDown = @media (max-width: 1200px)`

Como usar as media queries no seu componente: 
```bash 
	const Botao = styled.button`
		padding: .5rem;
		font-size: ${({ theme }) => theme.fontSizes.small};
		${({ theme }) => theme.mediaqueries.lgUp {
			// @media (min-width: 992px)
			paddig: 1rem;
			font-size: ${({ theme }) => theme.fontSizes.body}
		} 
	`
``` 

### Rotas

As rotas de todos os arquivos estão na pasta `routes`. O Preact faz o [code-splitting](https://developer.mozilla.org/en-US/docs/Glossary/Code_splitting) nesta página, por isso é importante mantê-lá desta forma.
  

Cada rota é configurada dentro do arquivo `App.js`. A biblioteca utilizada é a `preact-router`. Documentação [aqui](https://github.com/preactjs/preact-router)

A estrutura de pastas para as páginas é a mesma que dos componentes.
  

#### Utilizando o tema

Para consumir o tema dentro de um componente use o padrão à seguir:

``` bash

import styled from 'styled-components

const Botao = styled.button`

background-color: $({theme}) => theme.colors.primary};

font-size: $({theme}) => theme.fontSizes.body};

`

```

### Arquivos estáticos
Arquivos de imagens como jpg, favicon.ico e outros do tipo devem ir na pasta `src/assets`

Para ícones utilize SVG e crie um componente para ele. 

## Criar um commit
Para padronizar os commits e suas mensagens vamos utilizar os [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

Para o nosso uso, podemos simplificado à apenas a utilização dos prefixos e aplicá-los ao nosso uso. Os principais prefixos são: 

* `feat`: toda nova funcionalidade. Ex: `feat: adiciona novo botão`
* `chore`: alguma alteração no código que não impacte o usuário final. Ex: `chore: refatoração do componente Botao`
* `fix`: correção de bugs. Ex: `fix: corrige bug de click no botão`

## Abrir Pull Request
Definir metodologia de git. Gitflow, talvez?
