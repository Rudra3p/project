document.addEventListener('DOMContentLoaded', () => {
    const locationContainer = document.getElementById("location_input_submit_container");
    const locationInput = document.getElementById("location_input");
    const locationSubmit = document.getElementById("location_submit");
    const weatherShow = document.getElementById("weather_show");
    const menuButton = document.getElementById("menu_button");
    const dropDown = document.getElementById("drop_down");
    const bgVideos = document.getElementById("bg_videos");
    const historyButton = document.getElementById("history_button");
    const helpButton = document.getElementById("help_button");
    const feedbackButton = document.getElementById("feedback_button");
    const historyContainer = document.getElementById("history_container");

    const API_KEY = "72c2ff4e7624a94298b2877199058009";

    //
        /*videos display hide and show*/
        const smokeVi = document.getElementById("smoke_vi");
        const particlesVi = document.getElementById("particles_vi");
    //


    const bgVideosObjects = {
        smoke: smokeVi.style.display = "block",
        particles: particlesVi.style.display = "block",
    };

    // Helper: Update background video
    function updateBackgroundVideo(description) {
        const videoSrc = Object.values(bgVideosObjects).find(src => src.includes(description));
        if (videoSrc) {
            bgVideos.innerHTML = `<source src="${videoSrc}" type="video/mp4">`;
        }
    }

    // Fetch weather data
    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error("Error fetching weather data:", error);
            throw error;
        }
    }

    // Fetch current weather details
    async function fetchCurrentWeather(lat, lon) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error("Error fetching current weather:", error);
            throw error;
        }
    }

    // Display weather data
    async function displayWeatherData(weatherData) {
        if (!weatherData || !weatherData[0]) {
            showError("Weather data unavailable for the given location.");
            return;
        }

        const { lat, lon, name, state, country } = weatherData[0];
        try {
            const weatherDetails = await fetchCurrentWeather(lat, lon);
            const { weather, main, wind } = weatherDetails;

            weatherShow.innerHTML = `
                <div class="p-4 bg-white shadow-md rounded-lg">
                    <h2 class="text-2xl font-bold mb-2">Weather in ${name}, ${state || ""} ${country}</h2>
                    <p class="text-lg"> Weather: ${weather[0].description}</p>
                    <p class="text-lg">Temperature: ${main.temp}°C</p>
                    <p class="text-lg">Humidity: ${main.humidity}%</p>
                    <p class="text-lg">Wind Speed: ${wind.speed} km/h</p>
                </div>
            `;

            updateBackgroundVideo(weather[0].description);
        } catch (error) {
            showError("Error fetching weather details.");
        }
    }

    // Show error message
    function showError(message) {
        weatherShow.innerHTML = `<p class="text-red-500">${message}</p>`;
    }

    // Handle search button click
    async function buttonPress() {
        const location = locationInput.value.trim();
        if (!location) {
            showError("Please enter a location.");
            return;
        }
        try {
            const weatherData = await fetchWeatherData(location);
            await displayWeatherData(weatherData);
        } catch (error) {
            showError("Failed to fetch weather data. Please try again.");
        }
        // locationContainer.style.top = "8px";
        // locationContainer.style.position = "absolute";

        locationContainer.classList.add("top-[10%]" , "absolute" , "sm:top-[8px]" ,"max-sm:rounded-none");
    }

   
    locationInput.addEventListener('focusin', () => {
        locationContainer.style.border = "1px solid #000";
    });
    locationInput.addEventListener('focusout', () => {
        locationContainer.style.border = "1px solid #8e8e8e";
    });
    menuButton.addEventListener('click', () => {
        dropDown.classList.toggle('hidden');
        dropDown.classList.toggle('flex');
    });
    document.addEventListener('click', (event) => {
        if (!dropDown.contains(event.target) && !menuButton.contains(event.target)) {
            dropDown.classList.add('hidden');
            dropDown.classList.remove('flex');
        }
        if (!historyButton.contains(event.target) && !historyContainer.contains(event.target)){
            historyContainer.classList.add('hidden');
            historyContainer.classList.remove("block");
        }
    });
    historyButton.addEventListener('click' , ()=>{
            historyContainer.classList.add('block');
            historyContainer.classList.remove("hidden");

            dropDown.classList.add('hidden');
            dropDown.classList.remove('flex');            
    });

    const historyContainerUl = document.createElement("ul");
    
    // Event Listeners
    locationSubmit.addEventListener('click', () =>{
        buttonPress();
        const historyContainerLi = document.createElement("li");
        historyContainerLi.innerHTML = locationInput.value;
        historyContainerUl.appendChild(historyContainerLi);
        console.log(historyContainerUl);
    });
    locationInput.addEventListener('keypress', (event) => {
        if (event.key === "Enter"){ buttonPress()
            const historyContainerLi = document.createElement("li");
            historyContainerLi.innerHTML = `${locationInput.value} <buttton class="">x</buttton>`;
            historyContainerUl.appendChild(historyContainerLi);
            console.log(historyContainerUl);
        };
    });
    historyContainer.appendChild(historyContainerUl);
});
