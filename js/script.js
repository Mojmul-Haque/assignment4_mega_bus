//incriment firstclass input;
document.getElementById('incriment_firstClass ').addEventListener('click', function() {
    getInputValue('first_class_count ', true)
})

// decriment firstclass input

document.getElementById('decriment_firstClass ').addEventListener("click", function() {
    getInputValue('first_class_count ', false)
})

// inciment econony input 
document.getElementById('incriment_economy ').addEventListener('click', function() {
    getInputValue('economy_count ', true)
})


// decriment_economy
document.getElementById('decriment_economy ').addEventListener('click', function() {
    getInputValue('economy_count ', false)
})


// change input quantity value;
function getInputValue(inputId, isIncrease) {
    const inputQuantity = document.getElementById(inputId);
    const quantityCount = parseInt(inputQuantity.value);
    let currentQuantity = quantityCount;
    if (isIncrease == true && quantityCount < 60) {
        currentQuantity = quantityCount + 1;
    } else if (isIncrease == false && quantityCount > 0) {
        currentQuantity = quantityCount - 1;
    }
    inputQuantity.value = currentQuantity;
    getTotalPrice()
}


//get total price;
function getTotalPrice() {
    let firstClassPrice = getInputId('first_class_count ', 150)
    let economyPrice = getInputId('economy_count ', 100)
    const totalPrice = firstClassPrice + economyPrice

    document.getElementById('total_price ').innerText = '$' + totalPrice;

    const vat = totalPrice * (0.01 * 10); //infuture easily change vat % .just change the number;
    document.getElementById('vat_amount ').innerText = '$' + vat;

    const grandTotal = totalPrice + vat;
    document.getElementById('grand_total ').innerText = '$' + grandTotal;
}

//get input quantity id for calculte ticket price;
function getInputId(inputId, tickePrice) {
    const inputQuantity = document.getElementById(inputId);
    const quantityCount = parseInt(inputQuantity.value);
    const ticketPrice = quantityCount * tickePrice;
    return ticketPrice;
}