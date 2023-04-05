const submitButton = document.getElementById("submit")

submitButton.addEventListener("click", function (e) {
  e.preventDefault()
  alert("form submit event")
})
