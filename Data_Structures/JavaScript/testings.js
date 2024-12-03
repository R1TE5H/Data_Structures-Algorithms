const obj = { name: "", home: "", color: "" };
const arr = Object.keys(obj);
arr.forEach((element) => (obj[element] = "Iterated"));

console.log(obj);
