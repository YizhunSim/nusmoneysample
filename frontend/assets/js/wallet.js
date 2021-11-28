var account_id = 3;
var account_id = windows.localStorage.account_id; 

function Geeks() {
    console.log("HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    appendQueryStr();
}

function getBalance(){
    console.log("account balance loaded");
    fetch('http://localhost:3000/account/by-uid?user_id='+ account_id, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
        var text1 = `${data[0].wallet_balance}`
        var text2 = `${data[0].account_name}`
        var text3 = `${data[0].wallet_id}`
        $('#balanceId').html(text1+" CPM");
        $('#accountId').html(text2);
        $('#walletId').html(text3);
      })
      .catch((error) => console.log('error', error))
}

function postDepositTransaction(){
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
          $('#depositModal').modal('hide');
          getBalance();
        })
      .catch((error) => console.log('error', error))
      depositAmount.value="";  
}

function postWithdrawTransaction(){
    console.log("withdraw called");
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    var accountId = account_id;
    var withdrawAmount = document.getElementById("withdrawAmount");
    withdrawAmount = -1 * withdrawAmount.value;
    var newWithdrawTransaction = JSON.stringify({
        account_id: accountId,
        cryptocurrency_amount: withdrawAmount,
        cryptocurrency_id: 1
      })
      console.log(newWithdrawTransaction);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: newWithdrawTransaction,
      }
      fetch('http://localhost:3000/wallet_transaction/add', requestOptions)
      .then((response) => response.text())
      .then((result) => {
          alert(result);
          $('#withdrawModal').modal('hide');
          getBalance();
        })
      .catch((error) => console.log('error', error))
      withdrawAmount.value="";  
}