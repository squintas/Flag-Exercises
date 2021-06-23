var x = 0;
var h1 = document.querySelector('h1'); // find the <h1> element in the DOM
var increment = document.getElementById('increment'); // find the element with the ID 'increment'
var decrement = document.getElementById('decrement'); // find the element with the ID 'decrement'

increment.addEventListener('click', function() {
    // this function is executed whenever the user clicks the increment button
    h1.textContent = x++;
});

decrement.addEventListener('click', function() {
    // this function is executed whenever the user clicks the decrement button
    h1.textContent = x--;
});