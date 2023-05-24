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

- [Árvore pastas-e-arquivos](#árvore-pastas-arquivos)
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
 │    
 <br> 
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
 │
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

 Instale o express

```md
npm install —-save express
```


_Nota: As classificações são baseadas nas estatísticas do usuário, veja [src/calculateRank.js](../src/express.js)_

### Express Handlebars

Para ocultar estatísticas individualmente, você pode passar um parâmetro de consulta `?hide=` com valores separados por vírgula.

> Opções: `&hide=stars,commits,prs,issues,contribs`

```md
npm install —-save express-handlebars
```

### Adicionando EXpress

Adicione a contagem de todas as suas contribuições privadas à contagem total de confirmações usando o parâmetro de consulta `?count_private=true`.

_Nota: Se você estiver implantando este projeto, as contribuições privadas serão contadas por padrão; caso contrário, você precisará compartilhar suas contagens de contribuições privadas._

> Opções: `&count_private=true`

```md
npm install —-save express
```

###  My SQL

Para habilitar ícones, basta utilizar o parâmetro `show_icons=true` na sua requisição, da seguinte forma:

```md
npm install —-save mysql2
```

### Run

Módulos para rodar o Blogapp Express mongoDB [configuração manual](#personalização).


```md
npm install —-save sequelize
```

```md
npm install –-save mongoose
```
```md
npm install --save express-session
```
```md
npm install --save connect-flash
```
```md
npm install --save bcryptjs
```
```md
npm install --save passport
```

```md
npm install --save passport-local
```

```md
npm init
```

```md
npm install --save dotenv
```
#### Crie o arquivo .env :
```md
MONGO_URI = ''
MONGO_LOCAL_URI = ''
SESSION_SECRET = ''
```



