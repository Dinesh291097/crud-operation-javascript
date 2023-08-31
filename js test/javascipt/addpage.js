function save() {
    let name=document.getElementById("name").value;
    let quantity=document.getElementById("quantity").value
    let mrp=document.getElementById("mrp").value
    let sale=document.getElementById("sale").value
    let nameregex = /^[a-zA-Z -]+$/;
    let existingitems = JSON.parse(localStorage.getItem("itemData")) || []
    let productexists=existingitems.some(itemData => itemData.name === name)

    if(name.trim() =="" || quantity.trim() =="" || mrp.trim() =="" || sale.trim() ==""){
        alert(`Missing crediants`)
        return false
    }
    if(isNaN(quantity) || isNaN(mrp) || isNaN(sale)){
        alert(`enter valid number`)
        return;
    }
    if(!nameregex.test(name)){
        alert(`enter valid product`)
        return;
    }  
    if(productexists){
        alert(`products is already added in cart`)
        return false
    }
   
    
    document.getElementById("form").reset();
    window.open("pageview.html")

    const currentDate=new Date()
    const year=currentDate.getFullYear()
    const month=currentDate.getMonth()+1
    const day=currentDate.getDate()
    let time=year+"/"+month+"/"+day


    const newitems = {
        name, quantity, mrp, sale, time
    }
    // let existingitems = JSON.parse(localStorage.getItem("itemData")) || []
    existingitems.push(newitems);
    localStorage.setItem("itemData", JSON.stringify(existingitems));
    
}

