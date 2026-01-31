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


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
    {
    templeName: "Columbia River Washington Temple",
    location: "Richland, Washington",
    dedicated: "2001, November, 18",
    area: 16880,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/columbia-river-washington-temple/columbia-river-washington-temple-39505-main.jpg"
  },
      {
    templeName: "Rome Italy Temple",
    location: "Rome, RM",
    dedicated: "2019, March, 10-12",
    area: 41010,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
  },
{
    templeName: "Winnipeg Manitoba Temple",
    location: "Winnipegm, Manitoba",
    dedicated: "2021, October, 31",
    area: 16100,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/winnipeg-manitoba-temple/winnipeg-manitoba-temple-22437-main.jpg"
  },
  
  // Add more temple objects here...
];




let rows ="";
const pictures = document.querySelector(".sect")
for (const temple of temples){
    rows += `
    <div><figure>
    <img src=${temple.imageUrl} alt=${temple.templeName} loading="lazy">
    <figcaption>
    Title: ${temple.templeName}
    Location: ${temple.location}
    Area: ${temple.area}
    Dedicated: ${temple.dedicated}
    </figcaption>
    </figure></div>
    `
}
pictures.innerHTML = rows;

const old = document.querySelector(".old")
const news = document.querySelector(".new")
const large = document.querySelector(".large")
const small = document.querySelector(".small")
const home = document.querySelector(".home")

old.addEventListener("click", ()=>{
    rows = "";
    let dates = string[3];
    let year = 0;
    for(const temple of temples){
        dates = temple.dedicated.split(",");
        year = dates[0];
        if(year <1900){
            rows += `
            <div><figure>
            <img src=${temple.imageUrl} alt=${temple.templeName} loading="lazy">
            <figcaption>
            Title: ${temple.templeName}
            Location: ${temple.location}
            Area: ${temple.area}
            Dedicated: ${temple.dedicated}
            </figcaption>
            </figure></div>
            `
        }

    }
    pictures.innerHTML = rows;
})
news.addEventListener("click", ()=>{
    rows = "";
    let dates = string[3];
    let year = 0;
    for(const temple of temples){
        dates = temple.dedicated.split(",");
        year = dates[0];
        if(year >2000){
            rows += `
            <div><figure>
            <img src=${temple.imageUrl} alt=${temple.templeName} loading="lazy">
            <figcaption>
            Title: ${temple.templeName}
            Location: ${temple.location}
            Area: ${temple.area}
            Dedicated: ${temple.dedicated}
            </figcaption>
            </figure></div>
            `
        }

    }
    pictures.innerHTML = rows;
})
large.addEventListener("click", ()=>{
    rows = "";
    for(const temple of temples){
        if(temple.area >90000){
            rows += `
            <div><figure>
            <img src=${temple.imageUrl} alt=${temple.templeName} loading="lazy">
            <figcaption>
            Title: ${temple.templeName}
            Location: ${temple.location}
            Area: ${temple.area}
            Dedicated: ${temple.dedicated}
            </figcaption>
            </figure></div>
            `
        }
    }
    pictures.innerHTML = rows;
})
small.addEventListener("click", ()=>{
    rows = "";
    for(const temple of temples){
        if(temple.area <10000){
            rows += `
            <div><figure>
            <img src=${temple.imageUrl} alt=${temple.templeName} loading="lazy">
            <figcaption>
            Title: ${temple.templeName}
            Location: ${temple.location}
            Area: ${temple.area}
            Dedicated: ${temple.dedicated}
            </figcaption>
            </figure></div>
            `
        }
    }
    pictures.innerHTML = rows;
})
home.addEventListener("click", ()=>{
    rows = "";
    for (const temple of temples){
        rows += `
        <div><figure>
        <img src=${temple.imageUrl} alt=${temple.templeName} loading="lazy">
        <figcaption>
        Title: ${temple.templeName}
        Location: ${temple.location}
        Area: ${temple.area}
        Dedicated: ${temple.dedicated}
        </figcaption>
        </figure></div>
        `
    }
    pictures.innerHTML = rows;
})
