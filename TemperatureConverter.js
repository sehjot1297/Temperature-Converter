document.addEventListener("DOMContentLoaded", function () {
    // Function to convert temperatures
    function convertTemperatures() {
        // Get input values
        var celsius = parseFloat(document.getElementById("celcius").querySelector("input").value);
        var fahrenheit = parseFloat(document.getElementById("farenheit").querySelector("input").value);
        var kelvin = parseFloat(document.getElementById("kelvin").querySelector("input").value);

        // Perform temperature conversions and update input fields
        if (!isNaN(celsius)) {
            document.getElementById("farenheit").querySelector("input").value = (celsius * 9/5) + 32;
            document.getElementById("kelvin").querySelector("input").value = celsius + 273.15;
        } else if (!isNaN(fahrenheit)) {
            document.getElementById("celcius").querySelector("input").value = (fahrenheit - 32) * (5/9);
            document.getElementById("kelvin").querySelector("input").value = (fahrenheit - 32) * (5/9) + 273.15;
        } else if (!isNaN(kelvin)) {
            document.getElementById("celcius").querySelector("input").value = kelvin - 273.15;
            document.getElementById("farenheit").querySelector("input").value = (kelvin - 273.15) * 9/5 + 32;
        }
    }

    // Function to clear all input fields
    function clearAll() {
        document.getElementById("celcius").querySelector("input").value = "";
        document.getElementById("farenheit").querySelector("input").value = "";
        document.getElementById("kelvin").querySelector("input").value = "";
    }

    // Attach the convertTemperatures function to input fields
    document.getElementById("celcius").querySelector("input").addEventListener("input", convertTemperatures);
    document.getElementById("farenheit").querySelector("input").addEventListener("input", convertTemperatures);
    document.getElementById("kelvin").querySelector("input").addEventListener("input", convertTemperatures);

    // Attach the clearAll function to the "CLEAR ALL" button
    document.querySelector(".mystic-button button").addEventListener("click", clearAll);
});
