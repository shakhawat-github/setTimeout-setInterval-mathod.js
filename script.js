let requestbtn = document.querySelector(".requestbtn");
let loginform = document.querySelector(".container");
let reqstatus = document.querySelector(".reqstatus");
loginform.style.display = "none";

requestbtn.addEventListener(
  "click",
  () => {
    reqstatus.innerHTML = "Please wait....";
  },
  setTimeout(() => {
    loginform.style.display = "block";
    reqstatus.style.display = "none";
    requestbtn.style.display = "none";
  }, 3500)
);



// counter

let countItem = document.querySelectorAll(".item");
let array = Array.from(countItem);

array.map((item) => {
  let number = 0;
  let counter = setInterval(() => {
    number += 1;
    item.innerHTML = number;
if(number == item.getAttribute('data-nmbr')){
clearInterval(counter)
}
  }, 100);
});
