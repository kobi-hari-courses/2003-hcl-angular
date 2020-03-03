export interface Question {
    caption: string;
    answers: string[];
    correctAnswerId: number;
    userAnswerId: number | null;
}