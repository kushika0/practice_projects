const value = document.getElementById("val");
const increase= document.getElementById("inc");
const decrease= document.getElementById("dec");
const reset= document.getElementById("reset");


let count = 0;
increase.addEventListener("click",function(){
    count++;
    value.textContent=count;
});

decrease.addEventListener("click",function(){
    count--;
    value.textContent=count;
});
reset.addEventListener("click",function(){
    count=0;
    value.textContent=count;
});