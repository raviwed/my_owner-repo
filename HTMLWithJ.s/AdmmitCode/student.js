// All the Code for All Students Page Goes Here
taskArr=JSON.parse(localStorage.getItem("admission"))||[];
allow=JSON.parse(localStorage.getItem("admission-accepted"))||[];
notallow=JSON.parse(localStorage.getItem("admission-rejected"))||[];
document.querySelector("#filter").addEventListener("change",filteraccording)
function filteraccording(){
  selected=document.querySelector("#filter").value
  if(selected =="all"){
    filteredarray=taskArr
  }else{
    filteredarray = taskArr.filter(function(ele){
      return ele.course==selected
    })
  }
  displaytable(filteredarray)
 
}
 displaytable(taskArr)
function displaytable(taskArr){
    document.querySelector("tbody").innerHTML="";
    taskArr.forEach(function(el,index){
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
        col6=document.createElement("td")
        col6.innerText="Admitted"
        col6.style. background="green";
        col6.style.color="white"
        col6.addEventListener("click",function(event){
          event.target.parentNode.remove()
            accepted(index)
        })
        col7=document.createElement("td")
        col7.innerText="Rejected"
        col7.style. background="red";
        col7.style.color="white"
        col7.addEventListener("click",function(event){
          event.target.parentNode.remove()
             rejected(index)
        })
        row.append(col1,col2,col3,col4,col5,col6,col7)
        document.querySelector("tbody").append(row)
    })
}
  function accepted(ele,index){
    allow.push(taskArr[ele])
    taskArr.splice(index,1)
    localStorage.setItem("admission-accepted",JSON.stringify(allow))
    localStorage.setItem("admission",JSON.stringify(taskArr))
  }

  function rejected(ele,index){
    notallow.push(taskArr[ele])
    taskArr.splice(index,1)
    localStorage.setItem("admission-rejected",JSON.stringify(notallow))
    localStorage.setItem("admission",JSON.stringify(taskArr))
  }