import React, { useState } from "react";
import "./QuizTwo.css";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";


function QuizTwo() {
  const [responses, setResponses] = useState(new Set());
  const [results, setResults] = useState([]);
  const { t, i18n } = useTranslation();


  const questions = [
    {
      id: 1,
      text: t("q1"),
      yes: t("a1"),
      no: "",
    },
    {
      id: 2,
      text: t("q2"),
      yes: t("a2"),
      no: "",
    },
    {
      id: 3,
      text: t("q3"),
      yes: t("a3"),
      no: "",
    },
    {
      id: 4,
      text: t("q4"),
      yes: t("a4"),
      no: "",
    },
    {
      id: 5,
      text: t("q5"),
      yes: t("a5"),
      no: "",
    },
  ];

  function handleChange(e, id) {
    const value = e.target.value === 'yes' ? true : false;
    setResponses({ ...responses, [id]: value });
  }

  return (
    <form>
      {/* style={{display:"flex",
       flexDirection:"column",
        justifyContent:"center",
         alignItems:"center"}}> */}
      {questions.map((question) => (
        <div key={question.id}>
          <label> Q {question.text}</label>
          <br />
          <input
            type='radio'
            name={question.id}
            value='yes'
            onClick={(e) => handleChange(e, question.id)}
            // style={{justifyContent:"space-between", alignItems:"center"}}
          />
          {t("yes")}
          <input
            type='radio'
            name={question.id}
            value='no'
            // style={{ marginRight:"20px", justifyContent:"center", alignItems:"center"}}
            onClick={(e) => handleChange(e, question.id)}
          />
          {t("no")}
        </div>
      ))}
      <h2>{t("result")}:</h2>
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
export default QuizTwo;
