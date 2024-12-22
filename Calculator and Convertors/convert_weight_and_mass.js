function convert_weight_and_mass() { 
    // Retrieve input values 
    let inputValue_weigth_and_mass =  
        document.getElementById("inputValue_weigth_and_mass").value; 

    let fromUnit_weigth_and_mass =  
        document.getElementById("fromUnit_weigth_and_mass").value; 

    let toUnit_weigth_and_mass =  
        document.getElementById("toUnit_weigth_and_mass").value; 
    
    // Convert the length based on the selected units 
    let result_weigth_and_mass_convert;

    if (fromUnit_weigth_and_mass === "car" && toUnit_weigth_and_mass === "mgra") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass * 200; 
    } else if (fromUnit_weigth_and_mass === "car" && toUnit_weigth_and_mass === "gra") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass / 5; 
    } else if (fromUnit_weigth_and_mass === "car" && toUnit_weigth_and_mass === "kgra") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass / 5000; 
    } else if (fromUnit_weigth_and_mass === "car" && toUnit_weigth_and_mass === "mt") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass / 5000000; 
    } else if (fromUnit_weigth_and_mass === "car" && toUnit_weigth_and_mass === "pou") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass / 2267.962; 
    } else if (fromUnit_weigth_and_mass === "mgra" && toUnit_weigth_and_mass === "car") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass / 200; 
    } else if (fromUnit_weigth_and_mass === "mgra" && toUnit_weigth_and_mass === "gra") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass / 1000; 
    } else if (fromUnit_weigth_and_mass === "mgra" && toUnit_weigth_and_mass === "kgra") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass / 1000000; 
    } else if (fromUnit_weigth_and_mass === "mgra" && toUnit_weigth_and_mass === "mt") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass / 1000000000; 
    } else if (fromUnit_weigth_and_mass === "mgra" && toUnit_weigth_and_mass === "pou") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass / 453592.4; 
    } else if (fromUnit_weigth_and_mass === "gra" && toUnit_weigth_and_mass === "car") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass * 5; 
    } else if (fromUnit_weigth_and_mass === "gra" && toUnit_weigth_and_mass === "mgra") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass * 1000; 
    } else if (fromUnit_weigth_and_mass === "gra" && toUnit_weigth_and_mass === "kgra") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass / 1000; 
    } else if (fromUnit_weigth_and_mass === "gra" && toUnit_weigth_and_mass === "mt") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass / 1000000; 
    } else if (fromUnit_weigth_and_mass === "gra" && toUnit_weigth_and_mass === "pou") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass / 453.5924; 
    } else if (fromUnit_weigth_and_mass === "kgra" && toUnit_weigth_and_mass === "car") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass * 5000; 
    } else if (fromUnit_weigth_and_mass === "kgra" && toUnit_weigth_and_mass === "mgra") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass * 1000000; 
    } else if (fromUnit_weigth_and_mass === "kgra" && toUnit_weigth_and_mass === "gra") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass * 1000; 
    } else if (fromUnit_weigth_and_mass === "kgra" && toUnit_weigth_and_mass === "mt") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass / 1000; 
    } else if (fromUnit_weigth_and_mass === "kgra" && toUnit_weigth_and_mass === "pou") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass * 2.204623; 
    } else if (fromUnit_weigth_and_mass === "mt" && toUnit_weigth_and_mass === "car") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass * 5000000; 
    } else if (fromUnit_weigth_and_mass === "mt" && toUnit_weigth_and_mass === "mgra") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass * 1000000000; 
    } else if (fromUnit_weigth_and_mass === "mt" && toUnit_weigth_and_mass === "gra") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass * 1000000; 
    } else if (fromUnit_weigth_and_mass === "mt" && toUnit_weigth_and_mass === "kgra") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass * 1000; 
    } else if (fromUnit_weigth_and_mass === "mt" && toUnit_weigth_and_mass === "pou") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass * 2204.623; 
    } else if (fromUnit_weigth_and_mass === "pou" && toUnit_weigth_and_mass === "car") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass * 2267.962; 
    } else if (fromUnit_weigth_and_mass === "pou" && toUnit_weigth_and_mass === "mgra") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass * 453592.4; 
    } else if (fromUnit_weigth_and_mass === "pou" && toUnit_weigth_and_mass === "gra") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass * 453.5924; 
    } else if (fromUnit_weigth_and_mass === "pou" && toUnit_weigth_and_mass === "kgra") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass / 2.204623; 
    } else if (fromUnit_weigth_and_mass === "pou" && toUnit_weigth_and_mass === "mt") { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass / 2204.623; 
    } else { 
        result_weigth_and_mass_convert = inputValue_weigth_and_mass; // No conversion needed 
    }

    // Display the result 
    document.getElementById("result_weigth_and_mass_convert").innerHTML =  
        result_weigth_and_mass_convert.toFixed(9);
    } 