let array = []
var temp = -1
var tar = null

addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("array")) {
    array = JSON.parse(localStorage.getItem("array"))
    update()
  }
})

function add() {
  const bbtt = document.getElementById("add")
  if (bbtt.textContent != "Update") {
    const am = document.querySelector("#am").value
    const de = document.querySelector("#de").value
    const ca = document.querySelector("#ca").value

    if (localStorage.getItem("array")) {
      array = JSON.parse(localStorage.getItem("array"))
      let obj = {
        am: am,
        de: de,
        ca: ca,
      }
      array.push(obj)
      const jn = JSON.stringify(array)

      localStorage.setItem("array", jn)
    } else {
      let obj = {
        am: am,
        de: de,
        ca: ca,
      }
      array.push(obj)
      const jn = JSON.stringify(array)

      localStorage.setItem("array", jn)
    }
    update()
  } else {
    update2()
    update()
  }
}

function update() {
  const ul = document.getElementById("ui")
  array = JSON.parse(localStorage.getItem("array")) // here is the main code to run
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
  array.forEach((e) => {
    const li = document.createElement("li")
    const p = document.createElement("p")
    const div = document.createElement("div")
    li.setAttribute("class", "row list-group-item d-flex")
    p.setAttribute("class", "col-7")
    div.setAttribute("class", "col-5 d-flex justify-content-end")
    const btn1 = document.createElement("button")
    const btn2 = document.createElement("button")
    btn1.setAttribute("class", "btn btn-info")
    btn2.setAttribute("class", "btn btn-danger")
    btn1.setAttribute("onclick", "edit(event)")
    btn2.setAttribute("onclick", "dlt(event)")
    btn1.textContent = "Edit"
    btn1.classList.add("edit")
    btn2.textContent = "Delete"
    btn2.classList.add("dlt")
    p.textContent = `${e.am}+${e.ca}+${e.de}`
    li.appendChild(p)
    div.appendChild(btn1)
    div.appendChild(btn2)
    li.appendChild(div)
    ul.appendChild(li)
    console.log("update")
  })
}
function edit(e) {
  const a = e.target.parentNode.parentNode.children[0].textContent.split("+")

  const am = document.querySelector("#am")
  const de = document.querySelector("#de")
  const ca = document.querySelector("#ca")
  am.value = a[0]
  de.value = a[2]
  ca.value = a[1]
  const b = document.getElementById("add")
  b.textContent = "Update"
  temp = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(
    e.target.parentNode.parentNode
  )
}
function update2() {
  console.log("called")
  const am = document.querySelector("#am").value
  const de = document.querySelector("#de").value
  const ca = document.querySelector("#ca").value
  const up = document.getElementById("ui")
  console.log(up.children[temp].children[0].textContent)
  up.children[temp].children[0].textContent = `${am}+${ca}+${de}`
  console.log(up.children[temp].children[0].textContent)
  const b = document.getElementById("add")
  b.textContent = "Add Expense"
  array = JSON.parse(localStorage.getItem("array"))
  array[temp].am = am
  array[temp].de = de
  array[temp].ca = ca
  const jn = JSON.stringify(array)

  localStorage.setItem("array", jn)
  update()
}
function dlt(e) {
  temp = Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(
    e.target.parentNode.parentNode
  )
  array = JSON.parse(localStorage.getItem("array"))
  console.log(array)
  array.splice(temp, 1)
  console.log(array)
  const jn = JSON.stringify(array)

  localStorage.setItem("array", jn)
  update()
}
