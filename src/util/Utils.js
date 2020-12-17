const getImageByType = (arrImages, type) => (
    arrImages.find(img => img.type === type)
)

const KeyCodes = {
    KEY_UP: 38,
    KEY_DOWN: 40,
    KEY_RIGHT: 39,
    KEY_LEFT: 37,
    ESC: 27,
    ENTER: 13,
    ENTER_MAC: 76,
    BACK: 413,
    BACK_LG: 461,
    BACK_SAMSUNG: 10009,
    FORWARD: 417,
    REWIND: 412,
    BLUE_BUTTON: 406,
    GREEN_BUTTON: 404,
    DOT: 190,
    BACKSPACE: 8,
    PLAY: [415, 71, 33, 179, 10252],
    PAUSE: [19, 74, 34, 179, 10252],
    SPACE: 32,
}

export { getImageByType, KeyCodes };