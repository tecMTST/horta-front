<h1 align="center">Horta Comunitária</h1>

<div align="center" >Criado usando <strong>create-react-app</strong> com o template <strong>cra-template-rb</strong>, com algumas alterações para simplificar o desenvolvimento.
<br/>
<br/>
<p align="center" >Tech stack do projeto inclui: </p>
<p><strong>NodeJS, React, TypeScript, React-Query, MaterialUI, Jest</strong></p>
</div>

---

## Pré-Requisitos

<div>
  <li>Instalar Node.JS</li>
  <li>Clonar o repositorio (branch: <strong style="color:red;">ini-cra-rb</strong>)</li>
  <li>Abrir a pasta do repositório no visual studio code</li>
  <li>No terminal, rodar <code>yarn install</code></li>
</div>
<br/>

## Como rodar o projeto localmente

<div>
  <li>No terminal, rodar <code>yarn start</code></li>
  <li>Abrir no seu navegador http://localhost:3000</li>
</div>
<br/>

> Devido ao CORS habilitado no servidor, você precisa inicializar seu navegador (Chrome) com a flag _-disable-web-security_ > <br/>
> O debug do VS Code com chrome já está configurado com a flag.
> <br/>

## Como adicionar uma nova página

<div>
  <li>Adicionar um novo sub-endereço em <code>./src/utils/routes.ts</code></li>
  <li>Adicionar uma nova rota em <code>./src/app/index.tsx</code></li>
  <li>Adicionar uma nova pasta em <code>./src/app/pages/</code> seguindo o formato estabelecido</li>
</div>
<br/>

## Como criar um componente visual

<div>
  <li>Adicionar uma nova pasta em <code>./src/app/components/</code> seguindo o formato estabelecido</li>
  <li>Utilize o método de styled-components para modificações, para isso:
  <ul>No topo do arquivo <code>./index.tsx</code> importe <code>import { styled } from '@mui/material'</code></ul>
</div>
<br/>

## Como criar um componente de dados

<br/>

## Como rodar os testes

<br/>

## Processo de deploy

<br/>

## Perguntas & Problemas Frequentes

<br/>

## License

MIT
