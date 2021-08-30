const router =require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
} = require('../../controllers/user');

router
.router('/')
.get(getAllUsers)
.post(addUser)

router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser)

module.exports = router;