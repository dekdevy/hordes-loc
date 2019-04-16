import { rndArray } from 'core/math/rnd.js'

// Words for the random party link generator
// the format is "adjective + noun + of + goal"
const adjectives = ['epic', 'rare', 'common', 'trashy', 'magical', 'thunderous', 'insane', 'rusty', 'smelly',
  'hilarious', 'sad', 'burning', 'rotten', 'smelly', 'frozen', 'fresh', 'fast', 'slow', 'mean', 'smart', 'cold',
  'broken', 'refurbished', 'repaired', 'spooky']

const nouns = ['sword', 'axe', 'potion', 'hammer', 'mace', 'coin', 'bag', 'archer', 'warrior', 'mage', 'unicorn',
  'deer', 'dog', 'cat', 'staff', 'bear', 'banana', 'apple', 'boots', 'armor', 'helmet', 'tower', 'forge', 'castle',
  'town', 'smith', 'craftsman', 'bow', 'wolf', 'pear', 'orge', 'goblin', 'orc', 'skeleton', 'spider', 'bone', 'bone',
  'raid', 'group', 'bikergirl', 'cacadoo', 'owl', 'sparrow', 'crocodile', 'god']

const goals = ['slaying', 'wisdom', 'destruction', 'death', 'healing', 'luck', 'misfortune', 'rage', 'joy',
  'leveling', 'vengance', 'resurrection', 'mastery', 'loss', 'flames', 'fire', 'frost', 'glory', 'war']

export const generate = ()=>{
  // generates a random party invite link name
  return `${cap(rndArray(adjectives))}${cap(rndArray(nouns))}Of${cap(rndArray(goals))}`
}

const cap = s => s.charAt(0).toUpperCase() + s.slice(1)