//grabbing header and inserting a title using the textContent property
const artheader=document.querySelector(".article__header");
artheader.textContent="Welcome to the Erin Polley blog.";

//Changing the class of article header to important class.
const headerImportant=document.querySelectorAll(".article__header");
for(let i=0; i < headerImportant.length; i++) {
    headerImportant[i].classList.remove("article__header");
    headerImportant[i].classList.add("important");
}
//checking work
console.log(headerImportant);
//removing class dashed 
const dashed = document.querySelector(".dashed");
dashed.classList.remove("dashed");

const golden = document.querySelector(".article__footer");
golden.classList.add("goldenrod");

