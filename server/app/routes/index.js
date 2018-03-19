var api = require('../api'),
    path = require('path');

module.exports  = function(app) {

    app.route('/v1/pictures')
        .post(api.create)
        .get(api.all);

    app.route('/v1/pictures/:pictureId')
        .delete(api.delete)
        .get(api.find)
        .put(api.update);

    app.all('/*', function(req, res) {
        res.sendFile(path.join(app.get('clientPath'), 'index.html'));
    });
};
