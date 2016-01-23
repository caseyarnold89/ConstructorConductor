/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
    3) Casey, caseya@gmail.com, 'cool'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

var users = [];


//Now create and push into your users array 3 separate instances of User using the data from above in that exact order

users.push(User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS'));
users.push(User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags'));
users.push(User('Lenny','lenny@theLenster.com','iLoveLentilSoup'));

console.log('Tyler\'s information is ');
//Console.log all of Tylers information
var UserFind = function (arr, name, cb) {
    var userName;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === name) {
            userName = name;
        }
    }
    cb(userName);
}

var displayUserInfo = function (users, 
}

console.log('Lenny\'s information is ');
//Now console.log all of Lennys information

  //code here


//Now create another instance of User using your own information and then add that to your users array.

users.push(User('Casey','casey@gmail.com','cool'));

console.log('All my users names are ');
//Now loop through your users Array and console.log every users name. 
for (var i = 0; i < users.length; i++) {
    console.log('All my users names are ' + users[i]);
}
  //code here
