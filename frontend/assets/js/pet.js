function postFeeding(){
    console.log("deposit called");
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var accountId = account_id;
    var depositAmount = document.getElementById("depositAmount");
    var newDepositTransaction = JSON.stringify({
        account_id: accountId,
        cryptocurrency_amount: depositAmount.value,
        cryptocurrency_id: 1
        /*type: 0,
        name: "dixant mittal",
        email: "dixant@email.com",
        tolerance: 0.5,
        wallet: 100000,
        */
      })
      console.log(newDepositTransaction);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: newDepositTransaction,
      }
      fetch('http://localhost:3000/wallet_transaction/add', requestOptions)
      .then((response) => response.text())
      .then((result) => {
          alert(result);
        })
      .catch((error) => console.log('error', error))
      depositAmount.value="";  
}