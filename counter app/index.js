let div = document.querySelector(".counter");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let count = 0;

btn1.addEventListener("click", () => {
    count++;
    div.textContent = count;
});

btn2.addEventListener("click", () => {
    count--;
    div.textContent = count;
});
btn3.addEventListener("click", () => {
    count = 0;
    div.textContent = count;
});