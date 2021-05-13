/*
i=0
const root=document.querySelector(".container");
let e=document.createElement("div");
let txt=document.createTextNode(i)
e.appendChild(txt)
root.appendChild(e)

for(let i=0 ; i<10 ; i++){
e=document.createElement("div");
txt=document.createTextNode(i)
e.appendChild(txt)
root.appendChild(e)
}*/
let r=0
const root = document.querySelector(".container")
function addElement() {
    const e=document.createElement("div")
    const txt=document.createTextNode(r)
    e.appendChild(txt)
    root.appendChild(e)
}
for(r=1 ; r<=20 ;r++){
    addElement()
}
