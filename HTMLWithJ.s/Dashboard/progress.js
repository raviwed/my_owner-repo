// Write code for the Progress page here 
allow=JSON.parse(localStorage.getItem("priority-list"))||[];
pro=JSON.parse(localStorage.getItem("done-list"))||[];
displaytable(allow)
function displaytable(allow){
    document.querySelector("tbody").innerHTML="";
    allow.forEach(function(el,index){
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
            col6=document.createElement("td")
             col6.innerText="Add to done"
             col6.style.background="red"
             col6.style.color="white"
             col6.addEventListener("click",function(event){
                event.target.parentNode.remove()
                progress(index)
             });
            row.append(col1,col2,col3,col4,col5,col6),
            document.querySelector("tbody").append(row)
         });
}
     function progress(index){
        pro.push(allow[index])
        allow.splice(index,1);
        localStorage.setItem("done-list",JSON.stringify(pro))
        localStorage.setItem("priority-list",JSON.stringify(allow))
    }
