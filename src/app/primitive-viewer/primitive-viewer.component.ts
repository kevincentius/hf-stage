import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { XmlPrimitiveType } from '../data';

@Component({
  selector: 'app-primitive-viewer',
  templateUrl: './primitive-viewer.component.html',
  styleUrls: ['./primitive-viewer.component.css']
})
export class PrimitiveViewerComponent implements OnInit {

  @Input() type: XmlPrimitiveType;

  @Output() updateValue = new EventEmitter();
  @Input() value;

  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelectChange(val) {
    this.value = val.split(/: (.+)/)[1];
    this.confirm();
  }

  confirm() {
    console.log(typeof(this.value));
    console.log(this.value);
    this.updateValue.emit(this.value);
  }

}
