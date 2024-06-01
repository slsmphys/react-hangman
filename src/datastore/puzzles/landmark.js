const games = [
  "The Great Wall of China",
  "The Great Pyramids of Giza",
  "The Acropolis",
  "Machu Piccu",
  "The Statue of Liberty",
  "The Taj Mahal",
  "The Eiffel Tower",
  "The Great Sphinx",
  "Mount Fiji",
  "Stonehenge",
  "The Elizabeth Tower / Big Ben",
  "Easter Island",
  "Capitol Hill Building",
  "The Leaning Tower of Pisa",
  "Niagara Falls",
  "Burj Khalifa",
  "Bran Castle",
  "Mount Everest",
  "Mecca",
  "Brandenberg Gate",
  "St. Peter's Basillica",
  "Mount Rushmore",
  "Victoria Falls",
  "The Grand Canyon",
  "Auschwitz",
  "Versailles",
  "The Trevi Fountain",
  "Sagrada Familia",
  "Table Mountain",
  "The Colosseum",
  "Golden Gate Bridge",
  "Sydney Opera House",
  "The Kremlin",
  "Mount Kilimanjaro",
  "The Empire State Building",
  "The Forbidden City",
  "Pompeii",
  "The Louvre",
  "Angel Falls",
  "Tower Bridge",
  "The Wailing Wall",
  "The White Cliff's of Dover",
  "The Hollywood Sign",
  "The Rock of Gibraltar",
  "Timbuktu",
  "Arc de Triomphe",
  "Tiananmen Square",
  "The White House",
  "Notre Dame",
  "Central Park",
  "Oxford University",
  "Cambridge University",
  "Harvard University",
  "Yale University",
  "The Space Needle",
  "Serengeti National Park",
  "Buckingham Palace",
  "The Giant's Causeway",
  "The Everglades National Park",
  "Canterbury Cathedral",
  "The Las Vegas Strip",
  "The Panama Canal",
  "Alcatraz Prison",
  "Windsor Castle",
  "Sear's Tower",
  "Edinburgh Castle",
  "The Brooklyn Bridge",
  "Times Square",
  "The Washington Monument",
  "Sydney Harbour Bridge",
  "The Shard",
  "Yellowstone National Park",
  "The Sistine Chapel",
  "The Roman Baths",
  "Trafalgar Square",
  "The Pantheon",
  "The Hoover Dam",
  "Lincoln Memorial",
  "The London Eye",
  "The Amazon Rainforest",
  "Hadrian's Wall",
  "The Chrysler Building",
  "Caernarfon Castle",
  "Vatican City",
  "The Great Barrier Reef",
  "The Tower on London",
  "London Bridge",
  "The Millenium Bridge",
  "Snowdon",
  "The Lake District",
  "Ben Nevis",
  "Portmeirion Village",
  "The Kelpies",
  "Blackpool Tower",
  "The Brecon Beacons",
  "Cardiff Castle",
  "Tintern Abbey",
  "Clifton Suspension Bridge",
  "St. Paul's Cathedral",
  "Caerphilly Castle",
  "Kew Gardens",
  "Westminster Abbey",
  "Angel of The North",
  "Land's End",
  "Forth Rail Bridge",
  "Loch Ness",
  "Stirling Castle",
  "Brighton Pier",
  "Blenheim Palace",
  "Glastonbury Tor",
  "Jodrell Bank Observatory",
  "Royal Observatory Greenwich",
  "Gretna Green",
  "The Liver Building",
  "Sherwood Forest",
  "The Palace of Westminster",
  "The Royal Albert Hall",
  "Hyde Park",
  "Kensington Palace",
  "Cheddar Gorge",
  "Wookey Hole",
  "Warwick Castle",
  "Salisbury Cathedral",
  "The Eden Project"
]

const landmark = () => games.map(game => ({
  game,
  hint: 'landmark'
}))

export default landmark