function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length===4){
        return pin;
    }else{
        return getPin();
    }
}
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}
document.getElementById('genarate-pin').addEventListener('click',function(){
    const pin = getPin();
    // console.log(pin);
    // display pin
    const displayField = document.getElementById('display-pin');
    displayField.value = pin;
})
document.getElementById('calculator').addEventListener('click',function(e){
    const number = e.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const prevTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number==='C'){
            typedNumberField.value = '';
        }else if(number==='<'){
            const digits = prevTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }else{
        const newTypedNumber = prevTypedNumber+number;
        typedNumberField.value=newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click',function(){
    const displayField = document.getElementById('display-pin');
    const currentPin = displayField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typeNumber = typedNumberField.value;
    const pinSuccessMsg = document.getElementById('pin-success');
    const pinFailureMsg = document.getElementById('pin-failure');
    if(currentPin===typeNumber){
        pinSuccessMsg.style.display = 'block';
        pinFailureMsg.style.display = 'none';
    }else{
        pinFailureMsg.style.display = 'block';
        pinSuccessMsg.style.display = 'none';
    }
})