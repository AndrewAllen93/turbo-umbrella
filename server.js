const mysql = require('mysql');
const inquirer = require('inquirer');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'your_database_host',
  user: 'your_database_user',
  password: 'your_database_password',
  database: 'work_db'
});

// Connect to the database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
  startApp();
});

// Start the application
function startApp() {
  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ]
    }
  ]).then(answer => {
    switch (answer.action) {
      case 'View all departments':
        viewDepartments();
        break;
      case 'View all roles':
        viewRoles();
        break;
      case 'View all employees':
        viewEmployees();
        break;
      case 'Add a department':
        addDepartment();
        break;
      case 'Add a role':
        addRole();
        break;
      case 'Add an employee':
        addEmployee();
        break;
      case 'Update an employee role':
        updateEmployeeRole();
        break;
      case 'Exit':
        connection.end();
        break;
    }
  });
}

// Implement the functions for viewing, adding, and updating data from the database
function viewDepartments() {
  // Query the database to retrieve department data and display it in a formatted table
}

function viewRoles() {
  // Query the database to retrieve role data and display it in a formatted table
}

function viewEmployees() {
  // Query the database to retrieve employee data and display it in a formatted table
}

function addDepartment() {
  // Prompt the user to enter the name of the department and insert it into the database
}

function addRole() {
  // Prompt the user to enter the role details and insert it into the database
}

function addEmployee() {
  // Prompt the user to enter the employee details and insert them into the database
}

function updateEmployeeRole() {
  // Prompt the user to select an employee and their new role, then update the database
}
