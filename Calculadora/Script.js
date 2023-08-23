function appendToResult(value){
    document.getElementById('result').textContent += value;
}



function  calculate(){
    const resultElement = document.getElementById('result');
    try{
        const result  = eval(resultElement.textContent);
        resultElement.textContent = result;
    }catch(error){

        resultElement.textContent = 'Error';
    }
}

function clearResult() {
    document.getElementById('result').textContent = '';
}