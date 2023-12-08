/* function to convert Kilometer to Miles */
function calMiles(){

    let kmvalue = parseFloat(document.getElementById('kmvalue').value);

    if(isNaN(kmvalue)){
        document.getElementById('result3').style.color='red';
        document.getElementById('result3').style.background='yellow';
        document.getElementById('result3').innerText = `Please enter KM value to get miles.`;
    }
    else{
        const miles = kmvalue * 0.621371;

        document.getElementById('result3').style.color='white';
        document.getElementById('result3').style.background='green';

        document.getElementById('result3').innerText = `${kmvalue} KM = ${miles} Miles`;

        document.getElementById('kmvalue').value = "";
    }
}