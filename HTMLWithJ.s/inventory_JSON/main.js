// Use deployed URL.
//https://js-211-mockserver.herokuapp.com/api/inventory
window.addEventListener('load',()=>{
    getData()
 })
getData=async()=>{
let result =await fetch(`https://js-211-mockserver.herokuapp.com/api/inventory`)
 result = await result.json()
 renderDom(result)
}
getData()
document.querySelector("#add_product").addEventListener("click",()=>{
    Addproducts()
    
})
Addproducts=async()=>{
    let name=document.querySelector("#name").value;
    let pric=+document.querySelector("#price").value;
    let description=document.querySelector("#description").value;
    let delivery=document.querySelector("#delivery").value;
    let image=document.querySelector("#image").value;
    
    let Data={
        name,
        pric,
        description,
        delivery,
        image,
    }
   let res= await fetch(`https://js-211-mockserver.herokuapp.com/api/inventory`,{
    method:"POST",
    body:JSON.stringify(Data),
    headers:{
        "Content-Type":"application/json",
    }
   })
   let data=await res.json()
   window.location.reload()
}
  var container=document.querySelector("#container")
renderDom=(data)=>{
  container.innerHTML=null;
  data.forEach(({name,pric,description,delivery,image,id})=>{
   let div=document.createElement("div")
   div.setAttribute("class","item")
   let h1=document.createElement("h1")
   h1.innerText=name;
   let h4=document.createElement("h4")
   h4.innerText=pric
   h4.setAttribute("class","product_price")
  let del=document.createElement("h5")
   del.innerText=`Delivered By:-${delivery}`
   del.setAttribute("class","product_delivery")
   let des=document.createElement("h3")
   des.innerText=description
  let  pic=document.createElement('img')
   pic.setAttribute("src",image)
   btn_remove=document.createElement("button")
   btn_remove.innerText="Remove"
   btn_remove.style.color="white"
   btn_remove.style.background="red"
   btn_remove.style.border="0px"
   btn_remove.setAttribute("class","remove_item")
   btn_remove.addEventListener("click",()=>{
      remove(id)
   })
   btn_Update=document.createElement("button")
   btn_Update.setAttribute("class","update_price")
   btn_Update.innerText="UP_date"
   btn_Update.addEventListener("click",()=>{
      upDate(id)
   })
   div.append(pic,h1,h4,del,des,btn_remove,btn_Update)
   container.append(div)
  })
}
upDate=async(id)=>{
  const value =  window.prompt("Enter_Newprice")
    let newcost={pric:+value}
    let res = await fetch(`https://js-211-mockserver.herokuapp.com/api/inventory/${id}`,{
        method:"PATCH",
        body:JSON.stringify(newcost),
        headers:{
            "Content-Type":"application/json",
        }
    })
    getData() 
}
remove=async(id)=>{
let res =await fetch(`https://js-211-mockserver.herokuapp.com/api/inventory/${id}`,{
    method:"DELETE",
})
 getData()
}
document.querySelector("#sort-low-to-high").addEventListener("click",()=>{
    lth()
})
document.querySelector("#sort-high-to-low").addEventListener("click",()=>{
    htl()
})
lth=async()=>{
 let res =await fetch(`https://js-211-mockserver.herokuapp.com/api/inventory?_sort=pric&_order=asc`)
 res=await res.json()
 renderDom(res)
}

htl=async()=>{
    let res =await fetch(`https://js-211-mockserver.herokuapp.com/api/inventory?_sort=pric&_order=desc`)
    res=await res.json()
    renderDom(res)
 }
 document.querySelector("#greater-than").addEventListener("click",()=>{
    greater()
 })
 document.querySelector("#less-than").addEventListener("click",()=>{
    lessequal()
 })
 greater=async()=>{
 let res1=await fetch(`https://js-211-mockserver.herokuapp.com/api/inventory?pric_gte=4000`)
 res2=await res1.json()
 renderDom(res2)
 }

 lessequal=async()=>{
    let res=await fetch(`https://js-211-mockserver.herokuapp.com/api/inventory?pric_lte=4000`)
    res=await res.json()
    renderDom(res)
    }