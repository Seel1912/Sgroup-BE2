import { validateUserInfo } from '../middleware/validate.js'
import express from 'express'
import {
    getAllUser,
    getUserById,
    updateUser,
    addNewUser,
    deleteUser,
} from '../controller/user.js'

const router = express.Router()

router.get('/getall', getAllUser)
router.get('/:id', getUserById)
router.put('/:id', validateUserInfo, updateUser)
router.post('/', validateUserInfo, addNewUser)
router.delete('/:id', deleteUser)
export default router
