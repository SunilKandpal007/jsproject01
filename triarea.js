/* function to calculate Area of triangle */
function caltArea(){
    let areaBase = parseFloat(document.getElementById('bvalue').value);
    let areaHeight = parseFloat(document.getElementById('hvalue').value);
    
    if(isNaN(areaBase)){
        document.getElementById('result1').style.color='red';
        document.getElementById('result1').style.background='yellow';
        document.getElementById('result1').innerHTML = `Value of Base is empty.`;
    }
    else if(isNaN(areaHeight)){
        document.getElementById('result1').style.color='red';
        document.getElementById('result1').style.background='yellow';
        document.getElementById('result1').innerHTML = `Value of Height is empty.`;
    }
    else{
        const areaTri = (areaBase * areaHeight) / 2;

        document.getElementById('result1').style.color='white';
        document.getElementById('result1').style.background='green';

        document.getElementById('result1').innerHTML = `Area of Triangle = (${areaBase} x ${areaHeight}) / 2 =  ${areaTri}`;

        document.getElementById('bvalue').value = "";
        document.getElementById('hvalue').value = "";
    }

}