import { QuizQuestions } from './models/quiz-questions';
import { Component } from '@angular/core';
import { Question } from './models/question.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allQuestions: Question[] = QuizQuestions;
  currentQuestionIndex: number = 0;
  currentQuestion: Question = this.allQuestions[this.currentQuestionIndex];
  answeredQuestions: Question[] = [];
  isDone: boolean = false;

  answerCurrentQuestion(answerId: number) {
    if (this.currentQuestion) {
      this.currentQuestion.userAnswerId = answerId;
      this.currentQuestionIndex++;
      this.answeredQuestions.push(this.currentQuestion);
      this.currentQuestion = this.allQuestions[this.currentQuestionIndex];  
      this.isDone = this.currentQuestionIndex >= this.allQuestions.length;
    }
  }

}
