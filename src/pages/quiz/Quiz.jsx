import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as Api from '../../api/Api'
import './quiz.css'
import QuestionCard from '../../components/questioncard/QuestionCard'
import Modal from '../../components/modal/Modal'

const Quiz = () => {
    const { difficulty, category, amount } = useParams();
    const [questionsData, setQuestionsData] = useState('')
    const [score, setScore] = useState(0)
    const [count, setCount] = useState(0)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        const getData = async () => {
            const data = await Api.fetchQuizData(difficulty, category, amount)
            setQuestionsData(data)
        }
        getData();
    }, [difficulty, category, amount])

    console.log(questionsData)
    return (
        <div className='quiz'>
            {modal ? <Modal score={score} /> :
                <QuestionCard
                    questionsData={questionsData}
                    score={score}
                    setScore={setScore}
                    count={count}
                    setCount={setCount}
                    modal={modal}
                    setModal={setModal} />}
        </div>
    )
}

export default Quiz
