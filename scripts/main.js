// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";
// alert("hello Tiến Phát ")
// document.querySelector("html").addEventListener("click", () => {
//     alert("Ouch! Stop poking me!");
//   });   
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/photo.png") {
    myImage.setAttribute("src", "images/photo2.png");
  } else {
    myImage.setAttribute("src", "images/photo.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// function setUserName() {
//   const myName = prompt("Please enter your name.");
//   localStorage.setItem("name", myName);
//   myHeading.textContent = `Mozilla is cool, ${myName}`;
// }
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};