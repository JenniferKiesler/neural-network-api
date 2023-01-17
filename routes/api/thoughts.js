const router = require('express').Router()
const thoughtsController = require('../../controllers/thoughtsController')

router.get('/', thoughtsController.findAll)
router.get('/:id', thoughtsController.findOne)
router.post('/', thoughtsController.create)
router.put('/:id', thoughtsController.update)
router.delete('/:id', thoughtsController.delete)

// add and delete reactions
router.post('/:thoughtId/reactions', thoughtsController.addReaction)
router.delete('/:thoughtId/reactions/:reactionId', thoughtsController.deleteReaction)

module.exports = router