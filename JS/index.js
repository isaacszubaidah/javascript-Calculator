let displayData = document.querySelector('[data-display]');

let seven = document.querySelector('[data-seven]');
seven.addEventListener('click',()=> addValue(seven.value))

let eight = document.querySelector('[data-eight]');
eight.addEventListener('click',()=> addValue(eight.value))

let nine = document.querySelector('[data-nine]');
nine.addEventListener('click',()=> addValue(nine.value))

let six = document.querySelector('[data-six]');
six.addEventListener('click',()=> addValue(six.value))

let five = document.querySelector('[data-five]');
five.addEventListener('click',()=> addValue(five.value))

let four = document.querySelector('[data-four]');
four.addEventListener('click',()=> addValue(four.value))

let three = document.querySelector('[data-three]');
three.addEventListener('click',()=> addValue(three.value))

let two = document.querySelector('[data-two]');
two.addEventListener('click',()=> addValue(two.value))

let one = document.querySelector('[data-one]');
one.addEventListener('click',()=> addValue(one.value))

let zero = document.querySelector('[data-zero]');
zero.addEventListener('click',()=> addValue(zero.value))

let plus = document.querySelector('[data-plus]');
plus.addEventListener('click',()=> addValue(plus.value))

let divide = document.querySelector('[data-divide]');
divide.addEventListener('click',()=> addValue(divide.value))

let multiply = document.querySelector('[data-multiply]');
multiply.addEventListener('click',()=> addValue(multiply.value))

let decimal = document.querySelector('[data-decimal]');
decimal.addEventListener('click',()=> addValue(decimal.value))


function addValue(value){
    displayData.value +=value;
    function anotherfunction(){
        // call back function
    }
    
}

let clear = document.querySelector('[data-clear]');
clear.addEventListener('click',()=> clearValue(display))

function clearValue(C){
    display.value = " ";
}

let equal = document.querySelector('[data-equal]');
equal.addEventListener('click',()=> equal(display.value))

function equalTo(value){
    display.value = eval(value);
    

}








