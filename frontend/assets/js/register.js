$('.image-radio img').click(function () {
  $(this).prev().attr('checked', true)
})

function postRegister() {
  var myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  var user_name = document.getElementById('user_name')
  var user_email = document.getElementById('user_email')
  var user_password = document.getElementById('user_password')
  var user_profile = document.getElementsByName('profile')
  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    user_name: user_name.value,
    user_email: user_email.value,
    user_password: user_password.value,
    user_profile:user_profile.value,
    /*type: 0,
    name: "dixant mittal",
    email: "dixant@email.com",
    tolerance: 0.5,
    wallet: 100000,
    */
  })
  console.log(raw)
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  }

  fetch('http://localhost:3000/user/add', requestOptions)
    .then((response) => response.text())
    .then((result) => $('.mypanel').html(result))
    .catch((error) => console.log('error', error))
}
