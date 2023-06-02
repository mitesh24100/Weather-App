
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e0dbbea06amshb39900452222291p13449djsne0c8b07d9a75',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	document.getElementById("cityname").innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			
			console.log(response)

			cloud_pct = response.cloud_pct
			temp = response.temp
			feels_like = response.feels_like
			humidity = response.humidity
			min_temp = response.min_temp
			max_temp = response.max_temp
			wind_speed = response.wind_speed
			wind_degrees = response.wind_degrees
			sunrise = response.sunrise
			sunset = response.sunset

			date_sunrise = new Date(sunrise * 1000).toLocaleTimeString();
			date_sunset = new Date(sunset * 1000).toLocaleTimeString();
			

			document.getElementById("temp").innerHTML = temp;
			document.getElementById("temp_big").innerHTML = temp;
			document.getElementById("feels_like").innerHTML = feels_like;
			document.getElementById("humidity").innerHTML = humidity;
			document.getElementById("humidity\_big").innerHTML = humidity;
			document.getElementById("min_temp").innerHTML = min_temp;
			document.getElementById("max_temp").innerHTML = max_temp;
			document.getElementById("wind_speed").innerHTML = wind_speed;
			document.getElementById("wind_speed_big").innerHTML = wind_speed;
			document.getElementById("sunrise").innerHTML = date_sunrise;
			document.getElementById("sunset").innerHTML = date_sunset;
		
		})
		.catch(err => console.log(err));
}

// Getting Button's ID and adding click event listener to get the Searchbar value (i.e. city)
document.getElementById("submit").addEventListener("click", (e) => {

	// To prevent refreshing of page again and again
	e.preventDefault()
	// Searchbar id is city
	City = document.getElementById("city").value;
	// Passing the city to getWeather function above
	getWeather(City);

})


const cursor = document.querySelector(".cursor")

// Follow cursor on mousemove
document.addEventListener("mousemove", (e) => {

	let x = e.pageX;
	let y = e.pageY;

	cursor.style.top = y + "px";
	cursor.style.left = x + "px";
	cursor.style.display = "block";

	// When we stop mouse, the animation display will stop

	function mouseStopped(){
		cursor.style.display = "none";
	}

	timeout = setTimeout(mouseStopped, 2000)

})



