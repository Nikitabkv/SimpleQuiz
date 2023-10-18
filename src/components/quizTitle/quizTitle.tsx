import styles from './quizTitle.module.css'
import {FC} from "react";
import {QuizTitleInterface} from "./quizTitleInterface";
export const QuizTitle:FC<QuizTitleInterface> = ({title}) => {
    return (
        <h1 className={styles.formWrapper}>
            {title}
        </h1>
    )
}

export default QuizTitle