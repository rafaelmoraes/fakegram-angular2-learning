var db = require('../../config/database');

var api = {}

api.create = function (req, res) {
  var picture = req.body;
  delete picture._id;

  db.insert(picture, function (err, newDoc) {
    if (err) return console.error(err);

    console.info('Created successfully: ' + newDoc._id);
    res.json(newDoc._id);
  });
};

api.find = function (req, res) {
  db.findOne({
      _id: req.params.pictureId
    },
    function (err, doc) {
      if (err) return console.error(err);

      res.json(doc);
    }
  );
};

api.update = function (req, res) {
  console.info('Parameter received:' + req.params.pictureId);
  db.update({
      _id: req.params.pictureId
    },
    req.body,
    function (err, numReplaced) {
      if (err) return console.error(err);

      if (numReplaced) {
        res.status(200).end();
        console.info('Updated successfully: ' + req.body._id);
      } else {
        res.status(500).end();
      }
    }
  );
};

api.all = function (req, res) {
  db.find({})
    .sort({
      title: 1
    })
    .exec(function (err, doc) {
      if (err) return console.error(err);

      res.json(doc);
    });
};


api.delete = function (req, res) {
  db.remove(
    {_id: req.params.pictureId},
    {},
    function (err, numRemoved) {
      if (err) return console.error(err);

      if (numRemoved) {
        console.info('Deleted successfully');
        res.status(200).end();
      } else {
        res.status(500).end();
      }
    }
  );
};

module.exports = api;
