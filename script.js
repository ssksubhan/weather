// const API_KEY = "xSeclMRbo43DGmbB9YxEPIAWrV4DNf8J";

// const getCity = async (city) => {
//   const baseURL =
//     "http://dataservice.accuweather.com/locations/v1/cities/search";
//   const query = `?q=${city}&apikey=${API_KEY}`;
//   const cityApi = `${baseURL}/${query}`;
//   const response = await fetch(cityApi);
//   const data = await response.json();

//   return data[0];
// };


// const getWeather = async () => {
//     const cityData = await getCity('karachi')
//     console.log(cityData)

//     const weatherResponse = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=${API_KEY}`)
//     const weatherData = await weatherResponse.json()

//     console.log(weatherData)

// }






// let api ='https://api.weatherapi.com/v1/current.json?key=d347dfb1a00b4f86add45435242510&q=${city}';
// // let key='xSeclMRbo43DGmbB9YxEPIAWrV4DNf8J';


// let btn= document.getElementById("btn");
// let get= document.getElementById("Input");
// let temp= document.getElementById("temp");
// let nam= document.getElementById("name");
// let pre= document.getElementById("pre");
// let humidity= document.getElementById("hum");
// let city= document.getElementById("city");
// let img= document.getElementById("image");



// async function getWeather() {
//   let res = await fetch(api+`q=${get.valu2}`)
//     let ret = await res.json();
  

  
//   temp.innerHTML= Math.round(ret.current.temp);
//   nam.innerHTML = ret.weather[0].main;
//   pre.innerHTML = ret.main.pressure + "<br> pressure";
//   hum.innerHTML = ret.main.humidity + "<br> humdity";
//   city.innerHTML = ret.name  
// }
 
// btn.addEventListener('click',()=>{
//   getWeather()
// })


  // fetch(api)
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error("City not found");
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     const weatherDisplay = document.getElementById("weatherDisplay");
  //     weatherDisplay.innerHTML = `
  //       <h2>${data.name}</h2>
  //       <p>Temperature: ${data.main.temp} °C</p>
  //       <p><strong>Weather:</strong> ${data.weather[0].description}</p>
  //       <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
  //       <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
  //     `;
  //   })
  //   .catch(error => {
  //     document.getElementById("weatherDisplay").innerHTML =
  //       `<p style="color:red;">Error: ${error.message}</p>`;
  //   });

async function searchWeather(){
  const city = document.getElementById('searchCity').value;
  const apiKey ='d347dfb1a00b4f86add45435242510';
  const url= `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try{
    const response = await fetch(url);
    if (!response.ok) throw new Error('City not found');

    const data =await response.json();
    console.log("data",data);

    document.getElementById('weatherResult').innerHTML=`
    <h3>${data.location.name} : ${data.location.country}</h3>
    <p><strong style="color:red;"> Temperature:</strong> ${data.current.temp_c}°C</p>
     <p><strong style="color:pink;"> Condition:</strong> ${data.current.condition.text}</p>
     <p><strong style="color: #13eb1a;">feelslike:</strong> ${data.current.feelslike_c}</p>
     <p><strong>localtime:</strong> ${data.location.localtime}</p>

     <img src="${data.current.condition.icon}" alt="weather icon">

    `;
  }catch(error){
    document.getElementById('weatherResult').innerHTML=`
    <p style="color:red;">${error.message}</p>`;
  }
}

  























