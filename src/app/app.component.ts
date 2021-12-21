import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionBase } from './models/personne';
import { QuestionService } from './service/question.service';

@Component({
  selector: 'app-root',
  /* template: `
    <div>
      <h2>Job Application for Heroes</h2>
      <app-dynamic-form [questions]="questions$ | async"></app-dynamic-form>
    </div>
  `, */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers:  [QuestionService]
})



export class AppComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
