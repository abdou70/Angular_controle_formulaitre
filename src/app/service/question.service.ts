import { Injectable } from '@angular/core';
import { QuestionBase } from '../models/personne';

import { DropdownQuestion }  from 'src/app/question-dropdown/question-dropdown';
import { TextboxQuestion } from '../question-textbox/question-textbox';
import { of } from 'rxjs';



@Injectable()
export class QuestionService{


    getQuestions(){

        const questions: QuestionBase<string>[] = [

            new DropdownQuestion({
                key: 'brave',
                label: 'Bravery rating',
                options:[
                    { key: 'solid' ,   value: 'Solid'  },
                    { key: 'great' ,   value: 'Great'   },
                    { key: 'good',     value: 'Good'    },
                    { key: 'unproven', value: 'Unproven'}

                ],
                order:3
                

            }),

            new TextboxQuestion({
                key:'firstname',
                label:'Firstname',
                value:'mamadou',
                required:true,
                order:1
            }),

            new TextboxQuestion({
                key:'emailadresse',
                label:'Email',
                type:'email',
                order:2
            })

        ];
        return of(questions.sort((a,b)=> a.order - b.order));
    }
}