function calculateBMI() 
{
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var age = parseInt(document.getElementById('age').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value) / 100; // המרת סנטימטרים למטרים

    var bmi = weight / (height * height);

    var result = "BMI שלך הוא: " + bmi.toFixed(2) + "<br>";

    if (gender === "male") 
    {
        if (age < 18) 
        {
            result += "ה־BMI שלך נחשב על פי הקווים לגילאיים."
        } 
        else 
        {
            if (bmi < 18.5) 
            {
                result += "תת-משקל";
            } 
            else if (bmi >= 18.5 && bmi < 24.9) 
            {
                result += "משקל תקין";
            } 
            else if (bmi >= 25 && bmi < 29.9) 
            {
                result += "עודף משקל";
            } 
            else 
            {
                result += "השמנת יתר";
            }
        }
    }
    else 
    {
        if (age < 18) 
        {
            result += "ה־BMI שלך נחשב על פי הקווים לגילאיים."
        } 
        else 
        {
            if (bmi < 17.5) 
            {
                result += "תת-משקל";
            } 
            else if (bmi >= 17.5 && bmi < 23.9) 
            {
                result += "משקל תקין";
            } 
            else if (bmi >= 24 && bmi < 28.9) 
            {
                result += "עודף משקל";
            } 
            else 
            {
                result += "השמנת יתר";
            }
        }
    }

    document.getElementById('result').innerHTML = result;
}