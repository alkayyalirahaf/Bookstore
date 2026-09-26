const textDisplay = document.getElementById("textDisplay");
const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("italicBtn");
const leftBtn = document.getElementById("leftBtn");
const centerBtn = document.getElementById("centerBtn");
const rightBtn = document.getElementById("rightBtn");
boldBtn.addEventListener("click", () => {

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


leftBtn.addEventListener("click", () => {
    textDisplay.style.textAlign = "left";
});



centerBtn.addEventListener("click",()=>{
textDisplay.style.textAlign="center";
})



rightBtn.addEventListener("click", () => {
    textDisplay.style.textAlign = "right";
});


