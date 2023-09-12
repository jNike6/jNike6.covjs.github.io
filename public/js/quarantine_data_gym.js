//Src="https://stackoverflow.com/questions/44990517/displaying-json-data-in-chartjs/44990697"
//Data from mails by sektretariat gymli

//Quarantine chart
var jsonfile = {
    "jsonarray": [{     //Create JSON array
        "date": "preCount",
        "quarantine": N / A
    }, {
        "date": "23.10.20",
        "quarantine": N / A
    }, {
        "date": "30.10.20",
        "quarantine": N / A
    }, {
        "date": "06.11.20",
        "quarantine": N / A
    }, {
        "date": "13.11.20",
        "quarantine": N / A
    }, {
        "date": "20.11.20",
        "quarantine": N / A
    }, {
        "date": "27.11.20",
        "quarantine": N / A
    }, {
        "date": "04.12.20",
        "quarantine": N / A
    }, {
        "date": "11.12.20",
        "quarantine": N / A
    }, {
        "date": "18.12.20",
        "quarantine": N / A
    }, {
        "date": "08.01.21",
        "quarantine": N / A
    }, {
        "date": "15.01.21",
        "quarantine": N / A
    }, {
        "date": "22.01.21",
        "quarantine": N / A
    }, {
        "date": "29.01.21",
        "quarantine": N / A
    }, {
        "date": "05.02.21",
        "quarantine": N / A
    }, {
        "date": "12.02.21",
        "quarantine": N / A
    }, {
        "date": "05.03.21",
        "quarantine": N / A
    }, {
        "date": "12.03.21",
        "quarantine": N / A
    }, {
        "date": "19.03.21",
        "quarantine": N / A
    }, {
        "date": "26.03.21",
        "quarantine": N / A
    }, {
        "date": "16.04.21",
        "quarantine": N / A
    }, {
        "date": "07.05.21",
        "quarantine": N / A
    }]
};

var labels = jsonfile.jsonarray.map(function (e) {     //Set labels
    return e.date;
});
var jsonarray = jsonfile.jsonarray.map(function (e) {    //Set data
    return e.quarantine;
});

var ctx = document.getElementById('quarantine_gym'); //Get canvas to draw into
var config = {
    type: 'bar',        //Chart type
    data: {
        labels: labels,
        datasets: [{
            label: 'Quarantine cases',      //Chart label
            data: jsonarray,
            backgroundColor: 'rgba(15, 91, 179, 0.5)'       //Chart color
        }]
    }, options: {
        scales: {
            xAxes: [{
                ticks: {
                    suggestedMax: 10      //Limit number of graph labels on x axis
                }
            }]
        }
    }
};

var chart = new Chart(ctx, config);

var qTot = 0;     //#Quarantine Cases in total;
var jsonarray = jsonfile.jsonarray;
var i;

for (i = 0; i < jsonarray.length; i++) {     //Loop through the array;
    qTot += jsonarray[i].cases;     //Sum up all cases;
}

//DEBUG:
//console.log(qTot);