function print(){
    console.log("hi iam print");
}
function wish(){
    console.log("hi iam wish");
}
//print()

function doSomething(num, funct){
    console.log(num);
    funct();//print()
}
doSomething(12,function (){
    console.log("hi iam wish");
})

