const database = require("./database");
const express = require("express");
const { json } = require("body-parser");

router = express.Router();

router.get("/wallet_transaction/all", (request, response) => {
    database.connection.query(`select *
        from wallet_transaction`, (errors, results) => {
        if (errors) {
            console.log(errors);
            response.status(500).send("Internal Serve Error");
        } else {
            response.status(200).send(results);
        }
    });
});

router.get("/wallet_transaction/by-tid", (request, response) => {
    if (request.query.transaction_id.length === 0 || isNaN(request.query.transaction_id)) {
        console.log(`Invalid ID received. ID: ${request.query.transaction_id}`);
        response.status(400).send("Invalid ID received.");
        return;
    }
    database.connection.query(
        `select *
         from wallet_transaction
         where transaction_id = ${request.query.transaction_id}`,
        (errors, results) => {
            if (errors) {
                console.log(errors);
                response.status(500).send("Internal Serve Error");
            } else {
                response.status(200).send(results);
            }
        }
    );
});

router.get("/wallet_transaction/by-aid", (request, response) => {
    if (request.query.account_id.length === 0 || isNaN(request.query.account_id)) {
        console.log(`Invalid ID received. ID: ${request.query.account_id}`);
        response.status(400).send("Invalid ID received.");
        return;
    }
    database.connection.query(
        `select *
         from wallet_transaction
         where account_id = ${request.query.account_id}`,
        (errors, results) => {
            if (errors) {
                console.log(errors);
                response.status(500).send("Internal Serve Error");
            } else {
                response.status(200).send(results);
            }
        }
    );
});



//Withdraw and Deposit

//1. Insert in wallet_trnansaction
//2. Update account - wallet_balance after step 1 has been completed
router.post("/wallet_transaction/add", (request, response) =>{
        let transaction = request.body;
        console.log(`wallet_transaction/add: ${JSON.stringify(transaction)}`);

        function insertWalletTransaction(){
            var query1 = `insert into wallet_transaction (transaction_id ,transaction_date, account_id, cryptocurrency_amount, cryptocurrency_id, usd_amount)
            values (null ,now(), "${transaction.account_id}", "${transaction.cryptocurrency_amount}", "${transaction.cryptocurrency_id}", "${transaction.cryptocurrency_amount}");`
            console.log(`insertWallet query: ${query1}`);
            database.connection.query( query1, async (error, records) =>{
                console.log(`A`);
                if (error){
                    console.log(error)
                response.status(500).send("insertWalletTransaction: Some error occured when adding a wallet transaction");
                }else{
                    const result = await records;
                    console.log(`InsertWallet Result: ${JSON.stringify(result)}`);
                    await updateAccountWalletBalance();
                }
            })
            console.log(`B`)
        }

        async function updateAccountWalletBalance(){
            var query2 = `update account set wallet_balance = (
                select sum(wallet_transaction.cryptocurrency_amount) from wallet_transaction
                where wallet_transaction.account_id = "${transaction.account_id}")
                where account.account_id = "${transaction.account_id}";`
            console.log(`updateAccountWallet query: ${query2}`);
            database.connection.query(query2, async (error, records) =>{
                console.log(`C`);
                if(error){
                    console.log(error)
                    response.status(500).send("updateAccountWalletBalance: Some error occured when updating account's wallet balance");
                }else{
                    const result = await records;
                    console.log(`updateAccountWalletBalance result: ${JSON.stringify(result)}`);
                    response.status(200).send("Wallet Transaction added succesfully");
                }
            })
            console.log(`D`);
        }
        console.log(`E`);
        insertWalletTransaction();

});


// // Define a mapping for a DELETE request on API path /wallet_transaction/delete
// // to an arrow function which requires a parameter named id from the request
// // and calls a mysql query and populates the response with the data.
// router.delete("/wallet_transaction/delete", (request, response) => {
//     if (request.query.transaction_id.length === 0 || isNaN(request.query.transaction_id)) {
//         console.log(`Invalid ID received. ID: ${request.query.transaction_id}`);
//         response.status(400).send("Invalid ID received.");
//         return;
//     }

//     var query = `delete from wallet_transaction where transaction_id = ${request.query.transaction_id}`;
//         database.connection.query(query, (error, result) => {
//             if (error){
//                 console.log(`Unable to delete wallet transaction: ${request.query.transaction_id}. Error: ${error}`);
//                 response.status(500).send(`Unable to delete transaction record: ${request.query.transaction_id}`);
//             }else{
//                 response.status(200).send("Transaction deleted successfully");
//             }
//         })

// })

module.exports = {
    router,
};
