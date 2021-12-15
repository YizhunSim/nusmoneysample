const { CLIENT_PS_MULTI_RESULTS } = require("mysql/lib/protocol/constants/client");

var account_id = localStorage.account_id; 

var web3;
var eth;




function Geeks() {
    console.log("HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    appendQueryStr();
}

function getBalance(balance,token){
    console.log("account balance loaded");
    // fetch('http://localhost:3000/account/by-uid?user_id='+ account_id, { method: 'GET' })
    //   .then((response) => response.json())
    //   .then((data) => {
    //       console.log(data);
    //     var text1 = `${data[0].wallet_balance}`
    //     var text2 = `${data[0].account_name}`
    //     var text3 = `${data[0].wallet_id}`
    //     $('#balanceId').html(text1+" CPM");
    //     $('#accountId').html(text2);
    //     $('#walletId').html(text3);
    //   })
    //   .catch((error) => console.log('error', error))
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


async function Connect(){
  const tokenAddresses = [{
    address: '0x6C251eF2ab763de84fa5C704FC19e56938eFf758',
    token: 'CCB'
  }, {
    address: '0x3A36541dBCAc5742a2eBcB8272F8D6a600ABFb6e',
    token: 'CPM'
  }]
  const tokenABI =[
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
  console.log(tokenAddresses);
  await window.web3.currentProvider.enable();
	web3=new Web3(window.web3.currentProvider);
  var accs = await web3.eth.getAccounts();

  const newAccounts = await Promise.all(accs.map(async (address) => {
      const balance = await web3.eth.getBalance(address)
      var eth = web3.utils.fromWei(balance, 'ether') 
      $('#currencyName1').html("ETH");
      $('#currencyBalance1').html(`${eth}`);
      $('#walletId').html(`${address}`);
      console.log(`ETH balance: ${balance}`);
      console.log(`Wallet address: ${address}`);
      console.log(`Ether: ${eth}`);
      var counter=1;
      const tokenBalances = await Promise.all(tokenAddresses.map(async (token) => {
        
        const tokenInst = new web3.eth.Contract(tokenABI, token.address);
    
        const otherbalance = await tokenInst.methods.balanceOf(address).call()
        var convertedBalance = web3.utils.fromWei(otherbalance, 'ether'); 
        $('#currencyName'+(counter+1)).html(`${token.token}`);
        $('#currencyBalance'+(counter+1)).html(`${convertedBalance}`);
        counter++;
        console.log(counter);
        console.log(`New balance: ${otherbalance} and ${token.token}`);
        return {
          token: token.token,
          balance
          
        }
        
      }))
}))
  
}