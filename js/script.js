//incriment firstclass input;
document.getElementById('incriment_firstClass ').addEventListener('click', function() {
    changeInputValue('first_class_count ', true)
})

// decriment firstclass input

document.getElementById('decriment_firstClass ').addEventListener("click", function() {
    changeInputValue('first_class_count ', false)
})

// inciment econony input 
document.getElementById('incriment_economy ').addEventListener('click', function() {
    changeInputValue('economy_count ', true)
})


// decriment_economy
document.getElementById('decriment_economy ').addEventListener('click', function() {
    changeInputValue('economy_count ', false)
})


// change input quantity value;
function changeInputValue(inputId, isIncrease) {
    const inputQuantity = document.getElementById(inputId);
    const quantityCount = parseInt(inputQuantity.value);
    let currentQuantity = quantityCount;
    if (isIncrease == true && quantityCount < 60) {
        currentQuantity = quantityCount + 1;
    } else if (isIncrease == false && quantityCount > 0) {
        currentQuantity = quantityCount - 1;
    }
    inputQuantity.value = currentQuantity;
}


// document.getElementById('decriment_firstClass ').addEventListener('click', function() {
//     const firstClassInput = document.getElementById(' first_class_count ');
//     const firstClassCount = parseInt(firstClassInput.value);
//     const currentFirstClassCount = firstClassCount - 1;

//     firstClassInput.value = currentFirstClassCount;
// })