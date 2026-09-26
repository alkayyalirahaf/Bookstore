//select
const userInput=document.getElementById("userInput");
const addBtn=document.getElementById("addBtn");
const shoppingList=document.getElementById("shoppingList");

//click the button
addBtn.addEventListener("click",(e)=>{
e.preventDefault();

//take the value frome the user
const item = userInput.value;
const listItem = document.createElement("li");
listItem.textContent=item;
shoppingList.appendChild(listItem);

// adding delete button
const delBtn = document.createElement("button");
delBtn.textContent="Delete";
listItem.appendChild(delBtn);

//
delBtn.addEventListener("click",()=>{
listItem.remove();
})

});