const CTX = document.getElementById('expense-graph');
let myData = [];

fetch("https://perrys-expense-tracker.netlify.app/data.json").then(response =>
  response.json()).then((response) => {
    myData = response;
    main();
    console.log(myData)
  })


function main() {
  const date = new Date();
const today = date.toLocaleDateString('en-US', { weekday: 'short' });



  
  
  
  let Days = myData.map((child) => child.day)
  let amounts = myData.map((child) => child.amount)
  console.log(amounts);
  
  new Chart(CTX, {
    type: 'bar',
    data: {
      labels:Days,
      datasets: [{
        label: 'Amount in USD',
        data: amounts,
        borderWidth: 1,
        backgroundColor:function(context) {
    return context.chart.data.labels[context.dataIndex] === today ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)';
}
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  
  
}
  
  