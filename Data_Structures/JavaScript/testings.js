const object = {
  street: "Yellow Brick Road",
  zip: "11111",
  city: "Emerald City",
  country: "OZ",
};

const { city, country: place, street, zip } = object;

console.log(place);
