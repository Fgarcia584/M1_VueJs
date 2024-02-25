export interface Answer {
    text: string;
    correct: boolean;
}

export interface Question {
    title: string;
    answers: Answer[];
}

export interface Quiz {
    title: string;
    questions: Question[];
}

// export interface NewQuiz {
//     title: string;
//     questions: [
//         {
//             title: string;
//             answers: [
//                 {
//                     text: string;
//                     correct: boolean;
//                 }
//             ]
//         }
//     ]
// }