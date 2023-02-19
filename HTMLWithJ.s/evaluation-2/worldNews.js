
let  shotone=document.querySelector("#sidebar");
let arrayone = JSON.parse(localStorage.getItem("user"));

let funone=(dataone)=>{
  let one=document.createElement("img");
  one.setAttribute("id","user_img")
  one.setAttribute("src",dataone.image);

  let two=document.createElement("h3");
  two.setAttribute("id","user_name");
  two.innerText=dataone.name;

  let three=document.createElement("h3");
  three.setAttribute("id","user_email");
  three.innerText=dataone.email;

  let four=document.createElement("h3");
  four.setAttribute("id","user_country");
  four.innerText=dataone.country;

  shotone.append(one,two,three,four);

}
funone(arrayone)


