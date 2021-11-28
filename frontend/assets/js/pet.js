function postFeeding(feedAmount){
    console.log("feed called");
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    //var accountId = account_id;
    var contribute3 = feedAmount
    console.log(contribute3)
    var newContribute3 = JSON.stringify({
        pet_id: 1,
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
        })
      .catch((error)     => console.log('error', error))
}

function postOtherAmount(){
    var otherAmount = document.getElementById("contributeOther");
    return otherAmount.value;
}

