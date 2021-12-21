import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulaire-dynamique',
  templateUrl: './formulaire-dynamique.component.html',
  styleUrls: ['./formulaire-dynamique.component.css']
})
export class FormulaireDynamiqueComponent implements OnInit {
  infoForm:any;
  montab:any =[];
  //resp:any;
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
     this.infoForm = new FormGroup({
      nom: new FormControl(),
      prenom: new FormControl(),
      adresse: new FormControl(),
      telephone: new FormControl()
    })
  }

  test(){
    let tab1=this.infoForm.value;
     this.montab=this.montab.push(tab1);
    console.log("voici le nom : ",this.infoForm.get('nom').value);
    console.log("voici le nom1 : ",tab1['nom']);
    console.log("les valeurs que j'ai ajouter dans le tableau :",this.montab['nom']);
  }

}
