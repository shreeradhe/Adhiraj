 function Captcha(){
    var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    var i;
    for (i=0;i<4;i++) {
        var a = alpha[Math.floor(Math.random() * alpha.length)];
        var b = alpha[Math.floor(Math.random() * alpha.length)];
        var c = alpha[Math.floor(Math.random() * alpha.length)];
        var d = alpha[Math.floor(Math.random() * alpha.length)];
    }
    var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d;
    $(".extraCaptcha").each(function() {
        $(this).html(code);
    });
}

function ValidCaptcha(string2){
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    console.log(string1);
    console.log(string2);
    if (string1 == string2) {
        return true;
    } else {        
        return false;
    }
}

function removeSpaces(string){
    return string.split(' ').join('');
}