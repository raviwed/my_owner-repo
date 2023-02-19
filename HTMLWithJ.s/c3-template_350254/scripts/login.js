var data=JSON.parse(localStorage.getItem("users"))||[];
    login=()=>{
    let email =document.querySelector("#email").value;
    let pass1=document.querySelector("#password").value;
    isValid = false;
     data.forEach((el)=>{
        if(email==el.mail&&pass1==el.pass && isValid == false){
            alert("login sucessfull")
            isValid = true
            localStorage.setItem("login",true)
        }
    })
   if (isValid==false) {
       alert("Wrong credentials")
    localStorage.setItem("login",false)
   }
    }
    
