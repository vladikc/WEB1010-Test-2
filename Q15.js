// The Dinger Dam has 19 generators of two different types. Generators 1-4
// output 62 megawatts (MW) and generators 5-19 output 124 MW.
//
// The Dam Rangers have asked you to create a printout shows the power output
// of each generator and the total power being generated after each generators
// is turned on. The first two console logs should look like the following:
//
//    Generator #1 is on, adding 62 MW, for a total of 62 MW!
//    Generator #2 is on, adding 62 MW, for a total of 124 MW!
//
// The 5th and 6th console log should like like the following:
//
//    Generator #5 is on, adding 124 MW, for a total of 372 MW!
//    Generator #6 is on, adding 124 MW, for a total of 496 MW!
//
// Use the variables below in your solution.

var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

var generator_power_first_4 = 62
while (currentGen<=4){
    totalMW = generator_power_first_4 *currentGen
    console.log(`Generator ${currentGen} is on, adding ${generator_power_first_4} MW, for a total of ${totalMW} MW!`)
    currentGen++

    
}

var generator_power_from_5_to_19 =124

for (currentGen=1;currentGen<=15;currentGen++){
    totalMW = generator_power_from_5_to_19 * currentGen
    console.log(`Generator ${currentGen+4} is on, adding ${generator_power_from_5_to_19} MW, for a total of ${totalMW} MW!`)
}


