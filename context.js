setTimeout(() => console.log("timer expired"), 1000)

function x(y) {
  console.log("inside x")

  y()
}

x(function y() {
  console.log("inside y")
})
