import styles from './quizFromInput.module.css'
import {FC} from "react";
import {QuizFromInputItneraface} from "./quizFromInputItneraface";
import useAnswers from "../../../../context/AnswerContext";
export const QuizFormInput:FC<QuizFromInputItneraface> = ({question}) => {

    const {answers, setAnswers} = useAnswers()

    const checkAnswersId = (event: any) => {
        if (event.target.checked) {
            setAnswers([...answers, question])
        } else {
            let filteredArr = answers.filter((el) => {
                // console.log('_______')
                // console.log(el === question)
                return !(el === question)
            })
            setAnswers(filteredArr)
            // console.log(filteredArr)
        }
    }

    return (
        <div className={styles.inputWrapper}>
            <div>{question.text}</div>
            <input type={'checkbox'} checked={answers.includes(question)} onChange={(event) => checkAnswersId(event)}/>
        </div>
    )
}

export default QuizFormInput

// checked={
//     answers.includes(question)
// }

// answers.filter((elem) => {
//     elem.questionId === question.questionId
// }
// setAnswers([...answers, question])
