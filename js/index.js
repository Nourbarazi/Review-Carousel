var review = [
{
    id:1,
    name:"Lionel Andrés „Leo“ Messi",
    job: "argentinischer Fußballspieler",
    info: "Er ist mit sechs Auszeichnungen für den besten Spieler der Welt Rekordgewinner des Ballon d’Or. ",
    img: "images/leo.jpeg"
},
{
    id:2,
    name:"Cristiano Ronaldo",
    job: "portugiesischer Fußballspieler",
    info: "Ronaldo ist der einzige Fußballer, der in England, Spanien und Italien Meisterschaften gewann und als Fußballer des Jahres ausgezeichnet wurde.",
    img: "images/ronaldo.jpg"
},
{
    id:3,
    name:"Diego Armando Maradona Franco",
    job: "argentinischer Fußballspieler und -trainer.",
    info: "Maradona ist eine der Legenden des Weltfußballs und gilt als einer der besten Fußballspieler der Geschichte.",
    img: "images/maradona.jpg"
},
{
    id:4,
    name:"Zinédine Yazid Zidane",
    job: "französischer Fußballtrainer und ehemaliger -spieler",
    info: "Er wurde dreimal FIFA-Weltfußballer des Jahres und einmal FIFA-Trainer des Jahres.",
    img: "images/zidane.jpg"
},
];

var img = document.getElementById("img"),
    he = document.getElementById("name"),
    job = document.getElementById("job"),
    info = document.getElementById("info");

var prevBtn = document.querySelector(".prev-btn"),
    nextBtn = document.querySelector(".next-btn"),
    randomBtn = document.querySelector(".random-btn");

var currentItem = 0;

window.addEventListener("DOMContentLoaded",
function (){

showPerson(currentItem)
})

function showPerson(person){
var item = review[person];
img.src = item.img;
he.textContent = item.name;
job.textContent = item.job;
info.textContent = item.info
}

nextBtn.addEventListener("click",function (){
currentItem++;
if(currentItem > review.length -1)
{
    currentItem = 0;
}
showPerson(currentItem)

})

prevBtn.addEventListener("click", function(){
currentItem--;
if(currentItem < 0){
    currentItem = review.length -1;
}
showPerson(currentItem)
})

randomBtn.addEventListener("click",function(){
currentItem = Math.floor(Math.random() * review.length);
showPerson(currentItem);
})