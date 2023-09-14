const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddle = require('../middleware/AuthMiddle')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authMiddle, userController.check)

export default router