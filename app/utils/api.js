export function getTopPosts() {
  return fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`)
    .then(res => res.json())
    .then(postsIds => {
      if (postsIds.message) {
        throw new Error(getErrorMsg(postsIds.message));
      }
      return Promise.all(
        postsIds.slice(0, 50).map(id => {
          return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(res => res.json())
            .then(post => {
              if (post.message) {
                throw new Error(getErrorMsg(post.message));
              }
              return post;
            });
        })
      );
    });
}

export function getNewPosts() {
  return fetch(`https://hacker-news.firebaseio.com/v0/newstories.json`)
    .then(res => res.json())
    .then(postsIds => {
      if (postsIds.message) {
        throw new Error(getErrorMsg(postsIds.message));
      }
      return Promise.all(
        postsIds.slice(0, 50).map(id => {
          return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(res => res.json())
            .then(post => {
              if (post.message) {
                throw new Error(getErrorMsg(post.message));
              }
              return post;
            });
        })
      );
    });
}

export function getPost(id) {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then(res => res.json())
    .then(post => {
      if (post.message) {
        throw new Error(getErrorMsg(post.message));
      }
      return Promise.all(
        post.kids.map(commentId => {
          return fetch(
            `https://hacker-news.firebaseio.com/v0/item/${commentId}.json`
          )
            .then(res => res.json())
            .then(comment => {
              if (comment.message) {
                throw new Error(getErrorMsg(comment.message));
              }
              return comment;
            });
        })
      ).then(posts => {
        post.kids = posts;
        return post;
      });
    });
}

export function getUser(user) {
  return fetch(`https://hacker-news.firebaseio.com/v0/user/${user}.json`)
    .then(res => res.json())
    .then(user => {
      if (user.message) {
        throw new Error(getErrorMsg(user.message));
      }
      return Promise.all(
        user.submitted.map(submittedId => {
          return fetch(
            `https://hacker-news.firebaseio.com/v0/item/${submittedId}.json`
          )
            .then(res => res.json())
            .then(post => {
              if (post.message) {
                throw new Error(getErrorMsg(post.message));
              }
              return post;
            });
        })
      ).then(posts => {
        user.submitted = posts.filter(post => {
          if (post.type !== "story") {
            return false;
          }
          return true;
        });
        return user;
      });
    });
}
