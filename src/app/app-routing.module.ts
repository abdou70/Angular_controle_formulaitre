import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { FormglobComponent } from './formglob/formglob.component';
import { FormulaireDynamiqueComponent } from './formulaire-dynamique/formulaire-dynamique.component';
import { ProfilEditorComponent } from './profil-editor/profil-editor.component';


const routes: Routes = [
  {path:'' , component : CartComponent},
  {path: 'profile' , component : ProfilEditorComponent},
  {path:'blog', component:BlogComponent},
  {path:'formBlog',component:FormglobComponent},
  {path: 'formDynam',component:FormulaireDynamiqueComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
