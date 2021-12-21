import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProfilEditorComponent } from './profil-editor/profil-editor.component';
import { BlogComponent } from './blog/blog.component';
import { FormglobComponent } from './formglob/formglob.component';
import { FormulaireDynamiqueComponent } from './formulaire-dynamique/formulaire-dynamique.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProfilEditorComponent,
    BlogComponent,
    FormglobComponent,
    FormulaireDynamiqueComponent,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
