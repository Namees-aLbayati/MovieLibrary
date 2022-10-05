
var searchReq=document.getElementById('form-control');
var searchBtn=document.getElementById('search-btn');
var containerEl=document.getElementById('cardContainer')
var reviewsTest=document.getElementById('reviews')
var key1="k_w2ss88gw";
const key2="k_kk9ovx21";
var secretKeper=[];
const NewArr=[]
const userRatingArr=[];
var result;
function createCards(cardsData){
    const fetchID=fetch(`https://imdb-api.com/en/API/UserRatings/k_w2ss88gw/${cardsData.id}`).then((result)=>result.json()).then((usefulData)=>{
        
    if(usefulData.title!=null){
userRatingArr.push(usefulData)
    }
    

    console.log('userRating ARRAY',userRatingArr)
    for(var i=0;i<userRatingArr.length;i++){

    }

})
    var row=document.createElement('div');
    row.classList.add('col-sm-6')
    var parent=document.createElement('div');
parent.classList.add('card');
var cardImg=document.createElement('img');
cardImg.classList.add('card-img-top')
cardImg.style.width='300px';
cardImg.style.height='160px';
cardImg.src=cardsData.image;
var divTitle=document.createElement('div');
divTitle.classList.add('card-body');
var header=document.createElement('p');
header.classList.add('card-title');
header.textContent=cardsData.title;
var description=document.createElement('p');
description.classList.add('card-text');
description.textContent=cardsData.description;
var modalBtn=document.createElement('a');
// modalBtn.classList.add('btn', 'btn-danger', 'show-info-button');
var data=cardsData.title;
var mySplit=data.split(" ");
// console.log('split',mySplit)
modalBtn.setAttribute('modalId',cardsData.id)
modalBtn.setAttribute('data-toggle', 'modal');
modalBtn.setAttribute('data-target', '#exampleModalCenter');

modalBtn.textContent = `Read more about ${mySplit}`;

var space=document.createElement('br');

var addToWatchingList=document.createElement('a');
addToWatchingList.textContent='add to watch later '

var tryId=document.getElementById('appendId');
divTitle.appendChild(header)
divTitle.appendChild(description)
console.log('secretttttttttttttt',secretKeper)
divTitle.appendChild(modalBtn)
divTitle.appendChild(space)
divTitle.appendChild(addToWatchingList)
parent.appendChild(cardImg)
parent.appendChild(divTitle)
row.appendChild(parent)
containerEl.appendChild(row)
  

}

var movieData=[{}]
// const apiRequest3fullActors='https://imdb-api.com/API/Reviews/k_w2ss88gw/'
searchBtn.addEventListener('click',myfun);
const apiRequest='https://imdb-api.com/en/API/SearchAll/k_w2ss88gw/'
function printCards(data){


for(let i=0;i<data.length;i++){
    createCards(data[i])



//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div> */}



}

    }


// movieData.push(data[i])
// movieData.map(element=>{
// console.log('element',element)
// var parent=document.createElement('div');
// parent.classList.add('col-sm-6');

// var cardBorder=document.createElement('div');
// cardBorder.classList.add('card');
// var cardBody=document.createElement('div');
// cardBody.classList.add('card-body');
// var cardsTitle=document.createElement('h5');
// cardsTitle.classList.add('card-title');
// cardsTitle.innerHTML=`${element.title}`;

// var cardImg=document.createElement('img');
// cardImg.src=`${element.image}`;
// var cardDesc=document.createElement('p');
// cardDesc.innerHTML=`${element.description}` 
// var revBtn=document.createElement('button');
// revBtn.classList.add('text-light','text-center')
// revBtn.innerHTML='Reviews'
// revBtn.setAttribute('id','buttonID');
// revBtn.addEventListener('click',getModal)
//   cardBody.appendChild(cardsTitle)    
// cardBody.appendChild(cardImg)
// cardBody.appendChild(cardDesc)    
//      cardBody.appendChild(revBtn)
// cardBorder.appendChild(cardBody)
// parent.appendChild(cardBorder)

// tryit.appendChild(parent)





// })



function myfun(){
    console.log('value',searchReq.value)
fetch(`${apiRequest}${searchReq.value}`).then((response)=>
response.json()).then((data)=>{

    console.log('my data will bw here',data.results)

    if(data===null){
         window.alert('there is problem with 3rd API please try again later or pay for IMDB API TO CONTINOU')

    }else{
        printCards(data.results)


    }

})
}