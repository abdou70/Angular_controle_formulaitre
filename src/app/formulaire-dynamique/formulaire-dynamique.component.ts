import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-dynamique',
  templateUrl: './formulaire-dynamique.component.html',
  styleUrls: ['./formulaire-dynamique.component.css']
})
export class FormulaireDynamiqueComponent implements OnInit {
  infoForm:any;
  montab:any =[];
  choice1:boolean = false;
  //resp:any;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
     this.infoForm = this.fb.group({
      nom: ['',[Validators.required,Validators.minLength(3)]],
      prenom: ['',[Validators.required,Validators.maxLength(8)]],
      adresse: ['',[Validators.required]],
      telephone: ['',[Validators.required]],
      postal: ['',[Validators.required]],
      choice:false
    })
  }

  test(){
    let tab1=this.infoForm.value;
    this.montab=this.montab.push(tab1);
    console.log("voici le nom : ",this.infoForm.get('nom').value);
    console.log("voici le nom : ",this.infoForm.value,this.infoForm.get('telephone').value);
    console.log("voici le nom1 : ",tab1['nom']);
    console.log("les valeurs que j'ai ajouter dans le tableau :",this.montab['nom']);
  }
  choiceEnvoi(choix:any){
    console.log("la valeur de son choix est :",choix)
    if(choix=='email'){
      this.choice1=false
    }
    else if(choix=="boite"){
      this.choice1=true;
    }

  }

}
