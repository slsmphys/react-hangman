const games = [
  "Johnny Depp",
  "Arnold Schwarzenegger",
  "Jim Carrey",
  "Emma Watson",
  "Robert Downey JR",
  "Daniel Radcliffe",
  "Chris Evans",
  "Leonardo DiCaprio",
  "Tom Cruise",
  "Brad Pitt",
  "Charlie Chaplin",
  "Morgan Freeman",
  "Tom Hanks",
  "Hugh Jackman",
  "Matt Damon",
  "Sylvester Stallone",
  "Will Smith",
  "Clint Eastwood",
  "Cameron Diaz",
  "George Clooney",
  "Steven Spielberg",
  "Harrison Ford",
  "Robert De Nero",
  "Al Pacino",
  "Russell Crowe",
  "Liam Neeson",
  "Kate Winslet",
  "Mark Wahlberg",
  "Natalie Portman",
  "Pierce Brosnan",
  "Sean Connery",
  "Orlando Bloom",
  "Dwayne Johnson",
  "Jackie Chan",
  "Angelina Jolie",
  "Adam Sandler",
  "Scarlet Johansson",
  "Heath Ledger",
  "Anne Hathaway", 
  "Jessica Alba",
  "Edward Norton",
  "Keira Knightley",
  "Bradley Cooper",
  "Will Ferrell",
  "Julia Roberts",
  "Nicolas Cage",
  "Daniel Craig",
  "Keanu Reeves",
  "Ian McKellen",
  "Halle Berry",
  "Bruce Willis",
  "Samuel L. Jackson",
  "Ben Stiller",
  "Tommy Lee Jones",
  "Antonio Banderas",
  "Denzel Washington",
  "Steve Carell",
  "Shia LaBeouf",
  "Megan Fox",
  "James Franco",
  "Mel Gibson",
  "Vin Diesel",
  "Tim Allen",
  "Robin Williams",
  "Kevin Spacey",
  "Jason Biggs",
  "Sean William Scott",
  "Jean-Claude Van Damme",
  "Owen Wilson",
  "Christian Bale",
  "Sandra Bullock",
  "Bruce Lee",
  "Drew Barrymore",
  "Macaulay Culkin",
  "Jack Nicholson",
  "Bill Murray",
  "Sigourney Weaver",
  "Jake Gyllenhaal",
  "Jason Statham",
  "Jet Li",
  "Kate Beckinsale",
  "Rowan Atkinson",
  "Marlon Brando",
  "John Travolta",
  "Channing Tatum",
  "Ben Affleck",
  "Jennifer Aniston",
  "Emma Stone",
  "Chris Hemsworth",
  "James McAvoy",
  "Brendan Fraser",
  "Tom Hiddleston",
  "Marilyn Monroe",
  "Donald Trump",
  "Albert Einstein",
  "Cleopatra",
  "Michael Jackson",
  "Abraham Lincoln",
  "Julius Caesar",
  "Joan of Arc",
  "John Lennon",
  "Mother Teresa",
  "John F. Kennedy",
  "Gandhi",
  "Nelson Mandela",
  "Leonardo Da Vinci",
  "Christopher Columbus",
  "Queen Victoria",
  "Pablo Picasso",
  "Socrates",
  "J.K. Rowling",
  "Audrey Hepburn",
  "George Washington",
  "Frida Kahlo",
  "Winston Churchill",
  "Madonna",
  "Augustus Caesar",
  "Vincent Van Gogh",
  "Jane Austin",
  "Paul McCartney",
  "William Shakespeare",
  "Joseph Stalin",
  "Tutankhamen",
  "Charles Dickens",
  "Vladimir Putin",
  "Plato",
  "Elvis Presley",
  "Mark Twain",
  "Barack Obama",
  "Whitney Houston",
  "Michelangelo",
  "Claude Monet",
  "Bob Dylan",
  "Marco Polo",
  "Pocahontas",
  "J.R.R. Tolkien",
  "Alexander the Great",
  "Britney Spears",
  "Alfred Nobel",
  "Andy Warhol",
  "Prince",
  "Cristiano Ronaldo",
  "Elizabeth Taylor",
  "Martin Luther King",
  "David Beckham",
  "Queen Elizabeth II",
  "Walt Disney",
  "Tiger Woods",
  "Oprah Winfrey",
  "Wolfgang Amadeus Mozart",
  "Quentin Tarantino",
  "Lady Gaga",
  "Theodore Roosevelt",
  "Jackie Chan",
  "Anne Frank",
  "Louis Armstrong",
  "David Bowie",
  "Yoko Ono",
  "Neil Armstrong",
  "Ernest Hemingway",
  "Queen Elizabeth I",
  "Charles Darwin",
  "Napoleon",
  "Alfred Hitchcock",
  "Salvador Dali",
  "Genghis Khan",
  "Marie Antoinette",
  "Rasputin",
  "Stephen Hawking",
  "Agatha Christie",
  "Edgar Allen Poe",
  "Mariah Carey",
  "Olivia Newton-John",
  "Stevie Wonder",
  "Isaac Newton",
  "Aretha Franklin",
  "Elton John",
  "Meryl Streep",
  "Jim Morrison",
  "Michael Jordan",
  "Steve Jobs",
  "Coco Chanel",
  "Bill Clinton",
  "Muhammed Ali",
  "Bill Gates",
  "Galileo Galilei",
  "Marvin Gaye",
  "Lionel Messi",
  "Karl Marx",
  "Taylor Swift",
  "Alexander Graham Bell",
  "Mark Zuckerberg",
  "Benjamin Franklin",
  "Adele",
  "Bono",
  "Pythagoras",
  "Archimedes",
  "Jennifer Lawrence",
  "Sigmund Freud",
  "Johannes Kepler",
  "Fidel Castro",
  "Justin Bieber",
  "George Orwell",
  "Bob Marley",
  "Rhianna",
  "Ronald Reagan",
  "Frank Sinatra",
  "Oscar Wilde",
  "Justin Timberlake",
  "Hans Christian Andersen",
  "James Dean",
  "Celine Dion",
  "kim Kardashian",
  "Dolly Parton",
  "George W. Bush",
  "Margaret Thatcher",
  "Shania Twain",
  "Eminem",
  "David Livingston",
  "Amelia Earhart",
  "Grace Kelley",
  "Bruce Springsteen",
  "Hillary Clinton",
  "Marie Curie",
  "Dalai Lama"
]

const person = () => games.map(game => ({
  game,
  hint: 'person'
}))

export default person