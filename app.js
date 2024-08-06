const apikey="f878ff76adac16c6abc124f52b2e6793";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search=document.querySelector(".searchbar input");
const searchbtn=document.querySelector(".searchbar button");
const wicon=document.querySelector(".w-icon");

async function checkweather(city){
    const response=await fetch(apiurl +city+`&appid=${apikey}`);
    var data=await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)  +"°c";
    document.querySelector(".hum").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/h";
     
    if(data.weather[0].main=="Clouds"){
        wicon.src="img/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        wicon.src="img/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        wicon.src="img/rain.png";
    }
    else if(data.weather[0].main=="Wind"){
        wicon.src="img/wind.png";
    }
    else if(data.weather[0].main=="Snow"){
        wicon.src="img/snow.png";
    }
    else if(data.weather[0].main=="Search"){
        wicon.src="img/search.png";
    }
    else if(data.weather[0].main=="Mist"){
        wicon.src="img/mist.png";
    }
    else if(data.weather[0].main=="drizzle"){
        wicon.src="img/drizzle.png";
    }
    else if(data.weather[0].main=="humidity"){
        wicon.src="img/humidity.png";
    }

    document.querySelector(".weather").style.display="block";
    
}

searchbtn.addEventListener("click",()=>{
    checkweather(search.value);
});