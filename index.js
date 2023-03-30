// Code your solution here

function findMatching(driverArr, stringDrver){
    const tempArr =[];
    driverArr.filter(function (driver){
        if(driver.toUpperCase() === stringDrver.toUpperCase()){
            tempArr.push(driver)
        }
    })
    return tempArr;
}

function fuzzyMatch(driverArr, stringLetter){
    const temparr = [];
    driverArr.filter(function(driver){
        if(driver.includes(stringLetter) && driver[0] === stringLetter[0]){
            temparr.push(driver)
        }
    })
    return temparr;
}

function matchName(driverArr, stringName){
    return driverArr.filter(function(driver){
        if(driver["name"] === stringName){
            return driver;
        }
    })
}