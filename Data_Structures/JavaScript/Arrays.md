# JavaScript Arrays

1. **Creating Arrays**
    - In JavaScript, Arrays are dynamic in data type and size. This means that the data can be of any type, and can change after creation.
```javascript
const arr1 = []; // Creates an empty array
const arr2 = [1, "A", true, {name: "John"}]; // Creates an array with initial values
const arr3 = [1, 2, 3, ...arr2];    //  Creates an array with initial values, and uses the spread operator to add the values from arr2
```
2. **Adding and Removing Elements**
    - `push(element)` adds the parameter element to the end of the array.
    ```javascript
    const arr = ["First Element"];
    arr.push("New Element");
    // arr --> ["First Element", "New Element"]
    ```
    - `pop()` removes the element in the last index of the array.
    ```javascript
    const arr = ["First", "Second"];
    arr.pop();
    // arr --> ["First"]