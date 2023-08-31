function caps() {
    var mail=document.getElementById('email');
    mail.value=mail.value.toUpperCase();
    
}
let login =() => {
    let email=document.getElementById("email").value
    let password=document.getElementById("lpsw").value
    if(email.trim() ==''&& password.trim() ==""){
        alert(`missing crediantls`)
        return false;
    }
    
    
    let existingUserData = JSON.parse(localStorage.getItem("userdata"));
    //console.log(existingUserData);
    let userdetail=existingUserData.find((index) => (email == index.email) && (password == index.psw))
        if(userdetail){
            alert(`login sucessfully`)
            window.location.href="dashboard.html";
            localStorage.setItem("loginuser",JSON.stringify(userdetail));
            
            return;
        }
        if(email.trim() ==''&& password.trim() ==""){
            alert(`missing crediantls`)
            return;
        }
        else {
            alert(`invalid user`);
            return;
        }
        
        
    
    
}
