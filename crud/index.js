document.addEventListener("DOMContentLoaded", update)
let tobeupdate = ""
let tobeupdateli = ""

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
      "https://crudcrud.com/api/16ea418c79e347babd5c08015d86d362/ershad",
      obj
    )
    .then(() => {
      console.log("posted")
      document.getElementById("name").value = ""
      document.getElementById("mail").value = ""
      document.getElementById("phn").value = ""
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
function createEditButton(liId) {
  const dlt = document.createElement("button")
  dlt.setAttribute("class", "btn btn-primary m-1")
  dlt.textContent = "Edit"
  dlt.addEventListener("click", () => editItem(liId))
  return dlt
}

function update() {
  const ui = document.getElementById("ui")
  ui.innerHTML = ""

  axios
    .get("https://crudcrud.com/api/16ea418c79e347babd5c08015d86d362/ershad")
    .then((res) => {
      const data = res.data
      console.log(data)

      data.forEach((item, index) => {
        const li = document.createElement("li")
        li.setAttribute("class", "list-group-item")
        li.setAttribute("id", `li-${index}`)

        const deleteButton = createDeleteButton(`li-${index}`)
        const editButton = createEditButton(`li-${index}`)

        li.textContent = `${item.name} - ${item.email} - ${item.phone}`
        li.appendChild(editButton)
        li.appendChild(deleteButton)

        ui.appendChild(li)
      })
    })
    .catch((err) => console.log(err))
}

function deleteItem(liId) {
  const li = document.getElementById(liId)
  axios
    .get("https://crudcrud.com/api/16ea418c79e347babd5c08015d86d362/ershad")
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
          `https://crudcrud.com/api/16ea418c79e347babd5c08015d86d362/ershad/${id}`
        )

        .then(() => {
          li.remove()

          update()
        })
    })
    .catch((err) => console.log(err))
}
function editItem(liId) {
  axios
    .get("https://crudcrud.com/api/16ea418c79e347babd5c08015d86d362/ershad")
    .then((res) => {
      const data = res.data
      console.log(data)
      const index = liId.split("-")[1]
      const id = data[index]._id
      tobeupdate = id
      tobeupdateli = document.getElementById(liId)
      console.log(index)

      return new Promise((res, rej) => {
        res({ id, index, data })
      })
    })

    .then(({ id, index, data }) => {
      const sub = document.getElementById("sub")
      sub.setAttribute("onclick", "updt()")

      sub.textContent = "Update"

      document.getElementById("name").value = data[index].name
      document.getElementById("mail").value = data[index].email
      document.getElementById("phn").value = data[index].phone
    })
    .catch((err) => console.log(err))
}

function updt() {
  const nm = document.getElementById("name").value
  const em = document.getElementById("mail").value
  const ph = document.getElementById("phn").value
  let obj = {
    name: nm,
    email: em,
    phone: ph,
  }
  axios
    .put(
      `https://crudcrud.com/api/16ea418c79e347babd5c08015d86d362/ershads/${tobeupdate}`,
      obj
    )

    .then(() => {
      tobeupdateli.remove()
      const sub = document.getElementById("sub")
      sub.textContent = "Submit"
      sub.setAttribute("onclick", "add()")
      document.getElementById("name").value = ""
      document.getElementById("mail").value = ""
      document.getElementById("phn").value = ""
      update()
    })
    .catch((err) => {
      console.log(err)
    })
}
