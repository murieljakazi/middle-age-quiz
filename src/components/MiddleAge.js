import React, { useState, useEffect } from 'react';
import { questionBank } from './QuestionBank';
import QuestionBox from './QuestionBox';

const MiddleAge = () => {
    const [questions, setQuestions] = useState([]);
    
    useEffect(()=> {
        const displayQuestions = questionBank
        setQuestions(displayQuestions)
    }, [])
        return(
            <div>
                <h3>Middle Age</h3>
                {questions.map((question, index) => 
                     <QuestionBox  question={question.question} options={question.answers} key={question.questionId}/>
                )}
            </div>
        )

}

export default MiddleAge;