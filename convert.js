        function convert_length() { 
            // Retrieve input values 
            let inputValue =  
                document.getElementById("inputValue").value; 
  
            let fromUnit =  
                document.getElementById("fromUnit").value; 
  
            let toUnit =  
                document.getElementById("toUnit").value; 
            
            // Convert the length based on the selected units 
            let result_length_convert;

            if (fromUnit === "cm" && toUnit === "inch") { 
                result_length_convert = inputValue / 2.54; 
            } else if (fromUnit === "inch" && toUnit === "cm") { 
                result_length_convert = inputValue * 2.54; 
            } else if (fromUnit === "cm" && toUnit === "feet") { 
                result_length_convert = inputValue / 30.48; 
            } else if (fromUnit === "feet" && toUnit === "cm") { 
                result_length_convert = inputValue * 30.48; 
            } else if (fromUnit === "cm" && toUnit === "meter") { 
                result_length_convert = inputValue / 100; 
            } else if (fromUnit === "meter" && toUnit === "cm") { 
                result_length_convert = inputValue * 100; 
            } else if (fromUnit === "inch" && toUnit === "feet") { 
                result_length_convert = inputValue / 12; 
            } else if (fromUnit === "feet" && toUnit === "inch") { 
                result_length_convert = inputValue * 12; 
            } else if (fromUnit === "inch" && toUnit === "meter") { 
                result_length_convert = inputValue * 0.0254; 
            } else if (fromUnit === "meter" && toUnit === "inch") { 
                result_length_convert = inputValue / 0.0254; 
            } else if (fromUnit === "feet" && toUnit === "meter") { 
                result_length_convert = inputValue * 0.3048; 
            } else if (fromUnit === "meter" && toUnit === "feet") { 
                result_length_convert = inputValue / 0.3048; 
            } else if (fromUnit === "cm" && toUnit === "yard") { 
                result_length_convert = inputValue / 91.44; 
            } else if (fromUnit === "yard" && toUnit === "cm") { 
                result_length_convert = inputValue * 91.44; 
            } else if (fromUnit === "cm" && toUnit === "mile") { 
                result_length_convert = inputValue / 160934.4; 
            } else if (fromUnit === "mile" && toUnit === "cm") { 
                result_length_convert = inputValue * 160934.4; 
            } else if (fromUnit === "cm" && toUnit === "kilometer") { 
                result_length_convert = inputValue / 100000; 
            } else if (fromUnit === "kilometer" && toUnit === "cm") { 
                result_length_convert = inputValue * 100000; 
            } else if (fromUnit === "inch" && toUnit === "yard") { 
                result_length_convert = inputValue / 36; 
            } else if (fromUnit === "yard" && toUnit === "inch") { 
                result_length_convert = inputValue * 36; 
            } else if (fromUnit === "inch" && toUnit === "mile") { 
                result_length_convert = inputValue / 63360; 
            } else if (fromUnit === "mile" && toUnit === "inch") { 
                result_length_convert = inputValue * 63360; 
            } else if (fromUnit === "inch" && toUnit === "kilometer") { 
                result_length_convert = inputValue * 0.0000254; 
            } else if (fromUnit === "kilometer" && toUnit === "inch") { 
                result_length_convert = inputValue / 0.0000254; 
            } else if (fromUnit === "feet" && toUnit === "yard") { 
                result_length_convert = inputValue / 3; 
            } else if (fromUnit === "yard" && toUnit === "feet") { 
                result_length_convert = inputValue * 3; 
            } else if (fromUnit === "feet" && toUnit === "mile") { 
                result_length_convert = inputValue / 5280; 
            } else if (fromUnit === "mile" && toUnit === "feet") { 
                result_length_convert = inputValue * 5280; 
            } else if (fromUnit === "feet" && toUnit === "kilometer") { 
                result_length_convert = inputValue * 0.0003048; 
            } else if (fromUnit === "kilometer" && toUnit === "feet") { 
                result_length_convert = inputValue / 0.0003048; 
            } else if (fromUnit === "meter" && toUnit === "yard") { 
                result_length_convert = inputValue * 1.09361; 
            } else if (fromUnit === "yard" && toUnit === "meter") { 
                result_length_convert = inputValue / 1.09361; 
            } else if (fromUnit === "meter" && toUnit === "mile") { 
                result_length_convert = inputValue / 1609.34; 
            } else if (fromUnit === "mile" && toUnit === "meter") { 
                result_length_convert = inputValue * 1609.34; 
            } else if (fromUnit === "meter" && toUnit === "kilometer") { 
                result_length_convert = inputValue / 1000; 
            } else if (fromUnit === "kilometer" && toUnit === "meter") { 
                result_length_convert = inputValue * 1000; 
            } else if (fromUnit === "yard" && toUnit === "mile") { 
                result_length_convert = inputValue / 1760; 
            } else if (fromUnit === "mile" && toUnit === "yard") { 
                result_length_convert = inputValue * 1760; 
            } else if (fromUnit === "yard" && toUnit === "kilometer") { 
                result_length_convert = inputValue / 1093.61; 
            } else if (fromUnit === "kilometer" && toUnit === "yard") { 
                result_length_convert = inputValue * 1093.61; 
            } else if (fromUnit === "mile" && toUnit === "kilometer") { 
                result_length_convert = inputValue * 1.60934; 
            } else if (fromUnit === "kilometer" && toUnit === "mile") { 
                result_length_convert = inputValue / 1.60934; 
            } else { 
                result_length_convert = inputValue; // No conversion needed 
            }

            // Display the result 
            document.getElementById("result_length_convert").innerHTML =  
                result_length_convert.toFixed(7);
        } 