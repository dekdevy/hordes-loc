import { rndArray } from 'core/math/rnd.js'

// Words for the random party link generator.
// The format is "adjective + noun + of + goal".

const adjectives = ['epic', 'rare', 'uncommon', 'common', 'trashy', 'magical', 'poisining', 'mystical', 'rusty', 'insane',
  'smelly', 'moisturising', 'hilarious', 'sad', 'depressing', 'frozen', 'fresh', 'fast', 'slow', 'mean', 'nice', 'cold',
  'hot', 'broken', 'refurbished', 'repaired', 'spooky', 'glowing', 'dying', 'furious', 'thunderous', 'glorious', 'impish',
  'shiny', 'orcish', 'elven', 'dwarven', 'human', 'ghoulish', 'ghostly', 'terrifying', 'radiant', 'sparkling', 'wet',
  'valiant', 'brilliant', 'royal']

const nouns = ['sword', 'axe', 'potion', 'hammer', 'mace', 'coin', 'bag', 'archer', 'warrior', 'mage', 'unicorn',
  'deer', 'dog', 'cat', 'staff']

const goals = ['slaying', 'wisdom', 'destruction', 'death', 'healing', 'luck', 'misfortune', 'rage', 'joy',
  'leveling', 'vengance', 'resurrection', 'mastery', 'loss', 'flames', 'fire', 'frost', 'glory', 'war', 'sprinting',
  'doom', 'love', 'archery', 'hunting', 'peace', 'failure', 'success', 'victory', 'denial', 'agility', 'despair']

export const generate = ()=>{
  // generates a random party invite link name
  return `${cap(rndArray(adjectives))}${cap(rndArray(nouns))}Of${cap(rndArray(goals))}`
}

const cap = s => s.charAt(0).toUpperCase() + s.slice(1)
