import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


import { AppComponent } from './app.component';
import { TaxComponent } from './tax/tax.component';




@NgModule({
  declarations: [
    AppComponent,
    TaxComponent,
   

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };
