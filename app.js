// carregando módulos
    require('dotenv').config()
    const express = require('express')
    const app = express()
    const handlebars = require('express-handlebars')
    const admin = require('./routes/admin')
    const path = require('path')
    const mongoose = require('mongoose')
    const session = require('express-session')
    const flash = require('connect-flash')
    require('./models/Postagem')
    const Postagem = mongoose.model('postagens')
    require('./models/Categoria')
    const Categoria = mongoose.model('categorias')
    const usuarios = require('./routes/usuario')
    const passport = require('passport')
    require('./config/auth')(passport)
    const db = require('./config/db')

// Configurações
    // Sessão
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true
    }))

    app.use(passport.initialize())
    app.use(passport.session())

    app.use(flash())
    // Middleware
    app.use((req, res, next) => {
        res.locals.success_msg = req.flash('success_msg')
        res.locals.error_msg = req.flash('error_msg')
        res.locals.error = req.flash('error')
        res.locals.user = req.user || null
        next()
    })
    // Middleware parse req JSON
    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))
    // Handlebars
        app.engine('handlebars', handlebars.engine({
            defaultLayout: 'main',
            runtimeOptions: {
                allowProtoPropertiesByDefault: true,
                allowProtoMethodsByDefault: true,
            },
        }))
        app.set('view engine', 'handlebars')
    // Mongoose
        mongoose.Promise = global.promise;
        mongoose.connect(db.mongoURI).then(() => {
            console.log('Conectado ao mongo!')
        }).catch((err) => {
            console.log("houve um erro"+err)
        })
    // Public
        app.use(express.static(path.join(__dirname,"public")))

// Rotas
    app.get('/',(req,res) => {
        Postagem.find().lean().populate('categoria').sort({data: 'desc'}).then((postagens) => {
            res.render('index', {postagens: postagens}) 
        }).catch((err) =>{
            req.flash('error_msg', 'Houve um erro interno')
            res.redirect('/404')
        })
    })

    app.get('/postagem/:slug', (req, res) => {
        Postagem.findOne({slug: req.params.slug}).then((postagem) =>{
            if(postagem){
                res.render('postagem/index', {postagem: postagem})
            }else{
                req.flash('error_msg', 'Essa postagem não existe')
                res.redirect('/')
            }
        }).catch((err) =>{
            req.flash('error_msg', 'Houve um erro interno')
            res.redirect('/')
        })
    })

    app.get('/categorias', (req, res) => {
        Categoria.find().lean().then((categorias) => {
            res.render('categorias/index', {categorias: categorias})
        }).catch((err) => {
            req.flash('error_msg', 'Houve um erro ao listar categorias')
            res.redirect('/')
        })
    })

    app.get('/categorias/:slug', (req, res) => {
        Categoria.findOne({slug: req.params.slug}).then((categoria) =>{
            if(categoria){
                Postagem.find({categoria: categoria._id}).then((postagens) => {

                    res.render('categorias/postagens', {postagens: postagens, categoria: categoria})
                
                }).catch((err) => {

                    req.flash('error_msg', 'Houve um erro ao listar os posts!')
                    res.redirect('/')

                })
            }else{
                req.flash('error_msg', 'Essa categoria não exite')
            }
        }).catch((err) => {
            req.flash('error_msg', 'Houve um erro interno ao carregar essa categoria')
            res.redirect('/')
        })
    })

    app.get('/404', (req, res) => {
        res.send('Error 404!')
    })

    app.get('/posts', (req,res) => {
        res.send('Posts')
    })

    app.use('/admin', admin)
    app.use('/usuarios', usuarios)
// Outros
const PORT = process.env.PORT || 8081
app.listen(PORT, ()=>{
    console.log('SERVIDOR rodando!')
})