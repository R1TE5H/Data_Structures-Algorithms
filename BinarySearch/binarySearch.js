var binarySearch = function (list, target) {
    if (list.length === 0)
        return "The list provided is empty";
    var left = 0;
    var right = list.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (list[mid] === target)
            return "".concat(target, " was found at index number ").concat(mid);
        else if (list[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return "".concat(target, " was not found the ").concat(list);
};
var list = [1, 2, 3, 4, 5];
console.log(binarySearch(list, 4));
