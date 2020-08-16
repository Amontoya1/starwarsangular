import { RouterModule } from '@angular/router'
import { AppRoutingModule} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentesModule } from './componentes/componentes.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';





@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    ComponentesModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,








],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
