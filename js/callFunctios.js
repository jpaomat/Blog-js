const usersURL='https://jsonplaceholder.typicode.com/users';
const postURL='https://jsonplaceholder.typicode.com/post';
const commentsURL='https://jsonplaceholder.typicode.com/comments';
const albumsURL='https://jsonplaceholder.typicode.com/albums';
const photosURL='https://jsonplaceholder.typicode.com/photos';

  getElements(usersURL, function(a){
      showUsers(a);
  });