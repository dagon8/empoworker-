import React, {useState} from "react";
import Card from '@mui/material/Card';
import { Box } from "@mui/system";


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
    const [wageTheft, setWageTheft] = useState(0);
    const [harassment, setHarrasment] = useState(0);
    const [childLabor, setChildLabor] = useState(0);
    const [showEvaluation, setEvaluation] = useState(false);
    const [results, setResults] = useState([""]);

    // set everything back to the start when the quiz is started over 
    const handleResetButton = () => {
        setEvaluation(false);
        setCurrentQuestion(0);
        setWageTheft(0);
        setHarrasment(0);
        setChildLabor(0);
        setResults([""]);
    }

    // add results to the result list to be later displayed
    const addResult = (newResult) => 
    setResults(results => [...results, newResult]);

    // process the current question and pass the elements to see what abuse 
    // the question matches to
    function process(currentQuestion, isTrue){
        handleAnswerButtonClick();
        checkAbuse(currentQuestion, isTrue);
    }   

    // takes the current question number and whenever it's clicked it goes to the next question 
    const handleAnswerButtonClick = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        } else {
            setEvaluation(true);
            // when user reaches end of the quiz -> results will be revealed
        }
    }

    // based on the question, it increments which abuse is being faced
    var checkAbuse = (currentQuestion, isTrue) => {
        if (isTrue===true && currentQuestion===0){
            setWageTheft(wageTheft + 1);
        }
        else if (isTrue=== true && currentQuestion===1){
            setHarrasment(harassment + 1);
        }
        else if (isTrue ===true && currentQuestion===2){
            setChildLabor(childLabor + 1);
        }
    }

    // based on the value of the category, it adds the type of abuse to the result list 
    const showAbuse = () => {
        if (wageTheft === 1){
            addResult("Wage Theft");
        }

        if (harassment === 1){ 
            addResult("Harassment");            
        }

        if (childLabor === 1){ 
            addResult("Child Labor");
        }
    }

	return (
        <Card sx={{ maxWidth: 1000, backgroundColor:"azure", marginRight:"500px", marginLeft:"150px" }}>
            {/* <Box sx={{display: "flex", flexDirection:"column"}}> */}
                <div className="quiz">
                    {/* HINT: replace "false" with logic to display the 
            score when the user has answered all the questions */}
                    {showEvaluation ? (
                        <div className='eval-section'>
                        You are facing this type of abuses(s):
                            <button onClick={() => showAbuse()}>Results</button>
                            {results.map((result, index) => (
                                <div key={index}>
                                {result}
                                </div>
                            ))}
                            <button onClick={handleResetButton}> Reset </button> 
                        </div>
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
                                    <button onClick={() => process(currentQuestion, answerOption.isTrue)}>{answerOption.answerText}</button>)}
                            </div>
                        </>
                    )}
                </div>
             {/* </Box> */}
        </Card>
        // NEEDED LOGIC:
        // each question corresponds to a certain type of abuse
        // if the user says yes, we want to increment the abuse type so it can tracked and later displayed
        // if abuse_num > 1 then at showEvaluation, need to list abuse
        // currently stuck on incrementing the abuse type 
	);
    
}