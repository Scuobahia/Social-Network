const router =require('express').Router();
const {
    getAllThoughts,
    getThoughtbyId,
    createThought,
    addReaction,
    updateThought,
    removeThought,
    removeReaction
} = require('../../controllers/thought');

router.route('/')
    .get(getAllThoughts)
    .post(createThought)

router.route('/:id')
    .get(getThoughtbyId)
    .put(updateThought)
    .delete(removeThought)

router.route('/:id/reactions')
    .put(addReaction)
    
router.route('/:id/reactions/:reactionsId')
    .delete(removeReaction)

module.exports = router;
