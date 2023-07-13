let input = prompt("Enter elements,using comma:");

let elements = input.split(',');

const array = []

for (let i = 0; i < elements.length; i++) {
    let element = parseInt(elements[i]);
    array.push(element); }

array.sort(function(a, b) {return a - b; });
alert ('Ascending sort' + array);

let removed = array.slice (1,3);
array.splice(1,3);
alert ('Without 2-4 elements' + array);
