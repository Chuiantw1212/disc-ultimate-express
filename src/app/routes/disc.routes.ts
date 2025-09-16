// Routes for DISC endpoints (ultimate-express)
// Responsibility: HTTP → controller mapping only

import express from 'ultimate-express'
import { createDiscController } from '../controllers/disc.controller'

const router = express.Router({ caseSensitive: true, mergeParams: true })

// POST /discs — accept DISC payload
router.post('/discs', createDiscController)

export default router