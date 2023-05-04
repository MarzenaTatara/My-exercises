console.log("Cześć");

let button = document.querySelector(".button");
let header = document.querySelector(".header");
let changeBackground = document.querySelector(".changeBackground");
let mainContener = document.querySelector(".mainContener");


button.addEventListener("click", () => {
    header.remove();

});

changeBackground.addEventListener("click", () => {

    if (changeBackground.innerText === "Włącz jasny motyw") {
        changeBackground.innerText = "Włącz ciemny motyw";
        mainContener.classList.toggle("jasne");
    } else if (changeBackground.innerText === "Włącz ciemny motyw") {
        changeBackground.innerText = "Włącz jasny motyw";
        mainContener.classList.toggle("dark");
    }
});

