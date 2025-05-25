// Task#1: Comparing arrays:
function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  
  return arr1.every((item, index) => {
    return item === arr2[index];
  });
}

// Task2: Filtering and converting an array:
function getUsersNamesInAgeRange(users, gender) {
  return users.filter(user => user.gender === gender)
    .map(user => user.age)
    .reduce((acc, age, index, arr) => acc + age / arr.length, 0);
  
  //const filteredUsers = users.filter(user => user.gender === gender);
  
  // if (filteredUsers.length === 0) {
  // return 0;
  // }

  //const sumAge = filteredUsers.reduce((acc, user) => acc + user.age, 0)
  
  //return sumAge / filteredUsers.length;
}