const apikey="9acc769f744532570d23988f2f64341e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
async function checkwheather(city){
    const response=await fetch(apiUrl+city+`&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+" °k";
    document.querySelector(".humadity").innerHTML=data.humadity+" %";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

}
searchbtn.addEventListener("click",()=>{
    checkwheather(searchbox.value);
})