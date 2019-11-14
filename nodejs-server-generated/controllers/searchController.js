'use strict'

var mongoose = require('mongoose');
var Search = require('../models/Search');


module.exports.postSearch = function postSearch(req, res, next) {
  
  mongoose.connect('mongodb://127.0.0.1:27017/searches', { useNewUrlParser: true, useUnifiedTopology: true }).then(
          () => {
            var srch = new Search({
              userEmail: req.query.userEmail,
              gameName: req.query.gameName,
            });
            
            srch.save(function(err) {
              if (err) res.status(400).send({err});
              res.status(200).send(srch)
            });
            
          },
            err => { 
              res.status(500).send({
                error: 'Error de conexión'
              })
             }
        );
  //res.send({msg: req.query})
};