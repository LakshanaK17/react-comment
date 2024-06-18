const {
  getComments,
  addComment,
  updateComment,
  deleteComment,
  incrementLikes,
  addReply,
} = require("./CommentModel");

const fetchComments = (req, res) => {
  const comments = getComments();
  res.json(comments);
};

const createComment = (req, res) => {
  const { username, message } = req.body;
  if (!username || !message) {
    return res.status(400).json({ error: "Username and message are required" });
  }
  const newComment = addComment({ username, message });
  res.json(newComment);
};

const editComment = (req, res) => {
  const { id } = req.params;
  const updatedComment = req.body;
  const comment = updateComment(id, updatedComment);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ error: "Comment not found" });
  }
};

const removeComment = (req, res) => {
  const { id } = req.params;
  const comment = deleteComment(id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ error: "Comment not found" });
  }
};

const likeComment = (req, res) => {
    const { id } = req.params;
    const updatedComment = incrementLikes(id);
    if (updatedComment) {
      res.json(updatedComment);
    } else {
      res.status(404).json({ error: "Comment not found" });
    }
  };
  
  const replyToComment = (req, res) => {
    const { id } = req.params;
    const { username, message } = req.body;
    
    if (!username || !message) {
      return res.status(400).json({ error: "Username and message are required" });
    }
  
    const reply = addReply(id, { username, message });
  
    if (reply) {
      res.json(reply); // Return the newly added reply
    } else {
      res.status(404).json({ error: "Comment not found" });
    }
  };
  
  

module.exports = {
  fetchComments,
  createComment,
  editComment,
  removeComment,
  likeComment,
  replyToComment,
};
