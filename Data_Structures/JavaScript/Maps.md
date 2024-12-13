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

2. **Accessing Keys and Values**

   - `get(key)` returns the value of a key-value pair
   - The `key` parameter's value is what will be returned
   - If the key is not present in the map `undefined` will be returned

   ```javascript
   const map = new Map([
     ["name", "Monica"],
     ["age", 33],
     ["city", "New York City"],
   ]);
   const val = map.get("name");

   // val --> "Monica"
   ```

   - `entries()`

**Objects VS Maps**
