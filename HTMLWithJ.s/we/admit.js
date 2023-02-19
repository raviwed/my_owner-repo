async function AddPost(){
    let id=document.querySelector("#id").value
    let title=document.querySelector("#title").value
    let author=document.querySelector("#author").value
    let obj={
       id,
       title,
       author,
    }
    
    let res =await fetch(`http://localhost:3000/posts`,{
      method:'POST',
      body: JSON.stringify(obj),
      headers:{
        'Content-Type':'application/json',

      },

    });
     let data= await res.json()
     console.log(data)
   }
 async function deletepost(){
   let id=document.querySelector("#delete_id").value
   let res=await fetch(`http://localhost:3000/posts/${id}`,{
       method:'DELETE',
   headers:{
       'Content-Type':'application/json',

     },
   })
     let data= await res.json()
 }
//https://masai-api-mocker.herokuapp.com/auth/register
UpdataPost=async()=>{
 let id=document.querySelector("#updata_id").value
 let title= document.querySelector("#UpdateTitle").value
let obj={
    title,
 }
let res=fetch(`http://localhost:3000/posts/${id}`,{
 method:'PATCH',
 body:JSON.stringify(obj),
 headers:{
   'Content-Type':'application/json',
 }
})
let data=await res.json()
console.log(data)
}
replacePost=async()=>{

    let id=document.querySelector("#replace_id").value
    let title= document.querySelector("#replace_title").value
   let obj={
       title,
    }
   let res=fetch(`http://localhost:3000/posts/${id}`,{
    method:'PUT',
    body:JSON.stringify(obj),
    headers:{
      'Content-Type':'application/json',
    }
   })
   let data=await res.json()
   console.log(data)

}