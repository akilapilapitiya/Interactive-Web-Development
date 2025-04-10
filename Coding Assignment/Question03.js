// Student Number - IM/2022/056
// Name - Akila Pilapitiya
// Question 03

function highestHeightFinder(gain) {
    //Variable Defined
    let highestAltitude = 0;
    let currentAltitude = 0;

    // Constrain for n
    let n = gain.length;

    if(1 <= n <=100){
        for (let i = 0; i < n; i++) {
            currentAltitude += gain[i];
            highestAltitude = Math.max(highestAltitude, currentAltitude);
          }  
          return highestAltitude;
    }
    else{
        console.log("The array is not according to given limits");
    }
    
}

// Checked Code
console.log((highestHeightFinder([-5, 1, 5, 0, -7])));

console.log((highestHeightFinder([-4, -3, -2, -1, 4, 3, 2])));
