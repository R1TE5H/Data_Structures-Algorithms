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
