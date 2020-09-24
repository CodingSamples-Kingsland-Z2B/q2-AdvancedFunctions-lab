function main(employeeData,searchCriteria){
    let criteria = searchCriteria.split("-");
    let employees = JSON.parse(employeeData);
    let filteredEmployees = employees.filter(function(employeeObject){
        return employeeObject[criteria[0]] == criteria[1];
    });
    /* 
    0. Ardine Bassam - abassam0@cnn.com
    1. Kizzee Jost - kjost1@forbes.com
    */
    // console.log(filteredEmployees);
    // console.log("\n");
    // console.log(...employees);
    filteredEmployees.forEach((employee)=>{
        console.log(`${filteredEmployees.indexOf(employee)}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
    });
}


main(`[{"id": "1","first_name": "Ardine","last_name": "Bassam","email": "abassam0@cnn.com","gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female');

/* `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
 */