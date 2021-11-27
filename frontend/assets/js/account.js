function getAccounts() {
  fetch(`http://localhost:3000/account/all`, { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
      var text = `
              <table>
                <tr>
                  <th>Account ID</th>
                  <th>User ID</th>
                  <th>Account Name</th>
                  <th>Account Type</th>
                  <th>Balance</th>
                </tr>`

      data.forEach((item) => {
        text += `
                    <tr>
                      <td>${item.account_id}</td>
                      <td>${item.user_id}</td>
                      <td>${item.account_name}</td>
                      <td>${item.account_type}</td>
                      <td>${item.balance}</td>
                    </tr>`
      })

      text += '</table>'
      $('.mypanel').html(text)
    })
    .catch((error) => console.log('error', error))
}

function getAccountByAID() {
  var id = document.getElementById('paramId').value
  fetch(`http://localhost:3000/account/by-aid?id=${id}`, { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        // Construct card content
        var content = `
     <div class="col-md-4 mt-4 mt-sm-0 card-container">
      <div class="card text-center product p-4 pt-5 border-0 h-100 rounded-0">
        <h1>${item.account_id}</h1>
        <div class="card-body p-4 py-0 h-xs-440p">
          <h5 class="card-title font-weight-semi-bold mb-3 w-xl-220p mx-auto">${item.user_id}</h5>
          <p class="price">Name: ${item.account_name}</p>
        </div>
        <p class="btn w-100 px-4 text-center mx-auto">
          <input type="submit" class="btn btn-dark btn-lg w-100" name="add-button" value="View pets"></p>
      </div>
    </div>
    ` // Append newyly created card element to the container
        $('.account').html(content)
      })
    })
}
