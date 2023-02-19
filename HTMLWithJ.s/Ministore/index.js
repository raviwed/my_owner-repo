// Store the items added to the cart into local-storage with key as cart.

/*
API:- https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=1
- Change the page number to implement pagination. (e.g. page=2)
- There are total 4 pages only.
*/
var i=1;
var arr=JSON.parse(localStorage.getItem("cart"))||[];
let next= document.querySelector("#next")
let nav=document.querySelector("#cart_count").innerHTML = "Cart "+ arr.length ?? 0;
next.addEventListener("click",()=>{
        i<4?getData(++i):getData(4) 
})
let previous= document.querySelector("#previous")
previous.addEventListener("click",()=>{
        i==1?getData(1):getData(--i) 
})
getData=async(page)=>{
let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=${page}`)
let Data = await res.json()

renderDom(Data)
}
getData(1)
let container =document.querySelector("#items")
   
renderDom=(data)=>{
    container.innerHTML=null
     data.data.forEach(({brand,category,image,price,title})=>{
    let div=document.createElement("div")
    div.setAttribute("class","item")
    let ima=document.createElement("img")
       ima.src=image;
    let p=document.createElement("p")
    p.innerText=category
    let h1=document.createElement("h2")
    h1.innerText=title
    let Brand=document.createElement("h3")
    Brand.innerText=`Brand:- ${brand}`
    let pric=document.createElement("h4")
    pric.innerText=price
    let cart=document.createElement("button")
    cart.innerText="Add to cart"
    cart.setAttribute("class","add_to_cart")
    cart.addEventListener("click",()=>{
       Addtocart({brand,category,image,price,title})
    })
    div.append(ima,p,h1,Brand,pric,cart)
    container.append(div)
     })

}
Addtocart=(index)=>{
arr.push(index)
localStorage.setItem("cart",JSON.stringify(arr))
nav.innerHTML="Cart "+ arr.length ?? 0;

}
