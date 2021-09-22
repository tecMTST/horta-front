# horta

  

### O projeto:
 
Esta é a aplicação Frontend para a Horta Comunitária do MTST.


## Iniciando

Para iniciar é necessario que você tenha o Nodejs com Npm instalados. [Download aqui](https://nodejs.org/pt-br/download/)
  
  * Baixe o repositório em seu local: `git clone ...`
  * Acesse a pasta do repositório: `cd horta`
  * Instale as depêndencias: `npm i` ou `npm install`
  * Para iniciar o servidor local: `npm run dev`

ps: o projeto usa o npm como package manager. Não instalar usando yarn


## Scripts

``` bash

# instalar dependências

npm install
  
# iniciar o servidor local com hot reload na porta 8080

npm run dev
  
# criar versão para produção

npm run build
  
# rodar versão de produção localmente (só funciona após o build)

npm run serve

```

  ## Arquitetura
Este projeto usa uma stack moderna.
Abaixo listamos cada ferramenta utilizada e a motivação.
  
  `Preact`: Um framework com praticamente a mesma sintaxe e funcionalidades que o React. A vantagem é que ele exclui algumas coisas nativas ao React (como eventos sinteticos). É extremamente leve, pesando apenas 3kb no bundle final. [Veja mais sobre o Preact aqui](https://preactjs.com/)

`styled-components`: O styled-components é uma ferramenta de CSS-in-JS, que permite escrever os estilos dentro de arquivos javascript. Há algumas vantagens nessa abordagem, entre elas uma melhor arquitetura de código, performance e criação de temas.
