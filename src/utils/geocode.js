const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYWxla2h5YS12IiwiYSI6ImNrY2JzbzNwczA4cTYyeW9jb3FkdXMxd2wifQ.pQdgA1AMvNUdL35DT-yyLA'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[4].center[1],
                longitude: body.features[4].center[0],
                location: body.features[4].place_name
            })
        }
    })
}

module.exports = geocode