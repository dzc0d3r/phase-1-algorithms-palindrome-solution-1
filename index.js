function isPalindrome(word) {
  // Write your algorithm here
  word.toLowerCase()
  return word === [...word].reverse().join("")
}

/* 
  Add your pseudocode here
  too lazy to write it everytime DRY OR DIE
*/

/*
  Add written explanation of your solution here
  too lazy to write it everytime DRY OR DIE
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
