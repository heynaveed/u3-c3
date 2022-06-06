
let funsubmit = ()=>{

    let arr= [];
    function Info (name,email,address,amount){
        this.name = name;
        this. email= email;
        this.address=address;
        this.wallet=amount;
    }

  let name=  document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;
  let amount = document.getElementById("amount").value;
  console.log(name)

  let p = new Info(name,email,address,amount)
  arr.push(p)
  console.log(arr)

  localStorage.setItem("user",JSON.stringify(arr));

  document.getElementById("name").value=null;
  document.getElementById("email").value=null;
  document.getElementById("address").value=null;
  document.getElementById("amount").value=null;
  
}