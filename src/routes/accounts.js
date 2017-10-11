import { getAccounts } from '../services/web3.service'
import bodyParser from 'body-parser'
import express from 'express'
const router = express.Router()

router.get('/', function(req, res) {
  getAccounts().then(result => {
      res.send(result)
  }).catch(err => {
      console.log(err)
      res.status(500).send(err)
  }) 
})

export default router