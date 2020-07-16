console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

// const messageTitle = document.querySelector('#message-title').src = "../img/seasons.gif"
const mainImage = document.querySelector('#main-image')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')
const messageSix = document.querySelector('#message-6')
const messageImage = document.getElementById('myImage')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {

            messageTitle.textContent = 'Result:'
            mainImage.src = ''

            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = "Region: " + data.forecast.location.name
                messageTwo.textContent = "Country: " + data.forecast.location.country
                messageThree.textContent = "Temperature: " + data.forecast.current.temperature
                messageFour.textContent = "Feels like: " + data.forecast.current.feelslike
                messageFive.textContent = "Humidity: " + data.forecast.current.humidity
                messageSix.textContent = "Wind Direction: " + data.forecast.current.wind_dir

                if (-15 <= "" + data.forecast.current.temperature) {
                    messageImage.src = "../img/warm.gif"
                    document.html.style.backgroundColor = "#97a6d1";
                }
                if ("" + data.forecast.current.temperature >= -10) {
                    messageImage.src = "../img/snowy.gif"
                    document.html.style.backgroundColor = "#c2d5ec";
                }
                if ("" + data.forecast.current.temperature >= 4) {
                    messageImage.src = "../img/cold-weather.gif"
                    document.html.style.backgroundColor = "#324fdc26";
                }
                if ("" + data.forecast.current.temperature >= 20) {
                    messageImage.src = "../img/sunny.gif"
                    document.html.style.backgroundColor = "#eedab594";
                }
                if ("" + data.forecast.current.temperature >= 25) {
                    messageImage.src = "../img/warm.gif"
                    document.html.style.backgroundColor = "#eeb5b594";
                }
                if ("" + data.forecast.current.temperature >= 30) {
                    messageImage.src = "../img/hot.gif"
                    document.html.style.backgroundColor = "#d9656594";
                }
                console.log(data.forecast)
            }
        })
    })
})