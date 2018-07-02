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

        // const getDates = () => {
        //     return dateList = timeSeries.keys
        // }
        // getDates()


        // console.log(arr[0]['4b. close (USD)'])
        // for (let i = 0; i < arr.length; i++){
        //     console.log(arr[i]['4b. close (USD)'])
        // }

        //chart.js
        // let lineGraph = new Chart(myChart, {
        //     type:'line',
        //     data: {
        //         labels: dateList,
        //         datasets: [{
        //             label: 'Bitcoin Price',
        //             data: [
        //                 12345,
        //                 67890,
        //                 234234,
        //                 2345435,
        //                 3456211
        //             ]
        //         }]
        //     }
        // })





// let bitcoinChart = new Chart(myChart, {
//     type:'line',
//     data: {
//         labels: ['datetime', 'datetime', 'datetime'],
//         datasets: [{
//             label: 'Population',
//             data:[
//                 617594,
//                 181045,
//                 153060,
//                 106519,
//                 105162,
//                 95072
//             ]
//         }]
//     }
// })