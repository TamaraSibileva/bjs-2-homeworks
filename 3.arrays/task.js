// Task#1: Comparing arrays:
function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  return arr1.every((item, index) => {
    return item === arr2[index];
  });
}

function getUsersNamesInAgeRange(users, gender) {
  
}