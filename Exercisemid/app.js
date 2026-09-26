const paragraph = document.getElementById("paragraph");
const text=paragraph.textContent;
const words = text.split(" ");


for(let i =0;i<words.length;i++){
    if(words[i].length>8){
            words[i] = '<span style="background-color: yellow;">' + words[i] + '</span>';


    }
}
paragraph.innerHTML = words.join(" ");