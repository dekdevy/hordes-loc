import { rndArray, rndi } from 'core/math/rnd.js'

// Syllables used for random player/monster name generation.
// These are not part of the localisation, no more syllables are needed.

const syllables = ['heim', 'tuk', 'ta', 'lor', 'bok', 'le', 'me', 'ka', 'na', 'pink', 'dumb', 'fizz', 'glink', 'bing',
  'vang', 'blood', 'shield', 'dagger', 'rog', 'thun', 'gar', 'nag', 'grul', 'oth', 'uz', 'muk', 'hammer', 'staff', 'bold',
  'brave', 'any', 'gal', 'funk', 'gold', 'rock', 'metal', 'flash', 'rand', 'wise', 'smart', 'cozy', 'little', 'bam',
  'pam', 'na', 'crit', 'din', 'vale', 'feather', 'head', 'dong', 'wong', 'lock', 'shot', 'sing', 'wing', 'wood', 'es', 'mes',
  'las', 'tas', 'bas', 'was', 'oda', 'int', 'set', 'jo', 'io', 'li', 'pi', 'meme', 'bird', 'fish', 'grass', 'moss', 'tree',
  'frost', 'goth', 'fire', 'water', 'bon', 'blue', 'red', 'green', 'black', 'white', 'shadow', 'trash', 'coin', 'swift', 'sand',
  'sky', 'bone', 'skull', 'terror', 'row', 'win', 'dan', 'ty', 'balt', 'ric', 'ul', 'thril', 'da', 'usa', 'lem', 'fist', 'hex',
  'craft', 'sorc', 'mage', 'rune', 'chant', 'hymn', 'skill', 'ist', 'ent', 'murk', 'gor', 'tor', 'zor', 'hor', 'loz', 'ni',
  'si', 'so', 'sa', 'ta', 'ga', 'ma', 'pa', 'melon', 'nana', 'zuk', 'apple', 'bow', 'arrow', 'dirk', 'lance', 'dice', 'dex', 'bard',
  'haste', 'good', 'feat', 'rage', 'throw', 'doom', 'lord', 'low', 'high', 'slow', 'quick', 'bad', 'sad', 'fun', 'skele',
  'marrow', 'ham', 'lom', 'rin', 'lan', 'mum', 'dad', 'pope', 'god', 'xen', 'xan', 'max', 'lax', 'nax', 'sick', 'gore',
  'brood', 'gift', 'tox', 'ugly', 'beaut', 'hot', 'armor', 'smith', 'son', 'maid', 'owl', 'hog', 'tog', 'boat', 'boot',
  'move', 'glass', 'deer', 'war', 'spider', 'shatter', 'mag', 'dim', 'blight', 'spell', 'wand', 'dream', 'step', 'mist',
  'counter', 'flesh', 'true', 'dead', 'eye', 'force', 'death', 'life', 'demi', 'stun', 'word', 'sight', 'false', 'blade',
  'troll', 'orc', 'thunder', 'slap', 'strike', 'toll', 'fear', 'pup', 'mad', 'hay', 'wire', 'bot', 'heal', 'far', 'tar',
  'stone', 'soul', 'pain', 'glib', 'glob', 'myth', 'drakar', 'breaker', 'lust', 'tack', 'stopper', 'hink', 'hunk', 'rot',
  'corpse', 'ash', 'fang', 'skin', 'cold', 'immer', 'ice', 'doctor', 'meph', 'isto', 'dia', 'blo', 'baal', 'battle', 'bubble',
  'bat', 'crack', 'drool', 'stink', 'beard', 'grim', 'dry', 'shave', 'hate', 'love', 'scum', 'master', 'crusher', 'spawn',
  'meat', 'face', 'silver', 'claw', 'dal', 'sword', 'myr', 'reaper', 'drall', 'al', 'basher', 'fade', 'dark', 'gray',
  'less', 'ghoul', 'gol', 'dragh', 'dread', 'wasp', 'wrought', 'dhai', 'ghar', 'ghob', 'gho', 'ko', 'ghraem', 'kno',
  'lurk', 'half', 'tak', 'thak', 'shay', 'ol', 'lam', 'dil', 'echo', 'trim', 'cop', 'mond', 'or', 'fect', 'lee', 'ho', 'zone',
  'zon', 'verse', 'uni', 'lix', 'lynx', 'bix', 'six', 'mix', 'hix', 'rub', 'rubi', 'cub', 'cube', 'heis', 'er', 'eer', 'se', 'om',
  'mi', 'xia', 'xio', 'khar', 'khan', 'isp', 'asc', 'ics', 'ger', 'ette', 'gill', 'gile', 'py', 'vek', 'vare', 'alper', 'kana',
  'ajon', 'sar', 'ex', 'teur', 'hob', 'sau', 'sav', 'ron', 'del', 'ecce', 'tric', 'aud', 'odd', 'carn', 'cain', 'and', 'al', 'ness',
  'mess', 'orb', 'arth', 'tos', 'app', 'aol', 'walk', 'man', 'nal', 'char', 'void', 'long', 'short', 'sin', 'cos', 'cod', 'tan',
  'accu', 'rate', 'pow', 'end', 'cha', 'agi', 'ai', 'stre', 'per', 'xep', 'string', 'lu', 'luck', 'hue', 'dio', 'medle', 'neo', 'drift',
  'hell', 'dom', 'spot', 'hu', 'dibble', 'dabble', 'pop', 'pim', 'ama', 'light', 'heat', 'qua', 'mech', 'radio', 'rad',
  'rads', 'stim', 'pak', 'scorp', 'mire', 'spart', 'mutt', 'io', 'cans', 'ole', 'ian', 'reek', 'off', 'guard', 'van', 'scrub', 'sign',
  'road', 'awe', 'way', 'ant', 'woe', 'grief', 'active', 'ultra', 'mega', 'multi', 'mill', 'cent', 'nano', 'micro', 'fore', 'foe', 'ever',
  'zel', 'away', 'rio', 'sec', 'cas', 'mor', 'vank', 'vakh', 'ject', 'rej', 're', 'xyl', 'phlo', 'flow', 'len', 'size', 'small',
  'big', 'large', 'tiny', 'mas', 'min', 'scope', 'sig', 'harp', 'beth', 'esda', 'arq', 'nubis', 'bis', 'asdo', 'jan', 'jam',
  'bun', 'past', 'paste', 'try', 'hard', 'soft', 'smooth', 'rough', 'druid', 'cleric', 'hunt', 'hunter', 'wiz', 'wizard', 'woz', 'sage',
  'sag', 'marg', 'mer', 'mere', 'meag', 'meal', 'brek', 'brak', 'bral', 'fair', 'ain', 'mont', 'gah', 'med', 'dray', 'an', 'mhor',
  'nek', 'kar', 'sark', 'bound', 'bo', 'ork', 'mark', 'raw', 'dork', 'deku', 'fin', 'pas', 'loc', 'rev', 'dmi', 'ove']

export const generate = (minSyl = 2, maxSyl = 6, maxLen = 8)=>{
  // generates a random name with a variable max length / syllable amount
  const sylAmount = Math.min(rndi(minSyl, maxSyl), rndi(minSyl, maxSyl))
  let n = ''
  for(let i = sylAmount; i > 0 && n.length < maxLen; --i)
    n += rndArray(syllables)
  return n.charAt(0).toUpperCase() + n.slice(1)
}
