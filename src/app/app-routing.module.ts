import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { ProfilEditorComponent } from './profil-editor/profil-editor.component';


const routes: Routes = [
  {path:'' , component : CartComponent},
  {path: 'profile' , component : ProfilEditorComponent},
  {path:'blog', component:BlogComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
