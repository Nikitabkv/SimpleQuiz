import styles from './answer.module.css'
import {FC} from "react";
import {answerInterface} from "./answerItneraface";
export const Answer:FC<answerInterface> = ({isTrue, question, currentAnswer}) => {
    return (
        <>
            <span>
                {question}
            </span>
            <div className={styles.inputWrapper}>
                <span>{currentAnswer}</span>
                <div>{isTrue ? '+' : '-'}</div>
            </div>
        </>
    )
}

export default Answer