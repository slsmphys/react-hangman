import books from './puzzles/books'
import event from './puzzles/event'
import film from './puzzles/film'
import food from './puzzles/food'
import landmark from './puzzles/landmark'
import music from './puzzles/music'
import person from './puzzles/person'
import place from './puzzles/place'
import phrase from './puzzles/phrase'
import television from './puzzles/television'

export const games = [
  ...books(),
  ...event(),
  ...film(),
  ...food(),
  ...landmark(),
  ...music(),
  ...person(),
  ...place(),
  ...phrase(),
  ...television()
]
