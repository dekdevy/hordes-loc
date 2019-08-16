import { rndArray } from 'core/math/rnd.js'

// Words for the random party link generator.
// The format is "adjective + noun + of + goal".

const adjectives = ['epic', 'rare', 'uncommon', 'common', 'trashy', 'magical', 'mystical', 'rusty', 'insane',
  'smelly', 'hilarious', 'sad', 'depressed', 'frozen', 'dusty',
  'broken', 'repaired', 'spooky', 'glowing', 'furious', 'thunderous', 'glorious',
  'shiny', 'orcish', 'elven', 'dwarven', 'human', 'terrifying', 'radiant', 'sparkling',
  'valiant', 'brilliant', 'royal', 'legendary', 'divine', 'gloomy',
  'funny', 'mighty', 'wild', 'hallowed', 'heavy', 'sly', 'sneaky', 'stretchy', 'slippery',
  'young', 'ancient', 'elderly', 'poetic', 'oily', 'ageing', 'noble', 'bleeding', 'crude',
  'growing', 'vile', 'disgusting', 'holy', 'radioactive', 'speedy', 'bright', 'possessed', 'teleporting', 'ghastly',
  'augmeneted', 'embarrassing', 'cruel', 'cunning', 'glamorous', 'intricate', 'imperial', 'lethal',
  'jolly', 'religious', 'drunk', 'elite', 'charismatic', 'agile', 'strong', 'stealthy', 'deadly', 'flying', 'brave', 'sturdy',
  'corrupted', 'decaying', 'soothing', 'smiling', 'butchering', 'smoking', 'spritual', 'godly', 'pixelated', 'grunting',
  'polished', 'charming', 'hairy', 'berserk', 'mischievous', 'resurrecting', 'disguised', 'ragged', 'stinging', 'noisy',
  'overpowered', 'murderous', 'victorious', 'violent', 'bloody', 'immortal','invisible', 'slicing',
  'piercing', 'poking', 'lazy', 'hot', 'warm', 'abusive', 'acrobatic', 'accursed', 'bewitched', 'seething', 
  'pale', 'singing', 'whispering', 'revolting', 'ripe', 'romantic', 'catastrophic', 'mad', 'stinking', 'puzzling'
  'sleek', 'skulking', 'smacking', 'spellbound', 'explosive', 'fantastic', 'hazardous', 'praying','frosted',
  'loud', 'evil', 'silken', 'humorous', 'medieval', 'metal', 'unlucky', 'chaotic', 'hollow', 'naive', 'swift', 'oozing',
  'stingy', 'tipsy', 'priceless', 'tribal', 'thieving', 'slav', 'fake', 'coldforged', 'lavish', 'abandoned', 'gorgeous',
  'cheap', 'expensive', 'benevolent', 'flourishing', 'supreme', 'superior', 'woody', 'peaceful'
  'diamond', 'magnificent', 'bloodhungry', 'tearing', 'bursting', 'furry', 'powerful', 'dangerous', 'awkward',
  'beautiful', 'sleeping', 'hideous', 'awful', 'humble', 'itchy', 'grim', 'emerald', 'famous', 'dark'
  'swearing', 'swinging', 'oniony', 'parrying', 'nepharious', 'scaly', 'icy', 'snowy', 'spherical', 'massive']

const nouns = ['sword', 'axe', 'potion', 'hammer', 'mace', 'coin', 'bag', 'archer', 'warrior', 'mage', 'unicorn',
  'deer', 'dog', 'cat', 'staff', 'venom']

const goals = ['slaying', 'wisdom', 'destruction', 'death', 'healing', 'luck', 'misfortune', 'rage', 'joy',
  'leveling', 'vengance', 'resurrection', 'mastery', 'loss', 'flames', 'fire', 'frost', 'glory', 'war', 'sprinting',
  'doom', 'love', 'archery', 'hunting', 'peace', 'failure', 'success', 'victory', 'denial', 'agility', 'despair']

export const generate = ()=>{
  // generates a random party invite link name
  return `${cap(rndArray(adjectives))}${cap(rndArray(nouns))}Of${cap(rndArray(goals))}`
}

const cap = s => s.charAt(0).toUpperCase() + s.slice(1)
