function validate(event){
    event.preventDefault();
    var nama = document.getElementById("nama");
    var email = document.getElementById("email");
    var textarea = document.getElementById("textarea");

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
    }else if(textarea.value === ''){
        errorMsg.innerHTML = "Mohon isi kritik dan saran";
        errorMsg.style.color = "red";
        errorMsg.style.fontWeight = 'bold';
    }else if(textarea.value.length > 300){
        errorMsg.innerHTML = "Maksimal 300 kata";
        errorMsg.style.color = "red";
        errorMsg.style.fontWeight = 'bold';
    }else{
        errorMsg.innerHTML = "";
        alert("Kritik & Saran Telah Dikirim. Terima Kasih.");
        location.reload();
    }
}