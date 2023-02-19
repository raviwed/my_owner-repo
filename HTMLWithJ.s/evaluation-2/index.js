/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/
function laptop(name,image,email,country){
    this.name=name;
    this.image=image;
    this.email=email;
    this.country=country;
  }
let laptopone=()=>{
  let name=document.querySelector("#user_name").value;
  let image=document.querySelector("#user_pic").value;
  let email=document.querySelector("#user_email").value;
  let country=document.querySelector("#user_country").value;
  let newfunction=new laptop(name,image,email,country);
  localStorage.setItem("user",JSON.stringify(newfunction));
}
export {laptopone};
let navbar=()=>{
    return `<input type="search" name="" id="search_box" placeholder="search-news-here">
    <div id="ram">
    <h2 id="in">India</h2>
    <h2 id="us">Usa</h2>
    <h2 id="ch">China</h2>
    <h2 id="uk">UK</h2>
    <h2 id="nz">New Zealand</h2>
    </div>`;
}


let dataone=async(val)=>{
    try {
        let putone=await fetch(val);
        let butone=await putone.json();
        return butone.articles;
    } catch (error) {
        console.log(error);
    }
}


let lolopop=(data,location)=>{
    location.innerText=null;
    data.forEach(({author,description,urlToImage,title}) => {
        let take={
            urlToImage,
            title,
            description
        }

        let boss=document.createElement("div");
        boss.setAttribute("class","news");

        boss.addEventListener("click",function(){
            jaibalaya(take);
        })


        let one=document.createElement("img");
        one.src=urlToImage;

        let two=document.createElement("h3");
        two.innerText=title;

        let three=document.createElement("h4");
        three.innerText=author;

        boss.append(one,two,three);
        location.append(boss);
    });
}

let jaibalaya=(take)=>{
    localStorage.setItem("yamaha",JSON.stringify(take));
    window.location.href="news.html";
}
export{dataone}
export{lolopop}
export{navbar}
