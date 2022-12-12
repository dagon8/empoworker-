import React, { useState } from 'react';
import "./QuizTwo.css"
import { Typography } from '@mui/material';

function QuizTwo() {
  const [responses, setResponses] = useState([]);
  const [results, setResults] = useState([]);

  const questions = [
    {
      id: 1,
      text: 'Are you not getting paid all the hours you have worked?',
      yes: 'That is a Wage Theft violation.',
      no: ''
    },
    {
      id: 2,
      text: 'Are you or know anyone who is under 18 and is working over 9 hours a day?',
      yes: 'That is a Child Labor violation.',
      no: ''
    },
    {
      id: 3,
      text: 'Have you faced an injury at work?',
      yes: 'That is an Occupation Safety and Health violation.',
      no: ''
    },
    {
        id: 4,
        text: 'Are you getting paid less than minimum wage ($14.25 per hour)?',
        yes: 'That is a Wage Theft violation.',
        no: ''
    },
    {
        id: 5,
        text: 'Have you developed a health condition because of your current place of employement?',
        yes: 'That is a an Occupation Safety and Health Violation.',
        no: ''
    },
  ];

  function handleChange(e, id) {
    const value = e.target.value === 'yes' ? true : false;
    // if (!responses?.includes(value)) {
    //     setResponses({ ...responses, [id]: value });
    // }
    setResponses({ ...responses, [id]: value });


    const uniqueResponses = responses.filter(
        (response, index) => responses.indexOf(response) === index
      );

      setResults(uniqueResponses);
  }

  return (
    <form>
      {questions.map((question) => (
        <div key={question.id}>
          <label> Q {question.text}</label>
          <br />
          <input
            type="radio"
            name={question.id}
            value="yes"
            onClick={(e) => handleChange(e, question.id)}
          />
            Yes
          <input
            type="radio"
            name={question.id}
            value="no"
            // style={{marginRight:"20px"}}
            onClick={(e) => handleChange(e, question.id)}
          />
          No
        </div>
      ))}
      <h2>Results:</h2>
      <div>
        {questions.map((question) => (
          <div key={question.id}>
            {responses[question.id] ? question.yes : question.no}
          </div>
        ))}
      </div>

    </form>
  );
}
export default QuizTwo