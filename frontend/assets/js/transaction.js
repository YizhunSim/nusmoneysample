var account_id = localStorage.account_id

function getTransactions() {
  fetch('http://localhost:3000/transaction/all', { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
      var text = `
              <table>
                <tr>
                  <th>Transaction ID</th>
                  <th>Transaction_date</th>
                  <th>Cryptocurrency_amount</th>
                  <th>Cryptocurrency_id</th>
                  <th>USD_Amount</th>
                </tr>`

      data.forEach((item) => {
        text += `
                    <tr>
                      <td>${item.transaction_id}</td>
                      <td>${item.transaction_date}</td>
                      <td>${item.cryptocurrency_amount}</td>
                      <td>${item.cryptocurrency_id}</td>
                      <td>${item.usd_amount}</td>
                    </tr>`
      })
      text += '</table>'
      $('.myPanel').html(text)
    })
    .catch((error) => console.log('error', error))
}

function getTransactionByTID() {
  var id = document.getElementById('paramId').value
  fetch(
    `http://localhost:3000/wallet_transaction/by-tid?transaction_id=${id}`,
    {
      method: 'GET',
    }
  )
    .then((response) => response.json())
    .then((data) => {
      var text = `
             <div class="card card-nav-tabs" style="width: 20rem;">
            <div class="card-header card-header-danger"></div>`

      data.forEach((item) => {
        text += ` <ul class="list-group list-group-flush">
                  <li class="list-group-item">Transaction_id: ${item.transaction_id}</li>
                  <li class="list-group-item">Transaction_date: ${item.transaction_date}</li>
                  <li class="list-group-item">Crypto_coins_used: ${item.cryptocurrency_amount}</li>
                  <li class="list-group-item">Crypto_coin_id: ${item.cryptocurrency_id}</li>
                  <li class="list-group-item">USD_valuation: ${item.usd_amount}</li>
                  </ul>
                    `
      })
      text += '</table>'
      $('.mypanel').html(text)
    })
    .catch((error) => console.log('error', error))
}

/*use mainly this for transaction history*/
function getTransactionByAID() {
  var id = account_id
  fetch(`http://localhost:3000/wallet_transaction/by-aid?account_id=${id}`, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      var text = ""
      var count = 1
      data.forEach((item) => {
        text += `
                    <tr>
                        <th scope="row">${count}</th>
                        <td>${item.transaction_date}</td>
                        <td>${item.cryptocurrency_amount}</td>
                        <td>${item.cryptocurrency_id}</td>
                        <td>${item.usd_amount}</td>
                    </tr>`
                    count++
      })
          
      /*
      data.forEach((item) => {
        text += ` <ul class="list-group list-group-flush">
                  <li class="list-group-item">Transaction_id: ${item.transaction_id}</li>
                  <li class="list-group-item">Transaction_date: ${item.transaction_date}</li>
                  <li class="list-group-item">Crypto_coins_used: ${item.cryptocurrency_amount}</li>
                  <li class="list-group-item">Crypto_coin_id: ${item.cryptocurrency_id}</li>
                  <li class="list-group-item">USD_valuation: ${item.usd_amount}</li>
                  </ul>
                    `
      })
      */
      $('#transaction_hist').html(text)
    })
    .catch((error) => console.log('error', error))
}

function postData() {
  var myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')
  var account_id = document.getElementById('account_id')
  var cryptocurrency_amount = document.getElementById('crypto_amount')
  var cryptocurrency_coin = document.getElementById('crypto_coin')
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
  console.log(raw)
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
  }

  fetch('http://localhost:3000/wallet_transaction/add', requestOptions)
    .then((response) => response.text())
    .then((result) => $('.mypanel').html(result))
    .catch((error) => console.log('error', error))
}
