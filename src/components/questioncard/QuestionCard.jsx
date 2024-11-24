import React, { useEffect, useState } from 'react'
import './questionCard.css'

function QuestionCard({ questionsData, score, setScore, count, setCount, modal, setModal }) {
    const [timer, setTimer] = useState(30)
    const [selectedAnswer, setSelectedAnswer] = useState(null)

    const approvedChoice = (e) => {
        const selected = e.currentTarget.value
        setSelectedAnswer(selected)
        const checkAnswer = selected === questionsData[count]?.correct_answer
        if (checkAnswer) {
            setScore(score + 1)
        }
        setTimeout(() => {
            setCount(count + 1)
            if (count === 9) setModal(true)
            setTimer(30)
            setSelectedAnswer(null)
        }, 1000)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1)
            }
            if (timer === 0 && count < 10) {
                setCount(count + 1)
                setTimer(30)
            } else if (count >= 10) {
                setModal(true)
            }
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [timer])

    return (
        <div className='questioncard'>
            <div className="timer">{timer}</div>
            <div className='questioncard-title'>{count + 1}/10 - {questionsData[count]?.question}</div>
            {
                questionsData[count]?.answers?.map((answer, i) => (
                    <button
                        key={i}
                        value={answer}
                        onClick={approvedChoice}
                        style={{
                            backgroundColor: selectedAnswer
                                ? answer === questionsData[count].correct_answer
                                    ? 'green'
                                    : answer === selectedAnswer
                                        ? 'red'
                                        : ''
                                : ''
                        }}
                    >
                        {answer}
                    </button>
                ))
            }
        </div>
    )
}

export default QuestionCard
