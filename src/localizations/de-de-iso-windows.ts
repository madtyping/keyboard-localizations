import {isoPhysicalLayout} from '../physicalLayouts';
import type {KeyboardLayout} from '../types';

export const deDeIsoWindows: KeyboardLayout = {
  "label": "German (Germany) - ISO (windows)",
  "id": "de-de-iso-windows",
  "os": "windows",
  "logical": {
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
            ],
            [
              "CapsLock"
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
            ],
            [
              "CapsLock"
            ]
          ]
        },
        {
          "char": "²",
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
          "char": "§",
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
          "char": "³",
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
            ],
            [
              "CapsLock"
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
            ],
            [
              "CapsLock"
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
            ],
            [
              "CapsLock"
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
            ],
            [
              "CapsLock"
            ]
          ]
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
            ],
            [
              "CapsLock"
            ]
          ]
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
            ],
            [
              "CapsLock"
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
            ],
            [
              "CapsLock"
            ]
          ]
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
    "Minus": {
      "chars": [
        {
          "char": "ß",
          "modifiers": [
            []
          ]
        },
        {
          "char": "?",
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
    "KeyE": {
      "chars": [
        {
          "char": "e",
          "modifiers": [
            []
          ]
        },
        {
          "char": "ê",
          "modifiers": [
            []
          ],
          "sequence": "Backquote+KeyE"
        },
        {
          "char": "é",
          "modifiers": [
            []
          ],
          "sequence": "Equal+KeyE"
        },
        {
          "char": "è",
          "modifiers": [
            []
          ],
          "sequence": "ShiftLeft+Equal+KeyE"
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
    "Backquote": {
      "chars": [
        {
          "char": "̂",
          "modifiers": [
            []
          ],
          "isDead": true
        },
        {
          "char": "̈",
          "modifiers": [
            []
          ],
          "isDead": true
        },
        {
          "char": "°",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        }
      ]
    },
    "KeyI": {
      "chars": [
        {
          "char": "î",
          "modifiers": [
            []
          ],
          "sequence": "Backquote+KeyI"
        },
        {
          "char": "í",
          "modifiers": [
            []
          ],
          "sequence": "Equal+KeyI"
        },
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
        }
      ]
    },
    "KeyU": {
      "chars": [
        {
          "char": "û",
          "modifiers": [
            []
          ],
          "sequence": "Backquote+KeyU"
        },
        {
          "char": "ú",
          "modifiers": [
            []
          ],
          "sequence": "Equal+KeyU"
        },
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
        }
      ]
    },
    "KeyO": {
      "chars": [
        {
          "char": "ô",
          "modifiers": [
            []
          ],
          "sequence": "Backquote+KeyO"
        },
        {
          "char": "ó",
          "modifiers": [
            []
          ],
          "sequence": "Equal+KeyO"
        },
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
    "KeyA": {
      "chars": [
        {
          "char": "â",
          "modifiers": [
            []
          ],
          "sequence": "Backquote+KeyA"
        },
        {
          "char": "á",
          "modifiers": [
            []
          ],
          "sequence": "Equal+KeyA"
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
    "KeyZ": {
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
          "sequence": "Equal+KeyZ"
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
        },
        {
          "char": "µ",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
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
            ],
            [
              "CapsLock"
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
            ],
            [
              "CapsLock"
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
    },
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
            ],
            [
              "CapsLock"
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
        }
      ]
    },
    "BracketLeft": {
      "chars": [
        {
          "char": "ü",
          "modifiers": [
            []
          ],
          "sequence": "Equal+BracketLeft"
        },
        {
          "char": "Ü",
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
    "Equal": {
      "chars": [
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
            []
          ],
          "isDead": true
        },
        {
          "char": "̀",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ],
          "isDead": true
        }
      ]
    },
    "Semicolon": {
      "chars": [
        {
          "char": "ö",
          "modifiers": [
            []
          ],
          "sequence": "Equal+Semicolon"
        },
        {
          "char": "Ö",
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
    "Quote": {
      "chars": [
        {
          "char": "ä",
          "modifiers": [
            []
          ],
          "sequence": "Equal+Quote"
        },
        {
          "char": "Ä",
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
    "Backslash": {
      "chars": [
        {
          "char": "#",
          "modifiers": [
            []
          ]
        },
        {
          "char": "'",
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
    }
  },
  "physical": isoPhysicalLayout
}
