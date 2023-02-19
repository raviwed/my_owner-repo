let taskArr=JSON.parse(localStorage.getItem("users"))||[];
    signUp=()=>{
    let name=document.querySelector("#name").value;
    let mail=document.querySelector("#email").value;
    let pass =document.querySelector("#password").value;
    obj={
    name,
    mail,
    pass,
    } 
    isvalid=true
    taskArr.forEach(x=>{
        if(obj.mail==x.mail){
            isvalid=false
         alert("user already exist")
        }
     })
     if(isvalid) {
        taskArr.push(obj)
        localStorage.setItem("users",JSON.stringify(taskArr))   
     }
   
    }