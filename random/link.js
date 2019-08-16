import { rndArray } from 'core/math/rnd.js'

// Words for the random party link generator.
// The format is "adjective + noun + of + goal".

const adjectives = ['epic', 'rare', 'uncommon', 'common', 'trashy', 'magical', 'poisining', 'mystical', 'rusty', 'insane',
  'smelly', 'moisturising', 'hilarious', 'sad', 'depressing', 'frozen',
  'broken', 'refurbished', 'repaired', 'spooky', 'glowing', 'dying', 'furious', 'thunderous', 'glorious', 'impish',
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
  'pale', 'singing', 'whispering', 'revolting', 'ripe', 'romantic', 
  'sleek', 'skulking', 'smacking', 'spellbound', 'explosive', 'fantastic', 'hazardous', 'praying','frosted',
  'lame', 'loud', 'evil', 'blissful', 'vampiric', 'silk', 'yelping', 'humorous', 'medieval', 'hypnotic', 'metal', 'unlucky',
  'chaotic', 'hollow', 'naive', 'swift', 'oozing', 'catastrophic',
  'ratty', 'stingy', 'tipsy', 'priceless', 'satanic', 'tribal', 'thieving', 'albino', 'alien', 'slav', 'fake',
  'coldforged', 'lavish', 'abandoned', 'gorgeous', 'dusty',
  'cheap', 'expensive', 'benevolent', 'flourishing', 'supreme', 'superior',
  'diamond', 'magnificent', 'bloodhungry', 'tearing', 'bursting', 'furry', 'powerful', 'dangerous', 'awkward',
  'beautiful', 'sleeping', 'hideous', 'awful', 'humble', 'itchy', 'grim', 'emerald', 'famous',
  'swearing', 'swinging', 'oniony', 'parrying', 'nepharious', 'scaly', 'icy', 'snowy', 'spherical', 'massive',
  'dark', 'woody', 'peaceful', 'mad', 'stinking', 'puzzling']

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
