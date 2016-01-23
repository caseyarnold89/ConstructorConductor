//We're going to create the JS for a basic quiz application. 

//Let's think about the nature of this quiz app first. We're going to be creating lots of user objects, and we're
//also going to be creating lots of Question objects. Those would make two perfectly good constructors. 

//Create a QuizUser constructor that accepts name, email, password, and totalScore parameters and set them appropriatly

var QuizUser = function (name, email, password, totalScore) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.totalScore = totalScore;
}


//Create a Question constructor that accepts title, answersArray, rightAnswer, and difficulty parameters

var Question = function (title, answersArray, rightAnswer, difficulty) {
    this.title = title;
    this.answersArray = answersArray;
    this.rightAnswer = rightAnswer;
    this.difficulty = difficulty;
}


//Create a quizUsers Array which is going to hold all of our users.

var quizUsers = [];


//Let's say three people signed up for our service, create 3 instances of User and add each to the users Array

var user1 = new QuizUser('Casey', 'casey@gmail.com', 'test', 98);
var user2 = new QuizUser('John', 'john@john', 'test2', 75);
var user3 = new QuizUser('Dog', 'dogsdonthaveemails', 'woof', 2);

quizUsers.push(user1, user2, user3);

//Create a questions Array which is going to hold all of our questions

var questions = [];


//Now, let's say we wanted to create a quiz about JavaScript. Create three instances of Question which contain the following data
//title: 'T/F: Inheritance is achieved in JavaScript through Prototypes?'
//title: 'T/F: JavaScript is just a scripting version of Java'
//title: "T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value"
//Fill in the rest of the required data as you see appropriate.

var q1 = new Question('T/F: Inheritance is achieved in JavaScript through Prototypes',['T', 'F'], 'T', 'Easy');
var q2 = new Question('T/F: JavaScript is just a scripting version of Java',['T', 'F'], 'T', 'Easy');
var q3 = new Question("T/F: In Javascript, == doesn't check 'type' but just the value - where === checks type and value",['T', 'F'], 'T', 'Easy');


//Now push all of your instances of Question into the questions Array

questions.push(q1, q2, q3);

console.log('My users Array and my questions arrray are ...');
//Now loop console.log your users array and your questions array and verify that they're both holding the right data.

var arrayLoop = function (arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
        console.log(arr1[i]);
    }
    for (var j = 0; j < arr2.length; j++) {
        console.log(arr2[j]);
    }
}

arrayLoop(quizUsers, questions);

