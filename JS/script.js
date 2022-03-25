function forgetMDP() {
    alert("Identifiant par défaut \n Login : Admin \n Mot de passe : 1234");
}

function retourMenu(){
    document.location.href="../templates/index.html"
    return false
}

function ValidateIPaddress(ipaddress,mask) {
    let patternMask = /^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/;
    let patternIp = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (patternIp.test(ipaddress) && patternMask.test(mask)) {
        return true
    }else{
        alert("Adresse IP ou masque de sous réseau invalide")
        return false
    }
}