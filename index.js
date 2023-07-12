//Task 1, while
const MULTIPLICITY = 7;
const MIN_NUMBER = 1;
const MAX_NUMBER = 50;

while(true){
const userInput = prompt(`Enter a number from ${MIN_NUMBER} to ${MAX_NUMBER} that is a multiple of ${MULTIPLICITY}`);

if(userInput >= MIN_NUMBER && 
    userInput <= MAX_NUMBER && 
    userInput % MULTIPLICITY=== 0){
        alert ('Great:)');
        break;
}
}


//Task 2, for

const MAX_TRY = 5;

for(let i = 0; i<MAX_TRY; i++){
const userInput = prompt(`Enter a number from ${MIN_NUMBER} to ${MAX_NUMBER} that is a multiple of ${MULTIPLICITY}`);

if(userInput >= MIN_NUMBER && 
    userInput <= MAX_NUMBER && 
    userInput % MULTIPLICITY=== 0){
        alert ('Great:)');
        break; 
        }

if(i + 1 >= MAX_TRY){
        alert('Unfortunately, the try is over');
        break;
        }       

alert('only 5 tries, try number'+ (i + 1));
}


//Task 3
const checkMultiplicity = function(
    maxTry = MAX_TRY,
    minNumber = MIN_NUMBER, 
    maxNumber = MAX_NUMBER, 
    multiplicity = MULTIPLICITY,
    ){
    for(let i = 0; i<maxTry; i++){
        const userInput = prompt(`Enter a number from ${minNumber} to ${maxNumber} that is a multiple of ${multiplicity}`);

        if(userInput >= minNumber && 
            userInput <= maxNumber && 
            userInput % multiplicity=== 0){
                return 'OK';
                }
    }

    return 'Error';
}

console.log(checkMultiplicity(2, 2, 20, 4));