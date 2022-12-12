import React, {useState} from "react";
import Card from '@mui/material/Card';
import { Box } from "@mui/system";
import "./Quiz.css";
import { Button } from "@mui/material";
import Test from "./QuizTwo";
import NewTest from "./NewTest";
import QuizTwo from "./QuizTwo";

export default function Quiz(){
    const questions = [

        {
            questionText: "Are you not getting paid all the hours you have worked?",
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
        {
            questionText: "Have you faced an injury at work?",
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
    const [accident, setAccident] = useState(0);
    const [showEvaluation, setEvaluation] = useState(false);
    const [results, setResults] = useState([""]);

    // set everything back to the start when the quiz is started over 
    const handleResetButton = () => {
        setEvaluation(false);
        setCurrentQuestion(0);
        setWageTheft(0);
        setHarrasment(0);
        setChildLabor(0);
        setAccident(0);
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
        else if (isTrue ===true && currentQuestion===3){
            setAccident(accident + 1);
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
        if (accident === 1){ 
            addResult("Work Place Accidents");
        }

    }

	return (
        <div>
                <div className="quiz">
                    {/* HINT: replace "false" with logic to display the 
            score when the user has answered all the questions */}
                    {showEvaluation ? (
                        <div className='eval-section'>
                        You are facing this type of abuses(s):
                        <br></br>
                            <Button variant="outlined" onClick={() => showAbuse()}>Results</Button>
                            {results.map((result, index) => (
                                <div key={index}>
                                {result}
                                </div>
                            ))}
                            <br></br>
                            <Button variant="outlined" onClick={handleResetButton}> Reset </Button> 
                        </div>
                    ) : (
                        <>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Q {currentQuestion + 1} </span>/{questions.length}
                                </div>
                                <br></br>
                                <div className='question-text'>{questions[currentQuestion].questionText}</div>
                            </div>
                            <br></br>
                            <div className='answer-section'>
                                {questions[currentQuestion].answerOptions.map((answerOption) =>
                                    <Button sx={{paddingLeft:"16px"}} variant="outlined" onClick={() => process(currentQuestion, answerOption.isTrue)}>{answerOption.answerText}</Button>)}
                            </div>
                        </>
                    )}
                </div>

        </div>
	);
    
}