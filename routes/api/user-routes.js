const router = require('express').Router();
const {
    getAllUser,
    createUser,
    getOneUser,
    updateUser,
    removeUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUser)
    .post(createUser);

router
    .route('/:userid')
    .get(getOneUser)
    .put(updateUser)
    .delete(removeUser);

router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;