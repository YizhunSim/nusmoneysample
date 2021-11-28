
$('.image-radio img').click(function () {
  $(this).prev().attr('checked', true)
})


function postRegister() {
  console.log('Registering')
  var myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  var user_name = document.getElementById('user_name')
  var user_email = document.getElementById('user_email')
  var password = document.getElementById('user_password')
  /*var profile = document.querySelector('input[name = "profile"]:checked').value
  */
 var profile = $("input[name='profile']:checked").val();
  //document.writeln('You entered ' + profile + ' for your avatar<br>')
 
  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    user_name: user_name.value,
    user_email: user_email.value,
    password: password.value,
    profile: profile,
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
    .then((data) => {
    console.log(data)
    window.location.replace('login.html');})
    .catch((error) => console.log('error', error))
}
