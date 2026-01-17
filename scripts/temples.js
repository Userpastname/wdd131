const year = document.querySelector("#last-modified");
const number = document.querySelector("#currentyear")
const today = new Date();
year.innerHTML = ` last modified ${document.lastModified}`
number.innerHTML =`©${today.getFullYear()}`

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () =>{
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
})