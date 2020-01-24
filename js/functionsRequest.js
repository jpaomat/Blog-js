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
function Users(info){
    console.log('getting users',info.data);
    const list = document.getElementById('list');
    const fragment= document.createDocumentFragment();
    var usersBack={};
    for( const users of info.data){
        const li= document.createElement('li');
        li.textContent=  `${users.id} -${users.name}`;
        fragment.appendChild(li);
        //usersBack[`${users.id}`-0]={id:`${users.id}`};
    }
    list.appendChild(fragment);
}
function prueba(info){
    
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
function removeContent(element){
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}