//Data src: https://ourworldindata.org/grapher/covid-stringency-index?tab=chart&stackMode=absolute&time=2020-01-22..latest&country=~CHE&region=Europe;
//Calculation taken from https://stackoverflow.com/questions/10359907/how-to-compute-the-sum-and-average-of-elements-in-an-array
//Take value on 30th of each month;
//Template: [J, F, M, A, M, J, J, A, S, O, N, D; J, F, M];
var sui_data = [0, 19, 73, 69, 56, 35, 39, 43, 43, 38, 57, 60, 60, 60, 60];     //Stringency Switzerland
var sui = Math.round(sui_data.reduce((p, c, _, a) => p + c / a.length, 0));     //Calculate avg

var ger_data = [6, 25, 77, 77, 60, 63, 55, 60, 50, 61, 68, 82, 85, 81, 75];
var ger = Math.round(ger_data.reduce((p, c, _, a) => p + c / a.length, 0));

var fr_data = [11, 35, 88, 88, 75, 52, 46, 48, 50, 79, 75, 69, 64, 72, 69];
var fr = Math.round(fr_data.reduce((p, c, _, a) => p + c / a.length, 0));

var it_data = [8, 70, 92, 94, 64, 56, 48, 55, 47, 67, 80, 80, 79, 82, 84];
var it = Math.round(it_data.reduce((p, c, _, a) => p + c / a.length, 0));

var au_data = [0, 11, 81, 75, 54, 47, 35, 35, 41, 65, 82, 71, 79, 74, 81];
var au = Math.round(au_data.reduce((p, c, _, a) => p + c / a.length, 0));

//DEBUG:
//console.log(sui_data);
//console.log(sui);

//Src: https://code.tutsplus.com/tutorials/getting-started-with-chartjs-radar-and-polar-area-charts--cms-28444;
//Src: https://www.chartjs.org/docs/latest/;
//Draw radar chart
var jsonfile = {
    jsonarray: [{
        'country': 'Switzerland',
        'stringency': sui
    }, {
        'country': 'Germany',
        'stringency': ger
    }, {
        'country': 'France',
        'stringency': fr
    }, {
        'country': 'Italy',
        'stringency': it
    }, {
        'country': 'Austria',
        'stringency': au
    },]
}

var labels = jsonfile.jsonarray.map(function (e) {     //Set labels;
    return e.country;
});
var jsonarray = jsonfile.jsonarray.map(function (e) {    //Set jsonarray;
    return e.stringency;
});
var ctx = document.getElementById('stringency');

var config = ({
    type: 'radar',       //Chart type;
    data: {
        labels: labels,     //Get labels from var 'labels';
        datasets: [{
            label: 'Stringency Index',    //Data label;
            data: jsonarray,        //Plot data;
            backgroundColor: 'rgba(255, 96, 10, 0.50)',    //Data color;
            radius: 3,     //Point radius;
            responsive: true,      //Chart is responsive to container (bool);
        }]
    },
    options: {
        title: {        //Chart title options;
            display: true,      //Display title (bool);
            text: 'ø overtime stringency index (Europe)',        //Chart title;
            fontSize: 20,     //Title font size;
            fontColor: 'whitesmoke',
        },
        scale: {        //Data scale options;
            ticks: {
                beginAtZero: true,      //Scale starts at 0;
                min: 0,     //Scale min;
                max: 100,       //Scale max;
                stepSize: 20,        //Scale steps;
                backdropColor: 'transparent',       //Background of scale labels;
                fontSize: 12,
            },
            gridLines: {        //Chart grid lines options;
                color: 'rgba(217, 217, 217, 0.4)',      //Line color;
            },
            angleLines: {        //Chart angle lines (spread) options;
                color: 'rgba(217, 217, 217, 0.15)',      //Line color;
            },
            pointLabels: {      //Labels options;
                fontSize: 17,        //Label font size;
                display: true,      //Display point labels (bool);
            },
        },
        legend: {       //Legend options;
            display: false,       //Display legend (bool);
        },
    }
});

var chart = new Chart(ctx, config);