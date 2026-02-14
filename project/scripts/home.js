const year = document.querySelector("#last-modified");
const number = document.querySelector("#currentyear")
const today = new Date();
year.innerHTML = ` last modified ${document.lastModified}`
number.innerHTML =`©${today.getFullYear()}`

const quotess =[
    {
        id: "cready",
        said: "Soundgarden are kind of the masters of writing songs that arent pop cliches.",
        by: "-Mike McCready (Pearl Jam)"
    },
    {
        id: "pit",
        said: "The greatest band in rock and roll.",
        by: "-Brad Pit"
    },
    {
        id: "jerry",
        said: "Undefinable. They never wrote a bad song.",
        by: "-Jerry Cantrell (Alice in Chains)"
    },
    {
        id: "hetfield",
        said: "We learned from Soundgarden a different way of song writing.",
        by: "-James Hetfield on the success of Enter Sandman"
    },
    {
        id: "carrey",
        said: "When I finally got to see and meet Soundgarden, I stood right in front of them, letting the waves of electricity wash over me, like an audio baptism. They pushed me under and when I came up, I was free.",
        by: "-Jim Carrey"
    },
];

const quoted = document.querySelector("#quotes");

let added = "";

for (const element of quotess){
    added += `<div class="quote">
    <h2 id=${element.id}>"${element.said}"</h2>
    <label for=${element.id}> ${element.by}</label>
    </div>`
}
quoted.innerHTML = added;