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

const cornell = document.querySelector(".chris-drop")
const theyil = document.querySelector(".kim-drop")
const shepherd = document.querySelector(".ben-drop")
const cameron = document.querySelector(".matt-drop")

const mimage = document.querySelector(".mobile-img")

let infrr = document.getElementById("info")

let bruh = "";

const counter = document.getElementById("visited")

counter.textContent = `members visited: ${calcAndUpdateVisits}`;

let cornellVisited = JSON.parse(localStorage.getItem("cornell")||0)
let theyilVisited = JSON.parse(localStorage.getItem("theyil")||0)
let shepherdVisited = JSON.parse(localStorage.getItem("shepherd")||0)
let cameronVisited = JSON.parse(localStorage.getItem("cameron")||0)

function calcAndUpdateVisits(){

    cornellVisited = JSON.parse(localStorage.getItem("cornell")||0)
    theyilVisited = JSON.parse(localStorage.getItem("theyil")||0)
    shepherdVisited = JSON.parse(localStorage.getItem("shepherd")||0)
    cameronVisited = JSON.parse(localStorage.getItem("cameron")||0)

    let visits = 0;
    visits = cornellVisited + theyilVisited + shepherdVisited + cameronVisited;
    return visits
}

cornell.addEventListener("click",()=>{
    localStorage.setItem("cornell","1")
    counter.textContent = `members visited: ${calcAndUpdateVisits}`;
    bruh =`
            <div>
                <img src="images/members/webp/parents.webp" alt="Karen Cornell and Edward Boyle's highschool photos collaged side by side">
            </div>
            <div class="box">
                <h2>Karen Cornell, Edward Boyle</h2>
                <p>Chris Cornell was one of six children, and born in Seattle. His Dad a pharmacist, and his Mom a self proclaimed psychic. He performed for the first time at a Catholic elementary school singing “One Tin Soldier”. He took piano and guitar lessons.</p>
            </div>
            <div>
                <img src="images/members/jpg/chris-young.jpg" alt="close up of chris cornell in 1982">
            </div>
            <div class="box">
                <h2>Born Christopher John Boyle July 20, 1964</h2>
                <p>When Chris was 12 (1976) had daily access and subsequent use of alcohol and marijuana. For two years as a teenager he abused substances and was chronically alone. Taking a break after trying PCP for a year, he had a panic disorder and agoraphobia. Relapsing at 15 (1979) after the break for another year of weed and beer, when then he found and was given Beatles records from his neighbors.He started to connect to people through music. He was contemplating suicide still when his mom bought him a snare drum, this pushed him to want to become a rock musician. Before he was successful, he worked as a busboy, dishwasher, fishmonger, and chef.</p>
            </div>
            <div>
                <img src="images/members/webp/final-performance.webp" alt="Photo of Chris Cornell Singing at his final performance">
            </div>
            <div class="box">
                <h2>Final Performance 2017 followed by suicide</h2>
                <p>“Many of us who know Chris well noticed that he wasn't himself during his final hours and that something was very off. We have learned from this report that several substances were found in his system. After so many years of sobriety, this moment of terrible judgment seems to have completely impaired and altered his state of mind. Something clearly went terribly wrong and my children and I are heartbroken and are devastated that this moment can never be taken back.”</p>
            </div>
            `
    infrr.innerHTML= bruh;
})
theyil.addEventListener("click",()=>{
    localStorage.setItem("theyil","1")
    counter.textContent = `members visited: ${calcAndUpdateVisits}`;
    infrr.innerHTML=`
                <div>
                <img src="images/members/webp/kimthyil.webp" alt="young theyil" loading="lazy">
            </div>
            <div class="box">
                <h2>Born Kim Anand Thayil, September 4, 1960</h2>
                <p>Born in Seattle, Thayil grew up in Chicago in Park Forest. His parents were immigrants from Kerala, India. His mother was a music teacher and his dad was a chemical engineer. He started songwriting when he was 12 (1972). His first band was formed in 1977 and their first gig was for a school talent show. Thayil met Hiro Yamamoto in Chicago. They moved to Olympia, Washington where Thayil got a philosophy degree at the University of Washington. In Seattle they met Chris Cornell as a roommate and the three of them formed Soundgarden after jamming together.</p>
            </div>`
})
shepherd.addEventListener("click",()=>{
    localStorage.setItem("shepherd","1")
    counter.textContent = `members visited: ${calcAndUpdateVisits}`;
    infrr.innerHTML=`
                <div>
                <img src="images/members/webp/bensheppp.webp" alt="young ben shepherd" loading="lazy">
            </div>
            <div class="box">
                <h2>Born Hunter Benedict Shepherd, September 20, 1968</h2>
                <p>Shepherd was born in an American military base in Okinawa. His family then moved from Allen, Texas to Kingston, Washington where Shepherd grew up. Shepherd became interested in music after listening to Johnny Cash on television. When Shepherd asked his father for a guitar, he said “only if you learn every chord in this book with nothing but a guitar neck”. In his teenage years he played in many bands with friends such as March of Crimes, Mind Circus, and 600 School. After highschool he played in Tic Dolly Row and Nirvana.</p>
            </div>` 
})
cameron.addEventListener("click",()=>{
    localStorage.setItem("cameron","1")
    counter.textContent = `members visited: ${calcAndUpdateVisits}`;
    infrr.innerHTML=`
            <div>
                <img src="images/members/webp/young-cameron.webp" alt="young camerons band kiss" loading="lazy">
            </div>
            <div class="box">
                <h2>Born Matthew David Cameron November 28 1962</h2>
                <p>“Foo” Was born in San Diego and also grew up in Chula Vista Cali’. He grew up playing drums starting at 9 (1971) years old and made a cover band at 13 (1975). Meeting Paul Stanley and Kiss’ legal team subsequently the band separated. His older brother called him “Ma Foo” with his lisp so his nickname as “Foo Cameron” he sang “Puberty Love” which was featured in the movie “Attack of the Killer Tomatoes”. </p>
            </div>
            <div>
                <img src="images/members/webp/mattcameron.webp" alt="matt cameron drumming" loading="lazy">
            </div>
            <div class="box">
                <h2>Seattle Musician</h2>
                <p>In 1983, Foo moved to Seattle and played in three bands Bam Bam, feeDBack, Skin Yard, and in 1986 Soundgarden. (secretly eventually Pearl Jam)</p>
            </div>`
})

const cory = document.querySelector(".corneller")
const theyily = document.querySelector(".kimtheyil")
const shepy = document.querySelector(".shepherd")
const camy = document.querySelector(".cameron")

cory.addEventListener("click",()=>{
    localStorage.setItem("cornell","1")
    counter.textContent = `members visited: ${calcAndUpdateVisits}`;
    infrr.innerHTML=`
            <div>
                <img src="images/members/webp/parents.webp" alt="Karen Cornell and Edward Boyle's highschool photos collaged side by side">
            </div>
            <div class="box">
                <h2>Karen Cornell, Edward Boyle</h2>
                <p>Chris Cornell was one of six children, and born in Seattle. His Dad a pharmacist, and his Mom a self proclaimed psychic. He performed for the first time at a Catholic elementary school singing “One Tin Soldier”. He took piano and guitar lessons.</p>
            </div>
            <div class="box">
                <h2>Born Christopher John Boyle July 20, 1964</h2>
                <p>When Chris was 12 (1976) had daily access and subsequent use of alcohol and marijuana. For two years as a teenager he abused substances and was chronically alone. Taking a break after trying PCP for a year, he had a panic disorder and agoraphobia. Relapsing at 15 (1979) after the break for another year of weed and beer, when then he found and was given Beatles records from his neighbors.He started to connect to people through music. He was contemplating suicide still when his mom bought him a snare drum, this pushed him to want to become a rock musician. Before he was successful, he worked as a busboy, dishwasher, fishmonger, and chef.</p>
            </div>
            <div>
                <img src="images/members/jpg/chris-young.jpg" alt="close up of chris cornell in 1982">
            </div>

            <div>
                <img src="images/members/webp/final-performance.webp" alt="Photo of Chris Cornell Singing at his final performance">
            </div>
            <div class="box">
                <h2>Final Performance 2017 followed by suicide</h2>
                <p>“Many of us who know Chris well noticed that he wasn't himself during his final hours and that something was very off. We have learned from this report that several substances were found in his system. After so many years of sobriety, this moment of terrible judgment seems to have completely impaired and altered his state of mind. Something clearly went terribly wrong and my children and I are heartbroken and are devastated that this moment can never be taken back.”</p>
            </div>
            `

})
theyily.addEventListener("click",()=>{
    localStorage.setItem("theyil","1")
    counter.textContent = `members visited: ${calcAndUpdateVisits}`;
    infrr.innerHTML=`
                <div>
                <img src="images/members/webp/kimthyil.webp" alt="young theyil" loading="lazy">
            </div>
            <div class="box">
                <h2>Born Kim Anand Thayil, September 4, 1960</h2>
                <p>Born in Seattle, Thayil grew up in Chicago in Park Forest. His parents were immigrants from Kerala, India. His mother was a music teacher and his dad was a chemical engineer. He started songwriting when he was 12 (1972). His first band was formed in 1977 and their first gig was for a school talent show. Thayil met Hiro Yamamoto in Chicago. They moved to Olympia, Washington where Thayil got a philosophy degree at the University of Washington. In Seattle they met Chris Cornell as a roommate and the three of them formed Soundgarden after jamming together.</p>
            </div>`
})
shepy.addEventListener("click",()=>{
    localStorage.setItem("shepherd","1")
    counter.textContent = `members visited: ${calcAndUpdateVisits}`;
    infrr.innerHTML=`
                <div>
                <img src="images/members/webp/bensheppp.webp" alt="young ben shepherd" loading="lazy">
            </div>
            <div class="box">
                <h2>Born Hunter Benedict Shepherd, September 20, 1968</h2>
                <p>Shepherd was born in an American military base in Okinawa. His family then moved from Allen, Texas to Kingston, Washington where Shepherd grew up. Shepherd became interested in music after listening to Johnny Cash on television. When Shepherd asked his father for a guitar, he said “only if you learn every chord in this book with nothing but a guitar neck”. In his teenage years he played in many bands with friends such as March of Crimes, Mind Circus, and 600 School. After highschool he played in Tic Dolly Row and Nirvana.</p>
            </div>` 
})
camy.addEventListener("click",()=>{
    localStorage.setItem("cameron","1")
    counter.textContent = `members visited: ${calcAndUpdateVisits}`;
    infrr.innerHTML=`
            <div>
                <img src="images/members/webp/young-cameron.webp" alt="young camerons band kiss" loading="lazy">
            </div>
            <div class="box">
                <h2>Born Matthew David Cameron November 28 1962</h2>
                <p>“Foo” Was born in San Diego and also grew up in Chula Vista Cali’. He grew up playing drums starting at 9 (1971) years old and made a cover band at 13 (1975). Meeting Paul Stanley and Kiss’ legal team subsequently the band separated. His older brother called him “Ma Foo” with his lisp so his nickname as “Foo Cameron” he sang “Puberty Love” which was featured in the movie “Attack of the Killer Tomatoes”. </p>
            </div>
            <div class="box">
                <h2>Seattle Musician</h2>
                <p>In 1983, Foo moved to Seattle and played in three bands Bam Bam, feeDBack, Skin Yard, and in 1986 Soundgarden. (secretly eventually Pearl Jam)</p>
            </div>
            <div>
                <img src="images/members/webp/mattcameron.webp" alt="matt cameron drumming" loading="lazy">
            </div>`
})
