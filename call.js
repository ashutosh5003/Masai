const personalInfo = {
    fullname: function(){
        return this.name + " " + this.age;
    }
}
const details = {
    name: "Ashutosh",
    age: 22
}
console.log(personalInfo.fullname.call(details));