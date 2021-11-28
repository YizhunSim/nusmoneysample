var account_id = 1;

function getUsers() {
    fetch("http://localhost:3000/user/all", {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            var text = `
              <table>
                <tr>
                  <th>ID</th>
                  <th>Full Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                </tr>`;

            data.forEach((item) => {
                text += `
                    <tr>
                      <td>${item.id}</td>
                      <td>${item.first_name} ${item.last_name}</td>
                      <td>${item.mobile}</td>
                      <td>${item.email}</td>
                    </tr>`;
            });
            text += "</table>";
            $(".mypanel").html(text);
        })
        .catch((error) => console.log("error", error));
}

function getUserByUID() {
    var id = document.getElementById("paramId").value;
    fetch(`http://localhost:3000/user/by-uid?id=${id}`, {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            var text = `
              <table>
                <tr>
                  <th>ID</th>
                  <th>Full Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                </tr>`;

            data.forEach((item) => {
                text += `
                    <tr>
                      <td>${item.id}</td>
                      <td>${item.first_name} ${item.last_name}</td>
                      <td>${item.mobile}</td>
                      <td>${item.email}</td>
                    </tr>`;
            });
            text += "</table>";
            $(".mypanel").html(text);
        })
        .catch((error) => console.log("error", error));
}

function petValue(){
  console.log("account balance loaded");
  fetch('http://localhost:3000//pet/by-aid?account_id'+ account_id, { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      var text1 = `${data[].wallet_balance}`
      var text2 = `${data[0].account_name}`
      var text3 = `${data[0].wallet_id}`
      $('#balanceId').html(text1+" CPM");
      $('#accountId').html(text2);
      $('#walletId').html(text3);
    })
    .catch((error) => console.log('error', error))
}