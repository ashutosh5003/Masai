function createEmployee(name, role, salary) {  
    return {  
        name: name,  
        role: role,  
        salary: salary,  
        introduce: function() {  
            console.log(`Hello, I am ${this.name}, working as a ${this.role}.`);  
        }  
    };  
}  

const employee = createEmployee("Alex", "SDE", 1000000);  
employee.introduce();  