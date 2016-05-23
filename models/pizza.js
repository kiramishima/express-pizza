import db from '../lib/db'
import {Schema} from 'mongoose'

let PizzaSchema = new Schema({
  name: String,
  description: {type: String},
  price: {type: Number},
  nett: {type: String},
  ingredients: [String],
  picUrl: String
})

let Pizza = db.model('Pizzas', PizzaSchema)
export default Pizza
