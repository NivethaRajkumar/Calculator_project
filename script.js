let expressions='';
function addToExpression(number){
    expressions += number;
    updateDisplay(expressions);
}

function updateDisplay(value){
    document.getElementById('result').value=value;
}

function calculate(){
    try{
        let result =eval(expressions);
        updateDisplay(result);
        expressions=result.toString();
    } catch (error) {
        alert('Invalid expression!');
        clearExpression();
    }
}

function clearExpression() {
    expressions='';
    updateDisplay('')
}

document.addEventListener('keydown',function(event) {
    const key=event.key;
    if (/\d/.test(key)) {
        addToExpression(key);
    } else if (['+', '-', '*', '/', '%', '.', 'Enter'].includes(key)) {
        addToExpression(key === 'Enter' ? '=' : key);
    } else {
        // alert('Only numbers and operators are allowed!');
    }
})
