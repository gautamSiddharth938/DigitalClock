let m = fetch(`https://goweather.herokuapp.com/weather/Satna`)

m.then((response) => {
    console.log(response.clone)
    return response.json
}).then((value) => {
    console.log(value)
})

// m.city("Satna")