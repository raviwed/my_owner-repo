let container =document.querySelector("#hotel_details")
arr.forEach((el)=>{
    container.innerHTML=null
    let div=document.createElement("div")
    div.setAttribute("class","images")
    let pic1=document.createElement("img")
    pic1.setAttribute("src",el.Image.one)
    let pic2=document.createElement("img")
    pic2.setAttribute("src",el.Image.two)
   let pric=document.createElement("p")
   pric.innerText=el.Price
   div.append(pic1,pic2,pric)
   container.append(div)
 })
    let btn=document.querySelector("#book").addEventListener("click",()=>{
        name1=document.querySelector("#user_name").value
        setTimeout(()=>{
        alert(`${name1} your booking is sucessfull`)
      },5000)
    })


