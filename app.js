const malumot = document.getElementById("user_input");
const sendBtn = document.querySelector("button");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const counterdisplay = document.getElementById("counterdisplay");
const color = document.getElementById("color");
let counter = 0;

sendBtn.addEventListener(
  "click", () => (counterdisplay.textContent = malumot.value)
);
decrement.addEventListener("click", () => {
  counter = counter - 1;
  counterdisplay.textContent = counter;
});

increment.addEventListener("click", () => {
  counter = counter + 1;
  counterdisplay.textContent = counter;
});

color.addEventListener("input", () => {
  counterdisplay.style.color = color.value;
});
