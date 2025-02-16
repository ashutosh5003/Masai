const userProfile = {
    name: "Alice",
    age: 28,
  
    details() {
      return `${this.name} is ${this.age} years old.`;
    },
  
    updateAge(newAge) {
      if (typeof newAge !== "number" || newAge <= 0) {
        console.log("Invalid age.");
        return;
      }
  
      this.age = newAge;
      console.log(this.details()); 
    }
  };
