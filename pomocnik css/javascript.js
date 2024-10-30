function load() {
    document.getElementById("table").style.display = "none";
}


function genPalete() {
    let num = parseInt(document.getElementById("number").value);
    
    if (num >= 0 && num <= 360) {
        document.getElementById("table").style.display = "block";
        document.getElementById("kolorMain").style.backgroundColor = "hsl("+num+", 100%, 50%)";
        document.getElementById("kolorOne").style.backgroundColor = "hsl("+num+", 80%, 50%)";
        document.getElementById("kolorTwo").style.backgroundColor = "hsl("+num+", 60%, 50%)";
        document.getElementById("kolorThree").style.backgroundColor = "hsl("+num+", 40%, 50%)";
        document.getElementById("kolorFour").style.backgroundColor = "hsl("+num+", 20%, 50%)";
    } else {
        document.getElementById("table").style.display = "none";
        alert("Wybierz poprawną liczbę z zakresu 0-360");
    }
}