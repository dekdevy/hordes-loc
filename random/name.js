import { rndArray, rndi } from 'core/math/rnd.js'

// Syllables used for random player/monster name generation
// this is not part of the localization, but you can add syllables here
const syllables = [ 'heim', 'tuk', 'ta', 'lor', 'bok', 'le', 'me', 'ka', 'na', 'pink', 'dumb', 'fizz', 'glink', 'bing',
  'vang', 'blood', 'shield', 'dagger', 'rog', 'thun', 'gar', 'nag', 'grul', 'oth', 'uz', 'muk', 'hammer', 'staff', 'bold',
  'brave', 'any', 'gal', 'funk', 'gold', 'rock', 'metal', 'flash', 'rand', 'wise', 'smart', 'cozy', 'little', 'bam',
  'pam', 'na', 'crit', 'din', 'vale', 'feather', 'head', 'dong', 'wong', 'lock', 'shot', 'sing', 'wing', 'wood', 'es', 'mes',
  'las', 'tas', 'bas', 'was', 'oda', 'int', 'set', 'jo', 'io', 'li', 'pi', 'meme', 'bird', 'fish', 'grass', 'moss', 'tree',
  'frost', 'goth', 'fire', 'water', 'bon', 'blue', 'red', 'green', 'black', 'white', 'shadow', 'trash', 'coin', 'swift', 'sand',
  'sky', 'bone', 'skull', 'terror', 'row', 'win', 'dan', 'ty', 'balt', 'ric', 'ul', 'thril', 'da', 'usa', 'lem', 'fist', 'hex',
  'craft', 'sorc', 'mage', 'rune', 'chant', 'hymn', 'skill', 'ist', 'ent', 'murk', 'gor', 'tor', 'zor', 'hor', 'loz', 'ni',
  'si', 'so', 'sa', 'ta', 'ga', 'ma', 'melon', 'nana', 'zuk', 'apple', 'bow', 'arrow', 'dirk', 'lance', 'dice', 'dex', 'bard',
  'haste', 'good', 'feat', 'rage', 'throw', 'doom', 'lord', 'low', 'high', 'slow', 'quick', 'bad', 'sad', 'fun', 'skele',
  'marrow', 'ham', 'lom', 'rin', 'lan', 'mum', 'dad', 'pope', 'god', 'xen', 'xan', 'max', 'lax', 'nax', 'sick', 'gore',
  'brood', 'gift', 'tox', 'ugly', 'beaut', 'hot', 'armor', 'smith', 'son', 'maid', 'owl', 'hog', 'tog', 'boat', 'boot',
  'move', 'glass', 'deer', 'war', 'spider', 'shatter', 'mag', 'dim', 'blight', 'spell', 'wand', 'dream', 'step', 'mist',
  'counter', 'flesh', 'true', 'dead', 'eye', 'force', 'death', 'life', 'demi', 'stun', 'word', 'sight', 'false', 'blade',
  'troll', 'orc', 'thunder', 'slap', 'strike', 'toll', 'fear', 'pup', 'mad', 'hay', 'wire', 'bot', 'heal', 'far', 'tar',
  'stone', 'soul', 'pain', 'glib', 'glob', 'myth', 'drakar', 'breaker', 'lust', 'tack', 'stopper', 'hink', 'hunk', 'rot',
  'corpse', 'ash', 'fang', 'skin', 'cold', 'immer', 'ice', 'doctor', 'meph', 'isto', 'dia', 'blo', 'baal', 'battle', 'bubble',
  'bat', 'crack', 'drool', 'stink', 'beard', 'grim', 'dry', 'shave', 'hate', 'love', 'scum', 'master', 'crusher', 'spawn',
  'meat', 'face', 'silver', 'claw', 'dal', 'sword', 'myr', 'reaper', 'drall', 'al', 'forsaken', 'fade', 'dark']

export const generate = (minSyl = 2, maxSyl = 6, maxLen = 8)=>{
  // generates a random name with a variable max length / syllable amount
  const sylAmount = Math.min(rndi(minSyl, maxSyl), rndi(minSyl, maxSyl))
  let n = ''
  for(let i = sylAmount; i > 0 && n.length < maxLen; --i)
    n += rndArray(syllables)
  return n.charAt(0).toUpperCase() + n.slice(1)
}
