# JavaScript Objects

In JavaScript, objects are both a dynamic data structure containing key-value pairs as well as an instance of a class. Because of this, there are a number of ways to use objects.

1. **Creating Objects**

   - Because objects can be their own data-type, they can be created as a stand-alone data-structure.

   ```javascript
   const obj = {
     name: "Tony",
     age: 35,
     greeting: () => console.log(`Hello, I'm ${name}`),
   };

   // obj --> {name: "Tony", age: 35, greeting: () => void}
   ```

   - They can also be created as empty data-structures and assigned values later on.

   ```javascript
   const obj_1 = {};
   const obj_2 = new Object();

   obj_1.name = "Steve";
   obj_2.name = "Peggy ";

   // obj_1 --> {name: "Steve"}
   // obj_2 --> {name: "Peggy"}
   ```

   - Another common way they can be created is through a factor function -- a function that creates a returns a data type.

   ```javascript
   function createObject(name, age, adult) {
     return {
       name,
       age,
       adult,
       greet() {
         console.log(`Hello, I'm ${name}`);
       },
     };
   }
   const object = createObject("Bruce", 31, true);

   // object --> {name: "Bruce", age: 31, adult: true, greeting: () => void}
   ```

   - The final -- and most common across programming languages -- is creating objects using a constructor method.

   ```javascript
   class Person {
     constructor(name, age) {
       this.name = name;
       this.age = age;
     }
   }
   const object = new Person("Thor", 2100);

   // object --> {name: "Thor", age: 2100}
   ```

2. **Accessing Properties**

   - There are two ways to access values in an object: Dot Notation and Bracket Notation.
   - Dot Notation uses a period and the key to access the value.

   ```javascript
   const obj = { name: "Peter", age: 16 };
   const name = obj.name;

   // name --> "Peter"
   ```

   - Bracket Notation uses braces -- the ones used to define an array -- and the key to access the value.

   ```javascript
   const obj = { name: "Leonardo", age: 19 };
   const age = obj["age"];

   // age --> 19
   ```

   It is better two use Bracket Notation when the key is determined at run-time, the key is set to a variable, or the name of the property is not a valid JavaScript identifier (contains special characters). Dot Notation is considered more readable and better for other use cases.

   - `Object.entries(object)` returns a 2D array of all of the key-value pairs.
   - The `object` parameter is the object you want to get the pairs of.

   ```javascript
   const obj = { name: "Donatello", age: 19 };
   const arr = Object.entries(obj);

   // arr --> [ [ 'name', 'Donatello' ], [ 'age', 19 ] ]
   ```

   - `Object.keys(object)` returns an array of all of the keys of the object.
   - The `object` parameter is the object you want to get the pairs of.

   ```javascript
   const obj = { name: "Raphael", age: 19 };
   const arr = Object.keys(obj);

   // arr --> [ 'name', 'age' ]
   ```

   - `Object.values(object)` returns an array of all of the values of the object.
   - The `object` parameter is the object you want to get the pairs of.

   ```javascript
   const obj = { name: "Michelangelo", age: 19 };
   const arr = Object.values(obj);

   // arr --> [ 'Michelangelo', 19 ]
   ```

3. **Adding, Updating, and Removing Properties**

   - Object properties can be added or updated using Dot or Bracket Notation. The process for adding and updating is the same.

   ```javascript
   // Adding
   const obj = {};
   obj.name = "Bruce";
   obj.age = 30;
   obj["home"] = "New York";

   // obj --> { name: 'Bruce', age: 30, home: 'New York City' }

   // Updating
   obj.name = "Clark";
   obj["home"] = "Boston";

   // obj --> { name: 'Clark', age: 30, home: 'Boston' }
   ```

   - To delete an object's property we must use the delete keyword and access the desired property

   ```javascript
   const obj = { name: "Barry", home: "Washington", color: "red" };
   delete obj.home;
   delete obj["color"];

   // obj --> { name: 'Barry' }
   ```

4. **Iterating Objects**

   - To iterate through objects we can use `for in` loops. These are loops that allow us to quickly iterate through an object and perform complex actions.

   ```javascript
   const obj = { name: "", home: "", color: "" };
   for (key in obj) {
     obj[key] = "For Looped";
   }

   // obj --> { name: 'For Looped', home: 'For Looped', color: 'For Looped' }
   ```

   - We can also iterate objects by using an array of the keys to iterate.

   ```javascript
   const obj = { name: "", home: "", color: "" };
   const arr = Object.keys(obj);
   arr.forEach((element) => (obj[element] = "Iterated"));

   // obj --> { name: 'Iterated', home: 'Iterated', color: 'Iterated' }
   ```
