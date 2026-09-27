const paragraph = document.getElementById("paragraph");

const head=document.getElementById("head");


//Highlight words longer than 8 characters
const text=paragraph.textContent;
const words = text.split(" ");
for(let i =0;i<words.length;i++){
    if(words[i].length>8){
            words[i] = '<span style="background-color: yellow;">' + words[i] + '</span>';


    }
}
const textHighlighted = words.join(" ");


//Add source link after paragraph
const link = document.createElement("a");
link.textContent="https://google.com/";
link.href="https://google.com/";
link.target="_blank";
paragraph.after(link);



//Split each new sentence on to a separate line 
const sentence =  textHighlighted.split(".");

for (let i = 0;i<sentence.length-1;i++){
    sentence[i]=sentence[i]+'.<br>';
}
paragraph.innerHTML=sentence.join(" ");




// count the words number


const count=words.length;


const result = document.createElement("span");
result.textContent=count;
head.after(result);