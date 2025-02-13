let inputField;
document.getElementById("Button").addEventListener("click", function() {
    inputField = document.getElementById("Number");
    if (inputField.value !== "") {
        document.getElementById("label").textContent = "Player 2, Guess The Number";
        document.getElementById("Number").style.visibility = "hidden";
        document.getElementById("Button").style.visibility = "hidden";
        document.getElementById("Number2").style.visibility = "visible";
        document.getElementById("Button2").style.visibility= "visible";
    }
    else {
        document.getElementById("label").textContent = "Put a Number Man";
    }
});
document.getElementById("Button2").addEventListener("click", function() {
    let inputField2 = document.getElementById('Number2');
    if (inputField2.value === inputField.value) {
        document.getElementById("label").textContent = "Congrats";
        document.getElementById("Button2").style.visibility = "hidden";
        document.getElementById("Number2").style.visibility = "hidden";
        document.getElementById("Button3").style.visibility = "visible";
    }
    else {
        document.getElementById("label").textContent = "No. Try Again";
    }
});
document.getElementById("Button3").addEventListener("click", function() {
    document.getElementById("Number").style.visibility = "visible";
    document.getElementById("Button3").style.visibility = "hidden";
    document.getElementById("label").textContent = "Put A Number For Player 2 To Guess";
    document.getElementById("Button").style.visibility = "visible";
});