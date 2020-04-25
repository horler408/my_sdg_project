import covidSDG from './src/estimator.js';

let population = document.getElementById('data-population');
let timeToElapse = document.getElementById('data-time-to-elapse');
let reportedCases = document.getElementById('data-reported-cases');
let totalHospitalBeds = document.getElementById('data-total-hospital-beds');
let periodType = document.getElementById('data-period-type');
let submitBtn = document.getElementById('data-go-estimate');

population = population.value;
timeToElapse = timeToElapse.value;
reportedCases = reportedCases.value;
totalHospitalBeds = totalHospitalBeds.value;
periodType = periodType.value;

submitBtn.addEventListener('click', covidSDG.covid19ImpactEstimator);

export { population, timeToElapse, reportedCases, totalHospitalBeds, periodType }