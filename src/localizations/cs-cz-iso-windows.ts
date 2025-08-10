import {isoPhysicalLayout} from '../physicalLayouts';
import type {KeyboardLayout} from '../types';

export const csCzIsoWindows: KeyboardLayout = {
  "label": "Czech (Czech Republic) - ISO (windows)",
  "id": "cs-cz-iso-windows",
  "os": "windows",
  "logical": {
    "Backquote": {
      "chars": [
        {
          "char": ";",
          "modifiers": [
            []
          ]
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
    "Digit1": {
      "chars": [
        {
          "char": "+",
          "modifiers": [
            []
          ]
        },
        {
          "char": "1",
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
          "char": "ě",
          "modifiers": [
            []
          ]
        },
        {
          "char": "2",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        },
        {
          "char": "Ě",
          "modifiers": [
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "Digit3": {
      "chars": [
        {
          "char": "š",
          "modifiers": [
            []
          ]
        },
        {
          "char": "3",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        },
        {
          "char": "Š",
          "modifiers": [
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "Digit4": {
      "chars": [
        {
          "char": "č",
          "modifiers": [
            []
          ]
        },
        {
          "char": "4",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        },
        {
          "char": "Č",
          "modifiers": [
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
          "char": "ř",
          "modifiers": [
            []
          ]
        },
        {
          "char": "5",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        },
        {
          "char": "Ř",
          "modifiers": [
            [
              "CapsLock"
            ]
          ]
        },
        {
          "char": "˘",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ]
        },
        {
          "char": "°",
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
          "char": "ž",
          "modifiers": [
            []
          ]
        },
        {
          "char": "6",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        },
        {
          "char": "Ž",
          "modifiers": [
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
          "char": "ý",
          "modifiers": [
            []
          ]
        },
        {
          "char": "7",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        },
        {
          "char": "Ý",
          "modifiers": [
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "Digit8": {
      "chars": [
        {
          "char": "á",
          "modifiers": [
            []
          ]
        },
        {
          "char": "8",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        },
        {
          "char": "Á",
          "modifiers": [
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "Digit9": {
      "chars": [
        {
          "char": "í",
          "modifiers": [
            []
          ]
        },
        {
          "char": "9",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        },
        {
          "char": "Í",
          "modifiers": [
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "Digit0": {
      "chars": [
        {
          "char": "é",
          "modifiers": [
            []
          ]
        },
        {
          "char": "0",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        },
        {
          "char": "É",
          "modifiers": [
            [
              "CapsLock"
            ]
          ]
        }
      ]
    },
    "Minus": {
      "chars": [
        {
          "char": "=",
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
          "char": "\\",
          "modifiers": [
            [
              "AltRight",
              "ControlLeft"
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
          "char": "|",
          "modifiers": [
            [
              "AltRight",
              "ControlLeft"
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
          "char": "ě",
          "modifiers": [
            []
          ],
          "sequence": "ShiftLeft+Equal+KeyE"
        },
        {
          "char": "é",
          "modifiers": [
            []
          ],
          "sequence": "Equal+KeyE"
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
          "sequence": "Backslash+KeyE"
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
        },
        {
          "char": "ŕ",
          "modifiers": [
            []
          ],
          "sequence": "Equal+KeyR"
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
        },
        {
          "char": "ź",
          "modifiers": [
            []
          ],
          "sequence": "Equal+KeyY"
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
            []
          ],
          "sequence": "Equal+KeyU"
        },
        {
          "char": "ü",
          "modifiers": [
            []
          ],
          "sequence": "Backslash+KeyU"
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
            []
          ],
          "sequence": "Equal+KeyI"
        },
        {
          "char": "ï",
          "modifiers": [
            []
          ],
          "sequence": "Backslash+KeyI"
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
            []
          ],
          "sequence": "Equal+KeyO"
        },
        {
          "char": "ö",
          "modifiers": [
            []
          ],
          "sequence": "Backslash+KeyO"
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
          "char": "ú",
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
        },
        {
          "char": "Ú",
          "modifiers": [
            [
              "CapsLock"
            ]
          ]
        },
        {
          "char": "÷",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ]
        }
      ]
    },
    "BracketRight": {
      "chars": [
        {
          "char": ")",
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
        },
        {
          "char": "×",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ]
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
          "char": "ä",
          "modifiers": [
            []
          ],
          "sequence": "Backslash+KeyA"
        },
        {
          "char": "á",
          "modifiers": [
            []
          ],
          "sequence": "Equal+KeyA"
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
        },
        {
          "char": "ś",
          "modifiers": [
            []
          ],
          "sequence": "Equal+KeyS"
        },
        {
          "char": "đ",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
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
        },
        {
          "char": "Đ",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
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
        },
        {
          "char": "ł",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
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
        },
        {
          "char": "ĺ",
          "modifiers": [
            []
          ],
          "sequence": "Equal+KeyL"
        },
        {
          "char": "Ł",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ]
        }
      ]
    },
    "Semicolon": {
      "chars": [
        {
          "char": "ů",
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
          "char": "Ů",
          "modifiers": [
            [
              "CapsLock"
            ]
          ]
        },
        {
          "char": "$",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ]
        }
      ]
    },
    "Quote": {
      "chars": [
        {
          "char": "§",
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
          "char": "ß",
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
          "char": "̈",
          "modifiers": [
            []
          ],
          "isDead": true
        },
        {
          "char": "'",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        },
        {
          "char": "¤",
          "modifiers": [
            [
              "AltRight",
              "ControlLeft"
            ]
          ]
        }
      ]
    },
    "KeyZ": {
      "chars": [
        {
          "char": "ÿ",
          "modifiers": [
            []
          ],
          "sequence": "Backslash+KeyZ"
        },
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
          "char": "ý",
          "modifiers": [
            []
          ],
          "sequence": "Equal+KeyZ"
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
        },
        {
          "char": "ć",
          "modifiers": [
            []
          ],
          "sequence": "Equal+KeyC"
        },
        {
          "char": "&",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
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
        },
        {
          "char": "ń",
          "modifiers": [
            []
          ],
          "sequence": "Equal+KeyN"
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
          "char": "?",
          "modifiers": [
            [
              "ShiftLeft"
            ]
          ]
        },
        {
          "char": "<",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
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
        },
        {
          "char": ">",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
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
        },
        {
          "char": "*",
          "modifiers": [
            [
              "ControlLeft",
              "AltRight"
            ]
          ]
        }
      ]
    },
    "Equal": {
      "chars": [
        {
          "char": "̌",
          "modifiers": [
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
        }
      ]
    }
  },
  "physical": isoPhysicalLayout
}