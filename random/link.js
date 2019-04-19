import { rndArray } from 'core/math/rnd.js'

// Words for the random party link generator
// the format is "adjective + noun + of + goal"
const adjectives = ['epic', 'rare', 'common', 'trashy', 'magical', 'thunderous', 'insane', 'rusty', 'smelly',
  'hilarious', 'sad', 'burning', 'rotten', 'smelly', 'frozen', 'fresh', 'fast', 'slow', 'mean', 'smart', 'cold',
  'broken', 'refurbished', 'repaired', 'spooky', 'shiny', 'glowing', 'dead', 'furious', 'glorious', 'impish',
  'orcish', 'golden', 'forsaken', 'ghoulish', 'terrifying', 'radiant', 'dwarfish', 'moisturising', 'fiery',
  'sparkling', 'delicious', 'delirious', 'daydreaming', 'dreaming', 'thieving', 'generous', 'royal', 'appetizing',
  'wet', 'valiant', 'orange', 'spurting', 'deep', 'lucid', 'putrid', 'pulpous', 'legendary', 'vegan', 'vegetarian',
  'ignorant', 'divine', 'eccentric', 'gloomy', 'funny', 'safe', 'insured', 'cultist', 'washed', 'mighty', 'depressed',
  'wild', 'hallowed', 'heavy', 'ghostly', 'sly', 'sneaky', 'flooded', 'waterlogged', 'stretchy', 'dodgy', 'slippery',
  'electrical', 'mature', 'immature', 'old', 'new', 'young', 'ancient', 'elderly', 'pythonic', 'poetic', 'oily', 'ageing',
  'growing', 'vile', 'disgusting', 'lovely', 'swampy', 'holy', 'radioactive', 'evolved', 'speedy', 'shimmering', 'drifting',
  'mini', 'bleeding', 'poisoned', 'rough', 'crude', 'moisturized', 'bright', 'pleasing', 'hypocritical', 'pleasing',
  'demented', 'possessed', 'diabolical', 'teleporting', 'tasty', 'doomed', 'scary', 'ghastly', 'tailored', 'needy',
  'oblivious', 'imperial', 'lethal', 'marshy', 'noble', 'nostalgic', 'radical', 'quiet', 'mutated', 'realistic',
  'augmeneted', 'embarrassing', 'humiliating', 'dubious', 'cruel', 'cunning', 'glamorous', 'accidental', 'intricate',
  'jolly', 'stereotypical', 'crazy', 'devious', 'religious', 'disordered', 'drunk', 'elusive', 'elite', 'elven', 'erratic',
  'hated', 'hybrid', 'immortal', 'lucrative', 'ragged', 'illegal', 'sceptical', 'intellegent', 'accurate', 'charismatic',
  'agile', 'strong', 'stealthy', 'deadly', 'experienced', 'abnormal', 'abominable', 'flying', 'brave', 'seasoned', 'sturdy',
  'corrupted', 'tarnished', 'paranormal', 'decaying', 'soothing', 'smiling', 'dying', 'butchering', 'smoking', 'grand',
  'neon', 'spritual', 'godly', 'truthful', 'untruthful', 'forgiving', 'pixelated', 'sinful', 'advanced', 'ivory',
  'polished', 'round', 'tangled', 'hexed', 'charming', 'gilled', 'hairy', 'berserk', 'failing', 'disgraceful', 'ultimate',
  'virtual', 'cold', 'white', 'resurrected', 'peaceful', 'disguised', 'demonic', 'devoted', 'confidential', 'competitive',
  'charred', 'fortunate', 'overpowered', 'murderous', 'dwarven', 'precise', 'victorious', 'violent', 'bloody', 'freezing',
  'bland', 'inky', 'mischievous', 'fishy', 'disintegrating', 'snarling', 'grunting', 'dehydrated', 'famished', 'timid',
  'lone', 'invisible', 'infected', 'venemous', 'mental', 'detremental', 'disfunctional', 'stinging', 'slicing', 'piercing',
  'piercing', 'poking', 'glancing', 'lazy', 'hot', 'warm', 'melting', 'abusive', 'acrobatic', 'accursed', 'bewitched',
  'obedient', 'offensive', 'pale', 'rasping', 'singing', 'whispering', 'revolting', 'rickety', 'ripe', 'rigid', 'romantic',
  'rooting', 'seething', 'sickly', 'serpentine', 'senseless', 'shabby', 'shaggy', 'shambolic', 'shillyshallying', 'slim',
  'sleek', 'skulking', 'smacking', 'spellbound', 'explosive', 'fantastic', 'ferocious', 'gaudy', 'glazed', 'hazardous',
  'idiotic', 'lame', 'ingeneous', 'puking', 'loud', 'evil', 'sweaty', 'faithful', 'unfaithful', 'traditional', 'modern',
  'vampiric', 'silk', 'verocious', 'vigorous', 'yelping', 'huffy', 'humorous', 'medieval', 'mesmeric', 'hypnotic',
  'metallic', 'secretive']

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
  'snake', 'code', 'party', 'literature', 'seed', 'fortress', 'lair', 'river', 'sea', 'adventure', 'campfire',
  'voyage', 'odyssey', 'creed', 'hole', 'hangnail', 'lawn', 'fork', 'sunflower', 'blight', 'book', 'script', 'scroll',
  'future', 'wardrobe', 'throne', 'hypocrite', 'mockingbird', 'bowman', 'raider', 'scout', 'officer', 'lieutenant', 'general',
  'ninja', 'assassin', 'coffee', 'demon', 'angel', 'tooth', 'song', 'storm', 'warbow', 'caricature', 'race', 'pumpkin',
  'skirmish', 'mutant', 'abomination', 'ache', 'blossom', 'journal', 'performer', 'stereotype', 'ale', 'beer', 'hurricane',
  'scales', 'earthquake', 'chainmail', 'machine', 'servant', 'loot', 'sabre', 'scythe', 'squire', 'journeyman', 'dragon',
  'missionary', 'prophet', 'offspring', 'newt', 'salamander', 'oak', 'pine', 'sapling', 'flint', 'ransom', 'hostage', 'bandit',
  'outlaw', 'relic', 'flesh', 'food', 'tavern', 'blacksmith', 'armourer', 'tools', 'leather', 'feather', 'spear', 'fletcher',
  'stonemason', 'cottage', 'crossbow', 'slum', 'vine', 'hawk', 'falcon', 'glaive', 'tribe', 'monastery', 'prince', 'king',
  'queen', 'soldier', 'thread', 'crown', 'nightmare', 'gravestone', 'graveyard', 'follower', 'lightning', 'bolt', 'ring',
  'cobweb', 'centurion', 'arachnid', 'gryffin', 'sphynx', 'pharoah', 'mummy', 'trident', 'trap', 'werewolf', 'rogue', 'knight',
  'mule', 'horse', 'mare', 'guardian', 'golem', 'dimension', 'autumn', 'dove', 'fortune', 'paradise', 'disciple', 'monk',
  'goose', 'devil', 'beast', 'rat', 'zombie', 'raven', 'ethereal', 'bones', 'dice', 'watchman', 'cannon', 'chain', 'cupbearer',
  'guardsman', 'tailor', 'chasm', 'hive', 'gnome', 'dungeon', 'lizard', 'sage', 'priest', 'sorcerer', 'necromancer', 'charmer',
  'warlock', 'witch', 'rod', 'trapdoor', 'scribe']

const goals = ['slaying', 'wisdom', 'destruction', 'death', 'healing', 'luck', 'misfortune', 'rage', 'joy',
  'leveling', 'vengance', 'resurrection', 'mastery', 'loss', 'flames', 'fire', 'frost', 'glory', 'war', 'sprinting',
  'doom', 'love', 'archery', 'hunting', 'peace', 'failure', 'success', 'victory', 'denial', 'agility', 'despair',
  'woodworking', 'cooking', 'herbalism', 'leatherworking', 'skincare', 'treasures', 'fury', 'trading', 'nailcare', 'moisturisation',
  'aggression', 'lust', 'swordsmanship', 'dreams', 'daydreams', 'thievery', 'generosity', 'radiance', 'royalty', 'valor',
  'refreshment', 'revenge', 'vengeance', 'veganism', 'knowledge', 'ignorance', 'divinity', 'evolution', 'vegeterianism',
  'depression', 'insurance', 'protection', 'shielding', 'power', 'might', 'magic', 'wilderness', 'literacy', 'poetry', 'artwork',
  'jealousy', 'fame', 'wealth', 'loneliness', 'youth', 'elderness', 'dread', 'disgust', 'advice', 'speed', 'unbreaking', 'glamour',
  'radiation', 'hypocrisy', 'teleportation', 'tailoring', 'fighting', 'marriage', 'nobility', 'nostalgia', 'performance',
  'raiding', 'mutation', 'reality', 'fantasies', 'embarrassment', 'humiliation', 'cruelty', 'guidance', 'brilliance', 'hatred',
  'innocence', 'accuracy', 'perception', 'endurance', 'charisma', 'strength', 'intelligence', 'dexterity', 'experience', 'scepticism',
  'flight', 'bravery', 'corruption', 'greed', 'temptation', 'sin', 'forgiveness', 'gratitude', 'alchemy', 'hope', 'foretelling',
  'paralysis', 'lore', 'narcissism', 'crime', 'slavery', 'freedom', 'rebellion', 'precision', 'victory', 'mischief']

export const generate = ()=>{
  // generates a random party invite link name
  return `${cap(rndArray(adjectives))}${cap(rndArray(nouns))}Of${cap(rndArray(goals))}`
}

const cap = s => s.charAt(0).toUpperCase() + s.slice(1)
