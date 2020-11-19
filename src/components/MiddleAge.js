import React, { useState, useEffect } from "react";
import { questionBank } from "./QuestionBank";
import QuestionBox from "./QuestionBox";

const MiddleAge = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(()=> {
        const displayQuestions = questionBank
        setQuestions(displayQuestions)
    }, [])
        return(
            <div>
                {questions.map(question => <QuestionBox key={question.questionId}question={question.question} 
                options={question.answers}/> )}
                <p>Middle Age</p>
            </div>
        )

}

export default MiddleAge;