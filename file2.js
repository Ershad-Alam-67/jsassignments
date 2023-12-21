const studentArr = [
  {
    name: "Yash",

    age: "25",
  },

  {
    name: "Vaibhav",

    age: "23",
  },
]

function changeAge(studentObj) {
  studentObj.age = "30"
}

changeAge(studentArr[0])

console.log(studentArr[0].age)
