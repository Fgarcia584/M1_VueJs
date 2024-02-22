export interface answer {
    id: number;
    text: string;
    correct: boolean;
}

export interface question {
    id: number;
    title: string;
    answers: answer[];
}

export interface quiz {
    id: number;
    title: string;
    questions: question[];
}