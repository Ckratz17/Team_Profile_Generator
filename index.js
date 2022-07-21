const generateHTML = require("./util/generateHtml")
// link to class constructors
const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")
//node modules
const fs = require('fs')
const inquirer = require('inquirer');
// empty array for the Team Members
const teamArray = []
    // first thing you'll probably want to do is add a function for creating a manager, since that's the first thing you have to do
    // function for CREATING A MANAGER ///////////////
  const createManager = () => {
      // use inquirer
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Who is the Manager?'
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the Manager's id?"
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the Manager's email?"
      },  
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the Manager's office number?"
      }
    ])
    .then(managerInput => {
      const {name, id, email, officeNumber} = managerInput

      const manager = new Manager(name, id, email, officeNumber)
// then you will need to push this new manager to the empty team array you set up above
      teamArray.push(manager)
      console.log(manager)
        //send your answers here
      
      
      // and call the function for DETERMINING TYPE OF EMPLOYEE - we'll call it createTeam
    })
  }
    //FUNCTION FOR CREATING EMPLOYEES!!!
    function createEmployee() {
        console.log(`
        ============================
        Adding employees to the team
        ============================
        `)

      return inquirer.prompt([
        //LET THEM CHOOSE WHICH ROLE THEY WANT THEIR NEW EMPLOYEE TO HAVE
        {
          type: 'list',
          name: 'role',
          message: "What is your employee's role?",
          choices: ['Engineer', 'Intern']
        },
        //REPEAT STEPS FROM THE MANAGER FUNCTION
        {
          type: 'input',
          name: 'name',
          message: "What is your employee's name?"
        },
        {
          type: 'input',
          name: 'id',
          message: "What is your employee's id"
        },
        {
          type: 'input',
          name: 'email',
          message: "What is the employee's email?"
        },  
        {
          type: 'input',
          name: 'github',
          message: "What is the employee's github username?"
        },
        {
          type: 'input',
          name: 'school',
          message: "What is the employee's school they attended?"
        },
        {
          type: 'confirm',
          name: 'confirmAddEmployee',
          message: "Do you want to add more team members?",
          default: false
        }
      ])
      .then(employeeData => {
        let {name, id, email, github, school, role, confirmAddEmployee} = employeeData
        let employee;
        //THEN TAKE THE DATA AND SEPERATE THE ENGINEER FROM THE INTERN AND PUSH THE EMPLOYEE
        if(role === "Engineer"){
          employee = new Engineer (name, id, email, github)
          console.log(employee)
        }else if (role === "Inter") {
          employee = new Intern (name, id, email, school)
          console.log(employee)
        }
        teamArray.push(employee)
        //ADD EMPLOYEE TO EMPTY ARRAY
        if(confirmAddEmployee) {
          return createEmployee(teamArray)
        }else {
          return teamArray
        }

    })
  }
  //CREATE THE MANAGER FIRST
  createManager()
  //THEN EMPLOYEE
  .then(createEmployee)
  //TAKE THE TEAM ARRAY AND GENERATE A HTML PAGE
  .then(teamArray => {
    const htmlContent = generateHTML(teamArray)

    fs.writeFile("index.html", htmlContent, (err) =>
    err? console.log(err) : console.log("Succefully created an Team Page!")) 
  })
  

  
  
  
 