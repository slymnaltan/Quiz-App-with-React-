import React, { useState, useEffect } from 'react'
import './introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'
import trivia from './trivia-quiz.jpg'
import { useNavigate } from 'react-router-dom'
import { fetchCategories } from '../../api/Api'

function Introduce() {
    const difficulty = ["easy", "medium", "hard"]
    const [difficultyChange, setDifficultyChange] = useState('easy')
    const [categories, setCategories] = useState([])
    const [categoryChange, setCategoryChange] = useState('')
    const navigate = useNavigate()
    const TOTAL_QUESTION = 10

    useEffect(() => {
        const getCategories = async () => {
            const categoriesData = await fetchCategories()
            setCategories(categoriesData)
            setCategoryChange(categoriesData[0].id) // Varsayılan olarak ilk kategoriyi seç
        }
        getCategories()
    }, [])

    const startQuiz = () => {
        if (difficultyChange && categoryChange) {
            navigate(`/quiz/${difficultyChange}/${categoryChange}/${TOTAL_QUESTION}`)
        }
    }

    return (
        <div className='introduce'>
            <div className="introduce-container">
                <img style={{ width: '400px', borderRadius: '10px' }} src={trivia} alt="" />
                <Dropdown data={difficulty} setChange={setDifficultyChange} />
                <Dropdown data={categories.map(category => ({ value: category.id, label: category.name }))} setChange={setCategoryChange} />
                <div onClick={startQuiz} className='introduce-btn'>Quiz'e Başla</div>
            </div>
        </div>
    )
}

export default Introduce
