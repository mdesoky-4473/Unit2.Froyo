const userInputString = prompt(
    "Please enter froyo flavors divided by commas.",
  "vanilla,vanilla,vanilla,vanilla,strawberry, strawberry,coffee,coffee"
  );

  // Split the string of numbers into an array of strings.
const stringArray = userInputString.split(",");

// Create an empty object for the count of each flavor.
const flavorCount = {};

// Count the number of times each flavor appears using a loop.
for (let i = 0; i < stringArray.length; i++) {
   
  const flavor = stringArray[i].trim(); //trim in case of accidental spaces
    if (flavorCount[flavor]) {
        flavorCount[flavor] += 1;
    } else {
        flavorCount[flavor] = 1;
    }
}

// Print the count of each flavor.
console.table(flavorCount);
       