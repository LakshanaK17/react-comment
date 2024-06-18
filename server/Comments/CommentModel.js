const { faker } = require('@faker-js/faker');

let comments = [
  {
    id: 1,
    username: 'amyrobson',
    message: 'Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.',
    profileImage: 'https://randomuser.me/api/portraits/women/1.jpg',
    timeAgo: '1 month ago',
    likes: 12,
    replies: [],
  },
  {
    id: 2,
    username: 'maxblagun',
    message: 'Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!',
    profileImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    timeAgo: '2 weeks ago',
    likes: 5,
    replies: [],
  },
  {
    id: 3,
    username: 'ramsesmiron',
    message: '@maxblagun If you’re still new, I’d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It’s very tempting to jump ahead but lay a solid foundation first.',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    timeAgo: '1 week ago',
    likes: 4,
    replies: [],
  },
  {
    id: 4,
    username: 'juliusomo',
    message: '@ramsesmiron I couldn’t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.',
    profileImage: 'https://randomuser.me/api/portraits/men/3.jpg',
    timeAgo: '2 days ago',
    likes: 2,
    replies: [],
  },
];

const getComments = () => {
  return comments;
};

const addComment = (comment) => {
  const newComment = {
    id: comments.length + 1,
    ...comment,
    profileImage: faker.image.avatar(),
    timeAgo: 'just now',
    likes: 0,
    replies: [],
  };
  comments.push(newComment);
  return newComment;
};

const updateComment = (id, updatedComment) => {
  const index = comments.findIndex(comment => comment.id === parseInt(id));
  if (index !== -1) {
    comments[index] = { ...comments[index], ...updatedComment };
    return comments[index];
  }
  return null;
};

const deleteComment = (id) => {
  const index = comments.findIndex(comment => comment.id === parseInt(id));
  if (index !== -1) {
    return comments.splice(index, 1)[0];
  }
  return null;
};

const incrementLikes = (id) => {
  const index = comments.findIndex(comment => comment.id === parseInt(id));
  if (index !== -1) {
    comments[index].likes += 1;
    return comments[index];
  }
  return null;
};

const addReply = (id, { username, message }) => {
    const index = comments.findIndex(comment => comment.id === Number(id));
    if (index !== -1) {
      const newReply = {
        id: comments[index].replies.length + 1,
        username,
        message,
        profileImage: faker.image.avatar(),
        timeAgo: 'just now',
      };
      comments[index].replies.push(newReply);
      return newReply; 
    }
    return null;
  };

module.exports = {
  getComments,
  addComment,
  updateComment,
  deleteComment,
  incrementLikes,
  addReply,
};
