import styles from './quizForm.module.css'
import QuizFormInput from "./quizFromInput/quizFromInput";
import {FC, useState} from "react";
import {QuizFormInterface} from "./quizFormInterface";
import { useNavigate } from "react-router-dom";
export const QuizForm:FC<QuizFormInterface> = ({questions}) => {
    const navigate = useNavigate();
    const [questionNumber, setQuestionNumber] = useState(0)

    return (
        <div className={styles.formWrapper}>
            <span>
                Какие существуют методы жизненного цикла? Вопрос: #{questionNumber}
            </span>
            <QuizFormInput question={questions[questionNumber].firstAnswer}/>
            <QuizFormInput question={questions[questionNumber].secondAnswer}/>
            <QuizFormInput question={questions[questionNumber].thirdAnswer}/>
            <QuizFormInput question={questions[questionNumber].fourthAnswer}/>
            <button onClick={() => {questionNumber === questions.length-1 ? navigate('/last') : setQuestionNumber(questionNumber + 1)}}>
                Дальше
            </button>
        </div>
    )
}

export default QuizForm