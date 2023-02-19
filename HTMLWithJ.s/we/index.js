Registration=async()=>{
  register_data={
    name:document.querySelector("#name").value,
    email:document.querySelector("#email").value,
    username:document.querySelector("#username").value,
    password:document.querySelector("#password").value,
    mobile:document.querySelector("#mobile").value,
    description:document.querySelector("#description").value,
  };
  let res= await fetch('https://masai-api-mocker.herokuapp.com/auth/register',{
    method:'POST',
    body:JSON.stringify(register_data),
    headers:{
        'Content-Type':'application/json',
      }
  }) 
   let data = await res.json();
   console.log(data)
}
login=async()=>{
   let login_Data={
    username:document.querySelector("#login_username").value,
    password:document.querySelector("#login_username").value,
   } ;
   let res= await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
    method:'POST',
    body:JSON.stringify(login_Data),
    headers:{
        'Content-Type':'application/json',
      },
   });
   let data =await res.json()
   console.log(data)
   let {username}=login_Data;
   let {token}=data;
   getProfile(username,token)
};
let getProfile=async(username,token)=>{
  let res=await fetch(` https://masai-api-mocker.herokuapp.com/user/${username} `,{
    headers:{
      'Content-Type':'application/json',
      Authorization:`Bearer${token}`,
    },
  })
  let data =await res.json()
}
