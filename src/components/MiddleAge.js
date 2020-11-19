import React, { useState, useEffect } from 'react';
import { questionBank } from './QuestionBank/QuestionBank';

const MiddleAge = () => {
    const [questions, setQuestions] = useState([]);
    
    useEffect(()=> {
        const displayQuestions = questionBank
        setQuestions(displayQuestions)
    }, [])
        return(
            <div>
                {questions.map(question => <h4>{question.question}</h4> )}
                <p>Middle Age</p>
            </div>
        )

}

export default MiddleAge;