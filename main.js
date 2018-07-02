let myChart = document.querySelector('#myChart').getContext('2d')

let dates = []
let prices = []

const buildChart = () => {
    let bitcoinChart = new Chart(myChart, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: 'Bitcoin Price',
                data: prices
            }]
        }
    })
}

const getData = () => {
    const data = fetch('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=CNY&apikey=demo')
    .then(function(response){
        return response.json()
    })
    .then(function(myJson){
        const dataSet = Object.keys(myJson).map(key => myJson[key])
        const metaData = dataSet[0]
        const timeSeries = dataSet[1]
        const datesList = Object.keys(timeSeries)


        //get dates
        const getDates = () => {
            for (let i = 0; i < datesList.length; i++){
                dates.unshift(datesList[i])
            }
        }
        const getPrices = () => {
            for (let i = 0; i < datesList.length; i++) {
                let price = Object.values(timeSeries)[i]['4b. close (USD)']
                prices.unshift(price)
            }
        }
        getDates()
        getPrices()
        buildChart()
    })
}

getData()