window.addEventListener('load',async ()=>{
    let div = document.getElementById('productlist');
    fetch('http://localhost:4000/product/productlist')
    .then(data=>{
        return data.json();
    })
    .then(data=>{
        console.log(data);
        let arr=[];
        arr= data.forEach(ele=>{
            let head=document.createElement('h2')
            head.innerText=ele.title;
            div.appendChild(head);
            // return head;
        })

        //  div.appendChild(arr[0]);
        //  div.appendChild(arr[1]);
    });
    

});
