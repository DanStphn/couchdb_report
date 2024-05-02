import express from 'express'
import Nano from 'nano'

const nano = Nano('http://localhost:5984')
const app = express()

app.use(express.json())


export default app