const year = document.querySelector("#last-modified");
const number = document.querySelector("#currentyear")
const today = new Date();
year.innerHTML = ` last modified ${document.lastModified}`
number.innerHTML =`©${today.getFullYear()}`

let temp = 0;
let wSpeed = 0;

function calculateWindChill(temp, speed){
    let result = 0;
    if(temp<= 10){
        return "N/A"
    }
    else if(speed>4.8){
        return "N/A"
    }
    else{
        result = 13.12 + (0.6215*temp)-(11.37*speed^0.16)+(0.3965*temp*speed^0.16)
        return `${result}km/h`;
    }
}
