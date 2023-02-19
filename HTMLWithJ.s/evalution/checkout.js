// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
container=document.querySelector("#movie")
val= JSON.parse(localStorage.getItem("amount"))?.amount||0
data=JSON.parse(localStorage.getItem("movie"))||[]
document.querySelector("#wallet").innerHTML = val
datawehave(data)
function datawehave(data){
        let div=document.createElement("div")
        div.setAttribute("class","movie_tab")
        let image=document.createElement("img")
        image.setAttribute("src",data.Poster)
        let h=document.createElement("h2")
        h.innerText=data.Title    
        div.append(h,image)
        container.append(div)
}
//document.querySelector("#confrim")
function show(){
    let seats = document.querySelector("#number_of_seats").value
    value= JSON.parse(localStorage.getItem("amount"))?.amount||0
    if (seats && value>seats*100) {
        obj = {"amount": value - seats*100};
        localStorage.setItem("amount", JSON.stringify(obj))
        document.querySelector("#wallet").innerHTML = value - seats*100
        alert("Booking successful!");
    } else {
        alert("Insufficient Balance!");
    }
    
}
