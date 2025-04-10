// Student Number - IM/2022/056
// Name - Akila Pilapitiya
// Question 01

function numberPrinter(){
    let value;
    // Loop to control the 100 times loop
    for(let i =1; i <= 100; i++){
        if(i % 3 == 0){
            // Condition if divisible by 3
            value = "Fizz";   
        }
        else if(i % 5 == 0){
            // Condition is divisible by 5
            value = "Buzz"; 
        }
        else{
            //If both conditions above are not true print the number
            value = i; 
        }

        console.log(i + " - " + value);
    }
}

//Checked Code
numberPrinter();