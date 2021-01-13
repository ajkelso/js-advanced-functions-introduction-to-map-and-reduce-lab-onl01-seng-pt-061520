// Your code here
function mapToNegativize(sourceArray) {
    const newArray = []
for (let i = 0; i < sourceArray.length; i++) {
        let num = sourceArray[i] * -1
        newArray.push(num)
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    const newArray = []
for (let i = 0; i < sourceArray.length; i++) { 
        newArray.push(sourceArray[i])
    }
    return newArray
}
function mapToDouble(sourceArray) {
    const newArray = []
for (let i = 0; i < sourceArray.length; i++) { 
        newArray.push(sourceArray[i] * 2)
    }
    return newArray
}

function mapToSquare(sourceArray) {
    const newArray = []
for (let i = 0; i < sourceArray.length; i++) { 
        newArray.push(sourceArray[i] ** 2)
    }
    return newArray
}
// reduce:
function reduceToTotal(sourceArray, startingPoint) {
    let total = startingPoint || 0
    for (let i = 0; i < sourceArray.length; i++) {
        total += sourceArray[i];   
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    let result = true
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === false) {
            result = false
            break;
        }
    }
    return result
}
function reduceToAnyTrue(sourceArray) {
    let result = false
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i] === true) {
            result = true
            break;
        }
    }
    return result
}