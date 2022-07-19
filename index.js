// require all of your classes/constructors, (Manager, Engineer, Intern)
const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")
// require packages needed (inquirer, path, fs)
const fs = require(fs)
const inquirer = require(inquirer)
// set up an empty array for the Team Members
const teamArray = []
// set up functions for iniitalizing the app, creating a manager, determining which type of employee the user wants to add, adding each member type, and building the team

// function for INITIALIZING ////////////////
function init() {
    // first thing you'll probably want to do is add a function for creating a manager, since that's the first thing you have to do
    // function for CREATING A MANAGER ///////////////
    function createManager() {
      // use inquirer
     
      // and prompt to ask questions
  
      // once you finish your questions, you'll probably want to send those answers to a new instance of Manager (one of the classes you'll create and require above)
      .then((answers) => {
      const manager = new Manager(
        //send your answers here
      );
      // then you will need to push this new manager to the empty team array you set up above
      // and call the function for DETERMINING TYPE OF EMPLOYEE - we'll call it createTeam
      createTeam();
    })
    }
  
    // function for DETERMINING TYPE OF EMPLOYEE //////////////////
    function createTeam() {
      // use inquirer
      // and prompt to ask questions - such as what type of employee they would like to add
  
      // then, based on their choice, run the function associated with adding that employee type
      .then((choice) => {
      // conditional that runs function for employee type that the user selected
      // if they choose Intern, run addIntern function
      // if they no longer want to add members, you'll need to run the function that actually builds the team (creates the file, etc)
    })
    }
  
    // function for ADDING A MEMBER /////////////////
    // a seperate function for each member type
    function addIntern() {
      // use inquirer
      // and prompt to ask questions
      // take the answers, create a new instance of Intern, and add those answers to that new Intern
      // push this new member into you team array
    }
  
    // function for BUIDING THE TEAM //////////////////
    function buildTeam() {
      // creating the file, adding your team to it
      // probably call a function, passing in your team members array - send it to another js file 
    }
  
    // last thing you'll want to do inside of this initializing function is call your function for creating a manager, so that it's the first question the user is asked
  
    createManager();
  }