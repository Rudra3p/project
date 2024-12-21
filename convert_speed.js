function convert_speed() { 
    // Retrieve input values 
    let inputValue_speed =  
        document.getElementById("inputValue_speed").value; 

    let fromUnit_speed =  
        document.getElementById("fromUnit_speed").value; 

    let toUnit_speed =  
        document.getElementById("toUnit_speed").value; 
    
    // Convert the length based on the selected units 
    let result_speed_convert;

    if (fromUnit_speed === "cps" && toUnit_speed === "mach") { 
        result_speed_convert = inputValue_speed / 34030; 
    } else if (fromUnit_speed === "mach" && toUnit_speed === "cps") { 
        result_speed_convert = inputValue_speed * 34030; 
    } else if (fromUnit_speed === "cps" && toUnit_speed === "fps") { 
        result_speed_convert = inputValue_speed / 30.48; 
    } else if (fromUnit_speed === "fps" && toUnit_speed === "cps") { 
        result_speed_convert = inputValue_speed * 30.48; 
    } else if (fromUnit_speed === "cps" && toUnit_speed === "mps") { 
        result_speed_convert = inputValue_speed / 100; 
    } else if (fromUnit_speed === "mps" && toUnit_speed === "cps") { 
        result_speed_convert = inputValue_speed * 100; 
    } else if (fromUnit_speed === "mach" && toUnit_speed === "fps") { 
        result_speed_convert = inputValue_speed * 1116.47; 
    } else if (fromUnit_speed === "fps" && toUnit_speed === "mach") { 
        result_speed_convert = inputValue_speed / 1116.47; 
    } else if (fromUnit_speed === "mach" && toUnit_speed === "mps") { 
        result_speed_convert = inputValue_speed * 340.3; 
    } else if (fromUnit_speed === "mps" && toUnit_speed === "mach") { 
        result_speed_convert = inputValue_speed / 340.3; 
    } else if (fromUnit_speed === "fps" && toUnit_speed === "mps") { 
        result_speed_convert = inputValue_speed / 3.28084; 
    } else if (fromUnit_speed === "mps" && toUnit_speed === "fps") { 
        result_speed_convert = inputValue_speed * 3.28084; 
    } else if (fromUnit_speed === "cps" && toUnit_speed === "knots") { 
        result_speed_convert = inputValue_speed / 51.44; 
    } else if (fromUnit_speed === "knots" && toUnit_speed === "cps") { 
        result_speed_convert = inputValue_speed * 51.44; 
    } else if (fromUnit_speed === "cps" && toUnit_speed === "mph") { 
        result_speed_convert = inputValue_speed / 44.7; 
    } else if (fromUnit_speed === "mph" && toUnit_speed === "cps") { 
        result_speed_convert = inputValue_speed * 44.7; 
    } else if (fromUnit_speed === "cps" && toUnit_speed === "kph") { 
        result_speed_convert = inputValue_speed / 27.77778; 
    } else if (fromUnit_speed === "kph" && toUnit_speed === "cps") { 
        result_speed_convert = inputValue_speed * 27.77778; 
    } else if (fromUnit_speed === "mach" && toUnit_speed === "knots") { 
        result_speed_convert = inputValue_speed * 661.5474; 
    } else if (fromUnit_speed === "knots" && toUnit_speed === "mach") { 
        result_speed_convert = inputValue_speed / 661.5474; 
    } else if (fromUnit_speed === "mach" && toUnit_speed === "mph") { 
        result_speed_convert = inputValue_speed * 761.2975; 
    } else if (fromUnit_speed === "mph" && toUnit_speed === "mach") { 
        result_speed_convert = inputValue_speed / 761.2975; 
    } else if (fromUnit_speed === "mach" && toUnit_speed === "kph") { 
        result_speed_convert = inputValue_speed * 1225.08; 
    } else if (fromUnit_speed === "kph" && toUnit_speed === "mach") { 
        result_speed_convert = inputValue_speed / 1225.08; 
    } else if (fromUnit_speed === "fps" && toUnit_speed === "knots") { 
        result_speed_convert = inputValue_speed / 1.687664; 
    } else if (fromUnit_speed === "knots" && toUnit_speed === "fps") { 
        result_speed_convert = inputValue_speed * 1.687664; 
    } else if (fromUnit_speed === "fps" && toUnit_speed === "mph") { 
        result_speed_convert = inputValue_speed / 1.466535;
    } else if (fromUnit_speed === "mph" && toUnit_speed === "fps") { 
        result_speed_convert = inputValue_speed * 1.466535; 
    } else if (fromUnit_speed === "fps" && toUnit_speed === "kph") { 
        result_speed_convert = inputValue_speed * 1.09728; 
    } else if (fromUnit_speed === "kph" && toUnit_speed === "fps") { 
        result_speed_convert = inputValue_speed / 1.09728; 
    } else if (fromUnit_speed === "mps" && toUnit_speed === "knots") { 
        result_speed_convert = inputValue_speed / 1.150783; 
    } else if (fromUnit_speed === "knots" && toUnit_speed === "mps") { 
        result_speed_convert = inputValue_speed * 1.150783; 
    } else if (fromUnit_speed === "mps" && toUnit_speed === "mph") { 
        result_speed_convert = inputValue_speed * 2.237136; 
    } else if (fromUnit_speed === "mph" && toUnit_speed === "mps") { 
        result_speed_convert = inputValue_speed / 2.237136; 
    } else if (fromUnit_speed === "mps" && toUnit_speed === "kph") { 
        result_speed_convert = inputValue_speed * 3.6; 
    } else if (fromUnit_speed === "kph" && toUnit_speed === "mps") { 
        result_speed_convert = inputValue_speed / 3.6; 
    } else if (fromUnit_speed === "knots" && toUnit_speed === "mph") { 
        result_speed_convert = inputValue_speed * 1.150783; 
    } else if (fromUnit_speed === "mph" && toUnit_speed === "knots") { 
        result_speed_convert = inputValue_speed / 1.150783; 
    } else if (fromUnit_speed === "knots" && toUnit_speed === "kph") { 
        result_speed_convert = inputValue_speed * 1.85184; 
    } else if (fromUnit_speed === "kph" && toUnit_speed === "knots") { 
        result_speed_convert = inputValue_speed / 1.85184; 
    } else if (fromUnit_speed === "mph" && toUnit_speed === "kph") { 
        result_speed_convert = inputValue_speed * 1.6092; 
    } else if (fromUnit_speed === "kph" && toUnit_speed === "mph") { 
        result_speed_convert = inputValue_speed / 1.6092; 
    } else { 
        result_speed_convert = inputValue_speed; // No conversion needed 
    }

    // Display the result 
    document.getElementById("result_speed_convert").innerHTML =  
        result_speed_convert.toFixed(6);
} 