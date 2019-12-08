'use strict';

class RouterBuilder {
    build(app) {
        app.use('/user', require('./user'));
    }
}

module.exports = new RouterBuilder();
