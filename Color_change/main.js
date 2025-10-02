const btn= document.querySelector(".btn");
const colors=["red","blue","yellow","purple","orange"];
btn.addEventListener("click",function(){
    const random = Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor=colors[random];
});