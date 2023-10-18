export interface QuizFormInterface {
    questions: {
        question: string;
        firstAnswer: {
            text: string;
            isTrue: boolean;
            questionId: number;
        };
        secondAnswer: {
            text: string;
            isTrue: boolean;
            questionId: number;
        };
        thirdAnswer: {
            text: string;
            isTrue: boolean;
            questionId: number;
        };
        fourthAnswer: {
            text: string;
            isTrue: boolean;
            questionId: number;
        };
    }[]
}
