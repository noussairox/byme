// ADDING ELEMENT
const body = document.body
body.append("hello"," Hamid")
// Creating Element
const div = document.createElement("div")
div.innerText="hello 3alam"
body.append(div)
//MODIFY ELEMENT HTML
div.innerHTML = "<strong>3alam</strong>"

const a = document.querySelector('p')
a.innerHTML = "<strong> j-querry </strong>"

a.className ="jda"