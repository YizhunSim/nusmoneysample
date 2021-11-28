// Import database file to use the established mysql connection.
const database = require("./database");

// Import express to define URI mappings
const express = require("express");

// Define a router object which will hold the URI mappings.
router = express.Router();

// LOGIIN
router.post('/login', async (req, res) => {
    var username = req.body.user_email;
	var password = req.body.user_password;

    let user, userJoinAccount;
    //Validate the data before we accept login request
    console.log(req.body);
    console.log(`username: ${username}`);
    console.log(`password: ${password}`);

    getUserIdAccount();

    function getUserIdAccount(){
        var query1 = `select * from user
        where user_email = "${username}"`;

        database.connection.query(query1, async (error, result) => {
            console.log(query1);
            if (error){
                console.log(`getUserIdAccount: Unable to find account that is tagged to user account. Error: ${error}`);
                response.status(500).send(`Unable to login with account: ${request.query.account_id}`);
            }else{
                user = await result;
                console.log(`getUserAccount: ${JSON.stringify(user)}`);

                if (!user) {
                    return res.status(400).send("Email does not exist!"); //TO change to email or password doesnt exist
                }else{
                    await getAccountId();
                    const validPass = password == user[0].user_password;
                    // Check if password is CORRECT
                    if (!validPass) {
                        return res.status(400).send("Invalid password"); //TO change to email or password doesnt exist
                    }
                  }
            }
        })
    }

   async function getAccountId(){
        var query2 = `select * from account left join user on account.user_id = user.user_id where account.user_id = ${user[0].user_id}`;
        database.connection.query(query2, async (error, result) => {
            console.log(query2);
            if (error){
                console.log(`getAccountID: Unable to find account that is tagged to user account. Error: ${error}`);
                response.status(500).send(`Unable to login with account: ${username}`);
            }else{
                userJoinAccount = await result;
                console.log(`getUserAccount: ${JSON.stringify(userJoinAccount)}`);
                res.status(200).send({message: `Updated user successfully for AccountId: ${userJoinAccount[0].account_id}`});
                //res.header("auth-token", userJoinAccount[0].account_id).send("User successfully login");
                console.log("Logged in successfully")
                //res.status(200).send("User successfully login");
            }
        })
    }

    // Create and assign a token
    //const token = auth.genAccessToken(usersJoinAccount);

  });

  module.exports = {
    router,
};