
let userName = prompt("Please enter your name:");


let membershipType = prompt("Please enter your membership type (student / regular):");


if (membershipType) {
    membershipType = membershipType.toLowerCase();
}

let title = "";

if (membershipType === "student") {
    title = " Scholar";
} else if (membershipType === "regular") {
    title = " Member";
} else {
    title = "";
}


alert("Welcome, " + userName + title + "!");

let bookGenre = prompt("Do you prefer fiction or non-fiction book genre?");


let bookTitle = prompt("Please write the specific title of the book you want to borrow:");

alert("Your requested book (" + bookTitle + ") is being reserved.");


console.log(userName + " ordered: " + bookTitle);