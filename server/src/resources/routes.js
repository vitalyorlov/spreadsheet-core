'use strict';

export default function(app) {
    require('./react.routes')(app);

    app.use('/api/v1/auth', require('./auth'));
}