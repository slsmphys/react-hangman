const RESULT_LOSE = 'LOSE'
const RESULT_WIN = 'WIN'
const START_LIVES = 5
const DEFAULT_HINT = ''
const AUTO_REVEAL_CHARACTERS = [ ' ', '&', '\'', '"', '-', '!', ';', ':', '(', ')', ',', '?']
const KEYBOARD_LAYOUT = [
  'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 
  '', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '',
  ' ', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ' '
]
const GAME_STATUS = {
  IN_PROGRESS: 'In Progress',
  GAME_OVER: 'Game Over'
}

export {
  RESULT_LOSE,
  RESULT_WIN,
  START_LIVES,
  DEFAULT_HINT,
  AUTO_REVEAL_CHARACTERS,
  KEYBOARD_LAYOUT,
  GAME_STATUS
}
