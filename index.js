// const arr = [9, 8, 8, 4, 5, 4, 1, 8, 9, 4, 6, 6, 5, 0, 6, 8, 3, 3, 0, 3,
//      2, 7,0, 3,
//     0, 3, 1, 2, 3, 2, 2, 5, 1, 7];
    
const arr = [
    9, 8, 8, 4, 5,  4, 1, 8, 9,  4, 6, 6,
    5, 6, 8, 3, 3,  3, 2, 7, 3,  1, 2, 3,
    2, 2, 5, 1, 7,  3, 2, 8, 1,  8, 3, 8,
    3, 6, 4, 5, 5,  4, 9, 8, 4,  9, 7, 1,
    8, 4, 1, 3, 7,  4, 7, 5, 2,  3, 1, 7,
    5, 4, 2, 5, 8,  7, 6, 6, 9,  4, 3, 9,
    1, 3, 9, 4, 6,  3, 5, 9, 9, 78, 5, 1,
    8, 5, 2, 2, 3, 11, 3, 4, 8, 6, 1, 54, 9, 7, 0, 0, 1, 4, 0, 0, 58, 
    9, 8, 8, 4, 5, 4, 1, 8, 9, 4, 6, 6, 5, 0, 6, 8, 3, 3, 0, 3, 2, 7,
    0, 3, 1, 2, 3, 2, 2, 5, 1, 7, 3, 2, 8, 1, 8, 0, 3, 8, 3, 6, 4, 5,
    0, 5, 4, 9, 8, 4, 9, 7, 1, 0, 0, 8, 4, 1, 3, 7, 4, 7, 5, 2, 3, 1,
    7, 5, 0, 4, 2, 0, 5, 8, 7, 6, 6, 9, 4, 3, 9, 1, 3, 9, 4, 6, 3, 5,
    9, 9, 78, 0, 5, 1, 8, 5, 2, 2, 3, 545
  ];

// const arr = [9, 8, 8, 4, 5, 4, 1, 8, 9, 4, 6, 6, 5, 0, 6, 8, 3, 3, 0, 3, 2, 7,
//     0, 3, 1, 2, 3, 2, 2, 5, 1, 7, 3, 2, 8, 1, 8, 0, 3, 8, 3, 6, 4, 5,
//     0, 5, 4, 9, 8, 4, 9, 7, 1, 0, 0, 8, 4, 1, 3, 7, 4, 7, 5, 2, 3, 1,
//     7, 5, 0, 4, 2, 0, 5, 8, 7, 6, 6, 9, 4, 3, 9, 1, 3, 9, 4, 6, 3, 5,
//     9, 9, 78, 0, 5, 1, 8, 5, 2, 2, 3, 11];

let numericZeroPositions = '';
let zeroDigitCount = 0;
let tempZeroDigitCount = 0;

let indexDigitCount = 1;
let indexDigitCountBase = 10;
let positionFindingBaseBool = false;

function swapPositions(pos1, pos2) {
    let temp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = temp;
}

function findingPosition(numericPositionsValue) {
    let tempCount = positionFindingBaseBool ? indexDigitCount - 1 : indexDigitCount;
    let firstPosition = +numericPositionsValue.slice(0, tempCount);
    let remainingValue = +numericPositionsValue.slice(tempCount);
    return { firstPosition, remainingValue}
}

function numericPositionMaker(index) {
    numericZeroPositions = `${numericZeroPositions}${index}`;
}

function indexDigitCalculator(index) {
    if (index / indexDigitCountBase == 1) {
        indexDigitCount++;
        indexDigitCountBase *= 10;
        tempZeroDigitCount = zeroDigitCount;
        positionFindingBaseBool = true;
    }

    if(tempZeroDigitCount == 0) {
        positionFindingBaseBool = false;
    }
}

// console.log({
//     originalArray: arr
// })

for (let index = 0; index < arr.length; index++) {
    indexDigitCalculator(index)
    if (arr[index] == 0) {
        if( numericZeroPositions == '' ) {
            numericZeroPositions = `${index}`;
        } else {
            numericPositionMaker(index)
        }
        zeroDigitCount++;
    } 
    else if (arr[index] != 0 && (numericZeroPositions != '')) {
        let { firstPosition, remainingValue} = findingPosition(numericZeroPositions);
        numericZeroPositions = remainingValue == 0 ? '' : `${remainingValue}`;
        swapPositions(firstPosition, index);
        
        numericPositionMaker(index);
        
        if(positionFindingBaseBool) {
            tempZeroDigitCount--;
        }
    }
}

console.log({
    ResultArray: arr
})

console.log(numericZeroPositions)
