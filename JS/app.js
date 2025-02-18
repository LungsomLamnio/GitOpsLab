let btn = document.getElementById("btn");

function printMessage() {
  let mssg = document.getElementById("mssg");
  mssg.innerText = "Hello";
}

btn.addEventListener("click", () => {
  printMessage();
});
