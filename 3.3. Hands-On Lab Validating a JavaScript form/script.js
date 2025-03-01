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
    const kilograms = document.getElementById("kilograms");

    // Get the input element with id "pounds"
    const pounds = document.getElementById("pounds");

    // Get the value from the kg input and convert it to a number
    const kilogramsValue = parseFloat(kilograms.value);
    
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
