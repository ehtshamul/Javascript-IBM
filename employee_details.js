const employees = [
    { id: 1, name: 'ehtsham', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'ehtsham ul haq', age: 50, department: 'CS', salary: 50000 },
    { id: 3, name: 'ehtsham ul', age: 20, department: 'Hacker', salary: 50000 },
    { id: 4, name: 'hamd ul haq', age: 40, department: 'HR', salary: 50000 }
  ];
  
  function displayEmployees() {
    const allEmployeesHTML = employees.map((employee, index) =>
      `<p>${employee.id}: ${employee.name} : ${employee.age} : ${employee.department} : -- $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = allEmployeesHTML;
  }
  
  function calculateTotalSalary() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total salaries: $${totalSalaries}`);
  }
  
  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
  
    const hrEmployeesDisplay = hrEmployees.map((employee, index) =>
      `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
  
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
  }
  
  function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =
        `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
      document.getElementById('employeesDetails').innerHTML = 'No employee has been found with this ID';
    }
  }
  