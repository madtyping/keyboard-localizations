import {isoPhysicalLayout} from '../physicalLayouts';
import type {KeyboardLayout} from '../types';


export const enUkIsoWindows: KeyboardLayout = {
  "label": "English (UK) - ISO (windows)",
  "id": "en-uk-iso-windows",
  "os": "windows",
  "logical": {
    "Backquote": {
      "chars": [
        {
          "char": "`",
          "modifiers": [
            []
          ]
        },
        {
          "char": "¬",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        },
        {
          "char": "¦",
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
          "char": "£",
          "modifiers": [
            [
              "ShiftLeft"
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
          "char": "^",
          "modifiers": [
            [
              "ShiftLeft"
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
          "char": "&",
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
          "char": "*",
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
          "char": "(",
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
          "char": ")",
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
    },
    "Equal": {
      "chars": [
        {
          "char": "=",
          "modifiers": [
            []
          ]
        },
        {
          "char": "+",
          "modifiers": [
            [
              "ShiftLeft"
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
        },
        {
          "char": "́",
          "modifiers": [
            [
              "AltGraph"
            ]
          ],
          "isDead": true
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
          "char": "é",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ],
          "sequence": "AltGraph+KeyW+KeyE"
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
    "KeyY": {
      "chars": [
        {
          "char": "y",
          "modifiers": [
            []
          ]
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
        },
        {
          "char": "́",
          "modifiers": [
            [
              "AltGraph"
            ]
          ],
          "isDead": true
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
          "char": "U",
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
          "char": "ú",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ],
          "sequence": "AltGraph+KeyY+KeyU"
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
          "char": "I",
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
          "char": "í",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ]
        }
      ]
    },
    "KeyO": {
      "chars": [
        {
          "char": "o",
          "modifiers": [
            []
          ]
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
        },
        {
          "char": "ó",
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
    "BracketLeft": {
      "chars": [
        {
          "char": "[",
          "modifiers": [
            []
          ]
        },
        {
          "char": "{",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        }
      ]
    },
    "BracketRight": {
      "chars": [
        {
          "char": "]",
          "modifiers": [
            []
          ]
        },
        {
          "char": "}",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        },
        {
          "char": "́",
          "modifiers": [
            [
              "AltGraph"
            ]
          ],
          "isDead": true
        }
      ]
    },
    "KeyA": {
      "chars": [
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
        },
        {
          "char": "á",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ],
          "sequence": "AltGraph+BracketRight+KeyA"
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
          "char": ";",
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
    "Quote": {
      "chars": [
        {
          "char": "'",
          "modifiers": [
            []
          ]
        },
        {
          "char": "@",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        }
      ]
    },
    "Backslash": {
      "chars": [
        {
          "char": "#",
          "modifiers": [
            []
          ]
        },
        {
          "char": "~",
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
    "IntlBackslash": {
      "chars": [
        {
          "char": "\\",
          "modifiers": [
            []
          ]
        },
        {
          "char": "|",
          "modifiers": [
            [
              "ShiftLeft"
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
          "char": "<",
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
          "char": ">",
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
          "char": "/",
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
    }
  },
  "physical": isoPhysicalLayout
}
