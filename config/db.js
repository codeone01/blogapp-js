require('dotenv').config()
if(process.env.NODE_ENV == 'production'){
    module.exports = {mongoURI: process.env.MONGO_URI}
}else{
    module.exports = {mongoURI: process.env.MONGO_LOCAL_URI}
}