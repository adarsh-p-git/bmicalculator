var heightUnitCm = true; // Default unit is centimeters

function toggleHeightUnit() {
    heightUnitCm = !heightUnitCm;
    
    var heightCmInput = document.getElementById("heightCm");
    var heightFeetInch = document.getElementById("heightFeetInch");
    var btn=document.getElementById('changebtn')
    var age=document.getElementById('age')
    if (heightUnitCm) {
        heightCmInput.style.display = "block";
        heightFeetInch.style.display = "none";
        btn.textContent="Change unit to ft & In"
        heightCmInput.value = ""; // Clear feet and inches input
    } else {
        heightCmInput.style.display = "none";
        heightFeetInch.style.display = "flex";
        var label1=document.createElement('label')
        label1.textContent='Height:'
        age.appendChild(label1)
        btn.textContent="Change unit to Cm"
        document.getElementById("heightFeet").value = ""; // Clear cm input
        document.getElementById("heightInch").value = ""; // Clear inches input
    }
}

function calculateBMI() {
    
    var age = document.getElementById("age").value;
    var weight = document.getElementById("weight").value;
    var gender = document.getElementById("gender").value;
    var height;

    if (heightUnitCm) {
        height = document.getElementById("heightCm").value;
    } else {
        var feet = document.getElementById("heightFeet").value;
        var inches = document.getElementById("heightInch").value;
        height = feet * 30.48 + inches * 2.54;
    }

    var bmi = weight / ((height*height)/10000);
    bmi=bmi.toFixed(1)
    
    
    
    var condition="";
    if(bmi<18.5)
    {
        condition="Under Weight";
    }
    else if(bmi<25)
    {
        condition="Normal Weight";
    }
    else if(bmi<30)
    {
        condition="Over Weight";
    }
    else if(bmi>29.9)
    {
        condition="Obesity";
    }
    else
    {
        condition="";
    }
    if(isNaN(bmi)==false || bmi===false)
    {
    var result = "The BMI is "+bmi+"("+gender+" "+age+" Years Old).<br>This indicates "+condition;
    }
    else
    {
        var result="Invalid Result";
    }
    document.getElementById("result").innerHTML=result;

}
