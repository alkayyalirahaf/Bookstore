// asking for username
let userName = prompt("enter your name");

let memberShipType = prompt("enter your membership type (student/regular):");

// asking for the membership

while (true){
if(memberShipType === "student" || memberShipType === "regular"){
   break;}

   else {
    memberShipType =prompt("enter your membership type (student/regular):");
   }
};


let text = "";
if(memberShipType === "student"){
    text="sholar";
}
else if(memberShipType==="regular"){
    text = "member";

}else{text="";}

alert("welcome, "+userName +" "+ text);



//asking fot book genre and title

let book=prompt("Do you prefer fiction or non-fiction book genre?")
let bookTitle = prompt("Please write the specific title of the book you want to borrow");

// save answers in an array

let userData = [userName,memberShipType,book,bookTitle];

for(let i = 0 ; i<userData.length ; i++){
    console.log(userData[i]);
}