import express from 'express'
const router = express.Router()

import rateLimiter from 'express-rate-limit'
const apiLimiter = rateLimiter({
  windowMs: 1 * 60 * 1000, // 15 minutes
  max: 10,
  message: 'درخواست های این IP بسیار زیاد است، لطفاً پس از 1 دقیقه دوباره امتحان کنید',
})

import { register, login, updateUser } from '../controllers/authController.js'
import authenticateUser from '../middleware/auth.js'
router.route('/register').post(apiLimiter, register)
router.route('/login').post(apiLimiter, login)
router.route('/updateUser').patch(authenticateUser, updateUser)

export default router
