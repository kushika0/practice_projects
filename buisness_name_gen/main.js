function generator(x,y,z){
    let num = Math.floor(Math.random()*3)
    if (num==0){
        return x;
    }
    else if(num==1){
        return y;

    }
    else{
        return z;
    }
}
console.log("Generator name is "+ generator("Crazy","Amazing","Fire")+" "+generator("engine","Food","German")+" "+generator("Bros","Limited","Hub"))