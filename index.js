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
// set up functions for iniitalizing the app, creating a manager, determining which type of employee the user wants to add, adding each member type, and building the team
// function for INITIALIZING ////////////////
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
// once you finish your questions, you'll probably want to send those answers to a new instance of Manager (one of the classes you'll create and require above)
      const manager = new Manager(name, id, email, officeNumber)
// then you will need to push this new manager to the empty team array you set up above
      teamArray.push(manager)
      console.log(manager)
        //send your answers here
      
      
      // and call the function for DETERMINING TYPE OF EMPLOYEE - we'll call it createTeam
      createEmployee();
    })
  }
    function createEmployee() {
        console.log(`
        ============================
        Adding employees to the team
        ============================
        `)

      return inquirer.prompt([
        {
          type: 'list',
          name: 'role',
          message: "What is your employee's role?",
          choices: ['Engineer', 'Intern']
        },
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

        if(role === "Engineer"){
          employee = new Engineer (name, id, email, github)
          console.log(employee)
        }else if (role === "Inter") {
          employee = new Intern (name, id, email, school)
          console.log(employee)
        }
        teamArray.push(employee)
        
        if(confirmAddEmployee) {
          return createEmployee(teamArray)
        }else {
          return teamArray
        }

    })
  }
  createManager()
  .then(createEmployee)
  .then(teamArray => {
    return generateHTML(teamArray)
  })
  .then(pageHtml => {
    return fs.writeFile(pageHtml)
  })
  
  
  
  
 