import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
color :boolean=false;
blog=[
  {name:"Mon Premier post",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
  {name:"Mon deuxieme Post",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"},
  {name:"Mon Troisieme Post",content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
]
  constructor() { }

  ngOnInit(): void {
  }
 getRed(){
  this.color=false;
 // alert('post dislike');
 };
 getGreen(){
   this.color=true;
   //alert('Post like');
 }
}
