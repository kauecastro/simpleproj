import express from 'express'
const router = express.Router()

import { login, verify } from '../controllers/auth.js'

router.post('/login', login)

router.get('/verify', verify)

module.exports = router
