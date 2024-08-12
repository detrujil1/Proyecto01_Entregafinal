const botonLuna = document.querySelector("#botonLuna")
const teamBlack =document.querySelector("body")
const mainBlack =document.querySelector("main")
const recipeContainers = document.querySelectorAll(".imagenReceta");

botonLuna.addEventListener("click", () =>{
    teamBlack.classList.toggle("bodyBlack")
    mainBlack.classList.toggle("mainBlack")
    recipeContainers.forEach(item=>{
        item.classList.toggle("imagenRecetablack")
    })
})

