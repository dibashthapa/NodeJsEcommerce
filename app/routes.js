module.exports= function(app){
  app.use('/',require('./controllers/home'))
  app.use('/',require('./controllers/categories'))
  app.use('/',require('./controllers/search'))
  app.use('/',require('./controllers/cart'))
}
