const mongoose = require('mongoose')
const { Schema } = mongoose;

const DataSchema = new Schema({
  _id: {type: Number, required: true},
  index:  {type: Number, required: true},
  guid:  {type: String},
  isActive: {type:Boolean},
  balance: {type:String},
  tags: {type:Array},
});


const Model = mongoose.model('data', DataSchema)
module.exports = Model