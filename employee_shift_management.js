// Task 1: Create an Employees Array of Employee Objects
// Notes: This shows a list of employees and their shift schedules
let employees = [
    {
        name: "Brianna Deaubler",
        shifts: [{ day: "Tuesday", hours: 8 }, {day: "Wednesday", hours: 8 }]
    },
    {
        name: "Jesenia Chatman",
        shifts: [{ day: "Wednesday", hours: 7 }, { day: "Thursday", hours: 8 }]
    },
    {
        name: "Isabella Moore",
        shifts: [{ day: "Monday", hours: 8 }, { day: "Friday", hours: 6 }]
    },
    {
        name: "Jennifer Loza",
        shifts: [{ day: "Tuesday", hours: 7 }, { day: "Friday", hours: 7 }]
    }
];
console.log(employees);

// Task 2: Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employee) {
    console.log(`Display shifts for ${employee.name}:`);
    employee.shifts.forEach(shift => {console.log(`Day: ${shift.day}, Hours: ${shift.hours}`);
    });
}
displayEmployeeShifts(employees[0]); // Shows shifts for Brianna Deaubler
displayEmployeeShifts(employees[1]); // Shows shifts for Jesenia Chatman
displayEmployeeShifts(employees[2]); // Shows shifts for Isabella Moore
displayEmployeeShifts(employees[3]); // Shows shifts for Jennifer Loza

// Task 3: Simplified Function to Assign a New Shift using let
let assignShift = function(name, day, hours) {
    let employee = employees.find(employee => employee.name === name);
    if (!employee) {
        console.log(`Error: ${name} schedule not available.`); // Gives an error message for shifts not found
        return;
    }
    if (employee.shifts.some(workShift => workShift.day === day)) {
        console.log(`Error: ${name} is already on schedule for ${day}.`); // Gives an error message for individuals with existing shifts
        return;
    }
    employee.shifts.push({ day, hours });
    console.log(`${name} scheduled on ${day} for ${hours} hours.`); // Gives employees new shifts
};
assignShift("Brianna Deaubler", "Thursday", 6); // Assigns a new shift
assignShift("Jesenia Chatman", "Wednesday", 7); // Error: is already on schedule

// Task 4: Create a Function to Calculate Total Hours Worked
function calculateTotalHours(name) {
    let employee = employees.find(employeeHours => employeeHours.name === name);
    if (!employee) {
        console.log(`Error: ${name} not available.`); // Shows an error message if the employee name is not showing
        return;
    }
    let totalHours = employee.shifts.reduce((sum, workShift) => sum + workShift.hours, 0); // Calculates total amount of hours an employee worked during the week
    console.log(`${name} completed ${totalHours} hours during the week.`); 
}
calculateTotalHours("Jennifer Loza"); // Output: Completed 14 hours during the week
calculateTotalHours("Isabella Moore"); // Output: Completed 14 hours during the week

// Task 5: Create a Function to List Employees with Free Days
function listAvailableEmployees(day) {
    console.log(`List of available employees on ${day}:`);
    employees.forEach(employee => {
        if (!employee.shifts.some(workShift => workShift.day === day)) {
            console.log(employee.name);
        }
    });
}
listAvailableEmployees("Monday");
listAvailableEmployees("Tuesday");
listAvailableEmployees("Friday");

