const getUser = (username) => {
    const API_URL = `https://api.github.com/users/${username}`;
    return fetch(API_URL).then((value) => value.json());
};

getUser('jigarce007').then((val) => console.log(val));


const getWether = cityname =>{
    const WETHER_API = `https://geocoding-api.open-meteo.com/v1/search?name=${cityname}`;
    return fetch(WETHER_API).then((vl) => vl.json());
};

getWether(`Ahmedabad`).then((vl) => console.log(vl));
