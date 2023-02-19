// Write code related to Home page here 
document.querySelector("form").addEventListener("submit",displaytable);
 taskArr=JSON.parse(localStorage.getItem("task-list"))||[];
function displaytable(event){
    event.preventDefault()
obj={
     nam:document.querySelector("#name").value,
     Description : document.querySelector("#desc").value,
     startdate :document.querySelector("#start").value,
     enddate : document.querySelector("#end").value,
     SelectPriority:document.querySelector("#priority").value
}
taskArr.push(obj)
taskArr=localStorage.setItem("task-list",JSON.stringify(taskArr))

}