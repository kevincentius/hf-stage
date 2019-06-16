import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { XmlPrimitiveType } from '../data';

@Component({
  selector: 'app-primitive-viewer',
  templateUrl: './primitive-viewer.component.html',
  styleUrls: ['./primitive-viewer.component.css']
})
export class PrimitiveViewerComponent implements OnInit {

  @Input() type: XmlPrimitiveType;

  @Output() valueChange = new EventEmitter();
  @Input() value;

  constructor() { }

  ngOnInit() {
    this.value = 'asdf';
  }

}
