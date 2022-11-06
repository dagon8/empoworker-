import React, {useState} from "react";
import Card from '@mui/material/Card';


export default function Quiz(){
    const questions = [

        {
            questionText: "Are you not gettig paid all the hours you have worked?",
            exampleText: "e.i. Not paying at all, paying below minimum wage",
            answerOptions: [
                {answerText: "Yes", isTrue: true},
                {answerText: "No", isTrue: false},
            ],
        },
        {
            questionText: "Are you being harrassed?",
            exampleText: "e.i. verbal abuse, threats",
            answerOptions: [
                {answerText: "Yes", isTrue: true},
                {answerText: "No", isTrue: false},
            ],  
        },
        {
            questionText: "Are you or know anyone who is under 18 and is working over 9 hours a day?",
            exampleText: "",
            answerOptions: [
                {answerText: "Yes", isTrue: true},
                {answerText: "No", isTrue: false},
            ],  
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showEvaluation, setEvaluation] = useState(false);

    const handleResetButton = () => {
        setEvaluation(false);
        setCurrentQuestion(0);
    }

    // takes the current question number and whenever it's clicked it goes to the next question 
    const handleAnswerButtonClick = (isTrue) => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        } else {
            setEvaluation(true);
            // when user reaches end of the quiz -> results will be revealed
        }
    }
	return (
        <Card sx={{ maxWidth: 500, backgroundColor:"dodgerblue " }}>
		<div className="quiz">
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showEvaluation ? (
				<div className='eval-section'>You are facing this type of abuses(s):
                    <button onClick={handleResetButton}> Reset </button> </div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1} </span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) =>
                            <button onClick={() => handleAnswerButtonClick(answerOption.isTrue)}>{answerOption.answerText}</button>)}
					</div>
				</>
			)}
		</div>
        </Card>
        // NEEDED LOGIC:
        // each question corresponds to a certain type of abuse
        // if the user says yes, we want to increment the abuse type so it can tracked and later displayed
        // if abuse_num > 1 then at showEvaluation, need to list abuse
        // currently stuck on incrementing the abuse type 
	);
    
}