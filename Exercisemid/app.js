const paragraph = document.getElementById("paragraph");
const text=paragraph.textContent;
const words = text.split(" ");

//Highlight words longer than 8 characters
for(let i =0;i<words.length;i++){
    if(words[i].length>8){
            words[i] = '<span style="background-color: yellow;">' + words[i] + '</span>';


    }
}
paragraph.innerHTML = words.join(" ");


//Add source link after paragraph
const link = document.createElement("a");
link.textContent="https://google.com/";
link.href="https://google.com/";
link.target="_blank";
paragraph.after(link);