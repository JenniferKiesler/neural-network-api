const router = require('express').Router()
const usersController = require('../../controllers/usersController')

router.get('/', usersController.findAll)
router.get('/:id', usersController.findOne)
router.post('/', usersController.create)
router.put('/:id', usersController.update)
router.delete('/:id', usersController.delete)

// add and delete friends
router.post('/:userId/friends/:friendId', usersController.addFriend)
router.delete('/:userId/friends/:friendId', usersController.deleteFriend)

module.exports = router