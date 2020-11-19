import React from "react";

const QuestionBox = ({question, options, step}) => {
    
    return(
        <div className="questionBox">
            <div className="questionQuiz">{question}</div>
            
            {options.map((text, index) => (
                <button key={index} className="answerBtn" onClick={step}>
                    {text}
                </button>
            ))}
        </div>
    )
}

export default QuestionBox