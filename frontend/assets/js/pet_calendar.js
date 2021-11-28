var account_id = localStorage.account_id;
var pet_id = account_id;
var goalAmount = 1337;//goal can be set based on the type of pet they wanna raise. Future feature

function getPetById() {
    fetch(`http://localhost:3000/pet_contribution/by-pid?pet_id=`+ pet_id, {method: "GET"})
        .then((response) => response.json())
        .then((data) => {
            var text = "";
            var count = 1;
            data.forEach((item) => {
                text += `
                    <tr>
                        <th scope="row">${count}</th>
                        <td>${item.contribution_date}</td>1
                        <td>${item.contribution_amount}</td>
                    </tr>`;
                    count++;
            });
            $("#feedRecord").html(text);
        })
        .catch((error) => console.log("error", error));
}

function getPetValue(){
    console.log("account balance loaded");
    fetch('http://localhost:3000/pet/by-pid?pet_id='+ pet_id, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
        var text1 = `${data[0].total_cpm_paid}`
        $('#petValue').html(text1+" CPM");
        $("#goalAmount").html(goalAmount+" CPM");
        var petProgress = (data[0].total_cpm_paid / goalAmount)*100;
        petProgress = petProgress.toFixed(2);;
        console.log(petProgress)
        document.getElementById("petProgress").style.width = petProgress+ "%";
        $("#percentBar").html("Currently at " + petProgress+"%");
      })
      .catch((error) => console.log('error', error))
}