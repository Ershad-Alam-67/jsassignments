var a = 10
function fun() {
  // var a = 20
  console.log(this.a)
}
fun()
console.log(a)
fun()
console.log(a)
