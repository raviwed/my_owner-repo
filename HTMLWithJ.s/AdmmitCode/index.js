// All the JS Code for the Add Students Page Goes Here
document.querySelector("form").addEventListener("submit",dataenter)
    taskArr=JSON.parse(localStorage.getItem("admission"))||[];
     function dataenter(event){
        event.preventDefault();
        obj={
          nam :document.querySelector("#name").value,
          mail : document.querySelector("#email").value,
          mobile : document.querySelector("#phone").value,
          gender : document.querySelector("#gender").value,
          course : document.querySelector("#course").value,
        }
        if(obj.nam&&obj.mail&&obj.mobile&&obj.gender&&obj.course){
          taskArr.push(obj)
          localStorage.setItem("admission",JSON.stringify(taskArr))
        }else{
          alert("please fill all the feilds ")
        }
        
     }
    
