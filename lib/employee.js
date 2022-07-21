class Employee {
    constructor(name, id, email) {
    // constructor() 
      this.name = name
      this.id = id
      this.email = email
    }
    // each method for getting the information you'll be taking in for this employee
    getName(){// getName() {
      return this.name
    }
    getId(){
      return this.id
    }
    getEmail(){
      return this.email
    }
    getRole(){
      return 'Employee'
    }
  }
  
  module.exports = Employee;
  
 
  