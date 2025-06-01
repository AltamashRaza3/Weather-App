// Select necessary DOM elements
const inputBox= document.querySelector(".input_button");
const searchButton= document.querySelector("#searchButton");
const weather_img= document.querySelector(".weather-image");
const temperature= document.querySelector(".temperature");
const description= document.querySelector(".description");
const humidity= document.querySelector("#humidity");
const wind_speed= document.querySelector("#wind-speed");

const location_not_found= document.querySelector(".location_not-found");
const weather_body= document.querySelector(".weather_body");


// Function to fetch and display weather data
async function checkWeather(city){
    const api_key= "553b1f8ee8e13af5c59a1a1508a9de21";
    const url= `https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&appid=${api_key}`;

    const weather_data= await fetch(`${url}`)
    .then(response=> response.json());

    // Check if the location is not found
    if(weather_data.cod==="404"){
        location_not_found.style.display= "flex";
        weather_body.style.display= "none";


        console.log("Error: Wrong Location name");
        return;
    }

    // Display the weather information
    location_not_found.style.display= "none";
    weather_body.style.display= "flex";
    temperature.innerHTML = `${Math.round
    (weather_data.main.temp- 273.15)}°C`;

    description.innerHTML = `${weather_data.weather[0].
    description}`;
    
    humidity.innerHTML= `${weather_data.main.humidity}%`;
    
    wind_speed.innerHTML= `${weather_data.wind.speed} Km/H`;
    

    // Update weather image based on the weather condition
    switch(weather_data.weather[0].main){
        case "Clouds" :
            weather_img.src="images/cloud.png";
            break;
        case "Clear" :
            weather_img.src="images/clear.png";
            break;
        case "Rain" :
            weather_img.src="images/rain.png";
            break;
        case "Mist" :
            weather_img.src="images/mist.png";  
            break;
        case "Snow" :
            weather_img.src= "images/snow.png";   
            break;       
    }

    
}

// Add event listener to the search button
searchButton.addEventListener("click", ()=>{
    checkWeather(inputBox.value)
})

// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
