import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { Personne } from 'src/app/models/personne'
@Component({
  selector: 'app-formglob',
  templateUrl: './formglob.component.html',
  styleUrls: ['./formglob.component.css']
})
export class FormglobComponent implements OnInit {
  essai:any;
  constructor() {
    personne:new Personne();
   }
  //currentForm : FormGroup;
  ngOnInit(): void {

   
  }
  firstTest(){
    console.log("hello")
  }

}
