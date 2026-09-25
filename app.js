const submitBtn = document.getElementById("submitBtn");

const userNameInput = document.getElementById("userName");
const membershipInput = document.getElementById("Membership");
const genreInput = document.getElementById("genre");
const bookTitleInput = document.getElementById("bookTitle");

const resultCard= document.getElementById("result-card");



submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const userName = userNameInput.value;
    const memberShip = membershipInput.value;
    const bookGenre = genreInput.value;
    const bookTitle = bookTitleInput.value;

   if (memberShip === "student" || memberShip === "regular"){


    const student = [userName,memberShip, bookGenre, bookTitle];
    renderingStudent(student);

   }
});


function renderingStudent(student){
    for (let i=0;i<student.length;i++){
        const para = document.createElement("p");
        para.innerHTML=student[i];
        resultCard.appendChild(para);
    }
    
}