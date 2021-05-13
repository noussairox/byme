const root = document.getElementById("root")
const mydiv = document.getElementById("myDiv")
function clickonmyDiv(e) {
    mydiv.classList.toggle("normal");
}
function clickonmyroot(e) {
    root.classList.toggle("normal");
}
mydiv.onclick = clickonmyDiv;
mydiv.addEventListener("click",clickonmyDiv)
//mydiv.onmouseenter = clickonmyDiv;
//mydiv.onmouseleave = clickonmyDiv;
root.onclick = clickonmyroot;
//element.onevent = eventclbk