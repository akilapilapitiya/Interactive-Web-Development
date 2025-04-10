// Student Number - IM/2022/056
// Name - Akila Pilapitiya
// Question 02

function numberGenerator(arrayPassed){
    //Constants Declared
    const length = arrayPassed.length;
    const answer = new Array(length);

    //Declare the first element
    answer[0] = 1;

    // Loop to pass and build the values of the newly created loop
    for (let i = 1; i < length; i++) {
        answer[i] = arrayPassed[i - 1] * answer[i - 1];
    }

    // Variable that is multiplied to get the result expected
    let feedNumber = 1;

    for (let i = (length - 1); i >= 0; i--) {
        answer[i] *= feedNumber;
        feedNumber *= arrayPassed[i];
    }
    return answer;
}

//Checked Code
console.log(numberGenerator([1, 2, 3, 4]));

console.log(numberGenerator([-1, 0, -3, 3]));







