const wordList = [
    {
        "word": "GUITAR",
        "hint": "A musical instrument with strings."
    },
    {
        "word": "OXYGEN",
        "hint": "A colorless, odorless gas essential for life."
    },
    {
        "word": "MOUNTAIN",
        "hint": "A large natural elevation of the Earth's surface."
    },
    {
        "word": "PAINTING",
        "hint": "An art form using colors on a surface to create images or expression."
    },
    {
        "word": "ASTRONOMY",
        "hint": "The scientific study of celestial objects and phenomena."
    },
    {
        "word": "FOOTBALL",
        "hint": "A popular sport played with a spherical ball."
    },
    {
        "word": "CHOCOLATE",
        "hint": "A sweet treat made from cocoa beans."
    },
    {
        "word": "BUTTERFLY",
        "hint": "An insect with colorful wings and a slender body."
    },
    {
        "word": "HISTORY",
        "hint": "The study of past events and human civilization."
    },
    {
        "word": "PIZZA",
        "hint": "A savory dish consisting of a round, flattened base with toppings."
    },
    {
        "word": "JAZZ",
        "hint": "A genre of music characterized by improvisation and syncopation."
    },
    {
        "word": "CAMERA",
        "hint": "A device used to capture and record images or videos."
    },
    {
        "word": "DIAMOND",
        "hint": "A precious gemstone known for its brilliance and hardness."
    },
    {
        "word": "ADVENTURE",
        "hint": "An exciting or daring experience."
    },
    {
        "word": "SCIENCE",
        "hint": "The systematic study of the structure and behavior of the physical and natural world."
    },
    {
        "word": "BICYCLE",
        "hint": "A human-powered vehicle with two wheels."
    },
    {
        "word": "SUNSET",
        "hint": "The daily disappearance of the sun below the horizon."
    },
    {
        "word": "COFFEE",
        "hint": "A popular caffeinated beverage made from roasted coffee beans."
    },
    {
        "word": "DANCE",
        "hint": "A rhythmic movement of the body often performed to music."
    },
    {
        "word": "GALAXY",
        "hint": "A vast system of stars, gas, and dust held together by gravity."
    },
    {
        "word": "ORCHESTRA",
        "hint": "A large ensemble of musicians playing various instruments."
    },
    {
        "word": "VOLCANO",
        "hint": "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected."
    },
    {
        "word": "NOVEL",
        "hint": "A long work of fiction, typically with a complex plot and characters."
    },
    {
        "word": "SCULPTURE",
        "hint": "A three-dimensional art form created by shaping or combining materials."
    },
    {
        "word": "SYMPHONY",
        "hint": "A long musical composition for a full orchestra, typically in multiple movements."
    },
    {
        "word": "ARCHITECTURE",
        "hint": "The art and science of designing and constructing buildings."
    },
    {
        "word": "BALLET",
        "hint": "A classical dance form characterized by precise and graceful movements."
    },
    {
        "word": "ASTRONAUT",
        "hint": "A person trained to travel and work in space."
    },
    {
        "word": "WATERFALL",
        "hint": "A cascade of water falling from a height."
    },
    {
        "word": "TECHNOLOGY",
        "hint": "The application of scientific knowledge for practical purposes."
    },
    {
        "word": "RAINBOW",
        "hint": "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        "word": "UNIVERSE",
        "hint": "All existing matter, space, and time as a whole."
    },
    {
        "word": "PIANO",
        "hint": "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        "word": "VACATION",
        "hint": "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        "word": "RAINFOREST",
        "hint": "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        "word": "THEATER",
        "hint": "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        "word": "TELEPHONE",
        "hint": "A device used to transmit sound over long distances."
    },
    {
        "word": "LANGUAGE",
        "hint": "A system of communication consisting of words, gestures, and syntax."
    },
    {
        "word": "DESERT",
        "hint": "A barren or arid land with little or no precipitation."
    },
    {
        "word": "SUNFLOWER",
        "hint": "A tall plant with a large yellow flower head."
    },
    {
        "word": "FANTASY",
        "hint": "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        "word": "TELESCOPE",
        "hint": "An optical instrument used to view distant objects in space."
    },
    {
        "word": "BREEZE",
        "hint": "A gentle wind."
    },
    {
        "word": "OASIS",
        "hint": "A fertile spot in a desert where water is found."
    },
    {
        "word": "PHOTOGRAPHY",
        "hint": "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        "word": "SAFARI",
        "hint": "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        "word": "PLANET",
        "hint": "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        "word": "RIVER",
        "hint": "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        "word": "TROPICAL",
        "hint": "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        "word": "MYSTERIOUS",
        "hint": "Difficult or impossible to understand, explain, or identify."
    },
    {
        "word": "ENIGMA",
        "hint": "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        "word": "PARADOX",
        "hint": "A statement or situation that contradicts itself or defies intuition."
    },
    {
        "word": "PUZZLE",
        "hint": "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        "word": "WHISPER",
        "hint": "To speak very softly or quietly, often in a secretive manner."
    },
    {
        "word": "SHADOW",
        "hint": "A dark area or shape produced by an object blocking the light."
    },
    {
        "word": "SECRET",
        "hint": "Something kept hidden or unknown to others."
    },
    {
        "word": "CURIOSITY",
        "hint": "A strong desire to know or learn something."
    },
    {
        "word": "UNPREDICTABLE",
        "hint": "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        "word": "OBFUSCATE",
        "hint": "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        "word": "UNVEIL",
        "hint": "To make known or reveal something previously secret or unknown."
    },
    {
        "word": "ILLUSION",
        "hint": "A false perception or belief; a deceptive appearance or impression."
    },
    {
        "word": "MOONLIGHT",
        "hint": "The light from the moon."
    },
    {
        "word": "VIBRANT",
        "hint": "Full of energy, brightness, and life."
    },
    {
        "word": "NOSTALGIA",
        "hint": "A sentimental longing or wistful affection for the past."
    },
    {
        "word": "BRILLIANT",
        "hint": "Exceptionally clever, talented, or impressive."
    }
]



export default function getWord(){
    return wordList[Math.floor(Math.random() * wordList.length)];
}