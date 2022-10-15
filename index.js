const iosSwitch = document.querySelector("#switch");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

iosSwitch.addEventListener("click", () => {
    month.classList.toggle("bold");
    year.classList.toggle("bold")
})