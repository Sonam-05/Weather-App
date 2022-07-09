const container = document.querySelector(".container");
const weather = document.querySelector(".weather");
const weather1 = document.querySelector(".weather1");
const temp = document.querySelector(".weather1 h1");
const climate = document.querySelector(".weather1 p");
const weather2 = document.querySelector(".weather2");
const country = document.querySelector(".country");
const time = document.querySelector(".time");
const dateInfo = document.querySelector(".dateInfo");
const weather3 = document.querySelector(".weather3");
const weatherImage = document.querySelector(".weatherImage");
const region = document.querySelector(".weatherRegion");
const searchFeild = document.getElementById("searchFeild");
const submitBtn = document.getElementById("submitBtn");

let target = "India";
 

const searchFunc = () => {  
    target = document.getElementById("searchFeild").value;
    console.log(target);
    country.innerText = target;
    document.getElementById("searchFeild").value = "" ;
    fetchData(target);
}

const fetchData = async (target) => {

    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=40030d2f2c9d4a48bc3175653220807&q=${target}`;

    let response  = await fetch(url);
    let data = await response.json();
    console.log(data);
    apiData(data.current.temp_c, data.location.localtime, data.location.localtime, data.current.condition.icon, data.location.region,data.current.condition.text);
    } catch (error) {
        console.log(error);
    }
}

function apiData(a,b,c,d,e,f){
    temp.innerText = a + "º";
    time.innerText = b.split(" ")[1];
    dateInfo.innerText = c.split(" ")[0];
    weatherImage.src = d;
    region.innerText = e;
    climate.innerText = f;
}

fetchData(target);














// function DateInfo(month) {
//     switch (month) {
//         case 00:
//             console.log("January");
//             break;
//             case 01:
//             console.log("Feburary");
//             break;
//             case 02:
//             console.log("March");
//             break;
//             case 03:
//             console.log("April");
//             break;
//             case 04:
//             console.log("May");
//             break;
//             case 05:
//             console.log("June");
//             break;
//             case 06:
//             console.log("July");
//             break;
//             case 07:
//             return "August";
//             break;
//             case 08:
//             console.log("September");
//             break;
//             case 09:
//             console.log("October");
//             break;
//             case 10:
//             console.log("November");
//             break;
//             case 11:
//             console.log("December");
//             break;
    
//         default:
//             console.log("DN");
//             break;
//     }
// }
