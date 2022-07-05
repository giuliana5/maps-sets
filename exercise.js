//Quick Question #1
new Set([1,1,2,2,3,4]); //{1, 2, 3, 4}

//Quick Question #2
[...new Set("referee")].join(""); //ref

//Quick Questions #3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
//{Array(3), Array(3)}

//hasDuplicate
const hasDuplicate = arr => [...new Set(arr)].length !== arr.length;

//vowelCount
const vowelCount = (str) => {
  const vowelCountMap = new Map();
  const lowerCaseStr = str.toLowerCase();
  for (let char of lowerCaseStr) {
    if (isVowel(char)) {
      if (vowelCountMap.has(char)) {
        vowelCountMap.set(char, vowelCountMap.get(char) + 1);
      } else {
        vowelCountMap.set(char, 1);
      }
    }
  }
  return vowelCountMap;
}

const isVowel = char => "aeiou".includes(char);
