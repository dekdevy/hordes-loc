import { rndArray } from 'core/math/rnd.js'

// Words for the random party link generator.
// The format is "adjective + noun + of + goal".

const adjectives = ['epic', 'rare', 'uncommon', 'common', 'trashy', 'magical', 'poisining', 'mystical', 'rusty', 'insane',
  'smelly', 'moisturising', 'hilarious', 'sad', 'depressing', 'frozen', 'fresh', 'fast', 'slow', 'mean', 'nice', 'cold',
  'broken', 'refurbished', 'repaired', 'spooky', 'glowing', 'dying', 'furious', 'thunderous', 'glorious', 'impish',
  'shiny', 'orcish', 'elven', 'dwarven', 'human', 'ghoulish', 'terrifying', 'radiant', 'sparkling', 'wet',
  'valiant', 'brilliant', 'royal', 'putrid', 'legendary', 'vegan', 'divine', 'gloomy',
  'funny', 'insured', 'cultist', 'mighty', 'depressed', 'wild', 'hallowed', 'heavy', 'sly', 'sneaky', 'stretchy', 'slippery',
  'old', 'new', 'young', 'ancient', 'elderly', 'poetic', 'oily', 'ageing', 'noble',
  'growing', 'vile', 'disgusting', 'lovely', 'holy', 'radioactive', 'evolved', 'speedy', 'bright', 'pleasing',
  'demented', 'possessed', 'teleporting', 'tasty', 'ghastly', 'mini', 'bleeding', 'rough', 'crude','radical', 'quiet',
  'augmeneted', 'embarrassing', 'humiliating', 'cruel', 'cunning', 'glamorous', 'intricate', 'imperial', 'lethal', 'grand',
  'jolly', 'crazy', 'devious', 'religious', 'drunk', 'elusive', 'elite', 'erratic', 'accurate', 'charismatic',
  'agile', 'strong', 'stealthy', 'deadly', 'flying', 'brave', 'sturdy',
  'corrupted', 'tarnished', 'decaying', 'soothing', 'smiling', 'butchering', 'smoking', 'advanced',
  'spritual', 'godly', 'truthful', 'untruthful', 'pixelated', 'sinful', 'snarling', 'grunting', 'timid',
  'polished', 'round', 'charming', 'hairy', 'berserk', 'disgraceful', 'ultimate', 'mischievous',
  'white', 'resurrecting', 'disguised', 'ragged', 'stinging', 'noisy',
  'overpowered', 'murderous', 'victorious', 'violent', 'bloody', 'immortal', 
  'lone', 'invisible', 'infecting', 'disfunctional', 'slicing', 'shaggy',
  'piercing', 'poking', 'lazy', 'hot', 'warm', 'abusive', 'acrobatic', 'accursed', 'bewitched', 'seething', 
  'obedient', 'pale', 'singing', 'whispering', 'revolting', 'ripe', 'rigid', 'romantic', 
  'sleek', 'skulking', 'smacking', 'spellbound', 'explosive', 'fantastic', 'hazardous', 'praying','frosted',
  'lame', 'puking', 'loud', 'evil', 'sweaty', 'faithful', 'traditional', 'modern', 'blissful',
  'vampiric', 'silk', 'yelping', 'humorous', 'medieval', 'hypnotic', 'metal', 'secretive', 'unlucky',
  'carnivorous', 'chaotic', 'hollow', 'backstabbing', 'naive', 'swift', 'oozing', 'catastrophic',
  'ratty', 'stingy', 'tipsy', 'priceless', 'satanic', 'tribal', 'thieving', 'albino', 'alien', 'slav', 'fake',
  'arctic', 'coldforged', 'enigmatic', 'lavish', 'abandoned', 'gorgeous', 'dusty',
  'cheap', 'expensive', 'benevolent','virtuous', 'flourishing', 'supreme', 'inferior', 'superior', 'flammable', 'wartorn',
  'diamond', 'magnificent', 'bloodhungry', 'tearing', 'bursting', 'furry', 'powerful', 'dangerous', 'awkward',
  'beautiful', 'sleeping', 'hideous', 'awful', 'humble', 'itchy', 'grim', 'emerald', 'famous',
  'swearing', 'swinging', 'oniony', 'parrying', 'nepharious', 'scaly', 'icy', 'snowy', 'spherical', 'massive',
  'small', 'tiny', 'large', 'big', 'dark', 'woody', 'peaceful', 'mad', 'stinking', 'puzzling', 'huge']

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
