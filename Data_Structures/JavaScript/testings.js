const obj = { name: "Barry", home: "Central City", powers: "Speed" };
delete obj.home;
delete obj["powers"];

console.log(obj);
