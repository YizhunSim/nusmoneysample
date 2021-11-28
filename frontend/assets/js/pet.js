var account_id = localStorage.account_id;
var pet_id = account_id;

function postFeeding(feedAmount){
    console.log("feed called");
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    //var accountId = account_id;
    var contribute3 = feedAmount
    console.log(contribute3)
    var newContribute3 = JSON.stringify({
        pet_id: pet_id,
        contribution_amount: contribute3,
      })
      console.log(newContribute3);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: newContribute3,
      }
      fetch('http://localhost:3000/pet_contribution/add', requestOptions)
      .then((response) => response.text())
      .then((result) => {
          alert(result);
          getPetValue();
        })
      .catch((error)     => console.log('error', error))
}

function postOtherAmount(){
    var otherAmount = document.getElementById("contributeOther");
    return otherAmount.value;
}

function getPetValue(){
    console.log("account balance loaded");
    fetch('http://localhost:3000/pet/by-pid?pet_id='+ pet_id, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
        var text1 = `${data[0].total_cpm_paid}`
        $('#petValue').html(text1+" CPM");
      })
      .catch((error) => console.log('error', error))
}