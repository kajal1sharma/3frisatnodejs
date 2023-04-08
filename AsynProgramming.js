function doSomethingEvenMore(){
    console.log("line 5");
}
function doSomethingMore(){
    console.log("line 3");
    doSomethingEvenMore();
    console.log("line 4");
}
function doSomething(){
    console.log("line 1");
    doSomethingMore();
    console.log("line 2");
}

doSomething();


// function print(){
//     setTimeout(()=>{
//         console.log("Line 1")
//         setTimeout(()=>{
//             console.log("line2")
//         },3000)
//     },2000)
// }

// function doSomething(fnt){
//     console.log("line 0")
//     fnt()
//     console.log("line 4");
// }
// doSomething(print)


// function print(){
//     console.log("hello world 2")
// }

// console.log("hello world 1")

// setTimeout(print,0)
// console.log("hello world 3")

// function print(){
//     console.log("hello world")
// }

// function message(fnt){
//     fnt();
// }

// message(print);//fucntion callback => function passed as an
                //argumnet to a different 
