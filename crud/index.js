document.addEventListener("DOMContentLoaded", update)

function add(e) {
  const nm = document.getElementById("name").value
  const em = document.getElementById("mail").value
  const ph = document.getElementById("phn").value
  let obj = {
    name: nm,
    email: em,
    phone: ph,
  }

  axios
    .post(
      "https://crudcrud.com/api/7ac295fbe0b44140a742a02bfef18830/ershad",
      obj
    )
    .then(() => {
      console.log("posted")
      update()
    })
    .catch((err) => console.log(err))
}

function createDeleteButton(liId) {
  const dlt = document.createElement("button")
  dlt.setAttribute("class", "btn btn-danger")
  dlt.textContent = "Delete"
  dlt.addEventListener("click", () => deleteItem(liId))
  return dlt
}

function update() {
  const ui = document.getElementById("ui")
  ui.innerHTML = ""

  axios
    .get("https://crudcrud.com/api/7ac295fbe0b44140a742a02bfef18830/ershad")
    .then((res) => {
      const data = res.data
      console.log(data)

      data.forEach((item, index) => {
        const li = document.createElement("li")
        li.setAttribute("class", "list-group-item")
        li.setAttribute("id", `li-${index}`)

        const deleteButton = createDeleteButton(`li-${index}`)

        li.textContent = `${item.name} - ${item.email} - ${item.phone}`
        li.appendChild(deleteButton)

        ui.appendChild(li)
      })
    })
    .catch((err) => console.log(err))
}

function deleteItem(liId) {
  const li = document.getElementById(liId)
  axios
    .get("https://crudcrud.com/api/7ac295fbe0b44140a742a02bfef18830/ershad")
    .then((res) => {
      const data = res.data
      const index = liId.split("-")[1]
      const id = data[index]._id
      return new Promise((res, rej) => {
        res(id)
      })
    })

    .then((id) => {
      axios
        .delete(
          `https://crudcrud.com/api/7ac295fbe0b44140a742a02bfef18830/ershad/${id}`
        )

        .then(() => {
          li.remove()
          update()
        })
    })
    .catch((err) => console.log(err))
}
