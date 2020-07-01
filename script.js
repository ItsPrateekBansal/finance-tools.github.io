function calculate(){
	var amount = document.getElementById('loan_amount');
	var years = document.getElementById('term_yrs');
	var months = document.getElementById('term_mnths');
	var rateOfInterest = document.getElementById('interest_rate');


	var principal = parseFloat(amount.value);
	var timePeriod = parseFloat(months.value) + parseFloat(years.value)*12;
	// months.value = parseFloat(months.value) + parseFloat(years.value)*12;
	var rate = parseFloat(rateOfInterest.value) / 12 / 100;

	var x = principal * (rate) * Math.pow(1+rate,timePeriod);
	emi_value = x / (Math.pow(1+rate,timePeriod)-1) ? x / (Math.pow(1+rate,timePeriod)-1) : 0; //Ternary operator lga k null aane se bchaya h ..

	console.log(emi_value);
    // document.getElementById('otp').value = emi_value;
    // value ko update mt kro .. p tag ko utha k uske and k text ko change kro
    document.getElementById('result').innerText = emi_value;
}