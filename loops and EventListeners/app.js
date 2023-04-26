// for and foreach loop

// for(let i = 0; i<10; i++){
// console.log('hello', i);
// }

// let users = ['abhishek', 'anshu', 'tiwari', 'nayan']

// for (let i=0; i<users.length; i++){
// console.log(i,users[i]);
// }

// const btn = document.getElementById('btn')

// btnClicked = ()=>{
//     console.log('btn clicked');
// }

// btn.addEventListener('click', btnClicked)

let addCss = document.querySelector(".logo-btn");
let back = document.getElementById("back");
let mode = document.getElementById("mode");
let text = document.querySelectorAll(".text");
let body = document.querySelector("body");

changeColor = () => {
  for (i = 0; i < text.length; i++) {
    text[i].style.color = "white";
  }

  body.style.backgroundColor = "black";
  back.style.display = "block";
  mode.style.display = "none";
};

GoBack = () => {
  for (i = 0; i < text.length; i++) {
    text[i].style.color = "black";
  }

  body.style.backgroundColor = "white";
  back.style.display = "none";
  mode.style.display = "block";
};
addCss.addEventListener("click", changeColor);
back.addEventListener("click", GoBack);
