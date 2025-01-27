'use strict';

// write code here
const list = document.body.querySelectorAll('li');

const employees = [];

for (let i = 0; i < list.length; i++) {
  const employeeName = list[i].innerHTML.trim();
  const salary = parseInt(
    list[i].getAttribute('data-salary').replace(/[$,]/g, ''),
  );

  employees.push({ employeeName, salary });
}

function sortList(employeesList) {
  return employeesList.sort((a, b) => b.salary - a.salary);
}

const sorted = sortList(employees);

for (let i = 0; i < sorted.length; i++) {
  list[i].innerHTML = sorted[i].employeeName;
}
