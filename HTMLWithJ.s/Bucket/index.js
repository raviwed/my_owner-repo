// Add the coffee to local storage with key "coffee"

function getData(){
    let url="https://masai-api.herokuapp.com/coffee/menu"
    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        display(res.menu.data)
    })
    .catch(function(error){
        console.log(error)
    })
}
getData()
function display(data){
    let parentDiv=document.getElementById("menu")

    data.forEach(function(ele,index){
        let typeOfCoffee=document.createElement("p")
        typeOfCoffee.textContent=ele.title

        let image=document.createElement("img")
        image.src=ele.image;

        let price=document.createElement("p");
        price.textContent=ele.price;

        let bucket=document.createElement("button");
        bucket.textContent="Add to bucket"
        bucket.addEventListener("click",function(){
            addfun(ele)
        })
        let diver=document.createElement("div")
        diver.append(image,typeOfCoffee,price,bucket)
        parentDiv.append(diver)
    })
}
var array=JSON.parse(localStorage.getItem("coffee"))||[]
function addfun(ele){
    array.push(ele)
    document.getElementById("coffee_count").textContent=Number(array.length)
    localStorage.setItem("coffee",JSON.stringify(array))
}