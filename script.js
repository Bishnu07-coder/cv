const menu = document.querySelector("#navmenu");
const list = document.querySelector("#listitem");

menu.addEventListener("click",function()
{
list.classList.toggle("show");
});
