# JavaScript Maps

In JavaScript, Maps are a collection of Key-Value pairs (just like Objects). The difference is that the keys can be of any type (Object keys can only be strings) and Maps maintain the order that key-value pairs are added in.

1. **Creating Maps**

   - Maps are dynamic and be created with or without values.

   ```javascript
   const map = new Map([
     ["name", "Ross"],
     ["age", 35],
     ["city", "New York City"],
   ]);
   const map2 = new Map();

   // map --> Map(3) { 'name' => 'Ross', 'age' => 35, 'city' => 'New York City' }
   // map2 --> Map(0) {}
   ```

2. **Adding, Updating, and Removing Key-Value Pairs**

   - `set(key, value)` will update the value of the key if the `key` parameter already exists, otherwise, it will add the key-value pair to the end of the map.

   ```javascript
   const map = new Map([
     ["name", "Joey"],
     ["age", 34],
   ]);

   map.set("name", "Chandler");
   map.set("city", "New York City");

   // map --> Map(3) { 'name' => 'Chandler', 'age' => 34, 'city' => 'New York City' }
   ```

   - `delete(key)` removes the key-value pair based on the `key` parameter

   ```javascript
   const map = new Map([
     ["name", "Joey"],
     ["age", 34],
     ["city", "New York City"],
   ]);

   map.remove("city");

   // map --> Map(3) { 'name' => 'Joey', 'age' => 34 }
   ```

   - `clear()` removes all entries from a map

   ```javascript
   const map = new Map([
     ["name", "Phoebe"],
     ["age", 34],
     ["city", "New York City"],
   ]);

   map.clear();

   // map --> Map(0) {}
   ```

   - `size` returns the number of entries in the map

   ```javascript
   const map = new Map([
     ["name", "Ben"],
     ["age", 4],
     ["city", "New York City"],
   ]);

   const size = map.size;

   // size --> 3
   ```

3. **Map Iterators**
   Map Iterators are objects that contain the data from a map and remember the order which each data point was added. They allow the developer to easily access data from a map.

   - They appear as an object containing an array with elements for each key-value pair.

   - `next()` enables the Map Iterator to view data within the Map iteratively. This means that once the `next()` method is enacted, the next time it is used, the following data element will be used.

   - `next()` returns an object containing two key-value pairs
   - `value` is a key containing an array of the current key-value pair
   - `done` is a key containing whether the iteration is complete. When the iteration is complete, the `next()` object will have an `value: undefined` and `done: false`.

   - `entries()` returns a Map Iterator containing the key-value pairs from the map.

   ```javascript
   const map = new Map([
     ["name", "Monica"],
     ["age", 33],
     ["city", "New York City"],
   ]);

   const mapIterator = map.entries();

   const a = mapIterator.next();
   const b = mapIterator.next();
   const c = mapIterator.next();
   const d = mapIterator.next();

   // a --> { value: [ 'a', 1 ], done: false }
   // b --> { value: [ 'b', 2 ], done: false }
   // c --> { value: [ 'c', 3 ], done: false }
   // d --> { value: undefined, done: true }
   ```

4. **Accessing Keys and Values**

   - `get(key)` returns the value of a key-value pair
   - The `key` parameter's value is what will be returned
   - If the key is not present in the map `undefined` will be returned

   ```javascript
   const map = new Map([
     ["name", "Gunther"],
     ["age", 33],
     ["city", "New York City"],
   ]);
   const val = map.get("name");
   const val2 = map.get("favColour");

   // val --> "Gunther"
   // val2 --> undefined
   ```

   - `has(key)` returns a boolean based on the existence of the `key` parameter.

   ```javascript
   const map = new Map([
     ["name", "Janice"],
     ["age", 33],
     ["city", "New York City"],
   ]);

   const val = map.has("name");
   const val2 = map.has("favColour");

   // val --> true
   // val2 --> false
   ```

5. **Converting Between Maps and Arrays**

   - Map Iterators can be extracted into key-value pair 2D arrays using the Spread Operator (`...`).

   ```javascript
   const map = new Map([
     ["name", "Rachael"],
     ["age", 33],
     ["city", "New York City"],
   ]);

   const entries = [...map.entries()];
   // entries --> [ [ 'name', 'Rachael' ], [ 'age', 33 ], [ 'city', 'New York City' ] ]
   ```

   - `Arrays.from(map)` converts a map into an 2D array
   - `new Map(arr)` converts an array into a map

6. **Iterating Maps**
   - for of with entries()
   - for each
   - for of using keys and values independently
7. **Miscellaneous**
   - WeakMap
     Common Use Cases

**Objects VS Maps**
