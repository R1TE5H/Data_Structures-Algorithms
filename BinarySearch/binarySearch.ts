const binarySearch = (list: number[], target: number): string => {
  if (list.length === 0) return "The list provided is empty";

  let left: number = 0;
  let right: number = list.length - 1;

  while (left <= right) {
    let mid: number = Math.floor((left + right) / 2);

    if (list[mid] === target)
      return `The target (${target}) was found at index number ${mid}`;
    else if (list[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return `${target} was not found the ${list}`;
};

const list = [1, 2, 3, 4, 5];

console.log(binarySearch(list, 4));
