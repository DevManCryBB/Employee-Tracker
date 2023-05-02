const express = require('express');
const cTable = require('console.table');
const mysql = require('mysql2');
const app = express();
const PORT = process.env.PORT ||3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allRoutes = require("./controllers")
app.use(allRoutes)

app.listen(PORT,()=>{
     console.log(`listenin to port ${PORT}!`)
 })

 function promptUser() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "WTD",
                message: "What would you like to do?",
                choices:['View all employees','Add employee','Update employee role','View all roles','Add role','View all departments','Add department','quit']
            },
            {
                type: "input",
                name: "managerID",
                message: "ID"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Email"
            },
            {
                type: "input",
                name: "managerOfficeNum",
                message: "Office Number"
            },
        ]).then(answers => {
            switch (answers.WTD) {
                case "View all employees":
                    viewAllEmployees();

                    break;
                case "Add employee":
                    addEmployee();

                    break;
                case "Update employee role":
                    updateEmployee();

                    break;
                case "View all roles":
                    viewAllRoles();

                    break;
                case "Add role":
                    addrole();
    
                    break;
                case "View all departments":
                    viewAllDepartments();
        
                    break;  
                case "Add department":
                    addDepartment();
    
                    break;
                case "Quit":
                    process.exit()
            }
        })
    }
function createEngineer() {

    inquirer
        .prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Name"
            },
            {
                type: "input",
                name: "engineerID",
                message: "ID"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Email"
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "GitHub"
            },
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub)
            team.push(engineer)
            generateTeam()
        })
}

function createIntern() {

    inquirer
        .prompt([
            {
                type: "input",
                name: "InternName",
                message: "Name"
            },
            {
                type: "input",
                name: "InternID",
                message: "ID"
            },
            {
                type: "input",
                name: "InternEmail",
                message: "Email"
            },
            {
                type: "input",
                name: "internSchool",
                message: "School"
            },
        ]).then(answers => {
            const intern = new Intern(answers.InternName, answers.InternID, answers.InternEmail, answers.internSchool)
            team.push(intern)
            generateTeam()
        })
}
promptUser()