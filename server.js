import express, {Router} from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

const router = Router()
router.get('/', (req, res) => {
    
})

