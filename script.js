function quizLoad() {
    let initials = prompt("Please enter your initials");
    let buttonEl = null;
    const startEl = document.getElementById("startBTN");
    // const restartEl = document.getElementById("restartBTN");
    const questionEl = document.getElementById("questionBox");
    let time = document.getElementById("timer");
    const highscore = [];
    let a = 0;
    let i = 0;
    let testcorrectEl = null;
    let testincorrectEl = null;
    let seconds = time;
    let myInterval = null;

    const questions = [
        {
            title: "Commonly used data types DO NOT include:",
            choices: ["strings", "booleans", "alerts", "numbers"],
            answer: "alerts"
        },
        {
            title: "The condition in an if / else statement is enclosed within ____.",
            choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
            answer: "parentheses"
        },
        {
            title: "What language is typically used for styling websites?",
            choices: ["Javascript", "CSS", "Python", "HTML"],
            answer: "CSS"
        },
        {
            title: "What is the average airspeed velocity of an unladen european swallow?",
            choices: ["24 mph", "60 mph", "16 mph", "32 mph"],
            answer: "24 mph"
        },
        {
            title: "What is the answer to the Ultimate Question of Life, the Universe, and Everything",
            choices: ["pizza", "42", "C", "maybe"],
            answer: "42"
        },
    ];


    

    startEl.addEventListener("click", function () {
        document.getElementById("timer").style.display = "block";

        //timer start
        startTimer();
        document.getElementById("questionHolder").style.display = "none";
        startEl.style.display = "none";

        //question generate
        generate();
        
        //user initials input
        

        
        console.log("highscore array" + highscore);


    });


    //start timer function
    function startTimer(check = false, testseconds = 0) {
        let time = questions.length * 30;
        if(check){
            clearInterval(myInterval);
            time = testseconds;
        }
        
        myInterval = setInterval(function () {
            time = time - 1;

            seconds = time;

            timer.innerHTML = "Time remaining: " + seconds;

            if (time <= 0) {
                alert("GAME OVER! TRY AGAIN");
                clearInterval(myInterval);
                document.location.reload();
            }
        }, 1000);
    }

//question generate function
    function generate (){
        

        console.log("i value "+ i);

        let userAnswer = [];

        //create question element
        const rowEl = document.createElement("div");
        rowEl.setAttribute("class", "row");
        questionEl.append(rowEl);

        const colEl = document.createElement("div");
        colEl.innerHTML = questions[i].title;
        colEl.setAttribute("class", "col d-flex align-items-center justify-content-center");
        rowEl.append(colEl);

        const answerRow = document.createElement("div");
        rowEl.setAttribute("class", "row");
        questionEl.append(answerRow);

        const col2El = document.createElement("div");
        colEl.setAttribute("class", "col d-flex align-items-center justify-content-center");
        answerRow.append(col2El);


        //create buttons
        for (let q = 0; q < questions[i].choices.length; q++) {
            buttonEl = document.createElement("button");
            buttonEl.innerHTML = questions[i].choices[q];
            buttonEl.setAttribute("class", "btn btn-primary btn-sm m-3");
            col2El.append(buttonEl);
            

            buttonEl.addEventListener("click", function () {
                userAnswer = [];
                userAnswer.push(this.innerHTML);
                console.log("user answer: " + userAnswer);
                console.log("correct answer: " + questions[i].answer);

                if (userAnswer[0] === questions[i].answer) {
                    //removeChild from https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
                    
                    if(testcorrectEl){
                        testcorrectEl.parentNode.removeChild(testcorrectEl);
                    };

                    if(testincorrectEl){
                        testincorrectEl.parentNode.removeChild(testincorrectEl);
                    };
                    
                    console.log("correct answer");
                    

                    correctEl = document.createElement("div");
                    correctEl.setAttribute("class", "row");
                    questionEl.append(correctEl);

                    const cMessageEl = document.createElement("div");
                    cMessageEl.innerHTML = "CORRECT";
                    cMessageEl.setAttribute("class", "col d-flex align-items-center justify-content-center");
                    correctEl.append(cMessageEl);

                    rowEl.parentNode.removeChild(rowEl);
                    answerRow.parentNode.removeChild(answerRow);

                    testcorrectEl = correctEl;
                    testincorrectEl = null;

                    userAnswer = [];
                    a += 1;
                    i += 1;
                    if (a < questions.length){
                        generate();
                        console.log("if looping");
                        console.log(a);
                    } else{
                        if(testcorrectEl){
                            testcorrectEl.parentNode.removeChild(testcorrectEl);
                        };
    
                        if(testincorrectEl){
                            testincorrectEl.parentNode.removeChild(testincorrectEl);
                        };
                        highscore.push(initials +" : "+ seconds);
                        for (let z = 0; z < highscore.length; z++) {
                            console.log(highscore);

                            const scoreRowEl = document.createElement("div");
                            scoreRowEl.setAttribute("class", "row");
                            questionEl.append(scoreRowEl);
                
                            const scoreListEl = document.createElement("div");
                            scoreListEl.innerHTML = highscore[z];
                            scoreListEl.setAttribute("class", "col d-flex align-items-center justify-content-center");
                            scoreRowEl.append(scoreListEl);
                        }
                    };
                    
                } else {
                    
                    if(testcorrectEl){
                        testcorrectEl.parentNode.removeChild(testcorrectEl);
                    };

                    if(testincorrectEl){
                        testincorrectEl.parentNode.removeChild(testincorrectEl);
                    };

                    console.log("incorrect answer");
                    incorrectEl = document.createElement("div");
                    incorrectEl.setAttribute("class", "row");
                    questionEl.append(incorrectEl);

                    const iMessageEl = document.createElement("div");
                    iMessageEl.innerHTML = "INCORRECT";
                    iMessageEl.setAttribute("class", "col d-flex align-items-center justify-content-center");
                    incorrectEl.append(iMessageEl);

                    testincorrectEl = incorrectEl;
                    testcorrectEl = null;

                    userAnswer = [];

                    seconds -= 15;
                    startTimer(true, seconds);
                   
                    rowEl.parentNode.removeChild(rowEl);
                    answerRow.parentNode.removeChild(answerRow);
                    
                    

                    a += 1;
                    i += 1;
                    if (a < questions.length){
                        generate();
                        console.log("if looping");
                        console.log(a);
                    } else{
                        if(testcorrectEl){
                            testcorrectEl.parentNode.removeChild(testcorrectEl);
                        };
    
                        if(testincorrectEl){
                            testincorrectEl.parentNode.removeChild(testincorrectEl);
                        };
                        highscore.push(initials +" : "+ seconds);

                        for (let z = 0; z < highscore.length; z++) {

                            document.getElementById("timer").style.display = "none";

                            console.log(highscore);

                            const scoreRowEl = document.createElement("div");
                            scoreRowEl.setAttribute("class", "row");
                            questionEl.append(scoreRowEl);
                
                            const scoreListEl = document.createElement("div");
                            scoreListEl.innerHTML = highscore[z];
                            scoreListEl.setAttribute("class", "col d-flex align-items-center justify-content-center");
                            scoreRowEl.append(scoreListEl);
                        }
                    };
                }
            });
        }


    };



} quizLoad();
