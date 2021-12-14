class UI {
    constructor() {
        this.description = document.querySelector('#description').innerHTML = description ;
        this.temp = document.querySelector('#temp').innerHTML = celsius + '&deg' ;
        this.city = document.querySelector('#location').innerHTML = data.name;
    }

    drawWeather(data){
        let celsius = Math.round(parseFloat(data.main.temp)-273.15);
        let description = data.weather[0].description;

        this.description.innerHTML = description ;
        this.temp.innerHTML = celsius + '&deg' ;
        this.city.innerHTML = data.name;
    }
}