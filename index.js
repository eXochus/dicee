randomNumber1 = Math.floor(Math.random() * 6) + 1;

imgSelection1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", imgSelection1);

randomNumber2 = Math.floor(Math.random() * 6) + 1;

imgSelection2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", imgSelection2);

if (imgSelection1 > imgSelection2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}

else if (imgSelection2 > imgSelection1) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}

else {
    document.querySelector("h1").innerHTML = "You draw";
}
