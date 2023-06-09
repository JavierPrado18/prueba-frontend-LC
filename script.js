const openButton=document.getElementById("open-button");
const closeButton=document.getElementById("close-button");
const menu=document.getElementById("menu");

openButton.addEventListener("click",openMenu);
closeButton.addEventListener("click",closeMenu);

function openMenu() {
    openButton.style.display="none";
    closeButton.style.display="block";
    menu.style.display="flex";
    menu.style.flexDirection="column";
}
function closeMenu() {
    openButton.style.display="block";
    closeButton.style.display="none";
    menu.style.display="none";
}