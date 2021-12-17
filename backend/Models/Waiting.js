const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let waitingSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phoneno: {
    type: Number
  }
}, {
    collection: 'waiting'
  })

module.exports = mongoose.model('Waiting', waitingSchema)