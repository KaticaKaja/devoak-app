import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, DropdownComponent, FilterPipe, SortPipe],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports:[
    CommonModule,
    HeaderComponent, FooterComponent, DropdownComponent, FilterPipe, SortPipe
  ]
})
export class SharedModule { }
