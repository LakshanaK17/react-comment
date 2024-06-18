const express = require("express");
const {
  fetchComments,
  createComment,
  editComment,
  removeComment,
  likeComment,
  replyToComment,
} = require("./CommentController");

const router = express.Router();

router.get("/comments", fetchComments);
router.post("/comments", createComment);
router.put("/comments/:id", editComment);
router.delete("/comments/:id", removeComment);
router.post("/comments/:id/replies", replyToComment);
router.put("/comments/:id/like", likeComment);

module.exports = router;
