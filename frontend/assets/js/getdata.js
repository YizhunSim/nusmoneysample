function getFromServer() {
  var requestOptions = {
    method: "GET",
    // redirect: "follow",
  };

  fetch("http://localhost:3000/user/all", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        id: ${item.customer_id} <br>
        name: ${item.customer_name} <br>
        wallet: ${item.customer_wallet}
        </li>`;
      });
      text += "</ul>";
      $(".mypanel").html(text);
    })
    .catch((error) => console.log("error", error));
}

function postData() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var account_id=document.getElementbyID("account_id");
  var cryptocurrency_amount=document.getElementbyID("crypto_amount");
  var cryptocurrency_coin=document.getElementbyID("crypto_coin");
  // Populate this data from e.g. form.
  var raw = JSON.stringify({
    account_id: account_id.value,
    cryptocurrency_amount: cryptocurrency_amount.value,
    cryptocurrency_id: cryptocurrency_coin.value,
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

  fetch("http://localhost:3000/wallet_transaction/add", requestOptions)
    .then((response) => response.text())
    .then((result) => $(".mypanel").html(result))
    .catch((error) => console.log("error", error));
}

function deleteData() {
  var requestOptions = {
    method: "DELETE",
  };
  fetch("http://localhost:3000/user/delete?id=74", requestOptions)
    .then((response) => response.text())
    .then((result) => $(".mypanel").html(result))
    .catch((error) => console.log("error", error));
}
