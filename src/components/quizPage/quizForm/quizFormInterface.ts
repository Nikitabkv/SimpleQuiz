export interface QuizFormInterface {
    questions: {
        question: string;
        firstAnswer: {
            text: string;
            isTrue: boolean;
        };
        secondAnswer: {
            text: string;
            isTrue: boolean;
        };
        thirdAnswer: {
            text: string;
            isTrue: boolean;
        };
        fourthAnswer: {
            text: string;
            isTrue: boolean;
        };
    }[]
}
