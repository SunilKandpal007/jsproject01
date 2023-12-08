/* function to add two numbers */
function addNums(){

    let sumnum1 = parseFloat(document.getElementById('value1').value);
    let sumnum2 = parseFloat(document.getElementById("value2").value);
    
    if(isNaN(sumnum1)){
        document.getElementById('result5').style.color='red';
        document.getElementById('result5').style.background='yellow';
        document.getElementById('result5').innerText= `Alert! first input value is empty.`;
    }
    else if(isNaN(sumnum2)){
        document.getElementById('result5').style.color='red';
        document.getElementById('result5').style.background='yellow';
        document.getElementById('result5').innerText=`Alert! second input value is empty.`;
    }
    else{
        const sumResult = sumnum1 + sumnum2;
        
        document.getElementById('result5').style.color='white';
        document.getElementById('result5').style.background='green';

        document.getElementById('result5').innerText = `SUM of ${sumnum1} + ${sumnum2} = ${sumResult}`;

        document.getElementById('value1').value = "";
        document.getElementById('value2').value = "";
    }
}