import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, NgForm, Validators} from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-profil-editor',
  templateUrl: './profil-editor.component.html',
  styleUrls: ['./profil-editor.component.css']
})
export class ProfilEditorComponent implements OnInit {

  // user : User = new User();
  user={
    nom:'',
    prenom:'',
    email:'',
    telephone:''
  }

  constructor() { }
  
  ngOnInit(): void {
  }
  
  

  firstTest(profileform:NgForm){
    console.log(profileform);
    console.log("les valeurs ",profileform.value);
  }
  
}
