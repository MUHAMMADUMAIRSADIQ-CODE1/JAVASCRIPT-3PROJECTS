
let expensename = document.querySelector("#expense-name");
let expenseamount = document.querySelector("#expense-amount");
let button = document.querySelector("button");
let ul = document.querySelector("ul");
let span = document.querySelector("#total");
let h3 = document.querySelector("h3");
let expenses = [];
function expenseAdd() {
    let namevalue = expensename.value;
    let amountvalue = expenseamount.value;
    h3.textContent = ""
    if (!namevalue && !amountvalue) return h3.textContent = `Plz Enter Expense !`;
    if (amountvalue < 0) return h3.textContent = `Plz Enter Positive Amount !`;
    if (!amountvalue) return h3.textContent = `Plz Enter Amount !`;
    if (!namevalue || !isNaN(namevalue)) return h3.textContent = `Plz Enter Expense Name!`;
    expenses.push({
        name: namevalue,
        amount: Number(amountvalue)
    })
    let li = document.createElement("li");
    li.innerHTML = `<div>${namevalue} - Rs <h3>${amountvalue}</h3></div>
    <button class="Dbt">Delete</button>`;
    ul.appendChild(li)
    expensename.value = "";
    expenseamount.value = "";
}
function calculateTotal() {
    let amountStore = 0;
    expenses.forEach(e => amountStore += e.amount)
    span.textContent = amountStore
}
function deletebtn() {
    let dbt = document.querySelectorAll(".Dbt")

    dbt.forEach((item, index) => {
        if (!item.dataset.listener) {
            item.addEventListener("click", (e) => {
                let div = document.querySelector(".divfullpage");
                div.style.display = "flex"
                let btn1 = document.querySelector("#btn1")
                let btn2 = document.querySelector("#btn2")
                console.log(expenses)
                btn1.addEventListener("click", () => {
                    console.log(expenses)
                    div.style.display = "none"
                    e.target.parentElement.remove()
                    console.log("1", index)
                    expenses.splice(index, 1)
                    calculateTotal()
                    console.log("hs", expenses)
                })
                btn2.addEventListener("click", () => {
                    div.style.display = "none"
                })

            })
            item.dataset.listener = "true";
        }
    })
}

button.addEventListener("click", () => {
    expenseAdd();
    calculateTotal()
    deletebtn()
})