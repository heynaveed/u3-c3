let data = JSON.parse(localStorage.getItem("user"));
   data.forEach(function(elem){
    document.getElementById("wallet_balance").innerText=elem.wallet;
   })
let URL =` https://masai-vouchers-api.herokuapp.com/api/vouchers`;

fetch(URL).then(function(res){
    res.json().then(function(res){
        
        for(i=0;i<1;i++)
        {
            appends(res[i].vouchers);
        }
        
    })
})
.catch(function(err){
    console.log(err)
})

let appends = (datas)=>{
    

    datas.forEach(function(vouchers){
        let box = document.createElement("div");
        box.setAttribute("class","voucher");
    
        let image = document.createElement("img");
        image.src=vouchers.image;

        let name = document.createElement("h3");
        name.innerText=vouchers.name;

        let price = document.createElement("p");
        price.innerText=vouchers.price;
        price.setAttribute("id","price")

       let button= document.createElement("button");
         button.setAttribute("class","buy_voucher")
        button.addEventListener("click",function(elem)
        {
            funbutton(elem)
        });
         button.innerText="Buy_Voucher";  
        box.append(image,name,price,button);
        document.getElementById("voucher_list").append(box)
})
  
}

let funbutton=(elem)=>{
    let d= JSON.parse(localStorage.getItem("user"));
    d.forEach(function(elem){
        let X=elem.wallet;
        let Y=document.getElementById("price").innerText;
        if(X>Y)
        {
            alert="Hurray! purchase successful"
        }
        else{
            alert="Sorry! insufficient balance"
        }
        
       })
    
}