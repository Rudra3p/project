        function convert_length() { 
            // Retrieve input values 
            let inputValue_length =  
                document.getElementById("inputValue_length").value; 
  
            let fromUnit_length =  
                document.getElementById("fromUnit_length").value; 
  
            let toUnit_length =  
                document.getElementById("toUnit_length").value; 
            
            // Convert the length based on the selected units 
            let result_length_convert;

            if (fromUnit_length === "cm" && toUnit_length === "inch") { 
                result_length_convert = inputValue_length / 2.54; 
            } else if (fromUnit_length === "inch" && toUnit_length === "cm") { 
                result_length_convert = inputValue_length * 2.54; 
            } else if (fromUnit_length === "cm" && toUnit_length === "feet") { 
                result_length_convert = inputValue_length / 30.48; 
            } else if (fromUnit_length === "feet" && toUnit_length === "cm") { 
                result_length_convert = inputValue_length * 30.48; 
            } else if (fromUnit_length === "cm" && toUnit === "meter") { 
                result_length_convert = inputValue_length / 100; 
            } else if (fromUnit_length === "meter" && toUnit_length === "cm") { 
                result_length_convert = inputValue_length * 100; 
            } else if (fromUnit_length === "inch" && toUnit_length === "feet") { 
                result_length_convert = inputValue_length / 12; 
            } else if (fromUnit_length === "feet" && toUnit_length === "inch") { 
                result_length_convert = inputValue_length * 12; 
            } else if (fromUnit_length === "inch" && toUnit_length === "meter") { 
                result_length_convert = inputValue_length * 0.0254; 
            } else if (fromUnit_length === "meter" && toUnit_length === "inch") { 
                result_length_convert = inputValue_length / 0.0254; 
            } else if (fromUnit_length === "feet" && toUnit_length === "meter") { 
                result_length_convert = inputValue_length * 0.3048; 
            } else if (fromUnit_length === "meter" && toUnit_length === "feet") { 
                result_length_convert = inputValue_length / 0.3048; 
            } else if (fromUnit_length === "cm" && toUnit_length === "yard") { 
                result_length_convert = inputValue_length / 91.44; 
            } else if (fromUnit_length === "yard" && toUnit_length === "cm") { 
                result_length_convert = inputValue_length * 91.44; 
            } else if (fromUnit_length === "cm" && toUnit_length === "mile") { 
                result_length_convert = inputValue_length / 160934.4; 
            } else if (fromUnit_length === "mile" && toUnit_length === "cm") { 
                result_length_convert = inputValue_length * 160934.4; 
            } else if (fromUnit_length === "cm" && toUnit_length === "kilometer") { 
                result_length_convert = inputValue_length / 100000; 
            } else if (fromUnit_length === "kilometer" && toUnit_length === "cm") { 
                result_length_convert = inputValue_length * 100000; 
            } else if (fromUnit_length === "inch" && toUnit_length === "yard") { 
                result_length_convert = inputValue_length / 36; 
            } else if (fromUnit_length === "yard" && toUnit_length === "inch") { 
                result_length_convert = inputValue_length * 36; 
            } else if (fromUnit_length === "inch" && toUnit_length === "mile") { 
                result_length_convert = inputValue_length / 63360; 
            } else if (fromUnit_length === "mile" && toUnit_length === "inch") { 
                result_length_convert = inputValue_length * 63360; 
            } else if (fromUnit_length === "inch" && toUnit_length === "kilometer") { 
                result_length_convert = inputValue_length * 0.0000254; 
            } else if (fromUnit_length === "kilometer" && toUnit_length === "inch") { 
                result_length_convert = inputValue_length / 0.0000254; 
            } else if (fromUnit_length === "feet" && toUnit_length === "yard") { 
                result_length_convert = inputValue_length / 3; 
            } else if (fromUnit_length === "yard" && toUnit_length === "feet") { 
                result_length_convert = inputValue_length * 3; 
            } else if (fromUnit_length === "feet" && toUnit_length === "mile") { 
                result_length_convert = inputValue_length / 5280; 
            } else if (fromUnit_length === "mile" && toUnit_length === "feet") { 
                result_length_convert = inputValue_length * 5280; 
            } else if (fromUnit_length === "feet" && toUnit_length === "kilometer") { 
                result_length_convert = inputValue_length * 0.0003048; 
            } else if (fromUnit_length === "kilometer" && toUnit_length === "feet") { 
                result_length_convert = inputValue_length / 0.0003048; 
            } else if (fromUnit_length === "meter" && toUnit_length === "yard") { 
                result_length_convert = inputValue_length * 1.09361; 
            } else if (fromUnit_length === "yard" && toUnit_length === "meter") { 
                result_length_convert = inputValue_length / 1.09361; 
            } else if (fromUnit_length === "meter" && toUnit_length === "mile") { 
                result_length_convert = inputValue_length / 1609.34; 
            } else if (fromUnit_length === "mile" && toUnit_length === "meter") { 
                result_length_convert = inputValue_length * 1609.34; 
            } else if (fromUnit_length === "meter" && toUnit_length === "kilometer") { 
                result_length_convert = inputValue_length / 1000; 
            } else if (fromUnit_length === "kilometer" && toUnit_length === "meter") { 
                result_length_convert = inputValue_length * 1000; 
            } else if (fromUnit_length === "yard" && toUnit_length === "mile") { 
                result_length_convert = inputValue_length / 1760; 
            } else if (fromUnit_length === "mile" && toUnit_length === "yard") { 
                result_length_convert = inputValue_length * 1760; 
            } else if (fromUnit_length === "yard" && toUnit_length === "kilometer") { 
                result_length_convert = inputValue_length / 1093.61; 
            } else if (fromUnit_length === "kilometer" && toUnit_length === "yard") { 
                result_length_convert = inputValue_length * 1093.61; 
            } else if (fromUnit_length === "mile" && toUnit_length === "kilometer") { 
                result_length_convert = inputValue_length * 1.60934; 
            } else if (fromUnit_length === "kilometer" && toUnit_length === "mile") { 
                result_length_convert = inputValue_length / 1.60934; 
            } else { 
                result_length_convert = inputValue_length; // No conversion needed 
            }

            // Display the result 
            document.getElementById("result_length_convert").innerHTML =  
                result_length_convert.toFixed(7);
        } 