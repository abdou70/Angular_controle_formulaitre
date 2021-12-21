import { QuestionBase } from '../models/personne';


export class TextboxQuestion extends QuestionBase<string> {

    override : any;
    controlType = 'textbox' ;

}