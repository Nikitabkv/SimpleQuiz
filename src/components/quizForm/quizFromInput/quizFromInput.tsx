import styles from './quizFromInput.module.css'
import {FC} from "react";
import {QuizFromInputItneraface} from "./quizFromInputItneraface";
export const QuizFormInput:FC<QuizFromInputItneraface> = ({question}) => {
    return (
        <div className={styles.inputWrapper}>
            <div>{question.text}</div>
            <input type={'checkbox'}/>
        </div>
    )
}

export default QuizFormInput