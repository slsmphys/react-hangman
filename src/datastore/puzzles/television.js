const games = [
  "Breaking Bad",
  "Planet Earth",
  "Blue Planet",
  "The Sopranos",
  "Game of Thrones",
  "Rick and Morty",
  "The Twilight Zone",
  "The Office",
  "Better Call Saul",
  "Death in Paradise",
  "Frozen Planet",
  "Only Fools and Horses",
  "Taskmaster",
  "Friends",
  "Monty Python's Flying Circus",
  "The West Wing",
  "Fawlty Towers",
  "Dexter",
  "Pride and Prejudice",
  "Blackadder Goes Forth",
  "Twin Peaks",
  "Black Mirror",
  "South Park",
  "Peaky Blinders",
  "Call the Midwife",
  "The Last of Us",
  "The Boys",
  "Fleabag",
  "Battlestar Galactica",
  "The A-Team",
  "Downton Abbey",
  "The Simpsons",
  "Stranger Things",
  "Star Trek: The Next Generation",
  "Top Gear",
  "The Mandalorian",
  "The X-Files",
  "Daredevil",
  "Blackadder II",
  "Mr. Bean",
  "Blackadder the Third",
  "Yes, Minister",
  "Yes, Prime Minister",
  "The IT Crowd",
  "Mr. Robot",
  "Happy Valley",
  "Doctor Who",
  "Open All Hours",
  "Are You Being Served?",
  "Air Crash Investigations",
  "Most Haunted",
  "Star Trek",
  "Blackadder",
  "Buffy the Vampire Slayer",
  "Danger Mouse", 
  "The Punisher",
  "Count Duckula",
  "He-Man and the Masters of the Universe",
  'Have I Got News For You'
]

const television = () => games.map(game => ({
  game,
  hint: 'television'
}))

export default television