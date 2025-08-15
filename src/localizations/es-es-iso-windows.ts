import {isoPhysicalLayout} from '../physicalLayouts';
import type {KeyboardLayout} from '../types';


export const esEsIsoWindows: KeyboardLayout = {
  "label": "Spanish (Spain) - ISO (windows)",
  "id": "es-es-iso-windows",
  "os": "windows",
  "logical": {
    "BracketRight": {
      "chars": [
        {
          "char": "+",
          "modifiers": [
            []
          ]
        },
        {
          "char": "*",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        },
        {
          "char": "]",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ]
        }
      ]
    },
    "KeyP": {
      "chars": [
        {
          "char": "p",
          "modifiers": [
            []
          ]
        },
        {
          "char": "P",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyE": {
      "chars": [
        {
          "char": "e",
          "modifiers": [
            []
          ]
        },
        {
          "char": "è",
          "modifiers": [
            []
          ],
          "sequence": "BracketLeft+KeyE"
        },
        {
          "char": "E",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        },
        {
          "char": "ë",
          "modifiers": [
            []
          ],
          "sequence": "ShiftLeft+Quote+KeyE"
        },
        {
          "char": "€",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ]
        }
      ]
    },
    "KeyR": {
      "chars": [
        {
          "char": "r",
          "modifiers": [
            []
          ]
        },
        {
          "char": "R",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyI": {
      "chars": [
        {
          "char": "i",
          "modifiers": [
            []
          ]
        },
        {
          "char": "í",
          "modifiers": [
            []
          ],
          "sequence": "Quote+KeyI"
        },
        {
          "char": "I",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyU": {
      "chars": [
        {
          "char": "u",
          "modifiers": [
            []
          ]
        },
        {
          "char": "ù",
          "modifiers": [
            []
          ],
          "sequence": "BracketLeft+KeyU"
        },
        {
          "char": "ú",
          "modifiers": [
            []
          ],
          "sequence": "Quote+KeyU"
        },
        {
          "char": "U",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "BracketLeft": {
      "chars": [
        {
          "char": "̀",
          "modifiers": [
            []
          ],
          "isDead": true
        },
        {
          "char": "̃",
          "modifiers": [
            []
          ],
          "isDead": true
        },
        {
          "char": "̧",
          "modifiers": [
            []
          ],
          "isDead": true
        },
        {
          "char": "[",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ]
        }
      ]
    },
    "KeyY": {
      "chars": [
        {
          "char": "y",
          "modifiers": [
            []
          ]
        },
        {
          "char": "ý",
          "modifiers": [
            []
          ],
          "sequence": "Quote+KeyY"
        },
        {
          "char": "Y",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyT": {
      "chars": [
        {
          "char": "t",
          "modifiers": [
            []
          ]
        },
        {
          "char": "T",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyO": {
      "chars": [
        {
          "char": "ò",
          "modifiers": [
            []
          ],
          "sequence": "BracketLeft+KeyO"
        },
        {
          "char": "o",
          "modifiers": [
            []
          ]
        },
        {
          "char": "ó",
          "modifiers": [
            []
          ],
          "sequence": "Quote+KeyO"
        },
        {
          "char": "O",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyQ": {
      "chars": [
        {
          "char": "q",
          "modifiers": [
            []
          ]
        },
        {
          "char": "Q",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyW": {
      "chars": [
        {
          "char": "w",
          "modifiers": [
            []
          ]
        },
        {
          "char": "W",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyA": {
      "chars": [
        {
          "char": "à",
          "modifiers": [
            []
          ],
          "sequence": "BracketLeft+KeyA"
        },
        {
          "char": "a",
          "modifiers": [
            []
          ]
        },
        {
          "char": "A",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyS": {
      "chars": [
        {
          "char": "s",
          "modifiers": [
            []
          ]
        },
        {
          "char": "S",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyD": {
      "chars": [
        {
          "char": "d",
          "modifiers": [
            []
          ]
        },
        {
          "char": "D",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyF": {
      "chars": [
        {
          "char": "f",
          "modifiers": [
            []
          ]
        },
        {
          "char": "F",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyG": {
      "chars": [
        {
          "char": "g",
          "modifiers": [
            []
          ]
        },
        {
          "char": "G",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyH": {
      "chars": [
        {
          "char": "h",
          "modifiers": [
            []
          ]
        },
        {
          "char": "H",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyJ": {
      "chars": [
        {
          "char": "j",
          "modifiers": [
            []
          ]
        },
        {
          "char": "J",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyK": {
      "chars": [
        {
          "char": "k",
          "modifiers": [
            []
          ]
        },
        {
          "char": "K",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyL": {
      "chars": [
        {
          "char": "l",
          "modifiers": [
            []
          ]
        },
        {
          "char": "L",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "Semicolon": {
      "chars": [
        {
          "char": "ñ",
          "modifiers": [
            []
          ],
          "sequence": "BracketLeft+Semicolon"
        },
        {
          "char": "Ñ",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "Backslash": {
      "chars": [
        {
          "char": "ç",
          "modifiers": [
            []
          ],
          "sequence": "Quote+Backslash"
        },
        {
          "char": "Ç",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ],
          "sequence": "Quote+Backslash"
        },
        {
          "char": "}",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ]
        }
      ]
    },
    "Backquote": {
      "chars": [
        {
          "char": "º",
          "modifiers": [
            []
          ]
        },
        {
          "char": "ª",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        },
        {
          "char": "\\",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ]
        }
      ]
    },
    "Digit1": {
      "chars": [
        {
          "char": "1",
          "modifiers": [
            []
          ]
        },
        {
          "char": "!",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        },
        {
          "char": "|",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ]
        }
      ]
    },
    "Digit2": {
      "chars": [
        {
          "char": "2",
          "modifiers": [
            []
          ]
        },
        {
          "char": "\"",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        },
        {
          "char": "@",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ]
        }
      ]
    },
    "Digit3": {
      "chars": [
        {
          "char": "3",
          "modifiers": [
            []
          ]
        },
        {
          "char": "·",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        },
        {
          "char": "#",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ]
        }
      ]
    },
    "Digit4": {
      "chars": [
        {
          "char": "4",
          "modifiers": [
            []
          ]
        },
        {
          "char": "$",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        }
      ]
    },
    "Digit5": {
      "chars": [
        {
          "char": "5",
          "modifiers": [
            []
          ]
        },
        {
          "char": "%",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        },
        {
          "char": "~",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ]
        },
        {
          "char": "€",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ]
        }
      ]
    },
    "Digit6": {
      "chars": [
        {
          "char": "6",
          "modifiers": [
            []
          ]
        },
        {
          "char": "&",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        },
        {
          "char": "¬",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ]
        }
      ]
    },
    "Digit7": {
      "chars": [
        {
          "char": "7",
          "modifiers": [
            []
          ]
        },
        {
          "char": "/",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        }
      ]
    },
    "Digit8": {
      "chars": [
        {
          "char": "8",
          "modifiers": [
            []
          ]
        },
        {
          "char": "(",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        }
      ]
    },
    "Digit9": {
      "chars": [
        {
          "char": "9",
          "modifiers": [
            []
          ]
        },
        {
          "char": ")",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        }
      ]
    },
    "Digit0": {
      "chars": [
        {
          "char": "0",
          "modifiers": [
            []
          ]
        },
        {
          "char": "=",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        }
      ]
    },
    "Minus": {
      "chars": [
        {
          "char": "'",
          "modifiers": [
            []
          ]
        },
        {
          "char": "?",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        }
      ]
    },
    "Equal": {
      "chars": [
        {
          "char": "¡",
          "modifiers": [
            []
          ]
        },
        {
          "char": "¿",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        }
      ]
    },
    "Quote": {
      "chars": [
        {
          "char": "̧",
          "modifiers": [
            [],
            [
              "ShiftLeft"
            ]
          ],
          "isDead": true
        },
        {
          "char": "́",
          "modifiers": [
            []
          ],
          "isDead": true
        },
        {
          "char": "̈",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ],
          "isDead": true
        },
        {
          "char": "{",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ]
        }
      ]
    },
    "KeyZ": {
      "chars": [
        {
          "char": "z",
          "modifiers": [
            []
          ]
        },
        {
          "char": "Z",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyX": {
      "chars": [
        {
          "char": "x",
          "modifiers": [
            []
          ]
        },
        {
          "char": "X",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyC": {
      "chars": [
        {
          "char": "c",
          "modifiers": [
            []
          ]
        },
        {
          "char": "C",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "IntlBackslash": {
      "chars": [
        {
          "char": "<",
          "modifiers": [
            []
          ]
        },
        {
          "char": ">",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        }
      ]
    },
    "KeyV": {
      "chars": [
        {
          "char": "v",
          "modifiers": [
            []
          ]
        },
        {
          "char": "V",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyB": {
      "chars": [
        {
          "char": "b",
          "modifiers": [
            []
          ]
        },
        {
          "char": "B",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyN": {
      "chars": [
        {
          "char": "n",
          "modifiers": [
            []
          ]
        },
        {
          "char": "N",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "KeyM": {
      "chars": [
        {
          "char": "m",
          "modifiers": [
            []
          ]
        },
        {
          "char": "M",
          "modifiers": [
            [
              "ShiftLeft"
            ],
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "Comma": {
      "chars": [
        {
          "char": ",",
          "modifiers": [
            []
          ]
        },
        {
          "char": ";",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        }
      ]
    },
    "Period": {
      "chars": [
        {
          "char": ".",
          "modifiers": [
            []
          ]
        },
        {
          "char": ":",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        }
      ]
    },
    "Slash": {
      "chars": [
        {
          "char": "-",
          "modifiers": [
            []
          ]
        },
        {
          "char": "_",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        }
      ]
    }
  },
  "physical": isoPhysicalLayout
}
