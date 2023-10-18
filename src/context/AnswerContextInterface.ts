import {Dispatch, SetStateAction} from "react";

export interface AnswerContextInterface {
    answers: Array<any>
    setAnswers: Dispatch<SetStateAction<Array<any>>>
}
