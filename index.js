var minusbtn = document.getElementsByClassName("fa-minus")
var plusbtn = document.getElementsByClassName("fa-plus")
var qtt = document.getElementsByClassName("qtt")
var price = document.getElementsByClassName("prix")
var total = document.getElementById("total")
var fav = document.getElementsByClassName("fa-heart")
var del = document.getElementsByClassName("delete")
var articles = document.getElementsByClassName("cartart")


const calculTotal = () =>{
    var prixTotal = 0
    for (let index = 0; index < price.length; index++) {
        let d = price[index].innerHTML
        let q = qtt[index].innerHTML
        prixTotal = prixTotal+  parseInt(d) * parseInt(q)
        
    }
    total.innerHTML= prixTotal
}



for (let index = 0; index < minusbtn.length; index++) {
    minusbtn[index].addEventListener("click", decrement)
    function decrement ()  {
        var q = parseInt(qtt[index].innerHTML)
        if (q>0) {
            q-- 
        }
        qtt[index].innerHTML = q
        calculTotal()
    } 
    
}
for (let index = 0; index < plusbtn.length; index++) {
    plusbtn[index].addEventListener("click", increment)
    function increment ()  {
        var q = parseInt(qtt[index].innerHTML)
          q++
        qtt[index].innerHTML = q
        calculTotal()
    } 
    
}

for (let index = 0; index < fav.length; index++) {
    fav[index].addEventListener("click", ()=> {
        if (fav[index].style.color =="red") {
            fav[index].style.color ="black"
        }else {
            fav[index].style.color ="red"
        }
        
    })
    
}


for (let index = 0; index < articles.length; index++) {
    del[index].addEventListener("click",suppression)
    function suppression(){
       articles[index].remove()
       calculTotal()
    }
    
}






//onload---------------------------------------------------------
calculTotal()

