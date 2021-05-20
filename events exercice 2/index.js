var simon = document.getElementById("Simon")
var bruceLee = document.getElementById("bruce")
var ziyech = document.getElementById("Ziyech")

simon.addEventListener("click", picLink)
bruceLee.addEventListener("click", picLink)
ziyech.addEventListener("click", picLink)
function picLink(){
    var picId = this.attributes["data-img"].value
    var pic = document.getElementById(picId)
    if (pic.className === "hide") {
        pic.className = ""
    }else{
        pic.className ="hide"
    }
}