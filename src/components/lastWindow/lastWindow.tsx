import styles from './lastWindow.module.css'
import Answer from "./answers/answer";
import {answersData} from "../../mock/answers";
export const LastWindow = () => {
    const rightAnswers = '90%'

    return (
        <>
            <div className={styles.formWrapper}>
                <span>
                    Верных ответов - {rightAnswers}
                </span>
            </div>
            <div className={styles.formWrapper}>
                <span style={{borderBottom: '2px solid rgb(46 55 66)', paddingBottom: '10px'}}>
                    Проверь себя:
                </span>
                {answersData.map((data) => (
                    <Answer isTrue={data.isTrue} question={data.question} key={data.currentAnswer} currentAnswer={data.currentAnswer}/>
                ))}
            </div>
        </>
    )
}

export default LastWindow
