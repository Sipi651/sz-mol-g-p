const csokkent1=document.getElementById("decrement1")
const novel1=document.getElementById("increment1")
const csokkent2=document.getElementById("decrement2")
const novel2=document.getElementById("increment2")
const szam1=document.getElementById("number1")
const szam2=document.getElementById("number2")


csokkent1.addEventListener("click", function(){
    szam1.textContent=parseInt(szam1.textContent)-1;
})



novel1.addEventListener("click", function(){
    szam1.textContent=parseInt(szam1.textContent)+1;
})




csokkent2.addEventListener("click", function(){
    szam2.textContent=parseInt(szam2.textContent)-1;
})



novel2.addEventListener("click", function(){
    szam2.textContent=parseInt(szam2.textContent)+1;
})

osszeadas=document.getElementById("osszeadas")
osszeadas=document.getElementById("kivonas")
osszeadas=document.getElementById("szorzas")
osszeadas=document.getElementById("osztas")

eredmeny=document.getElementById("eredmeny")
osszeadas.addEventListener("click",function () {
    let osszeg=parseInt(szam1.textContent)+parseInt(szam2.textContent)
    eredmeny.textContent=osszeg
})