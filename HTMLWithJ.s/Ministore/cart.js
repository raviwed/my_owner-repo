container =document.querySelector("#items")
products=()=>{
    container.innerHTML=null;
    arr=JSON.parse(localStorage.getItem("cart"))||[]
    arr.forEach(({brand,category,image,price,title},index)=>{
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
        cart.innerText="remove"
        cart.setAttribute("class","remove")
        cart.addEventListener("click",()=>{
            remove(index)
        })
        div.append(ima,p,h1,Brand,pric,cart)
        container.append(div)
         })
}

products()
 remove=(index)=>{
   arr.splice(index,1)
   localStorage.setItem("cart",JSON.stringify(arr))
   arr=JSON.parse(localStorage.getItem("cart"))||[]
   products()
   window.location.reload()
 }

let cart1=document.querySelector("#checkout").addEventListener("click",(name)=>{
    obj={
        nam:document.querySelector("#name").value,
        address:document.querySelector("#address").value,
    }
    let {nam}=obj
    alert(`${nam} your order is successfull!`)
})
document.querySelector("#cart_count").innerHTML = "Cart  "+ arr.length ?? 0;