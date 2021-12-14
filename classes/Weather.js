class Weather {
    constructor(city) {
        this.city = city
        this.key = '0db0092daf2b070387aca30b46c4f1f6'

    }

    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responseData = await response.json()
        return responseData
    }

}