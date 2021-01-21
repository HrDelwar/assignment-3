//https://github.com/HrDelwar/assignment-3

// kilometer to meter function 
function kilometerToMeter(km) {
    //check kilometer value is a empty or not, if empty than return with message.
    if (!km) {
        return "Kilometer have't a value. Please input a value.";
    }
    //check value is a number or not, if not number than return with message.
    if (typeof (km) != 'number') {
        return "Kilometer must be a number. Please input a number.";
    }

    // check kilomiter value is navgative or not, if navative than return with message.
    if (km < 0) {
        return "Kilometer can't calculate nagative value. Please input positive value.";
    }

    // calculate kilometer to meter and store result
    const meter = km * 1000;

    // return result
    return meter;
}
//call kilometerToMeter function and store return value
const resultMeter = kilometerToMeter(7);
// print value in console log 
//console.log(resultMeter);



// budget calculator function for calculate watch, phone and laptop cost
function budgetCalculator(watchs, phones, laptops) {
    //check function parametr is empty or not, if empty than return with message. 
    if (!watchs || !phones || !laptops) {
        return "The value is empty. Please input value for watchs, phones and laptops."
    }

    //check watch, phones and laptop value is number or not, if not number than return with message.
    if (typeof (watchs) != 'number' || typeof (phones) != 'number' || typeof (laptops) != 'number') {
        return "The three parameter must be a number. Please input number"
    }

    //chech watchs, phones and laptop value nagative or not, if navative than return with message. 
    if (watchs < 0 || phones < 0 || laptops < 0) {
        return "Budget can't calculate nagative value. Please input positive value.";
    }

    // set price for per watch, phone and laptop
    const watchPrice = 50;
    const phonePrice = 100;
    const laptopPrice = 500;

    // find cost for watch, phone and laptop
    const watchCost = watchs * watchPrice;
    const phoneCost = phones * phonePrice;
    const laptopCost = laptops * laptopPrice;

    //total cost 
    const totalCost = watchCost + phoneCost + laptopCost;

    //return result
    return totalCost;

}
//call budgetCalculator function and store return value 
const resultTotatBudget = budgetCalculator(50, 20, 10);
// print value in console log
//console.log(resultTotatBudget);



// finding out the total rent of the hotel by calculating different rents on different days
function hotelCost(days) {
    //check days value is empty or not, if empty than return with message.
    if (!days) {
        return "Days have no value. Please input a value."
    }
    //check days value is a number or not, if not number than return with message.
    if (typeof (days) != 'number') {
        return "Days must be a number. Please input a number.";
    }
    // check days value is nagative or not if nagative than return with message. 
    if (days < 0) {
        return "Day can't contain nagative value. Please input positive value.";
    }

    // set  pre-determined fare for a specific day
    const dailyRentFirstTenDays = 100;
    const dailyRentSecondTenDays = 80;
    const dailyRentNextPerDays = 50;

    // set default cost
    let totalCost = 0;

    // calculate the total cost in different condition
    if (days <= 10) {
        // find cost if days less than or equal 10 days
        totalCost = days * dailyRentFirstTenDays;
    }
    else if (days <= 20) {
        // find cost if days less than or equal 20 days and greater than 10 days
        const remainingDays = days - 10;// find remaining days
        const firstTenDaysCost = 10 * dailyRentFirstTenDays;// first 10 days cost
        const secondTenDaysCost = remainingDays * dailyRentSecondTenDays;// second 10 days cost
        totalCost = firstTenDaysCost + secondTenDaysCost; // total cost 
    }
    else {
        // find cost if days greater than 20 days
        const remainingDays = days - 20;// find remaining days
        const firstTenDaysCost = 10 * dailyRentFirstTenDays;// first 10 days cost
        const secondTenDaysCost = 10 * dailyRentSecondTenDays;// second 10 days cost
        const nextAllDaysCost = remainingDays * dailyRentNextPerDays; // next all days cost
        totalCost = firstTenDaysCost + secondTenDaysCost + nextAllDaysCost; // total cost 
    }
    // return total cost
    return totalCost;
}
//call hotelCost function and store return value 
const totalHotelCost = hotelCost(36);
//print value in colsole log
//console.log(totalHotelCost);


//find bigest name in an array that conain more friend name
function megaFriend(arr) {
    //check array is empty or not, if empty than return with message.
    if (!arr) {
        return "Friends have no value. Please input a value."
    }
    // check it's array or not, if not array than return with message.
    if (!Array.isArray(arr)) {
        return "It is not an array, please input an array.";
    }

    // check this array is empty or not, if empty than return with message.
    if (arr.length == 0) {
        return "This array is empty, please input a value."
    }

    //check string is empty or not inside array, if empty than return with message.
    if (arr[0].trim().length == 0) {
        return "The first name inside in array is empty, please input a value.";
    }
    //set default bigest name 
    let bigestName = arr[0];

    // remove white space after and before element and count lenght 
    let bigestNameLength = bigestName.trim().length;

    // loop for search new elemet is bigger or not 
    for (let i = 0; i < arr.length; i++) {
        //store new element
        let element = arr[i];

        // count new element length
        let elementLength = element.trim().length;

        // check new elemet lenght is greater or not. If greter, than set new element in the bigest name.
        if (bigestNameLength < elementLength) {

            // store new bigger element and remove white space after and before.
            bigestName = element.trim();

            // replace previous element length with new element length
            bigestNameLength = elementLength;
        }
    }
    // return bigest name 
    return bigestName;
}
// friend list array
const friends = ['  Amir', 'Sohel', '  Anis', 'Nasim  ', '   Foysal Ahmed Fahim', 'Hr Delwar', '', 'Mamun'];

// call megaFriend function and store returned value
const bigestName = megaFriend(friends);
// print value in console log
//console.log(bigestName);