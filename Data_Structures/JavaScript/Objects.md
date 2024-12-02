# JavaScript Objects

In JavaScript, objects are both a dynamic data structure containing key-value pairs as well as an instance of a class. Because of this, there are a number of ways to use objects.

1. **Creating Objects**

   - Because objects can be their own data-type, they can be created as a stand-alone data-structure.

   ```javascript
   const obj = {
     name: "John Doe",
     age: 21,
     greeting: () => console.log(`Hello, I'm ${name}`),
   };

   // obj --> {name: "John Doe", age: 21, greeting: () => void}
   ```

   - They can also be created as empty data-structures and assigned values later on.

   ```javascript
   const obj_1 = {};
   const obj_2 = new Object();

   obj_1.name = "John Doe";
   obj_2.name = "Jane Doe";

   // obj_1 --> {name: "John Doe"}
   // obj_2 --> {name: "Jane Doe"}
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
   const object = createObject("John Doe", 21, true);

   // object --> {name: "John Doe", age: 21, adult: true, greeting: () => void}
   ```

   - The final -- and most common across programming languages -- is creating objects using a constructor method.

   ```javascript
   class Person {
     constructor(name, age) {
       this.name = name;
       this.age = age;
     }
   }
   const object = new Person("John", 21);

   // object --> {name: "John", age: 21}
   ```

2. **Accessing Properties**

   - There are two ways to access values in an object: Dot Notation and Bracket Notation.
   - Dot Notation uses a period and the key to access the value.

   ```javascript
   const obj = { name: "John Doe", age: 21 };
   const name = obj.name;

   // name --> "John Doe"
   ```

   - Bracket Notation uses braces -- the ones used to define an array -- and the key to access the value.

   ```javascript
   const obj = { name: "John Doe", age: 21 };
   const age = obj["age"];

   // age --> 21
   ```

   - It is better two use Bracket Notation when the key is determined at run-time, the key is set to a variable, or the name of the property is not a valid JavaScript identifier (contains special characters). Dot Notation is considered more readable and better for other use cases.

3. **Adding, Updating, and Removing Properties**

   - Object properties can be added or updated using Dot or Bracket Notation. The process for adding and updating is the same.

   ```javascript
   // Adding
   const obj = {};
   obj.name = "Bruce";
   obj.age = 30;
   obj["home"] = "Gotham";

   // obj --> { name: 'Bruce', age: 30, home: 'Gotham' }

   // Updating
   obj.name = "Clark";
   obj["home"] = "Metropolis";

   // obj --> { name: 'Clark', age: 30, home: 'Metropolis' }
   ```

   - To delete an object's property we must use the delete keyword and access the desired property

   ```javascript
   const obj = { name: "Barry", home: "Central City", powers: "Speed" };
   delete obj.home;
   delete obj["powers"];

   // obj --> { name: 'Barry' }
   ```
