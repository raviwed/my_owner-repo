window.addEventListener('load',()=>{
    getData()
 })
 
 getData=async()=>{
 let res =await fetch(`http://localhost:3000/api/todo`);
 data= await res.json();
 renderDom(data)
 }
 
 renderDom=(data)=>{
     let container=document.querySelector("#container")
     container.innerHTML=null;
  data.forEach(({id,title,status})=>{
     let div =document.createElement('div')
     let h3=document.createElement("h3");
     h3.innerText=title;
     let p=document.createElement("p")
     p.innerText=status;
     let delete_btn=document.createElement("button")
     delete_btn.addEventListener("click",()=>{
         remove(id)
     })
     delete_btn.innerText="delete"
    let toggle_id=document.createElement("button")
    toggle_id.addEventListener("click",()=>{
     toggle(id)
    })
    toggle_id.innerText="toggle"
    div.append(h3,p,delete_btn,toggle_id)
    container.append(div)
 })
 }
 
 AddTodo=async()=>{
  let todo=document.querySelector("#todo").value;
  let todo_data={
     title:todo,
     id:Date.now()+todo,
     status:false,
  };
  let res= await fetch(`http://localhost:3000/api/todo`,{
     method:"POST",
     body:JSON.stringify(todo_data),
     headers:{
         "Content-Type":"application/json"
     },
  });
  getData();
 }
 remove=async(id)=>{
 let res =await fetch(`http://localhost:3000/api/todo/${id}`,{
     method:"DELETE",  
 });
 getData();
 }
 toggle=async(id)=>{
  let todo =await fetch(`http://localhost:3000/api/todo/${id}`);
   todo=await todo.json()
 let todo_status={status:!todo.status}
     let res =await fetch(`http://localhost:3000/api/todo/${id}`,{
         method:"PATCH",  
         body:JSON.stringify(todo_status),
         headers:{
             "Content-Type":"application/json"
         },
     });
     getData();
 }