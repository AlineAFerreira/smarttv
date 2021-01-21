//ELIGIBILITY BUTTONS
const ActionButtons = {
  eligible: {
    label: 'Assistir',
    icon: 'player-play'
  },
  'shopping-cart': {
    label: 'Alugar',
    icon: 'shopping-cart'
  },
  locker: {
    label: 'Quero Assistir',
    icon: 'lock'
  }
}

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

// MAIN MENU ITEMS
// To do: Rotas temporárias: Configuração de rotas
const MenuItems = [
  {
    label: 'Trocar Perfil',
    path: '/profile'
  },
  {
    label: 'Buscar',
    icon: 'sky-icon-line-magnifier',
    path: '/search'
  },
  {
    label: 'Início',
    icon: 'sky-icon-line-home',
    path: '/home'
  },
  {
    label: 'Ao Vivo',
    icon: 'sky-icon-line-live',
    path: '/live'
  },
  {
    label: 'Filmes',
    icon: 'sky-icon-line-filmroll',
    path: '/movies'
  },
  {
    label: 'Séries',
    icon: 'sky-icon-line-episodes',
    path: '/series'
  },
  {
    label: 'Canais',
    icon: 'sky-icon-line-tv',
    path: '/channels'
  },
  {
    label: 'Infantil',
    icon: 'sky-icon-line-infantil',
    path: '/kids'
  },
  {
    label: 'Configurações',
    icon: 'sky-icon-line-settings',
    path: '/settings'
  }
]

const getImageByType = (arrImages, type) => (
  arrImages.find(img => img.type === type)
) 

const getPercent = (n1, n2) => n1 / 100 * n2;

export { ActionButtons, KeyCodes, MenuItems, getImageByType, getPercent };
