import { rndArray } from 'core/math/rnd.js'

// Words for the random party link generator
// the format is "adjective + noun + of + goal"
const adjectives = ['epic', 'rare', 'common', 'trashy', 'magical', 'thunderous', 'insane', 'rusty', 'smelly',
  'hilarious', 'sad', 'burning', 'rotten', 'smelly', 'frozen', 'fresh', 'fast', 'slow', 'mean', 'smart', 'cold',
  'broken', 'refurbished', 'repaired', 'spooky', 'shiny', 'glowing', 'dead', 'furious', 'glorious', 'impish',
  'orcish', 'golden', 'forsaken', 'ghoulish', 'terrifying', 'radiant', 'dwarfish', 'moisturising', 'fiery',
  'sparkling', 'delicious', 'delirious', 'daydreaming', 'dreaming', 'thieving', 'generous', 'royal', 'appetizing',
  'wet', 'valiant', 'orange', 'spurting', 'deep', 'lucid', 'putrid', 'pulpous', 'legendary', 'vegan', 'vegetarian',
  'ignorant', 'divine', 'eccentric', 'gloomy', 'funny', 'safe', 'insured', 'cultist'. 'washed', 'mighty', 'depressed',
  'wild', 'hallowed', 'heavy', 'ghostly', 'sly', 'sneaky', 'flooded', 'waterlogged', 'stretchy', 'dodgy', 'slippery',
  'electrical', 'mature', 'immature', 'old', 'new', 'young', 'ancient', 'elderly', 'pythonic', 'poetic', 'oily', 'ageing',
  'growing', 'communist', 'socialist', 'democratic', 'vile', 'disgusting', 'lovely', 'swampy', 'holy', 'radioactive',
  'mini', 'bleeding', 'poisoned', 'rough', 'crude', 'moisturized', 'bright', 'pleasing', 'hypocritical', 'pleasing',
  'demented', 'possessed', 'diabolical', 'teleporting', 'tasty', 'doomed', 'scary', 'ghastly', 'tailored', 'needy',
  'oblivious', 'imperial', 'lethal', 'marshy', 'noble', 'nostalgic', 'radical', 'quiet', 'mutated', 'realistic',
  'augmeneted', 'embarrassing', 'humiliating', 'dubious', 'cruel', 'cunning', 'glamorous', 'accidental', 'intricate',
  'jolly', 'evolved', 'speedy', 'shimmering', 'drifting', 'stereotypical', 'crazy']

const nouns = ['sword', 'axe', 'potion', 'hammer', 'mace', 'coin', 'bag', 'archer', 'warrior', 'mage', 'unicorn',
  'deer', 'dog', 'cat', 'staff', 'bear', 'banana', 'apple', 'boots', 'armor', 'helmet', 'tower', 'forge', 'castle',
  'town', 'smith', 'craftsman', 'bow', 'wolf', 'pear', 'orge', 'goblin', 'orc', 'skeleton', 'spider', 'boar', 'bone',
  'raid', 'group', 'bikergirl', 'cacadoo', 'owl', 'sparrow', 'crocodile', 'god', 'ant', 'lion', 'treasure', 'gem',
  'glasses', 'crown', 'swamp', 'forest', 'breakfast', 'meal', 'shaman', 'winter', 'summer', 'spring', 'gold', 'legacy',
  'shadow', 'ghoul', 'pirate', 'slime', 'ogre', 'dwarf', 'cream', 'abyss', 'bowmaster', 'swordsmaster', 'thief',
  'ink', 'elf', 'rock', 'water', 'juice', 'ocean', 'skull', 'organ', 'ocarina', 'legend', 'tree', 'seagull', 'albatross',
  'squid', 'platypus', 'shield', 'plan', 'band', 'cult', 'universe', 'fist', 'elbow', 'knee', 'chest', 'rib', 'pelvis',
  'femur', 'country', 'wasteland', 'behemoth', 'lich', 'gavel', 'basher', 'club', 'morningstar', 'heart', 'diamond',
  'pearl', 'ruby', 'python', 'topaz', 'aluminium', 'silver', 'nugget', 'obsidian', 'ghost', 'flood', 'peat', 'bog',
  'furnace', 'gauntlet', 'greave', 'bracer', 'slingshot', 'sun', 'star', 'shard', 'pen', 'coal', 'charcoal', 'flame',
  'snake', 'code', 'party', 'literature', 'seed', 'government', 'election', 'fortress', 'lair', 'river', 'sea', 'adventure',
  'voyage', 'odyssey', 'creed', 'hole', 'hangnail', 'lawn', 'fork', 'sunflower', 'tank', 'blight', 'book', 'script', 'scroll',
  'future', 'wardrobe', 'throne', 'hypocrite', 'mockingbird', 'bowman', 'raider', 'scout', 'officer', 'lieutenant', 'general',
  'ninja', 'assassin', 'coffee', 'trolley', 'taxi', 'demon', 'angel']

const goals = ['slaying', 'wisdom', 'destruction', 'death', 'healing', 'luck', 'misfortune', 'rage', 'joy',
  'leveling', 'vengance', 'resurrection', 'mastery', 'loss', 'flames', 'fire', 'frost', 'glory', 'war', 'sprinting',
  'doom', 'love', 'archery', 'hunting', 'peace', 'failure', 'success', 'victory', 'denial', 'agility', 'despair',
  'woodworking', 'cooking', 'herbalism', 'leatherworking', 'skincare', 'treasures', 'fury', 'trading', 'nailcare', 'moisturisation',
  'aggression', 'lust', 'swordsmanship', 'dreams', 'daydreams', 'thievery', 'generosity', 'radiance', 'royalty', 'valor',
  'refreshment', 'revenge', 'vengeance', 'veganism', 'knowledge', 'ignorance', 'divinity', 'evolution', 'vegeterianism',
  'depression', 'insurance', 'protection', 'shielding', 'power', 'might', 'magic', 'wilderness', 'literacy', 'poetry', 'artwork',
  'jealousy', 'fame', 'wealth', 'loneliness', 'youth', 'elderness']

export const generate = ()=>{
  // generates a random party invite link name
  return `${cap(rndArray(adjectives))}${cap(rndArray(nouns))}Of${cap(rndArray(goals))}`
}

const cap = s => s.charAt(0).toUpperCase() + s.slice(1)
