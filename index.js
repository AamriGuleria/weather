const temperateFeild=document.querySelector(".weather1");
const cityFeild=document.querySelector(".weather2 p");
const dateFeild=document.querySelector("#date");
const emojiFeild=document.querySelector("#emoji");
const weatherFeild=document.querySelector("#sit");
const searchFeild=document.querySelector("#place");
const form=document.querySelector("form");
const details=document.querySelector(".details");

form.addEventListener("submit",search);

let target="Asia";

const fetchData=async (target) => {
    try{
    const api=`https://api.openweathermap.org/data/2.5/weather?q=${target}&appid=2cd28bb8fb0edeb6c8211e3697b9f5d3&units=metric`;
    const res=await fetch(api);
    const aamri=await res.json();
    console.log(aamri);
    const {
        main:{temp,feels_like,temp_min,temp_max,pressure,humidity},weather:{0:{id,main,desciption,icon}}}=aamri;
        update(pressure,humidity,temp_max,temp_min,feels_like,temp,aamri.name ,icon,main,aamri.dt,aamri.timezone);
} catch(error){
    alert("Location not found");
}
};
function update(pressure,humidity,temp_max,temp_min,feels_like,temperate,city,icon,main,dt,tz){
    temperateFeild.innerHTML=Math.round(temperate)+"°C";
    // temperateFeild.innerHTML=Math.round((((( temperate - 273.15) * 9/5) + 32)-32)/1.8).toFixed()+"°C";
    cityFeild.innerHTML=city;
    emojiFeild.src="http://openweathermap.org/img/w/"+icon+".png"; 
    weatherFeild.innerHTML=main;
    dateFeild.innerHTML=new Date().toDateString();
    details.innerHTML=`<h2 class="det-head">Details</h2><h4 class="pressure">Pressure:${pressure}hPa</h4><h4 class="humid">Humidity:${humidity}%</h4><h4 class="feels">Feels-Like:${feels_like}°C</h4>`
    // dateFeild.innerHTML=new Date(dt*1000-(tz*1000)).toDateString();
}

// fetchData(target);

function search(e){
    e.preventDefault();
    target=searchFeild.value;
    fetchData(target);
}
// const search=(val)=>{
//     var target=val;
//     console.log(target);
// fetchData(target);
