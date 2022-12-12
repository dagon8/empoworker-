import React, { useState } from 'react';

function NewTest() {
  const [responses, setResponses] = useState({});

  const questions = [
    {
      id: 1,
      text: 'Do you like apples?'
    },
    {
      id: 2,
      text: 'Do you like bananas?'
    },
    {
      id: 3,
      text: 'Do you like oranges?'
    }
  ];

  function handleChange(e, id) {
    const value = e.target.value === 'yes' ? true : false;
    setResponses({ ...responses, [id]: value });
  }

  return (
    <form>
      {questions.map((question) => (
        <div key={question.id}>
          <label>{question.text}</label>
          <br />
          <input
            type="radio"
            name={question.id}
            value="yes"
            onChange={(e) => handleChange(e, question.id)}
          />
          Yes
          <input
            type="radio"
            name={question.id}
            value="no"
            onChange={(e) => handleChange(e, question.id)}
          />
          No
        </div>
      ))}
    </form>
  );
}
export default NewTest;