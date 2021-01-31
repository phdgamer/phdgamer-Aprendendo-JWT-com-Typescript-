import {Router} from 'express'

import authMiddleware from './app/middleware/authMiddleware'

import UserController from './app/controllers/UserController'
import AuthController from './app/controllers/AuthController'
const routes = Router()

routes.post('/users', UserController.create)
routes.get('/users', authMiddleware ,UserController.show)

routes.post('/auth', AuthController.authenticate)

export default routes