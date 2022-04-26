let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Matchbook = new  (

  
{
    collection: 'matchbooks'
  })
  
module.exports = mongoose.model('matchbook',Matchbook)