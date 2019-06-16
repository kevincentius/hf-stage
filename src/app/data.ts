import { Injectable } from '@angular/core';

export interface XmlPrimitiveType {
  name: string;
  type: string;
  default: any;
  choices?: {value: any, name: string}[];
}

export interface XmlObjectType {
  args: any[];
  array: any[];
}

@Injectable({
  providedIn: 'root'
})
export class XmlTypes {

  facingChoice = {
    name: 'f',
    type: 'choice',
    default: 0,
    choices: [
      { value: 0, name: 'Right' },
      { value: 1, name: 'Left' }
    ]
  };

  arrayTypes = [
    { 'story': [] }
  ];

  types = {
    story: {
      args: [{
        name: 'storyid',
        type: 'string',
        required: true,
        default: 'story01'
      }, {
        name: 'storylevel',
        type: 'int',
        required: true,
        default: 1
      }],
      array: [{
        type: 'bar'
      }]
    },

    bar: {
      args: [{
        name: 'bgm',
        type: 'choice',
        default: '13.mp3',
        choices: [
          { value: 'off', name: 'OFF' },
          { value: '01.mp3', name: 'Music #1' },
          { value: '02.mp3', name: 'Music #2' },
          { value: '03.mp3', name: 'Music #3' },
          { value: '04.mp3', name: 'Music #4' },
          { value: '05.mp3', name: 'Music #5' },
          { value: '06.mp3', name: 'Music #6' },
          { value: '07.mp3', name: 'Music #7' },
          { value: '08.mp3', name: 'Music #8' },
          { value: '09.mp3', name: 'Music #9' },
          { value: '10.mp3', name: 'Music #10' },
          { value: '11.mp3', name: 'Music #11' },
          { value: '12.mp3', name: 'Big 3 theme' },
          { value: '13.mp3', name: 'Romance' }
        ]
      }, {
        type: 'bg'
      }, {
        name: 'left',
        type: 'int',
        default: 0
      }, {
        name: 'right',
        type: 'int',
        default: 20400
      }],

      array: [{
        name: 'effect',
        type: 'choice',
        default: 'showTitle',
        choices: [
          // TODO: complete choice
          { value: 'showTitle', name: 'Show title' },
          { value: 'fadeToBlack', name: 'Fade to black' },
          { value: 'fadeFromBlack', name: 'Fade from black' },
          { value: 'storyend', name: 'End of story'}
        ]
      }, {
        type: 'drama'
      }, {
        type: 'obj'
      }]
    },

    bg: {
      shortDesc: 'background',
      args: [{
        name: 'bgid',
        type: 'choice',
        required: true,
        default: 'story03b',
        choices: [
          // TODO: complete choice
          { value: 'battle2', name: '2 Teams Battle map' },
          { value: 'story03b', name: 'Outside and entrance of Temple of Hero' }
        ]
      }, {
        name: 'x',
        type: 'int',
        default: 20000
      }, {
        name: 'y',
        type: 'int',
        default: 0
      }, {
        name: 'z',
        type: 'int',
        default: 810
      }, {
        name: 'facing',
        type: 'choice',
        default: 0,
        choices: [
          { value: 0, name: 'Right' },
          { value: 1, name: 'Left' }
        ]
      }]
    },

    drama: {
      args: [{
        name: 'state',
        type: 'choice',
        default: 'start',
        choices: [
          { value: 'start', name: 'Start' },
          { value: 'start_add_half_hp', name: 'Recover and start' },
          { value: 'end', name: 'End' }
        ]
      }],

      array: [{
        type: 'o'
      }, {
        type: 'a'
      }]
    },

    o: {
      shortDesc: 'create object',
      args: [{
        name: 's',
        shortDesc: 'character',
        type: 'choice',
        required: true,
        default: 'lucas',
        choices: [
          // TODO: complete choice
          { value: 'lucas', name: 'Lucas' },
          { value: 'z_bandit01', name: 'Bandit' }
        ]
      }, {
        name: 'id',
        type: 'string',
        default: null
      }, {
        name: 'a',
        shortDesc: 'skin',
        type: 'choice',
        default: null,
        choices: [
          { value: 'a', name: 'a' },
          { value: 'b', name: 'b' },
          { value: 'c', name: 'c' },
          { value: 'd', name: 'd' },
          { value: 'e', name: 'e' },
          { value: 'f', name: 'f' }
        ]
      }, {
        name: 'rid',
        shortDesc: 'rideable id',
        type: 'string',
        default: '<id_of_rideable_object>'
      }, this.facingChoice, {
        name: 'x',
        type: 'int',
        required: true,
        default: 19350
      }, {
        name: 'y',
        type: 'int',
        default: 0
      }, {
        name: 'z',
        type: 'int',
        required: true,
        default: 810
      }, {
        name: 'c',
        shortDesc: 'camera behavior',
        type: 'choice',
        default: null,
        choices: [
          { value: '-2', name: 'Follow' },
          { value: '-3', name: 'Ignore' }
        ]
      }]
    },

    a: {
      shortDesc: 'action',
      args: [{
        name: 'id',
        type: 'string',
        default: null
      }, {
        name: 'ac',
        type: 'choice',
        default: 'drama_attack',
        choices: [
          // TODO: complete choice
          { value: 'drama_attack', name: 'drama_attack' },
          { value: 'heal', name: 'heal' },
          { value: 'run', name: 'run' },
        ]
      }, {
        name: 'wac',
        type: 'choice',
        default: 'drama_attack',
        choices: [
          // TODO: complete choice
          { value: 'drama_attack', name: 'drama_attack' },
          { value: 'stand', name: 'stand' },
          { value: 'run', name: 'run' },
        ]
      }, this.facingChoice, {
        name: 'x',
        type: 'int',
        default: 19900
      }, {
        name: 'z',
        type: 'int',
        default: 1000
      }],

      array: [{
        type: 't'
      }, {
        type: 'a'
      }]
    },

    t: {
      shortDesc: 'show text',
      args: [{
        name: 's',
        type: 'string',
        default: null
      }, {
        name: 'en',
        type: 'string',
        required: true,
        default: 'Pudding of the Universe'
      }, {
        name: 'b5',
        type: 'string',
        required: true,
        default: '宇宙的布丁'
      }, {
        // TODO: auto increment
        name: 'i',
        type: 'int',
        required: true,
        default: 10
      }]
    },

    obj: {
      shortDesc: 'create enemy',
      args: [{
        name: 'id',
        type: 'choice',
        required: true,
        default: 'z_bandit01',
        choices: [
          { value: 'z_bandit01', name: 'Bandit' },
          { value: 'z_sorcerer01', name: 'Sorcerer' },
          { value: 'lucas', name: 'Lucas' },
        ]
      }, {
        name: 'hp',
        type: 'int',
        default: 120
      }, {
        name: 'times',
        type: 'int',
        default: null
      }, {
        name: 'ratio',
        type: 'int',
        default: null
      }, {
        name: 'grp',
        shortDesc: 'boss',
        type: 'int',
        default: null
      }, {
        name: 'bossGrp',
        shortDesc: 'soldier',
        type: 'int',
        default: null
      }, {
        name: 'po',
        shortDesc: 'drop potion',
        type: 'choice',
        default: null,
        choices: [
          { value: 'potion_red', name: 'Health potion' }
        ]
      }, {
        name: 'a',
        shortDesc: 'skin',
        type: 'choice',
        default: null,
        choices: [
          { value: 'a', name: 'a' },
          { value: 'b', name: 'b' },
          { value: 'c', name: 'c' },
          { value: 'd', name: 'd' },
          { value: 'e', name: 'e' },
          { value: 'f', name: 'f' }
        ]
      }, {
        name: 'h',
        shortDesc: 'riding',
        type: 'choice',
        default: null,
        choices: [
          { value: 'p', name: 'Horse (rideable)' },
          { value: 'o', name: 'Horse (not rideable)' },
          { value: 'pm', name: 'Dinosaur (rideable)' },
          { value: 'om', name: 'Dinosaur (not rideable)' },
          { value: 'pt', name: 'Triceratops (rideable)' },
          { value: 'ot', name: 'Triceratops (not rideable)' }
        ]
      }, {
        name: 'toHire',
        type: 'choice',
        default: null,
        choices: [{ value: '', name: 'enabled' }]
      }, {
        name: 'facing',
        type: 'choice',
        default: 0,
        choices: [
          { value: 0, name: 'Right' },
          { value: 1, name: 'Left' }
        ]
      }, {
        name: 'x',
        type: 'int',
        default: 20000
      }, {
        name: 'y',
        type: 'int',
        default: 0
      }, {
        name: 'z',
        type: 'int',
        default: 980
      }]
    }
  };

}
