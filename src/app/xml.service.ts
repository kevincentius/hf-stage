import { XmlTypes, XmlPrimitiveType, XmlObjectType } from './data';
import { Injectable } from '@angular/core';

declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class XmlService {
  constructor(
    private xmlTypes: XmlTypes
  ) {}

  parse(xml: string) {
    const dom = new DOMParser().parseFromString(xml, 'text/xml');
    return this.parseRec(dom.documentElement);
  }

  parseRec(elm: Node) {
    const obj: any = { args: {}, array: [] };
    obj.name = elm.nodeName;

    if (obj.name in this.xmlTypes.types) {
      const rtype = this.xmlTypes.types[obj.name];
      if ('type' in rtype) {
        const type: XmlPrimitiveType = rtype;

      } else {
        const type: XmlObjectType = rtype;
        for (let i = 0; i < elm.childNodes.length; i++) {
          const child = elm.childNodes.item(i);

          if (child.nodeName === '#text' || child.nodeName === '#comment' || child.nodeName === 'remark') {
            continue;
          }

          let found = false;

          // check if it is an arg
          if ('args' in type) {
            for (const arg of type.args) {
              if (arg.name === child.nodeName) {
                // TODO: convert text content to correct type
                obj.args[arg.name] = child.textContent;
                found = true;
                break;
              } else if (arg.name === undefined && arg.type === child.nodeName) {
                obj.args[arg.type] = this.parseRec(child);
                found = true;
                break;
              }
            }
            if (found) { continue; }
          }

          // check if it is a child
          if ('array' in type) {
            for (const arr of type.array) {
              if (arr.name === child.nodeName) {
                obj.array.push({
                  name: child.nodeName,
                  value: child.textContent
                });
                found = true;
                break;
              } else if (arr.name === undefined && arr.type === child.nodeName) {
                obj.array.push(
                  this.parseRec(child)
                );
                found = true;
                break;
              }
            }
            if (found) { continue; }
          }

          console.log('WARNING: unknown tag ' + child.nodeName + ' in', elm);
        }
      }

      return obj;
    } else {
      console.log('WARNING: unknown tag ' + obj.name);
      return null;
    }
  }

  dumps(obj) {
    const type: XmlObjectType = this.xmlTypes.types[obj.name];
    let str = '<' + obj.name + '>';

    // add args
    for (const k of Object.keys(obj.args)) {
      let found = false;
      for (const ctype of type.args) {
        if ('name' in ctype && ctype.name === k) {
          // primitive type
          str += '<' + k + '>' + obj.args[k] + '</' + k + '>';
          found = true;
          break;
        } else if (ctype.type === k) {
          // object type

          str += this.dumps(obj.args[k]);
          found = true;
          break;
        }
      }

      if (!found) {
        console.log('WARNING: unknown args key ' + k + ' in', obj, type);
      }
    }

    // add arrs
    if ('array' in obj) {
      for (const child of obj.array) {
        let found = false;
        for (const ctype of type.array) {
          if ('name' in ctype && ctype.name === child.name) {
            // primitive type
            str += '<' + child.name + '>' + child.value + '</' + child.name + '>';
            found = true;
            break;
          } else if (ctype.type === child.name) {
            // object type
            str += this.dumps(child);
            found = true;
            break;
          }
        }

        if (!found) {
          console.log('WARNING: unknown array key ' + child.name + ' in', obj, type);
        }
      }
    }
    str += '</' + obj.name + '>';
    return str;
  }

}
