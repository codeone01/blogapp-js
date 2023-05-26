<p align="center">
 <img width="100px" src="https://res.cloudinary.com/anuraghazra/image/upload/v1594908242/logo_ccswme.svg" align="center" alt="GitHub Readme Stats" />
 <h2 align="center">GitHub Blog-app Express MongoDB</h2>
 <p align="center">Crie um Blog app Completo com Node.js, Express, MongoDB, Bootstrap e Handlebars! Utilizei o Windows com Vscode.</p>
 <p align="center">Caso tenha gostado e ajudado considere dar uma ⭐, Obrigado! </p>
</p>
  <p align="center">
    <a href="https://github.com/codeone01/blogapp-js/actions">
      <img alt="Testes aprovados" src="https://github.com/codeone01/blogapp-js/workflows/Test/badge.svg" />
    </a>
    <a href="https://codecov.io/gh/code/blogapp-js">
      <img src="https://codecov.io/gh/codeone01/blogapp-js/branch/main/graph/badge.svg" />
    </a>
    <a href="https://github.com/anuraghazra/github-readme-stats/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/codeone01/blogapp-js?color=0088ff" />
    </a>
    <a href="https://github.com/anuraghazra/github-readme-stats/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/codeone01/blogapp-js?color=0088ff" />
    </a>
    <br />
    <br />
    <a href="https://a.paddle.com/v2/click/16413/119403?link=1227">
      <img src="https://img.shields.io/badge/Apoiado%20por-VSCode%20Power%20User%20%E2%86%92-gray.svg?colorA=655BE1&colorB=4F44D6&style=for-the-badge"/>
    </a>
    <a href="https://a.paddle.com/v2/click/16413/119403?link=2345">
      <img src="https://img.shields.io/badge/Apoiado%20por-Node%20Cli.com%20%E2%86%92-gray.svg?colorA=61c265&colorB=4CAF50&style=for-the-badge"/>
    </a>
  </p>

  <p align="center">
    <a href="#demonstração">Ver demonstração</a>
    ·
    <a href="https://github.com/codeone01/blogapp-js/issues/new/choose">Reportar erros</a>
    ·
    <a href="https://github.com/codeone01/blogapp-js/issues/new/choose">Solicitar recursos</a>
  </p>
  <p align="center">
    <a href="/docs/readme_pt-BR.md">Português Brasileiro</a>
  </p>
</p>
<p align="center">Gostou do projeto? Por favor considere <a href="https://www.paypal.me/anuraghazra">fazer uma doação</a> para ajudar a melhorá-lo!

# Características

- [Árvore pastas e arquivos](#árvore-pastas-arquivos-completo)
- [Instalação](#instalação)
- [MongoDB](#mongo-db)
- [Bootstrap](#bootstrap)
- [handlebars](#handlebars)
- [Admin](#admin)
- [Categoria CRUD](#categoria-crud)
- [Postagem CRUD](#postagem-crud)
- [usuário CRUD](#usuario-crud)
- [Middlewares](#middlewares)
- [Erros](#erros)
- [Autenticação](#autenticação)
- [Deploy](#deploy)
- [Todos os comandos para instalação](#Todos-os-comandos-para-instalação)
- [Sugestão de melhoras](#sugestão-de-melhoras)

#### Árvore pastas e arquivos
Blogapp
  <br>
 ├───node_modules
 <br>
 ├───config
  <br>
 │	        │
 <br>
 │	         auth.js
  <br>
 │          db.js
  <br>
 ├───helpers
  <br>
 │	        │
  <br>
 │	         eAdmin.js
  <br>
 │    
 ├───models
 <br> 
 │	        │
 <br> 
 │	         Categorias.js
 <br> 
 │          Postagem.js
 <br> 
 │          Usuario.js
  <br>
 ├───routes
  <br>
 │	       │
  <br>
 │	        admin.js
  <br>
 │         usuario.js
 <br>
 ├───public
  <br>
 │ 	└───css
  <br>
 │		      │
 <br> 
 │		       arquivos-bootstrap.css
 <br>
 │ 	└───img
 <br>
 │ 	└───js
 <br>
 │		     │
 <br>
 │		      arquivos-bootstrap.js
 <br>
 ├───views
 <br>
 │ 	└───admin
 <br>
 │	         │
 <br>
 │	          index.handlebars
 <br>
 │	          categorias.handlebars 
 <br>
 │	          addcategorias.handlebars 
 <br>
 │	          editcategorias.handlebars
 <br>
 │	          postagens.handlebars 
 <br>
 │	          addpostagens.handlebars 
 <br>
 │	          editpostagens.handlebars
 <br>
 │ 	└───categorias
 <br>
 │	              │
 <br>
 │	               index.handlebars
 <br>
 │	               postagens.handlebars
 <br>
 │ 	└───posatagem
 <br>
 │	             │
 <br>
 │	              index.handlebars
 <br>
 │ 	└───usuarios
 <br>
 │	            │
 <br>
 │	             login.handlebars
 <br>
 │	             registro.handlebars 
 <br>
 │ 	└───layouts
 <br>
 │	           │
 <br>
 │	            main.handlebars
 <br>
 │ 	└───partials
 <br>
 │	            │
 <br>
 │	             _msg.handlebars
 <br>
 │	             _navbar.handlebars
 <br>
 .env
 <br>
 .gitignore
 <br>
 app.js
 <br>
 package-lock.json
 <br>
 package.json
 
 
 
# Instalação

Caso tenha feito o Fork ou baixado os arquivos, como o projeto é em Node.js é necessário tê-lo insatalado caso não tenha faça o download no [site](https://nodejs.org/en/download). Para o passo a passo de installação recomendo esse [artigo](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac). 
 E para gerenciar os pacotes usaremos npm use o comando a baixo no cmd e o [link](https://docs.npmjs.com/about-npm-versions) para mais informações.
 ```md
npm install -g npm
```
 Agora seguindo instale os pacotes e módulos usados na aplicação:

Instale o Express

```md
npm install —-save express
```
 
 Instale o express-handlebars

```md
npm install --save express-handlebars
```
Instale o Mongoose
 Antes de instalar os pacotes mongoose terá que instalar o MongoDB no computador encontralar o download nesse [link](https://www.mongodb.com/try/download/community)

```md
npm install --save mongoose
```

 # Configurando Express e Handlebars
 O esqueleto inicial do app no arquivo app.js:
 
```jsx
// carregando módulos
    const express = require('express')
    const handlebars = require('express-handlebars')
    const app = express()
  //const mongoose = require('mongoose')


// Configurações
    // Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
// Rotas


// Outros
const PORT = 8081
app.listen(PORT, ()=>{
    console.log('SERVIDOR ON! ')
})
```
No arquivo main.handlebars:
 
 ```jsx
  <!DOCTYPE html>
 <html lang="pt-br">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Blog NodeJS</title>
 </head>
 <body>
     {{{body}}}
 </body>
 </html>
 ```
 
 Na pasta routes, no arquivo admin.js:
 
```jsx
 const express = require('express')
 const router = express.Router()


 router.get('/',(req,res) => {
     res.send('Página principal do painel do ADM')
 })


 router.get('/posts',(req,res) => {
     res.send('Página de posts')
 })


 router.get('/categoria',(req,res) => {
     res.send('Página de categorias')
 })
 module.exports = router
```
 E para chamar a rota admin criada, adicione a linha a seguir no app.js:
 
 ```jsx
 // carregando módulos
 const admin = require('./routes/admin')
 
  // Rotas
 app.use('/admin', admin)
```
 Agora pode rodar no terminal o comando:
 
 ```shell
 nodemon app.js
 ```
 Abra no navegador no link http://localhost:8081/admin/posts
 
### Bootstrap
 
 Para instalar os arquivos do Bootstrap baixe no site oficial [aqui](https://getbootstrap.com/docs/5.0/getting-started/download/)
 Após o download, extraia os arquivos e copie a pasta css e js para a pasta public. Linkando essas pastas ao nosso app, adicione as linhas.
 
  ```jsx
 // carregando módulos
 const path = require('path')
 
  // Configuração
 app.use(express.static(path.join(__dirname,"public")))
```


### Todos os comandos para instalação

```shell
npm install —-save sequelize
```

```shell
npm install –-save mongoose
```
```shell
npm install --save express-session
```
```shell
npm install --save connect-flash
```
```shell
npm install --save bcryptjs
```
```shell
npm install --save passport
```

```shell
npm install --save passport-local
```

```shell
npm init
```

```shell
npm install --save dotenv
```
#### Crie o arquivo .env :
 
```md
MONGO_URI = ''
MONGO_LOCAL_URI = 'mongodb://127.0.0.1:27017/<nome-do-banco-dados>'
SESSION_SECRET = '<crie-uma-senha>'
```



