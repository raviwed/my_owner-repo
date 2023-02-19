let confirmd=document.getElementById("confirm");

confirmd.addEventListener("click",function(){
    event.preventDefault()
    setTimeout(function(){
        alert("Your Order is accepted")
    },0)
    setTimeout(function(){
        alert("Your order is Being Prepared")
    },3000)
    setTimeout(function(){
        alert("Your order is Being Prepared")
    },8000)
    setTimeout(function(){
        alert("Your order is Being Prepared")
    },10000)
    setTimeout(function(){
        alert("Your order is Being Prepared")
    },12000)
    
})