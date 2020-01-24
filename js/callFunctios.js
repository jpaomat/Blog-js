const usersURL='https://jsonplaceholder.typicode.com/users';
const postURL='https://jsonplaceholder.typicode.com/posts';
const commentsURL='https://jsonplaceholder.typicode.com/comments';
const albumsURL='https://jsonplaceholder.typicode.com/albums';
const photosURL='https://jsonplaceholder.typicode.com/photos';

  getElements(postURL, function(a){
      lastPost(a);
  });
  const bBuscar=document.getElementById('buscar');
  bBuscar.addEventListener('click', ()=>{
      removeContent(document.getElementById('showInfo'));
      getElements(usersURL, function(a){
        showUsers(a);
    });
  });
  /*const dato= document.getElementById('browser').value;
  const tipo=document.getElementById('tipo').value;
  //https://jsonplaceholder.typicode.com/users?name_like=Howe
  var url ="https://jsonplaceholder.typicode.com/users?name_like=";
  url +=dato;
  getElements(url, function(a){
      browser(a);
  });
  */