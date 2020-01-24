const usersURL='https://jsonplaceholder.typicode.com/users';
const postURL='https://jsonplaceholder.typicode.com/posts';
const commentsURL='https://jsonplaceholder.typicode.com/comments';
const albumsURL='https://jsonplaceholder.typicode.com/albums';
const photosURL='https://jsonplaceholder.typicode.com/photos';

  getElements(usersURL, function(a){
      showUsers(a);
  });
  getElements(postURL, function(a){
    lastPost(a);
});