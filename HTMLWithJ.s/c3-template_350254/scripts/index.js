//https://masai-api.herokuapp.com/hotels/search?city={query}
//var status=localStorage.getItem(JSON.parse("login"))
var loginvalue=JSON.parse(localStorage.getItem("login"))||[];
var arr=[];
var raj;
 let container=document.querySelector("#hotels_list")
getData=async(e)=>{
    var key = e.which;
 if(key == 13)  // the enter key code
  {
    let query=document.querySelector("#query").value
    let res=await fetch(`https://masai-api.herokuapp.com/hotels/search?city=${query}`)
    res= await res.json()
     raj=res.hotels
   console.log(raj) 
   renderDom(raj)
  }
   
 }
renderDom=(data)=>{
    container.innerHTML=null;
 data.forEach(({Images:{one,two},Title,Ac,Rating,Price},index)=>{
 let div =document.createElement("div")
 div.setAttribute("id","hotel")
 let pic1 =document.createElement("img")
 pic1.setAttribute("src",one)
 let pic2=document.createElement("img")
 pic2.setAttribute("src",two)
 let title=document.createElement("h2")
 title.innerText=Title
 let pric=document.createElement("h4")
 pric.innerText=`Price per Room:-${Price}`
 let ac=document.createElement("h5")
 ac.innerText=`AC:-${Ac}`
 let rate =document.createElement("p")
 rate.innerText=`Rating:-${Rating}`
 let btn =document.createElement("button")
 btn.setAttribute("class","book")
 btn.innerText="Book"
 btn.addEventListener("click",()=>{
    book({Images:{one,two},Title,Ac,Rating,Price})
 })
 div.append(pic1,pic2,title,pric,ac,rate,btn)
container.append(div)
 })
}
    let lth=document.querySelector("#sort_lth").addEventListener("click",()=>{
        raj.sort((a,b)=>{
            // getData()
            return a.Price-b.Price
            
        })
        renderDom(raj)
    })
 let htl=document.querySelector("#sort_htl").addEventListener("click",()=>{
    raj.sort((a,b)=>{
        // getData()
        return b.Price-a.Price
        
    })
    renderDom(raj)
 })
 let ac=document.querySelector("#filter_ac").addEventListener("click",()=>{
   let data = raj.filter((acc)=>{
        return acc.Ac == true;
   })
   renderDom(data)
 })
let non_ac=document.querySelector("#filter_nonac").addEventListener("click",()=>{
    let data = raj.filter((acc)=>{
        return acc.Ac != true;
   })
   renderDom(data)
})
localStorage.getItem("login")
book=({Images:{one,two},Title,Ac,Rating,Price})=>{
    if (loginvalue) {
 arr.push({Images:{one,two},Title,Ac,Rating,Price})
 window.location.href="checkout.html"
    }
}
