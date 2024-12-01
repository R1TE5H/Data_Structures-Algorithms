# JavaScript Arrays

In JavaScript, Arrays are dynamic in data type and size. This means that the data can be of any type, and can change after creation.

1. **Creating Arrays**

   - Because arrays are dynamic and mutable, they can be created with or without initial values.

   ```javascript
   const arr1 = []; // Creates an empty array
   const arr2 = [1, "A", true, { name: "John" }]; // Creates an array with initial values
   const arr3 = [1, 2, 3, ...arr2]; //  Creates an array with initial values, and spreads the values from arr2
   ```

2. **Adding and Removing Elements**

   - `push(element_1, element_2, ...)` adds the parameter element(s) to the end of the array.

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
   ```

   - `unshift(element_1, element_2, ...)` adds the parameter element(s) to the start of the array.

   ```javascript
   const arr = [1, 2, 3, 4];
   arr.unshift(5, 6, 7, 8);

   // arr --> [5, 6, 7, 8, 1, 2, 3, 4]
   ```

   - `shift()` removes the first element of the array.

   ```javascript
   const arr = [1, 2, 3, 4];
   arr.shift();

   // arr --> [2, 3, 4]
   ```

3. **Modifying Arrays**

   - `splice(start, end)` deletes elements in the array starting at the start parameter index and ending at the end parameter index (not inclusive).
   - The method will return a new array containing the deleted elements.

   ```javascript
   const arr1 = [1, 2, 3, 4];
   const arr2 = arr.splice(1, 3);

   // arr1 --> [1]
   // arr2 --> [2, 3, 4]
   ```

   - `slice(start, end)` returns a new array containing the elements from the current array starting at the start parameter index and ending at the end parameter index (not inclusive).
   - The end parameter can be negative numbers where -1 indicates the last element (not inclusive).
   - If only one parameter is passed, the method will return an array containing the elements up to the passed parameter (the parameter will be considered the end index).

   ```javascript
   const arr1 = [1, 2, 3, 4];
   const arr2 = arr.slice(1, 3);
   const arr3 = arr.slice(1);

   // arr1 --> [1, 2, 3, 4]
   // arr2 --> [2, 3]
   // arr3 --> [2, 3, 4]
   ```

4. **Iterating Arrays**

   - `map((element, index, array) => (...))` applies a callback function to each element in the array and returns an new array with the transformed elements.
   - The `element`, `index`, and `array` arguments enable the callback to access the elements and their indexes, as well as the original array. This allows the array to be edited in place. `index` and `array` are optional parameters.

   ```javascript
   const arr1 = [1, 2, 3, 4];
   const arr2 = arr1.map((element) => (element += 3));
   const arr3 = arr1.map((element, index) => ({ element, index }));
   // arr1 --> [1, 2, 3, 4]
   // arr2 --> [4, 5, 6, 7]
   // arr3 --> [{element: 1, index: 0}, {element: 2, index: 1}, ...]
   ```

   - `forEach((element, index, array) => ...)` applies a callback function to each element in the array and mutates the original array.
   - The `element`, `index`, and `array` arguments enable the callback to access the elements and their indexes, as well as the original array. This allows the array to be edited in place. `index` and `array` are optional parameters.

   ```javascript
   const arr1 = [1, 2, 3, 4];
   arr1.forEach((element) => console.log(element));
   arr1.forEach((element, index, array) => (array[index] = element + 4));

   // arr1 --> [5, 6, 7, 8]
   ```

5. **Filtering and Searching Arrays**
   - `filter()`
   ```javascript
   const arr1 = [];
   ```
