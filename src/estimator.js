import * as Main from '../main.js';

const covid19ImpactEstimator = (data) => data;
	data = {
		region: {
			name: name,
			avgAge: avgAge,
			avgDailyIncomeInUSD: avgDailyIncomeInUSD,
			avgDailyIncomePopulation: avgDailyIncomePopulation
		},
		periodType: Main.periodType,
		timeToElapse: Main.timeToElapse,
		reportedCases: Main.reportedCases,
		population: Main.population,
		totalHospitalBeds: Main.totalHospitalBeds
	}

	
	return {
		
		impact: {
			currentlyInfected: reportedCases * 10,
			infectionsByRequestedTime: infectionRate(days),
			severeCasesByRequestedTime: 0.15 * infectionsByRequestedTime,
			hospitalBedsByRequestedTime: (0.35 * totalHospitalBeds) - severeCasesByRequestedTime,
			casesForICUByRequestedTime: 0.05 * infectionsByRequestedTime,
			casesForVentilatorsByRequestedTime: 0.02 * infectionsByRequestedTime,
			dollarsInFlight: infectionsByRequestedTime x avgDailyIncomePopulation x avgDailyIncomePopulation x timeToElapse
		},

		severeImpact: {
			currentlyInfected: reportedCases * 50,
			infectionsByRequestedTime: infectionRate(days),
			severeCasesByRequestedTime: 0.15 * infectionsByRequestedTime,
			hospitalBedsByRequestedTime: (0.35 * totalHospitalBeds) - severeCasesByRequestedTime,
			casesForICUByRequestedTime: 0.05 * infectionsByRequestedTime,
			casesForVentilatorsByRequestedTime: 0.02 * infectionsByRequestedTime,
			dollarsInFlight: infectionsByRequestedTime x avgDailyIncomePopulation x avgDailyIncomePopulation x timeToElapse
		}

	};

function infectionRate(days) {
	let result;
	let factor = int(days / 3);
	let factorPower = Math.pow(2, factor);
	result = this.currentlyInfected * factorPower;
	return result
}

export default covid19ImpactEstimator;
