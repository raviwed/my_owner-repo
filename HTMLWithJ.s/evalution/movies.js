// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let container=document.querySelector("#movies")
val= JSON.parse(localStorage.getItem("amount"))?.amount||0
document.querySelector("#wallet").innerHTML=val

async function getData(){
    query=document.querySelector("#search").value
    try{
       let res=await fetch(`https://www.omdbapi.com/?apikey=e2035b38&s=${query}`)
       let data = await res.json()
       let give = data.Search
       console.log(give)
       appendData(give)
    }catch(err){
        console.log(err)
    }
}
 function appendData(data){
    container.innerHTML="";
    data.forEach((ele)=>{
     let div=document.createElement("div")
     div.setAttribute("class","movie_tab")
     let image=document.createElement("img")
     image.setAttribute("src",ele.Poster)
     let h=document.createElement("h2")
     h.innerText=ele.Title
     btn=document.createElement("button")
     btn.innerText="BOOK NOW"     
     div.append(image,h,btn)
     btn.addEventListener("click",function(){
        takethat(ele)
     });
     container.append(div)
    });
 }
  function  takethat(content){
   window.location.href="checkout.html"
   localStorage.setItem("movie", JSON.stringify(content));
  }