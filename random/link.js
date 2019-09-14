import { rndArray } from 'core/math/rnd.js'

// Words for the random party link generator.
// The format is "adjective + noun + of + goal".
// Please keep the total number of words at 500.

const adjectives = ['epic', 'rare', 'uncommon', 'common', 'trashy', 'magical', 'mystical', 'rusty', 'insane',
  'smelly', 'hilarious', 'sad', 'depressed', 'frozen', 'dusty', 'nefarious', 'swinging', 'parrying', 'cheap',
  'broken', 'repaired', 'spooky', 'glowing', 'furious', 'thunderous', 'glorious', 'swearing', 'magnificent',
  'shiny', 'orcish', 'elven', 'dwarven', 'human', 'terrifying', 'radiant', 'sparkling', 'bloodhungry', 'abandoned',
  'valiant', 'royal', 'legendary', 'divine', 'gloomy', 'scaly', 'massive', 'awkward', 'hideous', 'diamond',
  'funny', 'mighty', 'wild', 'hallowed', 'heavy', 'sly', 'sneaky', 'stretchy', 'slippery', 'emerald', 'famous',
  'young', 'ancient', 'elderly', 'poetic', 'oily', 'ageing', 'noble', 'bleeding', 'crude', 'ghastly', 'grim',
  'growing', 'vile', 'disgusting', 'holy', 'radioactive', 'speedy', 'bright', 'possessed', 'teleporting', 'supreme',
  'augmented', 'embarrassing', 'cruel', 'cunning', 'glamorous', 'intricate', 'imperial', 'lethal', 'sturdy',
  'jolly', 'religious', 'drunk', 'elite', 'charismatic', 'agile', 'strong', 'stealthy', 'deadly', 'flying', 'brave',
  'corrupted', 'decaying', 'soothing', 'smiling', 'butchering', 'smoking', 'spiritual', 'godly', 'pixelated', 'grunting',
  'hairy', 'berserk', 'mischievous', 'resurrecting', 'ragged', 'stinging', 'noisy', 'beautiful', 'sleeping', 'powerful',
  'overpowered', 'murderous', 'victorious', 'violent', 'bloody', 'immortal', 'invisible', 'slicing', 'dangerous',
  'piercing', 'poking', 'lazy', 'hot', 'warm', 'abusive', 'acrobatic', 'accursed', 'bewitched', 'seething', 'gorgeous',
  'pale', 'singing', 'whispering', 'revolting', 'ripe', 'romantic', 'catastrophic', 'mad', 'stinking', 'puzzling',
  'sleek', 'skulking', 'smacking', 'spellbound', 'explosive', 'fantastic', 'hazardous', 'praying', 'frosted', 'peaceful',
  'loud', 'evil', 'silken', 'humorous', 'medieval', 'metal', 'unlucky', 'chaotic', 'hollow', 'naive', 'swift', 'oozing',
  'stingy', 'tipsy', 'priceless', 'tribal', 'slav', 'fake', 'coldforged', 'lavish']

const nouns = ['sword', 'axe', 'potion', 'hammer', 'mace', 'coin', 'bag', 'archer', 'warrior', 'mage', 'unicorn',
  'deer', 'dog', 'cat', 'staff', 'venom', 'snake', 'literature', 'seed', 'fortress', 'lair', 'river', 'star',
  'bear', 'banana', 'apple', 'boots', 'armor', 'helmet', 'tower', 'forge', 'castle', 'flesh', 'food', 'relic',
  'town', 'smith', 'craftsman', 'bow', 'wolf', 'pear', 'orge', 'goblin', 'orc', 'skeleton', 'spider', 'boar', 'bone',
  'raid', 'group', 'party', 'owl', 'sparrow', 'crocodile', 'god', 'ant', 'lion', 'treasure', 'gem', 'adventure',
  'crown', 'swamp', 'forest', 'breakfast', 'meal', 'shaman', 'winter', 'summer', 'spring', 'gold', 'legacy', 'sea',
  'shadow', 'ghoul', 'pirate', 'slime', 'ogre', 'dwarf', 'cream', 'abyss', 'bowmaster', 'swordsmaster', 'thief',
  'elf', 'rock', 'water', 'juice', 'ocean', 'skull', 'organ', 'ocarina', 'legend', 'tree', 'seagull', 'albatross',
  'squid', 'platypus', 'shield', 'joker', 'band', 'cult', 'universe', 'fist', 'chest', 'shard', 'flame', 'campfire',
  'country', 'wasteland', 'behemoth', 'lich', 'gavel', 'club', 'morningstar', 'heart', 'tauren', 'manuscript',
  'pearl', 'ruby', 'python', 'nugget', 'obsidian', 'ghost', 'gauntlet', 'greaves', 'bracer', 'slingshot', 'sun',
  'voyage', 'odyssey', 'stronghold', 'fork', 'blight', 'book', 'script', 'scroll', 'leather', 'feather', 'spear',
  'assault', 'throne', 'mockingbird', 'bowman', 'raider', 'scout', 'officer', 'lieutenant', 'general', 'armorer',
  'ninja', 'assassin', 'tea', 'demon', 'angel', 'tooth', 'song', 'storm', 'warbow', 'missionary', 'prophet', 'tavern',
  'skirmish', 'mutant', 'warlock', 'beer', 'hurricane', 'salamander', 'hostage', 'bandit', 'outlaw', 'blacksmith',
  'earthquake', 'chainmail', 'cobbler', 'servant', 'loot', 'sabre', 'scythe', 'squire', 'journeyman', 'dragon',
  'gnome', 'zombie', 'pickpocket', 'fletcher', 'vampire', 'usurper', 'blade', 'wind', 'raven', 'key', 'trapdoor',
  'portcullis', 'vulture', 'era', 'hound', 'hobgoblin']

const goals = ['slaying', 'wisdom', 'destruction', 'death', 'healing', 'luck', 'misfortune', 'rage', 'joy', 'doom',
  'leveling', 'vengeance', 'resurrection', 'mastery', 'loss', 'flames', 'fire', 'frost', 'glory', 'war', 'sprinting',
  'love', 'archery', 'hunting', 'peace', 'depression', 'binding', 'victory', 'denial', 'agility', 'despair', 'ice',
  'protection', 'cookery', 'herbalism', 'leatherworking', 'woodworking', 'literacy', 'moisturization', 'knowledge',
  'radiation', 'raiding', 'marauding', 'strength', 'perception', 'endurance', 'charisma', 'intelligence', 'boredom',
  'blocking', 'haste', 'speed', 'stamina', 'health', 'mana', 'immortality', 'evasion', 'regeneration', 'defense',
  'movement', 'accuracy', 'finding', 'dexterity', 'energy', 'solitude', 'heroism', 'alchemy', 'hope', 'embarrassment',
  'heresy', 'drifting', 'slipping', 'stumbling', 'falling', 'swordsmanship', 'bravery', 'slavery', 'crime', 'advice',
  'enlightenment', 'cowardice', 'blasphemy', 'ridiculing', 'hysteria', 'trolling', 'corruption', 'forging', 'skill',
  'survival', 'creativity', 'fame', 'wealth', 'prosperity', 'fighting', 'marriage', 'friendship', 'shame', 'scorn',
  'magic', 'might', 'guidance', 'cruelty', 'kindness', 'youth', 'elderness', 'poetry', 'lust', 'bowmanship', 'valor',
  'vengeance', 'experience', 'dominance', 'bliss', 'vanishing', 'success', 'failure', 'positivity', 'negativity',
  'virtue', 'honor', 'foolishness', 'focusing', 'theft']

export const generate = ()=>{
  // generates a random party invite link name
  return `${cap(rndArray(adjectives))}${cap(rndArray(nouns))}Of${cap(rndArray(goals))}`
}

const cap = s => s.charAt(0).toUpperCase() + s.slice(1)
