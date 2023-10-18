import React, {createContext, FC, useState, useMemo, useContext} from "react";
import {AnswerContextInterface} from "./AnswerContextInterface";

const AnswersContext = createContext<AnswerContextInterface>({} as AnswerContextInterface)

export const AnswersProvider:FC<{children: React.ReactNode}> = ({children}) => {
    const [answers, setAnswers] = useState([0])

    const value = useMemo(() => ({
        answers,
        setAnswers
    }), [answers])

    return <AnswersContext.Provider value={value}>{children}</AnswersContext.Provider>
}

const useAnswers = () => useContext(AnswersContext)

export default useAnswers
