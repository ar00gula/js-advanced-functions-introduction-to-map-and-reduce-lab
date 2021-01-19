// Your code here
function mapToNegativize(sourceArr) {
    let resultArray = []
    for (let i = 0; i < sourceArr.length; i++) {
        resultArray.push(sourceArr[i]*-1)
    }
    return resultArray
}

function mapToNoChange(sourceArr) {
    let resultArray = []
    for (let i = 0; i < sourceArr.length; i++) {
        resultArray.push(sourceArr[i])
    }
    return resultArray
}

function mapToDouble(sourceArr) {
    let resultArray = []
    for (let i = 0; i < sourceArr.length; i++) {
        resultArray.push(sourceArr[i]*2)
    }
    return resultArray
}

function mapToSquare(sourceArr) {
    let resultArray = []
    for (let i = 0; i < sourceArr.length; i++) {
        resultArray.push(sourceArr[i]**2)
    }
    return resultArray
}

function reduceToTotal(sourceArray, startingPoint) {
    let total = startingPoint || 0
    for (let i = 0; i < sourceArray.length; i++) {
        total = sourceArray[i] + total
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    let resultArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            resultArray.push(sourceArray[i])
        }
    }
    if (resultArray.length == sourceArray.length) {
        return true
    } else {
        return false
    }
}

function reduceToAnyTrue(sourceArray) {
    let resultArray = []
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) {
            resultArray.push(sourceArray[i])
        }
    }
    if (resultArray.length > 0) {
        return true
    } else {
        return false
    }
}