let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" }
];

// 1. PrintDeveloperbyMap - 25 marks
function PrintDeveloperbyMap() {
  arr.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// 2. PrintDeveloperbyForEach - 25 marks
function PrintDeveloperbyForEach() {
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

// 3. addData - 20 marks
function addData() {
  let newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

// 4. removeAdmin - 15 marks
function removeAdmin() {
  arr = arr.filter((employee) => employee.profession !== "admin");
  console.log(arr);
}

// 5. ConcatinateArray - 15 marks
function ConcatinateArray() {
  let arr2 = [
    { id: 5, name: "alice", age: "22", profession: "designer" },
    { id: 6, name: "bob", age: "23", profession: "manager" },
    { id: 7, name: "charlie", age: "21", profession: "tester" }
  ];

  let result = arr.concat(arr2);
  console.log(result);
}
