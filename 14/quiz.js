let questions = [
    {
        question: "Which city is the capital of India?",
        options: ["Mumbai", "Kolkata", "Delhi", "Chennai"],
        correctAnswer: "Delhi"

    },
    {
        question: "Who was the first cricketer to score a double century in One Day Internationals (ODIs)?",
        options: ["Sachin Tendulkar", "Chris Gayle", "Virender Sehwag", "Rohit Sharma"],
        correctAnswer: "Sachin Tendulkar"
    },
    {
        question: "Who is the highest wicket-taker in Test cricket?",
        options: ["Shane Warne", "Muttiah Muralitharan", "Anil Kumble", "James Anderson"],
        correctAnswer: "Muttiah Muralitharan"
    },
    {
        question: "Who is known as the 'Father of the Nation' in India?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose"],
        correctAnswer: "Mahatma Gandhi"
    },
    {
        question: "Who is the all-time leading goal scorer in the English Premier League?",
        options: ["Thierry Henry", "Wayne Rooney", "Alan Shearer", "Cristiano Ronaldo"],
        correctAnswer: "Alan Shearer"
        
    },
    {
        question: "Who directed the movie 'Inception'?",
        options: ["Christopher Nolan", "Steven Spielberg", "Quentin Tarantino", "Martin Scorsese"],
        correctAnswer: "Christopher Nolan"
    },
    {
        question: "Which Indian state is known as the 'Land of Five Rivers'?",
        options: ["Punjab", "Haryana", "Rajasthan", "Uttar Pradesh"],
        correctAnswer: "Punjab"
    },
    {
        question: "Who painted the 'Mona Lisa'?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci"
    }, 
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        correctAnswer: "H2O"
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: ["Japan", "China", "South Korea", "Vietnam"],
        correctAnswer: "Japan"
    }
   
];



let startbtn= document.getElementById('startbtn');
let score = 0;
startbtn.addEventListener('click', quiz);

function quiz()
{
    for (let i = 0; i < questions.length; i++) {
        askQuestion(i);
    }
    alert("Your score: " + score + " out of " + questions.length);

    function askQuestion(abc) {
    let questionObj = questions[abc];
    let userInput = prompt(questionObj.question + "\n\nOptions: " + questionObj.options.join(', ')).toLowerCase();

    console.log(questionObj);
    console.log(userInput);
    
    if (userInput !== null) {
        let answerIndex = questionObj.correctAnswer.toLowerCase();
        console.log(answerIndex);

        if (answerIndex === userInput) {
            alert("Correct!");
            score++;
        } else {
            alert("Incorrect!");
        }
    }
}

};