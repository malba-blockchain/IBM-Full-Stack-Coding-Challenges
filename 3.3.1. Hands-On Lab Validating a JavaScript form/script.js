function convertCelsiusToFahrenheit() {
    // Get the input element with id "celsius"
    const celsiusInput = document.getElementById("celsius");
    // Get the input element with id "fahrenheit"
    const fahrenheitInput = document.getElementById("fahrenheit");
    
    // Get the value from the Celsius input and convert it to a number
    const celsiusValue = parseFloat(celsiusInput.value);
    
    // Check if the input is a valid number
    if (!isNaN(celsiusValue)) {
        // Apply the conversion formula: (C × 9/5) + 32
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        
        // Update the Fahrenheit input with the result, rounded to 2 decimal places
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    } else {
        // If input is not a valid number, clear the Fahrenheit field
        fahrenheitInput.value = "";
        alert("Please enter a valid number for Celsius temperature");
    }
}

// Add event listener to the temperature convert button
document.addEventListener("DOMContentLoaded", function() {
    const temperatureButton = document.getElementById("temperature");
    temperatureButton.addEventListener("click", convertCelsiusToFahrenheit);
});


function convertKilogramsToPounds() {
    // Get the input elements

    // Get the input element with id "kilograms"
    const kilogramsInput = document.getElementById("kilograms");

    // Get the input element with id "pounds"
    const poundsInput = document.getElementById("pounds");

    // Get the value from the kg input and convert it to a number
    const kilogramsValue = parseFloat(kilogramsInput.value);
    
    // Check if the input is a valid number
    if (!isNaN(kilogramsValue)) {
        // Apply the conversion formula: kilogramsValue * 2.2
        const poundsValue = kilogramsValue * 2.2;
        
        // Update the pounds input with the result, rounded to 2 decimal places
        poundsInput.value = poundsValue.toFixed(2);
    } else {
        // If input is not a valid number, clear the pounds field
        poundsInput.value = "";
        alert("Please enter a valid number for Kilograms Weight");
    }
}

// Add event listener to the weight convert button
document.addEventListener("DOMContentLoaded", function() {
    const weightButton = document.getElementById("weight");
    weightButton.addEventListener("click", convertKilogramsToPounds);
});


function convertKilometersToMiles() {
    // Get the input elements

    // Get the input element with id "kilometers"
    const kilometersInput = document.getElementById("kilometers");

    // Get the input element with id "miles"
    const milesInput = document.getElementById("miles");

    // Get the value from the kg input and convert it to a number
    const kilometersValue = parseFloat(kilometersInput.value);
    
    // Check if the input is a valid number
    if (!isNaN(kilometersValue)) {
        // Apply the conversion formula: kilometersValue * 2.2
        const milesValue = kilometersValue * 0.62137;
        
        // Update the miles input with the result, rounded to 2 decimal places
        milesInput.value = milesValue.toFixed(2);
    } else {
        // If input is not a valid number, clear the miles field
        milesInput.value = "";
        alert("Please enter a valid number for Kilometers Distance");
    }
}

// Add event listener to the weight convert button
document.addEventListener("DOMContentLoaded", function() {
    const distanceButton = document.getElementById("distance");
    distanceButton.addEventListener("click", convertKilometersToMiles);
});