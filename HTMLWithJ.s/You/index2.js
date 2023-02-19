container=document.querySelector("#container")
let API="AIzaSyBKBcf-Af8_9_sU6xtchzlFrZPUd09jzFg"
async function main(){
try{
    query=document.querySelector("#query").value
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API}&part=snippet&maxResults=20`)
    let {items}= await res.json()
     let movies=items
        append(movies)
    console.log(movies)
}catch(err){

}

}
let append=(data)=>{
container.innerHTML="";
  data.forEach(({snippet:{thumbnails:{medium:{url}}},snippet:{title},id:{videoId}})=>{
    let div = document.createElement("div")
    let pic=document.createElement("img")
    pic.src=url
    pic.setAttribute("id","photo")
    div.addEventListener("click",()=>{
        obj={
            title:title,
            videoId:videoId,
         }
        localStorage.setItem("movie",JSON.stringify(obj))
        window.location.href="question2.html"
    });
  let name=document.createElement("h3")
    name.innerText=title
    div.append(pic,name)
    container.append(div)

  })

  
} ;
important()
async function important(){
try{
    query=document.querySelector("#query").value
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=popular+videos&key=${API}&part=snippet&maxResults=20`)
    let {items}= await res.json()
     let movies=items
        append(movies)
    console.log()
}catch(err){

}

}
let appended=(data)=>{
container.innerHTML="";
  data.forEach(({snippet:{thumbnails:{medium:{url}}},snippet:{title},id:{videoId}})=>{
    let div = document.createElement("div")
    let pic=document.createElement("img")
    pic.src=url
    pic.setAttribute("id","photo")
    div.addEventListener("click",()=>{
        obj={
            title:title,
            videoId:videoId,
         }
        localStorage.setItem("movie",JSON.stringify(obj))
        window.location.href="question2.html"
    });
  let name=document.createElement("h3")
    name.innerText=title
    div.append(pic,name)
    container.append(div)

  })

  
} ;
