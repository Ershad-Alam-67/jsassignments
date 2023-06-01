document.addEventListener("DOMContentLoaded", function () {
  const add = document.getElementById("add")
  add.addEventListener("click", function () {
    const am = document.getElementById("am").value
    const de = document.getElementById("de").value
    const ca = document.getElementById("ca").value

    // Create an object to store the expense details
    const expense = {
      amount: am,
      description: de,
      category: ca,
    }

    // Retrieve existing expenses from localStorage or initialize an empty array
    const existingExpenses = JSON.parse(localStorage.getItem("expenses")) || []

    // Add the new expense to the array
    existingExpenses.push(expense)

    // Store the updated expenses array in localStorage
    localStorage.setItem("expenses", JSON.stringify(existingExpenses))

    // Clear the input fields after storing the data
    document.getElementById("am").value = ""
    document.getElementById("de").value = ""
    document.getElementById("ca").value = "none"

    // Create and append the list item for the new expense
    const li = document.createElement("li")
    li.setAttribute("class", "row list-group-item d-flex")

    const p = document.createElement("p")
    p.setAttribute("class", "col-4")
    p.textContent = am + "-" + ca + "-" + de

    const div = document.createElement("div")
    div.setAttribute("class", "offset-3 col-5 d-flex justify-content-end")

    const edit = document.createElement("input")
    edit.setAttribute("type", "button")
    edit.setAttribute("value", "Edit")
    edit.setAttribute("class", "btn btn-primary")

    const dlt = document.createElement("input")
    dlt.setAttribute("type", "button")
    dlt.setAttribute("value", "Delete")
    dlt.setAttribute("class", "btn btn-danger")

    div.appendChild(edit)
    div.appendChild(dlt)
    li.appendChild(p)
    li.appendChild(div)

    const ul = document.getElementById("ui")
    ul.appendChild(li)
  })
  const storedExpenses = localStorage.getItem("expenses")
  if (storedExpenses) {
    const expenses = JSON.parse(storedExpenses)
    expenses.forEach(function (expense) {
      const { amount, description, category } = expense

      const li = document.createElement("li")
      li.setAttribute("class", "row list-group-item d-flex")

      const p = document.createElement("p")
      p.setAttribute("class", "col-4")
      p.textContent = amount + "-" + category + "-" + description

      const div = document.createElement("div")
      div.setAttribute("class", "offset-3 col-5 d-flex justify-content-end")

      const edit = document.createElement("input")
      edit.setAttribute("type", "button")
      edit.setAttribute("value", "Edit")
      edit.setAttribute("class", "btn btn-primary")

      const dlt = document.createElement("input")
      dlt.setAttribute("type", "button")
      dlt.setAttribute("value", "Delete")
      dlt.setAttribute("class", "btn btn-danger")

      div.appendChild(edit)
      div.appendChild(dlt)
      li.appendChild(p)
      li.appendChild(div)

      const ul = document.getElementById("ui")
      ul.appendChild(li)
    })
  }
})
