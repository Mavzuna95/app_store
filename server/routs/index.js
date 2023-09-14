import { Router } from "express"
const router = new Router();

import deviceRouter from "../routs/deviceRouter.js"
import userRouter from "../routs/userRouter.js"
import brandRouter from "../routs/brandRouter.js"
import typeRouter from "../routs/typeRouter.js"

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/device', deviceRouter)
router.use('/brand', brandRouter)

export default router