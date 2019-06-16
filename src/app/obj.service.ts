import { Injectable } from '@angular/core';
import { XmlObjectType, XmlTypes } from './data';

@Injectable({
  providedIn: 'root'
})
export class ObjService {

  constructor(
    private xmlTypes: XmlTypes
  ) { }

  createObj(typeName: string) {
    const type = this.xmlTypes.types[typeName];
    const obj = {
      name: typeName,
      args: {},
      array: []
    };

    // add only required fields
    for (const argType of type.args) {
      if (argType.required) {
        obj.args[argType.name] = argType.default;
      }
    }

    console.log(obj);
    return obj;
  }

}
