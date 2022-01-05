const cartRouter = require('./cart.router');
const productsRouter = require('./products.router');
const usersRouter = require('./users.router');

function routerApi(app){
    app.use('/cart', cartRouter);
    app.use('/products', productsRouter);
    app.use('/users', usersRouter);
}

module.exports = routerApi;