var obj = {
  age: 25,
  aro: () => {
    console.log(this.age)
  },
  fun: function () {
    console.log(this.age)
  },
}
obj.aro()
obj.fun()
