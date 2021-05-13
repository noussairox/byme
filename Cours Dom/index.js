const elms = document.querySelectorAll(".elm")
let i=0
const toggleit = function(){
    elms[i].classList.toggle("active")
    i=(i+1)%elms.length
}
setInterval(toggleit,200)

