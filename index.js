import express from 'express'
import cors from 'cors'
import testExport from './mongoConnect.js'

import dotenv from 'dotenv'
import { addFurniture, getAll } from './funiture.js'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json()) // to be able to recieve json as post

const PORT = process.env.PORT || 4040

app.post('/', addFurniture)

app.get('/', getAll)

app.listen(PORT, () => console.log('My api is running 😁'))