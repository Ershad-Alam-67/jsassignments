function fun1() {
  return new Promise((res, rej) => {
    console.log("reject")
    res()
  })
}
fun1()
  .then(() => {
    console.log("resolved")
  })
  .catch((err) => {
    console.log("errorr")
  })
