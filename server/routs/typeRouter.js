const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController').default
const checkRoleMiddle = require('../middleware/checkRoleMiddle')

router.post('/', checkRoleMiddle('ADMIN'), typeController.create)
router.get('/', typeController.getAll)

export default router