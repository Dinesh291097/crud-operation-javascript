let caps = () => {
    var mail = document.getElementById('email');
    mail.value = mail.value.toUpperCase();
}

let valid = () => {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let uname = document.getElementById("uname").value;
    let psw = document.getElementById("psw").value;
    let cpsw = document.getElementById("cpsw").value;
    let num = document.getElementById("num").value;
    let email = document.getElementById("email").value;
    let gender = document.formname.gender.value;
    let numregex = /^[7-9]\d{9}$/;
    let nameregex = /^[a-zA-Z -]+$/;
    let mailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let passwordregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let existingUserData = JSON.parse(localStorage.getItem("userdata")) || [];
    let userexist=existingUserData.some(userdata => userdata.email=== email)
    let userexist1=existingUserData.some(userdata => userdata.uname=== uname) 
    document.getElementById("fnameError").innerHTML = ""
    document.getElementById("lnameError").innerHTML = ""
    document.getElementById("passwordError").innerHTML = ""
    document.getElementById("numError").innerHTML = ""
    document.getElementById("mailError").innerHTML = ""
    document.getElementById("genderError").innerHTML = ""
    document.getElementById("unameError").innerHTML = ""


    if (fname.trim() == "" || lname.trim() == "" || uname.trim() == "" || psw.trim() == "" || cpsw.trim() == "" || num.trim() == "" || email.trim() == "") {
        alert(`missing credentials`)
        return false
    }
    if ((!nameregex.test(fname)) || fname.length < 2) {
        document.getElementById("fnameError").innerHTML = "Enter Alphabet and valid name only"
        return;
    }
    if ((!nameregex.test(lname)) || lname.length < 1) {
        document.getElementById("lnameError").innerHTML = "Enter Alphabet and valid name only"
        return;
    }
    if ((!mailregex.test(email))) {
        document.getElementById("mailError").innerHTML = "Enter valid mail id only"
        return;
    }

    if (psw !== cpsw) {
        document.getElementById("passwordError").innerHTML = "Password mismatch!"
        return;
    }
    if (gender == "") {
        document.getElementById("genderError").innerHTML = "Please select gender"
        return;
    }
    if (!numregex.test(num)) {
        document.getElementById("numError").innerHTML = "enter valid number"
        return;
    }
    
    if(userexist){
        document.getElementById("mailError").innerHTML = "email id already exists-use another mail id"
        return false;

    }
    if(userexist1)
    {
        document.getElementById("unameError").innerHTML = "username is already exists"
        return false;
    }

    document.getElementById("form").reset()
    alert(`submitted sucessfully :-)`)
    window.location.href=`login.html`
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth() + 1
    const day = currentDate.getDate()
    let time = year + "/" + month + "/" + day

    const newUser = {
        uname, fname, lname, psw, cpsw, num, email, gender, time
    }
    
    existingUserData.push(newUser);
    localStorage.setItem("userdata", JSON.stringify(existingUserData));


}

