import { Component, Input, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { QuestionBase } from '../models/personne';
//import { Personne } from 'src/app/models/personne'
@Component({
  selector: 'app-formglob',
  templateUrl: './formglob.component.html',
  styleUrls: ['./formglob.component.css']
})
export class FormglobComponent implements OnInit {
  
  @Input() question! : QuestionBase<string>;
  @Input() form! : FormGroup;

  constructor() {
    
   }
  get isValid(){
    return this.form.controls[this.question.key].valid;
  }
  /* onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  } */
  ngOnInit(): void {

   
  }
 

}
