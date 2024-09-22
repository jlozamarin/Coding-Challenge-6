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
    employee.shifts.forEach(shift => {
        console.log(`Day: ${shift.day}, Hours: ${shift.hours}`);
    });
}
displayEmployeeShifts(employees[0]); // Shows shifts for Brianna Deaubler
displayEmployeeShifts(employees[1]); // Shows shifts for Jesenia Chatman
displayEmployeeShifts(employees[2]); // Shows shifts for Isabella Moore
displayEmployeeShifts(employees[3]); // Shows shifts for Jennifer Loza