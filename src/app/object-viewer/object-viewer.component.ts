import { XmlObjectType } from './../data';
import { Component, OnInit, Input, ContentChildren, QueryList, ViewChildren } from '@angular/core';
import { XmlTypes } from '../data';

@Component({
  selector: 'app-object-viewer',
  templateUrl: './object-viewer.component.html',
  styleUrls: ['./object-viewer.component.css']
})
export class ObjectViewerComponent implements OnInit {

  Object = Object;

  @Input() data;
  type: XmlObjectType;

  argTypeDict;
  arrayTypeDict;

  collapsed = true;

  @ViewChildren('objChildren') objChildren: QueryList<ObjectViewerComponent>;

  constructor(
    private xmlTypes: XmlTypes
  ) { }

  ngOnInit() {
    this.type = this.xmlTypes.types[this.data.name];

    this.argTypeDict = {};
    if ('args' in this.type) {
      for (const atype of this.type.args) {
        if ('name' in atype) {
          this.argTypeDict[atype.name] = atype;
        } else {
          this.argTypeDict[atype.type] = atype;
        }
      }
    }

    this.arrayTypeDict = {};
    if ('array' in this.type) {
      for (const atype of this.type.array) {
        if ('name' in atype) {
          this.arrayTypeDict[atype.name] = atype;
        } else {
          this.arrayTypeDict[atype.type] = atype;
        }
      }
    }
  }

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  expandRecursive(e) {
    if (e) {
      e.stopPropagation();
    }

    this.collapsed = false;

    setTimeout(function() {
      this.objChildren.forEach(c => {
        c.expandRecursive(null);
      });
    }.bind(this));
  }

}
