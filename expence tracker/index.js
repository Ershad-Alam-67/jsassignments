document.addEventListener("DOMContentLoaded", function () {
  const add = document.getElementById("add")
  add.addEventListener("click", addExpense)

  const storedExpenses = localStorage.getItem("expenses")
  if (storedExpenses) {
    const expenses = JSON.parse(storedExpenses)
    expenses.forEach(function (expense) {
      const { amount, description, category } = expense
      createExpenseItem(amount, description, category)
    })
  }
})

function createExpenseItem(amount, description, category) {
  const li = document.createElement("li")
  li.setAttribute("class", "row list-group-item d-flex")

  const p = document.createElement("p")
  p.setAttribute("class", "col-7")
  p.textContent = `${amount} - ${category} - ${description}`

  const div = document.createElement("div")
  div.setAttribute("class", "col-5 d-flex justify-content-end")

  const edit = document.createElement("input")
  edit.setAttribute("type", "button")
  edit.setAttribute("value", "Edit")
  edit.setAttribute("class", "btn btn-primary")
  edit.addEventListener("click", editExpense)

  const dlt = document.createElement("input")
  dlt.setAttribute("type", "button")
  dlt.setAttribute("value", "Delete")
  dlt.setAttribute("class", "btn btn-danger")
  dlt.addEventListener("click", deleteExpense)

  div.appendChild(edit)
  div.appendChild(dlt)
  li.appendChild(p)
  li.appendChild(div)

  const ul = document.getElementById("ui")
  ul.appendChild(li)
}

function addExpense() {
  const am = document.getElementById("am").value
  const de = document.getElementById("de").value
  const ca = document.getElementById("ca").value

  const expense = {
    amount: am,
    description: de,
    category: ca,
  }

  const existingExpenses = JSON.parse(localStorage.getItem("expenses")) || []
  existingExpenses.push(expense)
  localStorage.setItem("expenses", JSON.stringify(existingExpenses))

  document.getElementById("am").value = ""
  document.getElementById("de").value = ""
  document.getElementById("ca").value = "none"

  createExpenseItem(am, de, ca)
}

function editExpense(e) {
  const listItem = e.target.parentNode.parentNode
  const p = listItem.querySelector("p")
  const editValue = p.textContent.split("-").map((value) => value.trim())

  const am = document.getElementById("am")
  const de = document.getElementById("de")
  const ca = document.getElementById("ca")

  am.value = editValue[0]
  ca.value = editValue[1]
  de.value = editValue[2]

  const add = document.getElementById("add")
  add.textContent = "Update"
  add.removeEventListener("click", addExpense)
  add.addEventListener("click", updateExpense.bind(null, listItem))
}

function updateExpense(listItem) {
  const am = document.getElementById("am").value
  const de = document.getElementById("de").value
  const ca = document.getElementById("ca").value

  const p = listItem.querySelector("p")
  p.textContent = `${am} - ${ca} - ${de}`

  const ul = document.getElementById("ui")
  const index = Array.from(ul.children).indexOf(listItem)
  const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || []
  storedExpenses[index].amount = am
  storedExpenses[index].description = de
  storedExpenses[index].category = ca
  localStorage.setItem("expenses", JSON.stringify(storedExpenses))

  document.getElementById("am").value = ""
  document.getElementById("de").value = ""
  document.getElementById("ca").value = "none"

  const add = document.getElementById("add")
  add.textContent = "Add Expense"
  add.removeEventListener("click", updateExpense)
  add.addEventListener("click", addExpense)
}

function deleteExpense(e) {
  const listItem = e.target.parentNode.parentNode
  const ul = listItem.parentNode
  ul.removeChild(listItem)

  const index = Array.from(ul.children).indexOf(listItem)
  const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || []
  storedExpenses.splice(index, 1)
  localStorage.setItem("expenses", JSON.stringify(storedExpenses))
}
