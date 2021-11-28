var account_id = localStorage.account_id;
var pet_id = account_id;

function postFeeding(feedAmount) {
  console.log("feed called");
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  //var accountId = account_id;
  var contribute3 = feedAmount;
  console.log(contribute3);
  var newContribute3 = JSON.stringify({
    pet_id: pet_id,
    contribution_amount: contribute3,
  });
  console.log(newContribute3);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: newContribute3,
  };
  fetch("http://localhost:3000/pet_contribution/add", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      alert(result);
      getPetValue();
      //   var walletBalance = getWalletBalance();
      //   console.log(walletBalance);
      putUpdateWalletBalance(feedAmount);
    })
    .catch((error) => console.log("error", error));
}

function postOtherAmount() {
  var otherAmount = document.getElementById("contributeOther");
  return otherAmount.value;
}

function getPetValue() {
  console.log("account balance loaded");
  fetch("http://localhost:3000/pet/by-pid?pet_id=" + pet_id, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      var text1 = `${data[0].total_cpm_paid}`;
      $("#petValue").html(text1 + " CPM");
    })
    .catch((error) => console.log("error", error));
}

function getWalletBalance() {}

function putUpdateWalletBalance(feedAmount) {
  var walletBalance;
  fetch("http://localhost:3000/account/by-uid?user_id=" + account_id, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      walletBalance = `${data[0].wallet_balance}`;
      console.log(walletBalance);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Cookie",
        "connect.sid=s%3AK8ZdQW9EJNMRgVVBnf-I5L18NJPWRCvb.3tDo0%2BkIubHtLK8feyzOu9ksSuRguuUgfPk37cUJIr8"
      );
      var raw = JSON.stringify({
        account_id: account_id,
        wallet_balance: walletBalance - feedAmount,
      });

      var requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:3000/account/update-balance", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    })
    .catch((error) => console.log("error", error));
}
