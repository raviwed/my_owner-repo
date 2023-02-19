
wallet=document.querySelector("#add_to_wallet").addEventListener("click",myfun)
let obj={"amount":0};
function myfun(){
    money=document.querySelector("#amount").value
   val= JSON.parse(localStorage.getItem("amount"))?.amount||0
   obj.amount=(Number(money)+Number(val))
   localStorage.setItem("amount",JSON.stringify(obj))
   document.querySelector("#wallet").innerHTML=(obj.amount)
}
