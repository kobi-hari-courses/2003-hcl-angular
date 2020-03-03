import { Question } from './question.model';

export const QuizQuestions : Question[] = [
  {
    caption: 'What are the 3 primary colors?',
    answers: ['Red, Yellow, Blue', 'Red, Yellow, Blue, Black', 'Reg, Green, Blue', 'Black, White'],
    correctAnswerId: 2,
    userAnswerId: null
  },
  {
    caption: 'What do you get when you mix Red with Blue?',
    answers: ['Yellow', 'Magenta', 'Gray', 'White'],
    correctAnswerId: 1,
    userAnswerId: null
  },
  {
    caption: 'What do you get when you mix Blue and Green?',
    answers: ['Cyan', 'Light green', 'Purple', 'Brown'],
    correctAnswerId: 0,
    userAnswerId: null
  },
  {
    caption: 'What do you get when you mix Red and Green?',
    answers: ['Brown', 'Orange', 'Yellow', 'White'],
    correctAnswerId: 2,
    userAnswerId: null
  },
  {
    caption: 'What do you get when you mix Blue and Yellow',
    answers: ['Green', 'Lime', 'Cyan', 'White'],
    correctAnswerId: 3,
    userAnswerId: null
  },
  {
    caption: 'What do you get when you mix Green and Magenta',
    answers: ['Brown', 'Lime', 'Red', 'White'],
    correctAnswerId: 3,
    userAnswerId: null
  },
  {
    caption: 'What do you get when you mix Red and Cyan',
    answers: ['Magenta', 'Purple', 'Blue', 'White'],
    correctAnswerId: 3,
    userAnswerId: null
  },
  {
    caption: 'What do you get when you mix Red, Blue and Green',
    answers: ['Yellow', 'Brown', 'Black', 'White'],
    correctAnswerId: 3,
    userAnswerId: null
  },
];
