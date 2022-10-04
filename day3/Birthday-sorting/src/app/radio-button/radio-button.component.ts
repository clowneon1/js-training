import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {

  @Output() operation = new EventEmitter<string>();
  option = "0"
  constructor() { }

  ngOnInit(): void {

  }

  emmitData(){
    this.operation.emit(this.option)
  }

}
