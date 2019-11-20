# code-quiz

auto - generating quiz functionality:
    on page load: user is prompted to input initals

        .\Assets\initial box.PNG

    on start game click:

        .Assets\generated question.PNG
        
        timer begins, giving user 30 seconds per question

        quiz question, potential answers, and answer are stored in array and 
        question box and multiple answer buttons are generated dynamically according to number of options.

        on correct answer, previous correct or incorrect message is deleted if present, correct answer message is generated and displayed, and question generation function runs again

        on incorrect answer, previous correct or incorrect message is deleted if present, incorrect answer message is generated and displayed, 15 seconds is removed from the timer, and question generation function runs again

        if user runs out of time, game over alert signals and page reloads

        if user completes all questions, user initials are printed with their score (seconds remaining).