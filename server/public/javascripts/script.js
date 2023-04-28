window.addEventListener('load',()=>{
    console.log("my document is loaded")

   let button1= document.getElementById('button1');
  button1.addEventListener('click',()=>{
    let para = document.createElement('p')
    para.innerText="hi the button is clicked"
    let div= document.getElementById('div')
    div.appendChild(para);

  })

})

http://localhost:3000/
127.0.0.1:3000