import jwt from 'jsonwebtoken'
import { UnAuthenticatedError } from '../errors/index.js'

UnAuthenticatedError
const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnAuthenticatedError('احراز هویت نامعتبر است')
  }
  const token = authHeader.split(' ')[1]
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    req.user = { userId: payload.userId }

    next()
  } catch (error) {
    throw new UnAuthenticatedError('احراز هویت نامعتبر است')
  }
}

export default auth
