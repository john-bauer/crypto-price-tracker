let myChart = document.querySelector('#myChart').getContext('2d')

const data = fetch('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_MONTHLY&symbol=BTC&market=CNY&apikey=demo')
    .then(function(response){
        return response.json()
    })
    .then(function(myJson){
        console.log(myJson)
    })


let bitcoinChart = new Chart(myChart,{
    type:'line',
    data: []
})