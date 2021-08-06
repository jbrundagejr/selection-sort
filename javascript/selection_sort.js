function selectionSort(arr) {
  // loop over the array
  for(let i = 0; i < arr.length; i++){
    // set a minimum counter to i
    let min = i
    // loop over the array again with a second counter set to the follow element of minimum counter
    for(let j = i + 1; j < arr.length; j++){
      // if the second counter is less than the first, make it the new minimum counter
      if(arr[j] < arr[min]){
        min = j
      }
    }
    // swap the positions of the two counters and keep going through the array
    if(i !== min){
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }
  return arr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
