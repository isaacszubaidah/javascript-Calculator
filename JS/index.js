let one = document.querySelector('[data-one]');
let displayData = document.querySelector('[data-display]').value;

one.addEventListener('click',displayButtonText(one.value))


function displayButtonText(a){
    displayData = a;
   
}

