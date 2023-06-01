let name = "alam"
let obj = {
  name: "ershad ALAM",
  sum: function (x) {
    console.log(x)
    function fun() {
      let name = "ershad"
      console.log(this.name)
    }
    fun()
  },
}
obj.sum(4)
