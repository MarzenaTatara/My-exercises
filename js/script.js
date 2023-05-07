console.log("Cześć");

let button = document.querySelector(".button");
let header = document.querySelector(".header");
let changeBackground = document.querySelector(".changeBackground");
let mainContener = document.querySelector(".mainContener");
let footer = document.querySelector(".footer");


button.addEventListener("click", () => {
    header.remove();

});

changeBackground.addEventListener("click", () => {

    if (changeBackground.innerText === "Włącz ciemny motyw") {
        changeBackground.innerText = "Włącz jasny motyw";
        mainContener.classList.toggle("dark");
    } else if (changeBackground.innerText === "Włącz jasny motyw") {
        changeBackground.innerText = "Włącz ciemny motyw";
        mainContener.classList.toggle("jasne");
    }
});

let number1 = 11;
let number2 = 10;

let message = number1 > number2 ? "number1 jest większe" : "number1 nie jest większe";

console.log(message);

let powrot = document.querySelector(".powrot");
button = document.querySelector(".button");

button.addEventListener("click", () => {

    if (powrot.innerText === "Wróć na górę") {
        powrot.innerText = "Idź dalej";
    } else if (powrot.innerText === "Idź dalej") {
        powrot.innerText = "Wróć na górę";
    }
});




