import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent {

  showOptions = false;
  @Input() placeholder: string = '';

  @Input() options: string[] = [];

  @Input() value: string = '';

  @Output()valueChange: EventEmitter<string> = new EventEmitter();

  select(value: string) {
    this.showOptions = !this.showOptions;
    this.valueChange.emit(value);
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  statusSelect(){
    return this.placeholder = (this.value !== '') ? this.value : this.placeholder;
  }

}
