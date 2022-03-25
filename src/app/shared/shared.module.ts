import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectPipe } from './pipes/specie-filter-pipe/specie-filter-pipe.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';



@NgModule({
  declarations: [
    SelectPipe,
    DropDownComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SelectPipe,
    DropDownComponent
  ]
})
export class SharedModule { }
