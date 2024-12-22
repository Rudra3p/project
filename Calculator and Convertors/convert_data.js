function convert_data() { 
    // Retrieve input values 
    let inputValue_data =  
        document.getElementById("inputValue_data").value; 

    let fromUnit_data =  
        document.getElementById("fromUnit_data").value; 

    let toUnit_data =  
        document.getElementById("toUnit_data").value; 
    
    // Convert the length based on the selected units 
    let result_data_convert;

    if (fromUnit_data === "bit" && toUnit_data === "byte") { 
        result_data_convert = inputValue_data / 8; 
    } else if (fromUnit_data === "bit" && toUnit_data === "kb") { 
        result_data_convert = inputValue_data /8000 ; 
    } else if (fromUnit_data === "bit" && toUnit_data === "mb") { 
        result_data_convert = inputValue_data /8000000 ; 
    } else if (fromUnit_data === "bit" && toUnit_data === "gb") { 
        result_data_convert = inputValue_data /8000000000 ; 
    } else if (fromUnit_data === "bit" && toUnit_data === "tb") { 
        result_data_convert = inputValue_data /8000000000000 ;
    } else if (fromUnit_data === "bit" && toUnit_data === "pb") { 
        result_data_convert = inputValue_data /8000000000000000 ;
    } else if (fromUnit_data === "bit" && toUnit_data === "eb") { 
        result_data_convert = inputValue_data /8000000000000000000 ;
    } else if (fromUnit_data === "bit" && toUnit_data === "zb") { 
        result_data_convert = inputValue_data /8000000000000000000000 ;
    } else if (fromUnit_data === "bit" && toUnit_data === "yb") { 
        result_data_convert = inputValue_data /8000000000000000000000000 ;
    } else if (fromUnit_data === "byte" && toUnit_data === "bit") { 
        result_data_convert = inputValue_data * 8;
    } else if (fromUnit_data === "byte" && toUnit_data === "kb") { 
        result_data_convert = inputValue_data / 1000;
    } else if (fromUnit_data === "byte" && toUnit_data === "mb") { 
        result_data_convert = inputValue_data / 1000000;
    } else if (fromUnit_data === "byte" && toUnit_data === "gb") { 
        result_data_convert = inputValue_data / 1000000000;
    } else if (fromUnit_data === "byte" && toUnit_data === "tb") { 
        result_data_convert = inputValue_data / 1000000000000;
    } else if (fromUnit_data === "byte" && toUnit_data === "pb") { 
        result_data_convert = inputValue_data / 1000000000000000;
    } else if (fromUnit_data === "byte" && toUnit_data === "eb") { 
        result_data_convert = inputValue_data / 1000000000000000000;
    } else if (fromUnit_data === "byte" && toUnit_data === "zb") { 
        result_data_convert = inputValue_data / 1000000000000000000000;
    } else if (fromUnit_data === "byte" && toUnit_data === "yb") { 
        result_data_convert = inputValue_data / 1000000000000000000000000;
    } else if (fromUnit_data === "kb" && toUnit_data === "bit") { 
        result_data_convert = inputValue_data * 8000;
    } else if (fromUnit_data === "kb" && toUnit_data === "byte") { 
        result_data_convert = inputValue_data * 1000;
    } else if (fromUnit_data === "kb" && toUnit_data === "mb") { 
        result_data_convert = inputValue_data / 1000;
    } else if (fromUnit_data === "kb" && toUnit_data === "gb") { 
        result_data_convert = inputValue_data / 1000000;
    } else if (fromUnit_data === "kb" && toUnit_data === "tb") { 
        result_data_convert = inputValue_data / 1000000000;
    } else if (fromUnit_data === "kb" && toUnit_data === "pb") { 
        result_data_convert = inputValue_data / 1000000000000;
    } else if (fromUnit_data === "kb" && toUnit_data === "eb") { 
        result_data_convert = inputValue_data / 1000000000000000;
    } else if (fromUnit_data === "kb" && toUnit_data === "zb") { 
        result_data_convert = inputValue_data / 1000000000000000000;
    } else if (fromUnit_data === "kb" && toUnit_data === "yb") { 
        result_data_convert = inputValue_data / 1000000000000000000000;
    } else if (fromUnit_data === "mb" && toUnit_data === "bit") { 
        result_data_convert = inputValue_data * 8000000;
    } else if (fromUnit_data === "mb" && toUnit_data === "byte") { 
        result_data_convert = inputValue_data * 1000000;
    } else if (fromUnit_data === "mb" && toUnit_data === "kb") { 
        result_data_convert = inputValue_data * 1000;
    } else if (fromUnit_data === "mb" && toUnit_data === "gb") { 
        result_data_convert = inputValue_data / 1000;
    } else if (fromUnit_data === "mb" && toUnit_data === "tb") { 
        result_data_convert = inputValue_data / 1000000;
    } else if (fromUnit_data === "mb" && toUnit_data === "pb") { 
        result_data_convert = inputValue_data / 1000000000;
    } else if (fromUnit_data === "mb" && toUnit_data === "eb") { 
        result_data_convert = inputValue_data / 1000000000000;
    } else if (fromUnit_data === "mb" && toUnit_data === "zb") { 
        result_data_convert = inputValue_data / 1000000000000000;
    } else if (fromUnit_data === "mb" && toUnit_data === "yb") { 
        result_data_convert = inputValue_data / 1000000000000000000;
    } else if (fromUnit_data === "gb" && toUnit_data === "bit") { 
        result_data_convert = inputValue_data * 8000000000 ;
    } else if (fromUnit_data === "gb" && toUnit_data === "byte") { 
        result_data_convert = inputValue_data * 1000000000 ;
    } else if (fromUnit_data === "gb" && toUnit_data === "kb") { 
        result_data_convert = inputValue_data * 1000000 ;
    } else if (fromUnit_data === "gb" && toUnit_data === "mb") { 
        result_data_convert = inputValue_data * 1000 ;
    } else if (fromUnit_data === "gb" && toUnit_data === "tb") { 
        result_data_convert = inputValue_data / 1000000 ;
    } else if (fromUnit_data === "gb" && toUnit_data === "pb") { 
        result_data_convert = inputValue_data / 1000000000 ;
    } else if (fromUnit_data === "gb" && toUnit_data === "eb") { 
        result_data_convert = inputValue_data / 1000000000000 ;
    } else if (fromUnit_data === "gb" && toUnit_data === "zb") { 
        result_data_convert = inputValue_data / 1000000000000000 ;
    } else if (fromUnit_data === "gb" && toUnit_data === "yb") { 
        result_data_convert = inputValue_data / 1000000000000000000 ;
    } else if (fromUnit_data === "tb" && toUnit_data === "bit") { 
        result_data_convert = inputValue_data * 8000000000000;
    } else if (fromUnit_data === "tb" && toUnit_data === "byte") { 
        result_data_convert = inputValue_data * 1000000000000;
    } else if (fromUnit_data === "tb" && toUnit_data === "kb") { 
        result_data_convert = inputValue_data * 1000000000;
    } else if (fromUnit_data === "tb" && toUnit_data === "mb") { 
        result_data_convert = inputValue_data * 1000000;
    } else if (fromUnit_data === "tb" && toUnit_data === "gb") { 
        result_data_convert = inputValue_data * 1000;
    } else if (fromUnit_data === "tb" && toUnit_data === "pb") { 
        result_data_convert = inputValue_data / 1000;
    } else if (fromUnit_data === "tb" && toUnit_data === "eb") { 
        result_data_convert = inputValue_data / 1000000;
    } else if (fromUnit_data === "tb" && toUnit_data === "zb") { 
        result_data_convert = inputValue_data / 1000000000;
    } else if (fromUnit_data === "tb" && toUnit_data === "yb") { 
        result_data_convert = inputValue_data / 1000000000000;
    } else if (fromUnit_data === "pb" && toUnit_data === "bit") { 
        result_data_convert = inputValue_data * 8000000000000000;
    } else if (fromUnit_data === "pb" && toUnit_data === "byte") { 
        result_data_convert = inputValue_data * 1000000000000000;
    } else if (fromUnit_data === "pb" && toUnit_data === "kb") { 
        result_data_convert = inputValue_data * 1000000000000;
    } else if (fromUnit_data === "pb" && toUnit_data === "mb") { 
        result_data_convert = inputValue_data * 1000000000;
    } else if (fromUnit_data === "pb" && toUnit_data === "gb") { 
        result_data_convert = inputValue_data * 1000000;
    } else if (fromUnit_data === "pb" && toUnit_data === "tb") { 
        result_data_convert = inputValue_data * 1000;
    } else if (fromUnit_data === "pb" && toUnit_data === "eb") { 
        result_data_convert = inputValue_data / 1000;
    } else if (fromUnit_data === "pb" && toUnit_data === "zb") { 
        result_data_convert = inputValue_data / 1000000;
    } else if (fromUnit_data === "pb" && toUnit_data === "yb") { 
        result_data_convert = inputValue_data / 1000000000;
    } else if (fromUnit_data === "eb" && toUnit_data === "bit") { 
        result_data_convert = inputValue_data * 8000000000000000000;
    } else if (fromUnit_data === "eb" && toUnit_data === "byte") { 
        result_data_convert = inputValue_data * 1000000000000000000;
    } else if (fromUnit_data === "eb" && toUnit_data === "kb") { 
        result_data_convert = inputValue_data * 1000000000000000;
    } else if (fromUnit_data === "eb" && toUnit_data === "mb") { 
        result_data_convert = inputValue_data * 1000000000000;
    } else if (fromUnit_data === "eb" && toUnit_data === "gb") { 
        result_data_convert = inputValue_data * 1000000000;
    } else if (fromUnit_data === "eb" && toUnit_data === "tb") { 
        result_data_convert = inputValue_data * 1000000;
    } else if (fromUnit_data === "eb" && toUnit_data === "pb") { 
        result_data_convert = inputValue_data * 1000;
    } else if (fromUnit_data === "eb" && toUnit_data === "zb") { 
        result_data_convert = inputValue_data / 1000;
    } else if (fromUnit_data === "eb" && toUnit_data === "yb") { 
        result_data_convert = inputValue_data / 1000000;
    } else if (fromUnit_data === "zb" && toUnit_data === "bit") { 
        result_data_convert = inputValue_data * 8000000000000000000000;
    } else if (fromUnit_data === "zb" && toUnit_data === "byte") { 
        result_data_convert = inputValue_data * 1000000000000000000000;
    } else if (fromUnit_data === "zb" && toUnit_data === "kb") { 
        result_data_convert = inputValue_data * 1000000000000000000;
    } else if (fromUnit_data === "zb" && toUnit_data === "mb") { 
        result_data_convert = inputValue_data * 1000000000000000;
    } else if (fromUnit_data === "zb" && toUnit_data === "gb") { 
        result_data_convert = inputValue_data * 1000000000000;
    } else if (fromUnit_data === "zb" && toUnit_data === "tb") { 
        result_data_convert = inputValue_data * 1000000000;
    } else if (fromUnit_data === "zb" && toUnit_data === "pb") { 
        result_data_convert = inputValue_data * 1000000;
    } else if (fromUnit_data === "zb" && toUnit_data === "eb") { 
        result_data_convert = inputValue_data * 1000;
    } else if (fromUnit_data === "zb" && toUnit_data === "yb") { 
        result_data_convert = inputValue_data / 1000;
    } else if (fromUnit_data === "yb" && toUnit_data === "bit") { 
        result_data_convert = inputValue_data * 8000000000000000000000000;
    } else if (fromUnit_data === "yb" && toUnit_data === "byte") { 
        result_data_convert = inputValue_data * 1000000000000000000000000;
    } else if (fromUnit_data === "yb" && toUnit_data === "kb") { 
        result_data_convert = inputValue_data * 1000000000000000000000;
    } else if (fromUnit_data === "yb" && toUnit_data === "mb") { 
        result_data_convert = inputValue_data * 1000000000000000000;
    } else if (fromUnit_data === "yb" && toUnit_data === "gb") { 
        result_data_convert = inputValue_data * 1000000000000000;
    } else if (fromUnit_data === "yb" && toUnit_data === "tb") { 
        result_data_convert = inputValue_data * 1000000000000;
    } else if (fromUnit_data === "yb" && toUnit_data === "pb") { 
        result_data_convert = inputValue_data * 1000000000;
    } else if (fromUnit_data === "yb" && toUnit_data === "eb") { 
        result_data_convert = inputValue_data * 1000000;
    } else if (fromUnit_data === "yb" && toUnit_data === "zb") { 
        result_data_convert = inputValue_data * 1000;
    } else { 
        result_data_convert = inputValue_data; // No conversion needed 
    }

    // Display the result 
    document.getElementById("result_data_convert").innerHTML =  
        result_data_convert.toFixed(25);
} 