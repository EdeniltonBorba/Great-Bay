const mysql = require('mysql');
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '407531Eb@',
  database : 'songs_DB',
  port: 3309
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    createProduct();
  });
  
function afterConnection() {
    connection.query("SELECT * FROM favorite_songs", function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
}

const postQuestion = [
{
  type:"input",
  name:"name",
  message:"What is the item name?"
},
{
  type:"input",
  name:"name",
  message:"What is the item name?"
}
];

const bidQuestion = [
{
  type: "input",
  name: "name",
  message: "What is the item you want to bid on?",
},
{
  type: "input",
  name: "price",
  message: "How much do you want to offer?"
}
];

inquirer.prompt(initialQuestion).then(function (answers){
  if (answers.postOrBid == "POST AN ITEM") {

    inquirer.prompt(postQuestion).then(function (answers) {

        console.log(answers)
})
}
else if (answers.postOrBid == "BID ON AN ITEM") {

  // send query to get items , selec all from itwma


  inquirer.prompt(postQuestion).then(function (answers) {

      console.log(answers)
  })
}
})

