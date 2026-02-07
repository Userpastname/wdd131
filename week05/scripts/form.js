const year = document.querySelector("#last-modified");
const number = document.querySelector("#currentyear")
const today = new Date();
year.innerHTML = ` last modified ${document.lastModified}`
number.innerHTML =`©${today.getFullYear()}`

const productsss = document.querySelector("products")

const subButt = document.getElementById("submit"); 

let submissions = number(localStorage.getItem("number-subs")||0)

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

let inn = "";

for(const prod in products){
    inn += `<option value="${prod.id()}" >${prod.name()}</option>`;
}

productsss.textContent = inn

subButt.addEventListener('click',function(){
    submissions++;
    localStorage.setItem("number-subs",JSON.stringify(submissions))
})

