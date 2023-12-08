/* function to swap two numbers */
function swapMe(){
    let swapnum1 = parseFloat(document.getElementById('swapvalue1').value);
    let swapnum2 = parseFloat(document.getElementById('swapvalue2').value);
    
    if(isNaN(swapnum1)){
        document.getElementById('result4').style.color='red';
        document.getElementById('result4').style.background='yellow';

        document.getElementById('result4').innerText = `First input value is empty.`
    }
    else if(isNaN(swapnum2)){
        document.getElementById('result4').style.color='red';
        document.getElementById('result4').style.background='yellow';

        document.getElementById('result4').innerText = `Second input value is empty.`
    }
    else{
        document.getElementById('result4').style.color='white';
        document.getElementById('result4').style.background='green';
        
        /* using de-structuring arrays */
        [swapnum1, swapnum2] = [swapnum2, swapnum1];

        document.getElementById('result4').innerText = `Before swapping A = ${swapnum2} and B = ${swapnum1} \n After swapping A = ${swapnum1} and B = ${swapnum2}`;

        document.getElementById('swapvalue1').value = "";
        document.getElementById('swapvalue2').value = "";
    }
}