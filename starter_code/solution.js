var exercise = {};

// Question 01
exercise.hello = function(){
    return 'Hello!';    
};

// Question 02
exercise.numberArray = function(){
    return [1,2,3,4];
};

// Question 03
exercise.nameAndAge = function(){
    return { name : "bruce", age : 29 };
};

// Question 04
exercise.objectArray = function(){
    return [{},{},{}];
};

// Question 05
exercise.addProperty = function(someObject){
    return someObject.name = "bruce";
};

// Question 06
exercise.thirdElement = function(someArray){
    return someArray[2];
};

// Question 07
exercise.concatenate = function(string1, string2, string3){
    return string1+string2+string3;
};

// Question 08
exercise.greaterThanSix = function(someNumbers){
	return someNumbers.filter(function(elem){
		return elem > 6;
	});
};

// Question 09
exercise.getNames = function(people){
	return people.map(function(item){
		return item.name;
	});
};

// Question 10
exercise.getSalaryTotal = function(people){
	return people.reduce(function(previous,current){
		return previous+current.salary;
	},0);
};

// Question 11
exercise.sortNumbers = function(someNumbers){
    return someNumbers.sort(function(a,b){return a-b;});
};

// Question 12
exercise.executeCallback = function(callback){
    callback();
};

// Question 13
exercise.getPersonAndJob = function(payroll){
	var personAndJob = [];
    payroll.forEach(function(item){
    	personAndJob.push([item[1],item[2]]);
    });
    return personAndJob;
};

// Question 14
exercise.getTotalPayroll = function(payroll){
	return payroll.reduce(function(previous, current){
		return previous + Number(current[3]);
	},0);
};

// Question 15
exercise.getEarningsAbove = function(payroll,target){
	return (payroll.filter(function(item){
		return target > Number(item[3]);
	})).length;
};

// Question 16
exercise.getNumberOfZipCodesWith = function(payroll,num){
	return (payroll.filter(function(item){
		if (item[4].includes(num)) return true;
		return false;
	})).length;    
};


module.exports = exercise;
