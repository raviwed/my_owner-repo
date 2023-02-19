// On clicking remove button the item should be removed from DOM as well as localstorage.as localstorage.
let data  = JSON.parse(localStorage.getItem("coffee")) || []

display(data)
function display(data){
    let sum = 0;
    let parentDiv = document.getElementById("bucket");
    data.forEach((element,index) => {
        sum += element.price
        let total = document.getElementById("total_amount").textContent = Number(sum)
        
         // Each item should show type of coffee, image, price and add to bucket button.
    let typeOfCofee = document.createElement("p")
    typeOfCofee.textContent = element.title

    let image = document.createElement("img")
    image.src = element.image

    let price = document.createElement("p")
    price.textContent = element.price

    let bucket = document.createElement("button");
    bucket.setAttribute("id","remove_coffee")
    bucket.textContent = "Remove"
    bucket.addEventListener("click",function(){
        remove(element,index)
    })
    let diver = document.createElement("div")
    diver.append(image,typeOfCofee,price,bucket)
    parentDiv.append(diver)
    });
}

function remove(element,index){
    data.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(data))
    window.location.reload()
}