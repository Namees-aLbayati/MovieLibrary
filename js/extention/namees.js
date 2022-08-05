var searchReq=document.getElementById('form-control');
var searchBtn=document.getElementById('search-btn');
var tryit=document.getElementById('cardContainer')
var movieData=[]
const apiRequest2='https://imdb-api.com/en/API/YouTubeTrailer/k_w2ss88gw/'
searchBtn.addEventListener('click',myfun);
const apiRequest='https://imdb-api.com/en/API/SearchMovie/k_w2ss88gw/'
function printCards(data){
    console.log('data check',data)

for(let i=0;i<data.length;i++){
    fetch(apiRequest2+data[i].id).then((resp)=> resp.json()).then((newData2)=>{
        // console.log('new data fetch222222',newData2,'first data',data[i])
movieData.push(data[i],newData2.videoUrl)

    })

}

// for(let x=0;x<movieData.length;x++){
// console.log('using x loop',movieData[x])
// }

movieData.forEach(element=>{
tryit.innerHTML+=`

<div class="card">
 <img src=${element.image} alt="Denim Jeans" style="width:100%">
 <video width="320" height="240" controls>
//   <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
 <h1>${element.title}</h1>
 <p>${element.description}</p>
 <p><button>Add to watch list</button></p>
 </div>

`;
})




}
function myfun(){
    console.log('value',searchReq.value)
fetch(apiRequest+searchReq.value).then((response)=>
response.json()).then((data)=>{console.log('my data will bw here',data.results)

printCards(data.results)}

)
}