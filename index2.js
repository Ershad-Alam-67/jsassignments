var lg = document.getElementsByClassName("list-group-item");
console.log(lg);
lg[2].style.backgroundColor = "green";
for (let i = 0; i < lg.length; i++) {
  lg[i].style.fontWeight = "bold";
}
