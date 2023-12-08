/* function to calculate square root */
function calsRoot(){
    let sqval1 = parseInt(document.getElementById('rvalue').value);
    
    if(isNaN(sqval1)){
        document.getElementById('result2').style.color='red';
        document.getElementById('result2').style.background='yellow';
        
        document.getElementById('result2').innerText = `Please enter value to get Square Root.`;
    }
    else{
        const sqresult = Math.sqrt(sqval1);
        
        document.getElementById('result2').style.color='white';
        document.getElementById('result2').style.background='green';

        document.getElementById("result2").textContent = `Square root of ${sqval1} = ${sqresult}`;

        document.getElementById('rvalue').value = "";
    }
}