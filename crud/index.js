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
      "https://crudcrud.com/api/e26a443d50be4413b15eb8fdf9a44b0f/ershad",
      obj
    )
    .then(() => console.log("posted"))
    .catch((err) => console.log(err))
  update()
}
function makeli() {
  const li = document.createElement("li")
  li.setAttribute("class", "list-group-item")
  return li
}
function update() {
  const ui = document.getElementById("ui")
  ui.innerHTML = ""
  let data = ""
  axios
    .get("https://crudcrud.com/api/e26a443d50be4413b15eb8fdf9a44b0f/ershad")
    .then((res) => {
      data = res.data
      console.log(data)
      data.forEach((item) => {
        const li = makeli()
        li.textContent = `${item.name}-${item.email}-${item.phone}`
        ui.appendChild(li)
      })
    })

    .catch((err) => console.log(err))
}
