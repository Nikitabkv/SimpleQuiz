import {FC} from "react";
import {QuizPageInterface} from "./quizPageInterface";
import QuizTitle from "../quizTitle/quizTitle";
import QuizForm from "../quizForm/quizForm";
import {data} from "../../mock/data";
export const QuizPage:FC<QuizPageInterface> = ({path}) => {
    const currentData = data.filter((data) => (
        data.title.toLowerCase().includes(path.slice(1))
    ))[0]

    return (
        <>
            <QuizTitle title={currentData.title}/>
            <QuizForm questions={currentData.questions}/>
        </>
    )
}

export default QuizPage
