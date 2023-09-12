//Src="https://stackoverflow.com/questions/44990517/displaying-json-jsonarray-in-chartjs/44990697";
//Data from mails by sekretariat gymli;

//Case chart;
var jsonfile = {
   "jsonarray": [{//Create JSON Array;
      "date": "preCount",
      "cases": N / A
   }, {
      "date": "23.10.20",
      "cases": N / A
   }, {
      "date": "30.10.20",
      "cases": N / A
   }, {
      "date": "06.11.20",
      "cases": N / A
   }, {
      "date": "13.11.20",
      "cases": N / A
   }, {
      "date": "20.11.20",
      "cases": N / A
   }, {
      "date": "27.11.20",
      "cases": N / A
   }, {
      "date": "04.12.20",
      "cases": N / A
   }, {
      "date": "11.12.20",
      "cases": N / A
   }, {
      "date": "18.12.20",
      "cases": N / A
   }, {
      "date": "08.01.21",
      "cases": N / A
   }, {
      "date": "15.01.21",
      "cases": N / A
   }, {
      "date": "22.01.21",
      "cases": N / A
   }, {
      "date": "29.01.21",
      "cases": N / A
   }, {
      "date": "05.02.21",
      "cases": N / A
   }, {
      "date": "12.02.21",
      "cases": N / A
   }, {
      "date": "05.03.21",
      "cases": N / A
   }, {
      "date": "12.03.21",
      "cases": N / A
   }, {
      "date": "19.03.21",
      "cases": N / A
   }, {
      "date": "26.03.21",
      "cases": N / A
   }, {
      "date": "16.04.21",
      "cases": N / A
   }, {
      "date": "07.05.21",
      "cases": N / A
   }]
};

//Generate chart;
var labels = jsonfile.jsonarray.map(function (e) {     //Set labels;
   return e.date;
});
var jsonarray = jsonfile.jsonarray.map(function (e) {    //Set jsonarray;
   return e.cases;
});

var ctx = document.getElementById('cases_gym'); //Get canvas to draw into;
var config = {
   type: 'line',     //Chart type;
   data: {
      labels: labels,
      datasets: [{
         label: '#Cases',    //Chart label;
         data: jsonarray,
         backgroundColor: 'rgba(245, 20, 20, 0.5)'    //Chart color;

      }]
   }, options: {
      scales: {
         xAxes: [{
            ticks: {
               beginAtZero: true,    //Start graph at 0;
               suggestedMax: 10      //Limit number of graph labels on x axis
            }
         }]
      }
   }
};

var chart = new Chart(ctx, config);

//Count total cases to display in progress bar;
var cTot = 0;     //# Cases in total;
var jsonarray = jsonfile.jsonarray;
var i;

for (i = 0; i < jsonarray.length; i++) {     //Loop through the array;
   cTot += jsonarray[i].cases;     //Sum up all cases;
}

//DEBUG: 
console.log('cases Tot:' + cTot);      //Log cTot;

//Count cases per members;
var s = 1350;      //#students and staff;
var cps = (cTot / s * 100);     //Divide cases by number of students (casesPerStudents);
var cps_fix = cps.toFixed(1);     //Round cps to 1 decimal;

//DEBUG:
console.log('cases per student:' + cps + '%');      //Log cps;
console.log('cps rounded:' + cps_fix + '%');     //Log rounded cps;

//Slider function
var slider = document.getElementById("myRange");
var r = slider.value;
var update = () => r = slider.value;
slider.addEventListener('input', update);
update();
//DEBUG:    check if value is read
//alert(r);
console.log("Updated r to " + r);


//Calculate prediction;
//FIXME: Range Slider to output r
/*var r  = 4.5 */;      //Infection rate / infectioned person without any measures*/
var herdImmu = (1 - (1 / r));    //herd immunity; round to nearest integer
if (herdImmu < 0) {    //If herd immunity value is <0, set r to 1
   slider.value = 1;
}
var w = jsonarray.length;     //#Weeks
var cpw = (cTot / w);      //#cases per week
var week_prediction = Math.round((s * herdImmu - cTot) / cpw);

//DEBUG: 
console.log('weeks since count:' + w);
console.log('øcases per w:' + cpw);
console.log('Herd immunity:' + herdImmu);
console.log('Prediction of weeks:' + week_prediction);
/* console.log('Slider Value: ' + slider.value); */
//Update progress bar: https://stackoverflow.com/questions/21182058/dynamically-change-bootstrap-progress-bar-value-when-checkboxes-checked
document.getElementById('spread').innerHTML = cps_fix + '%';
document.getElementsByClassName('progress-bar').item(0).setAttribute('aria-valuenow', cps_fix);    //Set aria-valuenow of progress bar = cps_fix
document.getElementsByClassName('progress-bar').item(0).setAttribute('style', 'width:' + Number(cps_fix) + '%');     //Update css settings of progress bar
//Update prediction
document.getElementById('prediction').innerHTML = week_prediction + " Wochen";      //number of weeks required to achieve herd immunity (without vaccines & re-infections -> very simplified)
//Update herd immunity/r rate
document.getElementById('herd-immunity-display').innerHTML = herdImmu * 100 + '%';    //set herd immunity value into span to indicate required value
document.getElementById('r').innerHTML = r;
//Update total cases
document.getElementById('total').innerHTML = cTot + " Fälle";