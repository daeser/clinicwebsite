function validate(event){
    event.preventDefault();

    var nama = document.getElementById("nama");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var alamat = document.getElementById("alamat");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var checkbox = document.getElementById("checkbox");

    var errorMsg = document.getElementById("error-msg");

    if(nama.value === ''){
        errorMsg.innerHTML = "Nama harus di isi";
        errorMsg.style.color = "red";
        errorMsg.style.fontWeight = 'bold';
    }else if(email.value === ''){
        errorMsg.innerHTML = "Email harus di isi";
        errorMsg.style.color = "red";
        errorMsg.style.fontWeight = 'bold';
    }else if(!email.value.includes('@')){
        errorMsg.innerHTML = "Email harus ada '@'";
        errorMsg.style.color = "red";
        errorMsg.style.fontWeight = 'bold';
    }else if(!email.value.includes('.')){
        errorMsg.innerHTML = "Email harus ada '.'";
        errorMsg.style.color = "red";
        errorMsg.style.fontWeight = 'bold';
    } else if(!email.value.includes('.') || email.value.indexOf('.') - email.value.indexOf('@') < 2){
        errorMsg.innerHTML = "Email harus ada '.' dan tidak boleh berdekatan dengan '@'";
        errorMsg.style.color = "red";
        errorMsg.style.fontWeight = 'bold';
    }else if (!email.value.substring(email.value.indexOf('@') + 1, email.value.includes("."))) {
        errorMsg.innerHTML = "Nama Email harus di isi";
        errorMsg.style.color = "red";
        errorMsg.style.fontWeight = 'bold';
    }else if(password.value === ''){
        errorMsg.innerHTML = "Password harus di isi";
        errorMsg.style.color = "red";
        errorMsg.style.fontWeight = 'bold';
    }else if(!isAlphaNum(password.value)){
        errorMsg.innerHTML = "Password harus terdapat angka dan alphabet";
        errorMsg.style.color = "red";
        errorMsg.style.fontWeight = 'bold';
    }else if(alamat.value === ''){
        errorMsg.innerHTML = "Alamat harus di isi";
        errorMsg.style.color = "red";
        errorMsg.style.fontWeight = 'bold';
    } else if(!male.checked && !female.checked) {
        errorMsg.innerHTML = "Pilih salah satu jenis kelamin";
        errorMsg.style.color = "red";
        errorMsg.style.fontWeight = 'bold';
    } else if(!checkbox.checked) {
        errorMsg.innerHTML = "Anda harus menyetujui syarat dan ketentuan";
        errorMsg.style.color = "red";
        errorMsg.style.fontWeight = 'bold';
    }else{
        errorMsg.innerHTML = "";
        alert("Akun Telah Terbuat");
        window.location.href = "home.html";
    }
}

function isAlphaNum(password){
    var isAlpha = false;
    var isNum = false;

    for(let i = 0; i < password.length; i++){
        //1. Alpha
        if(isNaN(password[i])){
            isAlpha = true;
        }
        // 2. Number
        else{
            isNum = true
        }
        // 3. Break
        if(isAlpha && isNum){
            return true;
        }
    }
    return false
}