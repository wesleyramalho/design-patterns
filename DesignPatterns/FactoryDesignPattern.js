/*
    Factory Design Pattern -> https://www.youtube.com/watch?v=kuirGzhGhyw
*/

const DEVELOPER_TYPE = 1;
const TESTER_TYPE = 2;

function Developer(name)
{
  this.name = name
  this.type = "Software Developer from popstand"
}

function Tester(name)
{
  this.name = name
  this.type = "QA Tester"
}

function EmployeeFactory()
{
  this.create = (name, type) => {
    switch(type)
    {
      case DEVELOPER_TYPE:
        return new Developer(name)
      case TESTER_TYPE:
        return new Tester(name)
    }
  }
}

function say()
{
  console.log("Hi, I'm " + this.name + " and I'm a " + this.type)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("Wes", DEVELOPER_TYPE))
employees.push(employeeFactory.create("Peter", TESTER_TYPE))
employees.push(employeeFactory.create("Victor", DEVELOPER_TYPE))
employees.push(employeeFactory.create("Mary", DEVELOPER_TYPE))
employees.push(employeeFactory.create("Sarah", TESTER_TYPE))

employees.forEach( emp => {
  say.call(emp)
})
