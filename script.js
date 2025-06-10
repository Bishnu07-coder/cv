const menu = document.querySelector("#navmenu");
const list = document.querySelector("#listitem");

menu.addEventListener("click",function()
{
list.classList.toggle("show");
});

document.getElementById("contactBtn").addEventListener("click", function () {
  alert("Thanks for clicking! You can reach me at: arjeet@example.com");
});