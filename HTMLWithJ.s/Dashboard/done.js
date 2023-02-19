// Write code related to Done page here
pro=JSON.parse(localStorage.getItem("done-list"))||[];
pro.forEach(function(el){
    row=document.createElement("tr")
        col1=document.createElement("td")
        col1.innerText=el.nam
        col2=document.createElement("td")
        col2.innerText=el.Description
        col3=document.createElement("td")
        col3.innerText=el.startdate
        col4=document.createElement("td")
        col4.innerText=el.enddate
        col5=document.createElement("td")
        col5.innerText=el. SelectPriority
        row.append(col1,col2,col3,col4,col5)
        document.querySelector("tbody").append(row)
    localStorage.setItem("done-list",JSON.stringify(pro))
});