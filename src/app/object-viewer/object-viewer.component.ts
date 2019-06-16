import { XmlObjectType } from './../data';
import { Component, OnInit, Input, QueryList, ViewChildren, Output, EventEmitter } from '@angular/core';
import { XmlTypes } from '../data';

@Component({
  selector: 'app-object-viewer',
  templateUrl: './object-viewer.component.html',
  styleUrls: ['./object-viewer.component.css']
})
export class ObjectViewerComponent implements OnInit {

  Object = Object;

  @Output() updateData = new EventEmitter();
  @Input() data;

  @Output() selectObject = new EventEmitter();
  @Output() delete = new EventEmitter();

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

    if (this.data.name !== 'story') {
      setTimeout(function() {
        this.objChildren.forEach(c => {
          c.expandRecursive(null);
        });
      }.bind(this));
    }
  }

  updateArg(key, value) {
    this.data.args[key] = value;
    this.updateObj();
  }

  updateArr(i, value) {
    this.data.array[i] = value;
    this.updateObj();
  }

  updateArrPrimitive(i, value) {
    this.data.array[i].value = value;
    this.updateObj();
  }

  updateObj() {
    this.updateData.emit(this.data);
  }

  selectThisObject(e) {
    console.log('this select', e);
    this.selectObject.emit({viewer: this, data: this.data});
  }

  selectChildObject(e) {
    console.log('child select', e);
    this.selectObject.emit(e);
  }

  addArg(argType) {
    if (argType.name === undefined) {
      this.data.args[argType.type] = {
        name: argType.type,
        args: {},
        array: []
      };
    } else {
      this.data.args[argType.name] = argType.default;
    }
  }

  addArr(argType) {
    if (argType.name === undefined) {
      this.data.array.push({
        name: argType.type,
        args: {},
        array: []
      });
    } else {
      this.data.array.push(argType.default);
    }
  }

  deleteArg(key) {
    delete this.data.args[key];
  }

  deleteArr(i) {
    this.data.array.splice(i, 1);
  }

  clickDelete(e) {
    e.stopPropagation();
    this.delete.emit();
  }
}
