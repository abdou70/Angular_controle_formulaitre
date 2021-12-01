import { Component, OnInit } from '@angular/core';
import { FormControl,FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

 name = new FormControl('Bonjour');
 var:string ="Abdou";

 isView :boolean =false;
 var1:string = "mon";
 visite="mon";
 montab=[
   {name:"Veuillez Choisir",value:"0"},
   {name: "Marier",value:"A"},
   {name:"Celibataire",value:"B"}

 ];
 monnom = "Formulaire de Controle .";
 //var1=document.getElementById("mon");
  constructor() { }

  ngOnInit(): void {
  }

  updatename(){
    this.name.setValue("Abdou");
  }
  
  getFirst(){
    this.isView=true;
    console.log("le view ",this.isView);
  }

  getChange(){
   
  this.var="modou";
  }

}
