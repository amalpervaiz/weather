// const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
// const form = document.querySelector("form")
// const search = document.querySelector("#search")
// const weather= document.querySelector("#weather")


// //   const API = `https://api.openweathermap.org/data/2.5/weather?
// //     q=${city}&appid=${API_KEY}&units=metric`
//     // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
 
// const getweather= async(city)=>{
//      const API = `https://api.openweathermap.org/data/2.5/weather?
//     q=${city}&appid=${API_KEY}&units=metric`
//     const response= await fetch(API);
//     const data = await response.json()
//     return shoeweather(data)
// }

// const shoeweather=(data)=>{
//     console.log(data)
// weather.innerHTML=`
//         <div>
//             <i class="fa-solid fa-cloud"></i>
//         </div>
//         <iv>
//             <h2 style="font-size: 38px;">32 ºC</h2>
//             <h4>Clear</h4>
//         </div>
// `
// }
//     form.addEventListener(
//     "submit",
//     function(event){
//         getweather(search.value)
//         event.preventDefault();
//     }
// )

// const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
// const form = document.querySelector("form")
// const search = document.querySelector("#search")
// const weather = document.querySelector("#weather")
//     // const API = `https://api.openweathermap.org/data/2.5/weather?
//     // q=${city}&appid=${API_KEY}&units=metric`
//     // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
// const getWeather = async(city) => {
//     weather.innerHTML = `<h2> Loading... <h2>`

//     const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={API key}`);
//     const data = await response.json()
//     return showWeather(data)
// }

// const showWeather = (data) => {
//     if (data.cod == "404") {
//         weather.innerHTML = `<h2> City Not Found <h2>`
//         return;
//     }
//     weather.innerHTML = `
//         <div>
//             <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
//         </div>
//         <div>
//             <h2>${data.main.temp} ℃</h2>
//             <h4> ${data.weather[0].main} </h4>
//         </div>
//     `
// }

// form.addEventListener(
//     "submit",
//     function(event) {
//         getWeather(search.value)
//         event.preventDefault();
//     }
// )


const API_KEY = "3265874a2c77ae4a04bb96236a642d2f";
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

const getWeather = async (city) => {
    weather.innerHTML = "<h2>Loading...</h2>"; 
    //const response = await fetch(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    return showWeather(data);
};

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = "<h2>City Not Found</h2>";
        return;
    }
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4>${data.weather[0].main}</h4>
        </div>
    `;
};

form.addEventListener("submit", function(event) {
    getWeather(search.value);
    event.preventDefault();
});