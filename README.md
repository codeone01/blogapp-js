<p align="center">
 <img width="100px" src="https://res.cloudinary.com/anuraghazra/image/upload/v1594908242/logo_ccswme.svg" align="center" alt="GitHub Readme Stats" />
 <h2 align="center">GitHub Blog-app Express MongoDB</h2>
 <p align="center">Crie um Blog app Completo com Node.js, Express, MongoDB, Bootstrap e Handlebars! Utilizei o Windows com Vscode.</p>
 <p align="center">Caso tenha gostado e ajudado considere dar uma ⭐, Obrigado! </p>
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
   - [Model Categoria](#model-categoria)
   - [Route Categoria](#route-categoria)
   - [View Categoria](#view-categoria)
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
 
 Cria a pasta partials para evitar repetição de código pode criar partes e adicina-las ao main.handlebars, criaremos a navbar que deve aparecer em todas as telas e depois os erros, crie o arquivo _navbar.handlebars e usaremos um template do Bootstrap [navbars](https://getbootstrap.com/docs/5.0/getting-started/download/)
 
 ```jsx
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Blog do Node</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/categorias">Categorias</a>
        </li>
        {{#if user}}
          <li class="nav-item">
            <a class="nav-link" href="/usuarios/logout">Sair</a>
          </li>
        {{else}}
          <li class="nav-item">
            <a class="nav-link" href="/usuarios/registro">Registro</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/usuarios/login">Login</a>
          </li>
        {{/if}}
      </ul>
    </div>
  </div>
</nav>
```

### CRUD de Categoria

Categoria e postagens são criadas apenas pelos Admins. Terá a rota de criar, editar, apagar e listar categorias. Para o usuário comum sendo apenas listado.

### Model Categoria

Para criar o primeiro model import mongoose em app.js com a linha 

```jsx
const mongoose = require('mongoose')
```
E no cometário de Configurações o código

```jsx
mongoose.Promise = global.promise;
        mongoose.connect('mongodb://127.0.0.1:27017/blogapp').then(() => {
            console.log('Conectado!')
        }).catch((err) => {
            console.log("houve um erro"+err)
        })

```

Agora na posta models crie o arquivo Categoria.js é uma boa prática no model de banco de dados o arquivo começar com letra maiúscula e no singular. O código será

```jsx
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const Categoria = new Schema({
    nome: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})


mongoose.model('categorias', Categoria)
```

### Route categorias

Criar categoria, temos que ter uma rota com o get com o forms e uma post para enviar os dados ao banco de dados, no arquivo app.js

```jsx
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
```

E em admin.js importar o mongoose e model Categoria além disso, criar a rota POST

```jsx
const mongoose = require('mongoose')
require('../models/Categoria')
const Categoria = mongoose.model('categorias')
```

Criando a rota post
```jsx
router.post('/categorias/nova', (req,res) => {
    const novaCategoria = {
        nome: req.body.nome,
        slug: req.body.slug
    }


    new Categoria(novaCategoria).save().then(()=>{
        console.log('Categoria criada com sucesso!')
    }).catch((err)=>{
        console.log('Falha ao criar a categoria' + err)
    })
})
```
Vá a http://localhost:8081/admin/categorias/add para testar!

### Middlewares

Como o nome diz, ele fica no meio entre a request e response, para validar alguma regra de negócio. No nosso caso iremos validar os e mostrar mensagem de erro ou sucesso. Para isso deve instalar e importar no app.js duas bibliotecas.

No terminal
```shell
 npm install --save express-session
 npm install --save connect-flash

```
No arquivo app.js
```jsx
 const session = require('express-session')
 const flash = require('connect-flash')
```

Agora na parte de configurações app.js adicione o middleware

```jsx
    // Middleware
    app.use((req, res, next) => {
        res.locals.success_msg = req.flash('success_msg')
        res.locals.error_msg = req.flash('error_msg')
        next()
    })

```

Para criar as validações como exemplo ao criar uma Categoria no arquivo de Routes admin.js

```jsx
var erros = []


    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto:'Nome inválido.'})
    }


    if(!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null){
        erros.push({texto:'Slug inválido.'})
    }


    if(req.body.nome.length < 2){
        erros.push({texto:'Nome da categoria muito pequeno.'})
    }


    if(erros.length > 0){
        res.render('admin/addcategorias',{erros: erros})
    }else{
        const novaCategoria = {
            nome: req.body.nome,
            slug: req.body.slug
        }
        new Categoria(novaCategoria).save().then(()=>{
            res.redirect('/admin/categorias')
        }).catch((err)=>{
            console.log('Falha ao criar a categoria' + err)
        })
    }
```
E na view, no arquivo addcategorias, onde para cada erro irá exibir uma aviso com o design Bootstrap, e o texto do erro

```jsx
{{#each erros}}
    <div class="alert alert-danger">{{texto}}</div>
{{else}}

{{/each}}
```
Após enviar o formulário vazio deve aparecer na tela os erros

E para listar as categorias crie a rota /categorias com o código

```jsx
router.get('/categorias', (req,res) => {
    Categoria.find().lean().then((categorias) => {
        res.render('admin/categorias', {categorias: categorias})
    }).catch((err) => {
        req.flash('error_msg', 'houve um erro ao listar as categorias')
        res.redirect('/admin')
    })
})
```

### View Categorias

E no arquivo categorias.handlebars na pasta views/admin
```jsx
<h2>Lista de categorias: </h2>
<hr>
<a href="/admin/categorias/add"><button class="btn btn-success">Nova Categoria</button></a>
{{#each categorias}}
    <div class="card mt-4">
        <div class="card-body">
            <h4>{{nome}}</h4>
            <small>{{slug}}</small>
        </div>
    </div>
{{else}}
{{/each}}
```
Rode o server para testar

```jsx
nodemon app.js
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



