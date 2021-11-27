/*function mydata(data) {
  //console.log(data);
  if (jQuery.isEmptyObject(data)) {
    var text = '<p>Try Again </p>'
    $('.mypanel').html(text)
  } else {
    //getFromServer1();
    window.location.href = 'wallet.html'
  }
}
*/


function postLogin() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var user_email=document.getElementById("user_email");
  var user_password=document.getElementById("user_password");
  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    user_email: user_email.value,
    user_password: user_password.value,
    /*type: 0,
    name: "dixant mittal",
    email: "dixant@email.com",
    tolerance: 0.5,
    wallet: 100000,
    */
  })

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch("http://localhost:3000/login", requestOptions)
    .then((response) => {
    for (var pair of response.headers.entries()) {
      console.log(pair[0]+ ': '+ pair[1]);}})
    .then((result) => $(".mypanel").html(result))
    .catch((error) => console.log("error", error));

  }
/*redirect based on auth-token availability*/