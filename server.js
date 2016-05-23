import express, {Router} from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import {Server} from 'http'

const app = express()
// Configuration
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const router = Router()
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the coolest API on earth!' })
})

// TODO: Convert Sails Route to Express Route /SignIn
// TODO: Convert Sails Route to Express Route /SignUp
// TODO Convert Sails Route to Express Route /PizzaCatalog

app.use('/api', router)

var server = Server(app)
export default server
