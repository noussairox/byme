var numOne = document.getElementById('num_one');
var numTwo = document.getElementById('num_two');
var addSum = document.getElementById('add_sum');

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    addSum.innerHTML = "SOMME" + (one+two);
}
