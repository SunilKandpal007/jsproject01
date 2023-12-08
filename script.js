/* function to calculate Area of triangle */
function caltArea(){
    let areaBase = parsedocument.getElementById("bvalue").value;
    let areaHeight = document.getElementById("hvalue").value;
    
    if(isNaN(areaBase == '' && areaHeight == '')){
        document.getElementById("result1").innerHTML = `Value of Base and Height is empty.`;
    }
    else{
        const areaTri = (areaBase * areaHeight) / 2;
        document.getElementById("result1").innerHTML = `Area of triangle is:  ${areaTri}`;
    }

}

/* function to calculate square root */
function calsRoot(){
    let sqval1 = parseInt(document.getElementById("rvalue").value);
    let sqresult = Math.sqrt(sqval1);
    // console.log(sqresult);
    document.getElementById("result2").textContent = "Square root is: " +sqresult;
}

/* function to convert Kilometer to Miles */
function calMiles(){

    let kmvalue = parseFloat(document.getElementById("kmvalue").value);

    if(isNaN(kmvalue)){
        document.getElementById('result3').innerText = `Please enter KM value to get miles.`;
    }
    else{
        const miles = kmvalue * 0.621371;
        document.getElementById('result3').innerText = `Total KM: ${miles} miles`;
    }
}

/* function to swap two numbers */
function swapMe(){
    let swapnum1 = parseFloat(document.getElementById("swapvalue1").value);
    let swapnum2 = parseFloat(document.getElementById("swapvalue2").value);
    
    if(isNaN(swapnum1 && swapnum2 == '')){
        document.getElementById('result4').innerText = `Input value of "A" and "B" is empty.`
    }
    else{
        // var temp = swapnum1;
        // swapnum1 = swapnum2;
        // swapnum2 = temp;
        
        /* using de-structuring arrays */
        [swapnum1, swapnum2] = [swapnum2, swapnum1];

        document.getElementById('result4').innerText = `After swapping value of A is ${swapnum1} and value of B is: ${swapnum2}`;
    }
}

/* function to add two numbers */
function addNums(){
    let sumnum1 = parseFloat(document.getElementById('value1').value);
    let sumnum2 = parseFloat(document.getElementById("value2").value);
    
    if(isNaN(sumnum1 && sumnum2 == '')){
        document.getElementById('result5').innerText=`Input value of "A" and "B" is empty.`;
    }
    else{
        const sumResult = sumnum1 + sumnum2;
        document.getElementById('result5').innerText = `Sum of input values is: ${sumResult}`;
    }

    
}