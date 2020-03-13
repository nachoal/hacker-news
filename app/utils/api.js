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
              console.log(post);
              // fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
              return post;
            });
        })
      );
    });
}
