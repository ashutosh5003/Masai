function Person(name, age) {  
    this.name = name;  
    this.age = age;   
    this.displayInfo = function() {  
        console.log("Name: " + this.name + ", Age: " + this.age);  
    }.bind(this); 
}  
const person1 = new Person("Ashutosh", 22);  
const displayPersonInfo = person1.displayInfo.bind(person1);  
displayPersonInfo(); 