function forgetMDP() {
    alert("Login : jsp \n Mot de passe : 1234");
}

function retourMenu(){
    document.location.href="../templates/index.html"
}

function ValidateIPaddress(ipaddress) {
    let patternIp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (patternIp.test(ipaddress)) {
        return true
    }else{
        alert("You have entered an invalid IP address!")
        return false
    }
}