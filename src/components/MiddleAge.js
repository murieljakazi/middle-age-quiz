import React, { useState, useEffect } from "react";
import { questionBank } from "./QuestionBank";
import QuestionBox from "./QuestionBox";
import ScoreCard from "./ScoreCard";
import "./MiddleAge.css"

const MiddleAge = () => {
    const [questions, setQuestions] = useState([]);
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(0);

    const step = (event) => {
        if (event.target.innerText === questions[counter].correct) {
            setScore(score + 1) ;
        }
        setCounter(counter + 1);
    }

    const reset = () => {
        setScore(0);
        setCounter(0);
    }

    useEffect(()=> {
        const displayQuestions = questionBank
        setQuestions(displayQuestions)
    }, [])
        return(
            <div>
                    <h4>Middle Age</h4>
                <div className="card">
                    {console.log(score)}
                
                    {
                    (questions.length > 0 && counter < questions.length) && 
                    <QuestionBox 
                        key={questions[counter].questionId}
                        question={questions[counter].question}
                        image={questions[counter].image} 
                        options={questions[counter].answers}
                        correct={questions[counter].correct}
                        step={step}
                        />
                    }
                    
                    {(counter === questions.length) && 
                        <ScoreCard 
                        score={score}
                        total={questions.length}
                        reset={reset}
                        />
                    }
                </div>
                
            </div>
        )

}

export default MiddleAge;