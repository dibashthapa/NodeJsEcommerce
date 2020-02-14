module.exports= function(app){
  app.use('/',require('./controllers/home'))
  app.use('/',require('./controllers/categories'))
  app.use('/',require('./controllers/cart'))

}
