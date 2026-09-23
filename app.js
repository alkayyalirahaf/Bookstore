

// function to handle the validation loop for the membership type
function validateMemberShip(){
let memberShipType = prompt("enter your membership type (student/regular):");
    
while (true){
if(memberShipType === "student" || memberShipType === "regular"){
   break;}

   else {
    memberShipType =prompt("enter your membership type (student/regular):");
   }
}
return memberShipType;
}


// function to collect all user data 

function collectUserData(){
let userName = prompt("Enter Your Name");
let memberShipType = validateMemberShip();
let book=prompt("Do you prefer fiction or non-fiction book genre?");
let bookTitle = prompt("Please write the specific title of the book you want to borrow");
let userData = [userName,memberShipType,book,bookTitle];

return userData;
}



// Initialize an Inventory Array
let availableGenres=["Fiction","Science","History","Biography"];

//
function applyDiscount(userData){
    if (userData[1]==="student"){
        userData.push("20% Discount");

    }else if (userData[1] === "regular"){
        userData.push("No Discount");
    }
    return userData;
}


// let text = "";
// if(memberShipType === "student"){
//     text="sholar";
// }
// else if(memberShipType==="regular"){
//     text = "member";

// }else{text="";}

// alert("welcome, "+userName +" "+ text);



// for(let i = 0 ; i<userData.length ; i++){
//     console.log(userData[i]);
// }