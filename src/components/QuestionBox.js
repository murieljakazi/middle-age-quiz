import React from "react";
import "./QuestionBox.css";

const QuestionBox = ({question, options, step, image, correct}) => {
    
    return(
        <div className="questionBox">
            <img src={image} alt={correct}></img>
            <div className="questionQuiz">{question}</div>
            
            {options.map((text, index) => (
                <button key={index} className="answerBtn" onClick={step}>
                    {text}
                </button>
            ))}
        </div>
    )
}

export default QuestionBox;