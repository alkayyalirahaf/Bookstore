const textDisplay = document.getElementById("textDisplay");
const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("italicBtn");
const leftBtn = document.getElementById("leftBtn");
const centerBtn = document.getElementById("centerBtn");
const rightBtn = document.getElementById("rightBtn");
const upperBtn = document.getElementById("upperBtn");
const lowerBtn = document.getElementById("lowerBtn");
const capitalizeBtn = document.getElementById("capitalizeBtn");
const clearBtn = document.getElementById("clearBtn");
const textColor=document.getElementById("textColor");
const background=document.getElementById("background");



boldBtn.addEventListener("click", () => {
    //text formatting 
    if (textDisplay.style.fontWeight === "bold") {
    textDisplay.style.fontWeight = "normal";
} else {
    textDisplay.style.fontWeight = "bold";
}
});


italicBtn.addEventListener("click", () => {
    
    if (textDisplay.style.fontStyle === "italic") {
    textDisplay.style.fontStyle = "normal";
} else {
    textDisplay.style.fontStyle = "italic";
}
});



//alignment controls
leftBtn.addEventListener("click", () => {
    textDisplay.style.textAlign = "left";
});



centerBtn.addEventListener("click",()=>{
textDisplay.style.textAlign="center";
})



rightBtn.addEventListener("click", () => {
    textDisplay.style.textAlign = "right";
});


//Text Case & Clear Buttons

upperBtn.addEventListener("click", () => {
    textDisplay.textContent=textDisplay.textContent.toUpperCase();


});


lowerBtn.addEventListener("click", () => {
    textDisplay.textContent=textDisplay.textContent.toLocaleLowerCase();


});
 
// Capitalize
capitalizeBtn.addEventListener("click",() => {
const words = textDisplay.textContent.toLowerCase().split(" ");
for(let i = 0;i<words.length;i++){
    words[i]=words[i][0].toUpperCase() + words[i].slice(1);

}
 textDisplay.textContent = words.join(" ");

});

//clear Text

clearBtn.addEventListener("click",() => {
    textDisplay.textContent="";


});


//text color

textColor.addEventListener("input" , ()=>{
textDisplay.style.color = textColor.value;


});

//background-color

background.addEventListener("input",()=>{
    textDisplay.style.backgroundColor=background.value;
});