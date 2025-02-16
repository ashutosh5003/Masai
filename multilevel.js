const people = [
    { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } },
  ];
  
  const sentences = people.map(({ name, address: { city, street: { name: streetName } } }) => 
    `${name} lives in ${city} on ${streetName}`
  );
  
  console.log(sentences);
  