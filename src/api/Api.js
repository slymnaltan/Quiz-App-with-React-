export const fetchCategories = async () => {
    const url = `https://opentdb.com/api_category.php`;
    const data = await (await fetch(url)).json();
    return data.trivia_categories;
};

const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5)
}

export const fetchQuizData = async (difficulty, category, amount) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=${category}&type=multiple`
    const data = await (await fetch(url)).json();
    return data.results.map((dt) => ({
        ...dt,
        answers: shuffleArray([...dt.incorrect_answers, dt.correct_answer])
    }))
}

