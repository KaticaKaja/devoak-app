import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, DropdownComponent],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[
    CommonModule,
    HeaderComponent, FooterComponent, DropdownComponent
  ]
})
export class SharedModule { }
