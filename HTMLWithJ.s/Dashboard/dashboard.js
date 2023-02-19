taskArr=JSON.parse(localStorage.getItem("task-list"))||[];
allow=JSON.parse(localStorage.getItem("priority-list"))||[];
document.querySelector("#filter").addEventListener("change",filterthevalue)
function filterthevalue(){
    selected=document.querySelector("#filter").value
    ravi=taskArr.filter(function(ele){
        return ele.SelectPriority ==selected;
    })
    Displaytable(ravi)
}
document.querySelector("#task-count").innerText=taskArr.length;
Displaytable(taskArr)
function Displaytable(taskArr){
    document.querySelector("tbody").innerHTML="";
    taskArr.forEach(function(el,index){
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
        col5.innerText=el.SelectPriority
        col6=document.createElement("td")
         col6.innerText="Add"
         col6.style.background="red"
         col6.style.color="white"
         col6.addEventListener("click",function(event){
            event.target.parentNode.remove()
            dashboard(index)
         });
        row.append(col1,col2,col3,col4,col5,col6),
        document.querySelector("tbody").append(row)
    });
}

  function dashboard(el,index){
   allow.push(taskArr[el])
   taskArr.splice(index,1)
   localStorage.setItem("priority-list",JSON.stringify(allow))
   localStorage.setItem("task-list",JSON.stringify(taskArr))
   document.querySelector("#task-count").innerText=taskArr.length
  }