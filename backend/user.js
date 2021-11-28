const database = require("./database");
const express = require("express");
const crypto = require("crypto");

router = express.Router();

router.get("/user/all", (request, response) => {
    database.connection.query(`select *
                               from user`, (errors, results) => {
        if (errors) {
            console.log(errors);
            response.status(500).send("Internal Serve Error");
        } else {
            response.status(200).send(results);
        }
    });
});

router.get("/user/by-uid", (request, response) => {
    if (request.query.user_id.length === 0 || isNaN(request.query.user_id)) {
        console.log(`Invalid ID received. ID: ${request.query.id}`);
        response.status(400).send("Invalid ID received.");
        return;
    }
    database.connection.query(
        `select *
         from user
         where user_id = ${request.query.user_id}`,
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

router.post("/user/add", (request, response) =>{
    let user = request.body;
    console.log(`Request object to be sent out: ${JSON.stringify(user)}`);

    async function insertUserRecord(){
        var query1 = `insert into user (user_id, user_name, user_email, user_password, user_profile, user_update) values (null, "${user.user_name}", "${user.user_email}", "${user.password}", "${user.profile}", now());`;
        database.connection.query(query1, async (error, result) =>{
            if(error){
                console.log(error)
                response.status(500).send("Some error occured when adding a user");
            }else{
                data = await result;
                console.log(`getUserIdAccount: ${JSON.stringify(data)}`);
                await addUserAccountRecord(data, user);
            }
        })
    }

    //insert into account (account_id, user_id, account_name, wallet_id, wallet_balance) values ('1', '1', 'Bobbe MacGahey', '0xa71fec3a8f3c73b172ada541578620db20fc1a51', '802.96');

    async function addUserAccountRecord(data, user){
        console.log(`I am here ${data.insertId}`);
        console.log(`Request received: ${JSON.stringify(user)}`);
        var walletId = crypto.randomBytes(20).toString('hex');
        var query2 = `insert into account (account_id, user_id, account_name, wallet_id, wallet_balance)
        values (null, "${data.insertId}", "${user.user_name}", "${walletId}", 0)`;

        database.connection.query(query2, async (error, result) => {
            console.log(query2);
            if(error){
                console.log(`Unable to add account for user: ${user.user_id}. Error: ${error}`);
                response.status(500).send(`Unable to add user account: ${user.user_id}`);
            }else{
                data3 = await result;
                console.log(`addUserAccount: ${JSON.stringify(data3)}`);
                // console.log(`Added user and user account: ${request.query.account_id} associated with User: ${user.user_id}.`);
                //response.status(200).send("User added successfully");
                await addUserAccountPet(data3);
            }
        })
    }

    async function addUserAccountPet(data){
        console.log(`I am here ${data.insertId}`);
        console.log(`Request received: ${JSON.stringify(data)}`);
        var query3 = `insert into pet (pet_id, pet_name, picture, account_id, pet_birthday, cryptocurrency_id, total_cpm_paid)
        values (null, "Crypmon", "http://crypmon.com/jpg", ${data.insertId}, now(), 1, 0)`;

        database.connection.query(query3, async (error, result) => {
            console.log(query3);
            if(error){
                console.log(`Unable to add pet for account user: ${user.user_id}. Error: ${error}`);
                response.status(500).send(`Unable to add user account: ${user.user_id}`);
            }else{
                data4 = await result;
                console.log(`addUserAccount: ${JSON.stringify(data4)}`);
                // console.log(`Added user and user account: ${request.query.account_id} associated with User: ${user.user_id}.`);
                response.status(200).send("User added successfully");
            }
        })
    }



    insertUserRecord();
})

// Define a mapping for a DELETE request on API path /account/by-uid
// to an arrow function which requires a parameter named id from the request
// and calls a mysql query and populates the response with the data.
router.delete("/user/delete", (request, response) => {
    if (request.query.user_id.length === 0 || isNaN(request.query.user_id)) {
        console.log(`Invalid ID received. ID: ${request.query.user_id}`);
        response.status(400).send("Invalid ID received.");
        return;
    }
    database.connection.query(
        `delete from user where user_id = ${request.query.user_id}`,
        (errors, results) => {
            if (errors) {
                console.log(errors);
                response.status(500).send("Internal Serve Error");
            } else {
                console.log(`User: ${request.query.user_id} successfully deleted`);
                response.status(200).send("User deleted successfully");
            }
        }
    );
});

module.exports = {
    router,
};
