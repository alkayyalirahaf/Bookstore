const submitBtn = document.getElementById("submitBtn");

const userNameInput = document.getElementById("userName");
const membershipInput = document.getElementById("Membership");
const genreInput = document.getElementById("genre");
const bookTitleInput = document.getElementById("bookTitle");




submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const userName = userNameInput.value;
    const memberShip = membershipInput.value;
    const bookGenre = genreInput.value;
    const bookTitle = bookTitleInput.value;

   if (memberShip === "student" || memberShip === "regular"){


    const student = [userName,memberShip, bookGenre, bookTitle];

   }
});