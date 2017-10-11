import bodyParser from 'body-parser'
import { initWebService } from './services/web3.service'
import web3 from 'web3'
import accountRouter from './routes/accounts'
import express from 'express'
const app = express()
const port = process.env.port || 3100

app.use(bodyParser.json())

app.use('/api/accounts', accountRouter)

app.get('/', (req, res) => {
    res.send('Service is running')
})

app.listen(port, () => {
    console.log(`Started on port: ${port}`)
    initWebService()
})