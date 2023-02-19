// All the Code for the Rejected page goes here
notallow=JSON.parse(localStorage.getItem("admission-rejected"))||[];
  displayadmit(notallow)
function displayadmit(notallow){
    document.querySelector("tbody").innerHTML="";
    notallow.forEach(function(el){
        row=document.createElement("tr")
        col1=document.createElement("td")
        col1.innerText=el.nam
        col2=document.createElement("td")
        col2.innerText=el.mail
        col3=document.createElement("td")
        col3.innerText=el.course
        col4=document.createElement("td")
        col4.innerText=el.gender 
        col5=document.createElement("td")
        col5.innerText=el.mobile
        row.append(col1,col2,col3,col4,col5)
        document.querySelector("tbody").append(row)
    })
}