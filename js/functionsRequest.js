function getElements(url, fn){   
    axios({
        method:'GET',
        url:url
    }).then(information=>{
    fn(information); 
    }).catch(error=>console.log(error))
    .finally(function(){
        console.log('executed successfuly');
    })   
}
function lastPost(info){
    const rta =info.data;
    console.log(rta.length);
    //console.log(rta[2].title);
    const showInfo= document.getElementById('showInfo');
    const divPost= document.createElement('div');
    divPost.setAttribute('class','row aux');
    const fragment= document.createDocumentFragment();
    for(let i=rta.length-1; i>(rta.length)-6; i--){
        /*const li=document.createElement('li');
        li.textContent=`${rta[i].title}`;
        console.log(li);
        fragment.appendChild(li);*/
        const cardBody= document.createElement('div');
        cardBody.setAttribute('class','card-body');
        const title= document.createElement('h5');
        title.textContent= `${rta[i].title}`;
        const content= document.createElement('p');
        content.textContent=`${rta[i].body}`;  
        cardBody.appendChild(title);    
        cardBody.appendChild(content);
        const card = document.createElement('div');
        card.setAttribute('class','card');
        card.appendChild(cardBody);
        const divCard= document.createElement('div');
        divCard.setAttribute('class','col-lg-9 p-3');
        divCard.appendChild(card);
        fragment.appendChild(divCard);
    };
    divPost.appendChild(fragment);
    showInfo.appendChild(divPost);
}














function showUsers(info){
    const divUsers = document.getElementById('users');
    const fragment= document.createDocumentFragment();
    for( const users of info.data){
        const [img,div,h6,i,a,p]=createElementsHtml();
        img.setAttribute('class','img-fluid rounded-circle w-50');
        img.setAttribute("src", '../images/persona1.png');
        img.setAttribute("alt", 'user');
        a.setAttribute('href','#');
        const cardBody=div;
        const iconWapp= document.createElement('i');
        iconWapp.setAttribute('class','fab fa-facebook icon');
        const iconFace= document.createElement('i');
        iconFace.setAttribute('class','fab fa-whatsapp icon');
        const iconInst= document.createElement('i');
        iconInst.setAttribute('class','fab fa-instagram icon');
        const divIcons= document.createElement('div');//div icons
        divIcons.setAttribute('class','div-icons')
        h6.textContent= `${users.name}`;
        p.textContent= `${users.email}`;
        a.appendChild(h6);
        cardBody.setAttribute('class','card-body');
        cardBody.appendChild(img);
        cardBody.appendChild(a);
        cardBody.appendChild(p);   
        divIcons.appendChild(iconWapp);
        divIcons.appendChild(iconFace);
        divIcons.appendChild(iconInst);
        cardBody.appendChild(divIcons);
        const card = document.createElement('div');
        card.setAttribute('class','card');
        card.appendChild(cardBody);
        const divCard= document.createElement('div');
        divCard.setAttribute('class','col-lg-3 p-3');
        divCard.appendChild(card);
        fragment.appendChild(divCard);
    }
    divUsers.appendChild(fragment);
}
function createElementsHtml(){
    const img= document.createElement('img');
    const div= document.createElement('div');
    const p= document.createElement('p');
    const h6= document.createElement('h6');
    const i= document.createElement('i');
    const a= document.createElement('a');
    return [img,div,h6,i,a,p];
}

function browser(info){
    let user= info.data[0];
    let id =user.id;
    console.log(id);
    console.log(user.name);
    const list = document.getElementById('list');
    const fragment = document.createDocumentFragment();
    const li = document.createElement('li');
    li.textContent= `${user.name}-${user.email}`;
    fragment.appendChild(li);
    list.appendChild(fragment);
    getElements('https://jsonplaceholder.typicode.com/posts?userId='+id, function(a){
      console.log((a.data));
      var tam = (a.data).length;
      if(tam!=0){
        const list =document.getElementById('list');
        const fragment = document.createDocumentFragment();
        for(postUser of a.data){
            console.log(postUser);
            const li= document.createElement('li');
          li.textContent= `${postUser.title}`;
          fragment.appendChild(li);
        }
        list.appendChild(fragment);
      }    
    });
  }
  function removeContent(element1){
    while(element1.childNodes[1]!=null){
    console.log(element1.childNodes[1]);
    element1.removeChild(element1.childNodes[1]);
  }

} 