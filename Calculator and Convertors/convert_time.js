function convert_time() { 
    // Retrieve input values 
    let inputValue_time =  
        document.getElementById("inputValue_time").value; 

    let fromUnit_time =  
        document.getElementById("fromUnit_time").value; 

    let toUnit_time =  
        document.getElementById("toUnit_time").value; 
    
    // Convert the length based on the selected units 
    let result_time_convert;

    if (fromUnit_time === "microS" && toUnit_time === "milliS") { 
        result_time_convert = inputValue_time / 1000; 
    } else if (fromUnit_time === "microS" && toUnit_time === "sec") { 
        result_time_convert = inputValue_time / 1000000; 
    }
    else if (fromUnit_time === "microS" && toUnit_time === "min") { 
        result_time_convert = inputValue_time / 60000000; 
    }
    else if (fromUnit_time === "microS" && toUnit_time === "hour") { 
        result_time_convert = inputValue_time / 3600000000; 
    }
    else if (fromUnit_time === "microS" && toUnit_time === "day") { 
        result_time_convert = inputValue_time / 86400000000; 
    }
    else if (fromUnit_time === "microS" && toUnit_time === "week") { 
        result_time_convert = inputValue_time / 604800000000; 
    }
    else if (fromUnit_time === "microS" && toUnit_time === "year") { 
        result_time_convert = inputValue_time / 31557600000000; 
    }
    else if (fromUnit_time === "milliS" && toUnit_time === "microS") { 
        result_time_convert = inputValue_time * 1000; 
    }
    else if (fromUnit_time === "milliS" && toUnit_time === "sec") { 
        result_time_convert = inputValue_time / 1000; 
    }
    else if (fromUnit_time === "milliS" && toUnit_time === "min") { 
        result_time_convert = inputValue_time / 60000; 
    }
    else if (fromUnit_time === "milliS" && toUnit_time === "hour") { 
        result_time_convert = inputValue_time /3600000 ; 
    }
    else if (fromUnit_time === "milliS" && toUnit_time === "day") { 
        result_time_convert = inputValue_time / 86400000; 
    }
    else if (fromUnit_time === "milliS" && toUnit_time === "week") { 
        result_time_convert = inputValue_time / 604800000; 
    }
    else if (fromUnit_time === "milliS" && toUnit_time === "year") { 
        result_time_convert = inputValue_time / 31557600000; 
    }
    else if (fromUnit_time === "sec" && toUnit_time === "microS") { 
        result_time_convert = inputValue_time * 1000000; 
    }
    else if (fromUnit_time === "sec" && toUnit_time === "milliS") { 
        result_time_convert = inputValue_time * 1000; 
    }
    else if (fromUnit_time === "sec" && toUnit_time === "min") { 
        result_time_convert = inputValue_time / 60; 
    }
    else if (fromUnit_time === "sec" && toUnit_time === "hour") { 
        result_time_convert = inputValue_time / 3600; 
    }
    else if (fromUnit_time === "sec" && toUnit_time === "day") { 
        result_time_convert = inputValue_time / 86400; 
    }
    else if (fromUnit_time === "sec" && toUnit_time === "week") { 
        result_time_convert = inputValue_time / 604800; 
    }
    else if (fromUnit_time === "sec" && toUnit_time === "year") { 
        result_time_convert = inputValue_time / 31557600; 
    }
    else if (fromUnit_time === "min" && toUnit_time === "microS") { 
        result_time_convert = inputValue_time * 60000000; 
    }
    else if (fromUnit_time === "min" && toUnit_time === "milliS") { 
        result_time_convert = inputValue_time * 60000; 
    }
    else if (fromUnit_time === "min" && toUnit_time === "sec") { 
        result_time_convert = inputValue_time * 60; 
    }
    else if (fromUnit_time === "min" && toUnit_time === "hour") { 
        result_time_convert = inputValue_time / 60; 
    }
    else if (fromUnit_time === "min" && toUnit_time === "day") { 
        result_time_convert = inputValue_time / 1440; 
    }
    else if (fromUnit_time === "min" && toUnit_time === "week") { 
        result_time_convert = inputValue_time / 10080; 
    }
    else if (fromUnit_time === "min" && toUnit_time === "year") { 
        result_time_convert = inputValue_time / 525960; 
    }
    else if (fromUnit_time === "hour" && toUnit_time === "microS") { 
        result_time_convert = inputValue_time * 3600000000; 
    }
    else if (fromUnit_time === "hour" && toUnit_time === "milliS") { 
        result_time_convert = inputValue_time * 3600000; 
    }
    else if (fromUnit_time === "hour" && toUnit_time === "sec") { 
        result_time_convert = inputValue_time * 3600; 
    }
    else if (fromUnit_time === "hour" && toUnit_time === "min") { 
        result_time_convert = inputValue_time * 60; 
    }
    else if (fromUnit_time === "hour" && toUnit_time === "day") { 
        result_time_convert = inputValue_time / 24; 
    }
    else if (fromUnit_time === "hour" && toUnit_time === "week") { 
        result_time_convert = inputValue_time / 168; 
    }
    else if (fromUnit_time === "hour" && toUnit_time === "year") { 
        result_time_convert = inputValue_time / 8766; 
    }
    else if (fromUnit_time === "day" && toUnit_time === "microS") { 
        result_time_convert = inputValue_time * 86400000000; 
    }
    else if (fromUnit_time === "day" && toUnit_time === "milliS") { 
        result_time_convert = inputValue_time * 86400000; 
    }
    else if (fromUnit_time === "day" && toUnit_time === "sec") { 
        result_time_convert = inputValue_time * 86400; 
    }
    else if (fromUnit_time === "day" && toUnit_time === "min") { 
        result_time_convert = inputValue_time * 1440; 
    }
    else if (fromUnit_time === "day" && toUnit_time === "hour") { 
        result_time_convert = inputValue_time * 24; 
    }
    else if (fromUnit_time === "day" && toUnit_time === "week") { 
        result_time_convert = inputValue_time / 7; 
    }
    else if (fromUnit_time === "day" && toUnit_time === "year") { 
        result_time_convert = inputValue_time / 365.25; 
    }
    else if (fromUnit_time === "week" && toUnit_time === "microS") { 
        result_time_convert = inputValue_time * 604800000000; 
    }
    else if (fromUnit_time === "week" && toUnit_time === "milliS") { 
        result_time_convert = inputValue_time * 604800000; 
    }
    else if (fromUnit_time === "week" && toUnit_time === "sec") { 
        result_time_convert = inputValue_time * 604800; 
    }
    else if (fromUnit_time === "week" && toUnit_time === "min") { 
        result_time_convert = inputValue_time * 10080; 
    }
    else if (fromUnit_time === "week" && toUnit_time === "hour") { 
        result_time_convert = inputValue_time * 168; 
    }
    else if (fromUnit_time === "week" && toUnit_time === "day") { 
        result_time_convert = inputValue_time * 7; 
    }
    else if (fromUnit_time === "week" && toUnit_time === "year") { 
        result_time_convert = inputValue_time / 52.17857; 
    }
    else if (fromUnit_time === "year" && toUnit_time === "microS") { 
        result_time_convert = inputValue_time * 31557600000000; 
    }
    else if (fromUnit_time === "year" && toUnit_time === "milliS") { 
        result_time_convert = inputValue_time * 31557600000; 
    }
    else if (fromUnit_time === "year" && toUnit_time === "sec") { 
        result_time_convert = inputValue_time * 31557600; 
    }
    else if (fromUnit_time === "year" && toUnit_time === "min") { 
        result_time_convert = inputValue_time * 525960; 
    }
    else if (fromUnit_time === "year" && toUnit_time === "hour") { 
        result_time_convert = inputValue_time * 8766; 
    }
    else if (fromUnit_time === "year" && toUnit_time === "day") { 
        result_time_convert = inputValue_time * 365.25; 
    }
    else if (fromUnit_time === "year" && toUnit_time === "week") { 
        result_time_convert = inputValue_time * 52.17857; 
    }
     else { 
        result_tine_convert = inputValue_time; // No conversion needed 
    }

    // Display the result 
    document.getElementById("result_time_convert").innerHTML =  
        result_time_convert.toFixed(14);
} 