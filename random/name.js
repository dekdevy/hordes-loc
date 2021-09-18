import { rndArray, rndi } from 'core/math/rnd.js'

// Syllables used for random player/monster name generation.
// These are not part of the localisation. Please keep the total number of syllables at 320.

const syllables = ['ael', 'aelle', 'aesh', 'alpha', 'ambi', 'amni', 'amoe', 'amph', 'andro', 'anti', 'aqua', 'argo', 'ari',
  'ariel', 'aries', 'arius', 'arvel', 'astri', 'athen', 'ation', 'aukh', 'aura', 'auro', 'axe', 'az', 'azure', 'baro', 'beta',
  'bhul', 'bik', 'biuth', 'blaze', 'bokh', 'bomb', 'bonk', 'bore', 'brain', 'brass', 'bubble', 'canis', 'capri', 'carp',
  'cassi', 'cavi', 'cern', 'chai', 'circa', 'ciri', 'clock', 'contra', 'copi', 'corn', 'corvo', 'crete', 'cryo', 'crypt',
  'cullo', 'cya', 'cygni', 'daemo', 'dale', 'danus', 'daudh', 'daut', 'dead', 'deci', 'delta', 'deo', 'deux', 'dhrar', 'dhug',
  'domi', 'dorz', 'drakk', 'drea', 'dream', 'drone', 'drop', 'duo', 'dux', 'dya', 'ecto', 'ego', 'eiri', 'elo', 'elyor', 'emno',
  'endo', 'equu', 'eris', 'eve', 'fa', 'fae', 'fauca', 'feia', 'finci', 'fire', 'fizz', 'foe', 'futh', 'fyre', 'gabo', 'galad',
  'galaz', 'gami', 'gamma', 'geo', 'ghi', 'gill', 'gio', 'giu', 'glass', 'glee', 'glerk', 'glio', 'gnorr', 'gonzu', 'gore',
  'grauf', 'guac', 'gulum', 'gwen', 'harp', 'heir', 'hercu', 'hexa', 'hexi', 'horn', 'horo', 'howl', 'hydra', 'hydro', 'iar',
  'ice', 'ilno', 'inde', 'intra', 'iola', 'iope', 'iqra', 'ira', 'jiji', 'jurio', 'kaem', 'khad', 'kiwi', 'klee', 'krono', 'kuvok',
  'la', 'lee', 'leo', 'lex', 'li', 'libra', 'liel', 'limbo', 'lingo', 'lith', 'lofty', 'loi', 'loom', 'lurk', 'lush', 'mae', 'magi',
  'major', 'manca', 'marco', 'marsh', 'meen', 'mel', 'meso', 'mini', 'mmior', 'mo', 'morgu', 'morph', 'mroer', 'muami', 'muddle',
  'mugg', 'muzor','nae', 'nail', 'naz', 'ned', 'neo', 'nobnar', 'nolzu', 'nose', 'nua', 'nuanyi', 'nums', 'numzu', 'octa', 'oghm',
  'oia', 'oisse', 'omni', 'oni', 'ophi', 'opi', 'orc', 'ordi', 'orio', 'orlo', 'pain', 'path', 'peia', 'pepe', 'peri', 'perse',
  'pesca', 'peso', 'phael', 'phau', 'pheus', 'phiel', 'phum', 'piuc', 'pluto', 'poe', 'pore', 'pox', 'prae', 'prime', 'prio', 'puppi',
  'pyro', 'pyxi', 'qi', 'qish', 'quas', 'quiet', 'quila', 'quoi', 'quon', 'quul', 'raesh', 'razz', 'reens', 'retro', 'rhya', 'riel',
  'rius', 'rolu', 'rona', 'rose','ruel', 'sael', 'sai', 'saus', 'sces', 'scorp', 'sela', 'semi', 'seus', 'shemu', 'shine', 'shrub',
  'silk', 'sima', 'sky', 'so', 'solar', 'soul', 'speed', 'spring', 'storm', 'stra', 'sub', 'suen', 'swift', 'tale', 'tango', 'tara',
  'tarmi', 'taur', 'teava', 'terra', 'then', 'thorn', 'timni', 'to', 'tor', 'toxi', 'tri', 'triss', 'trith', 'tryl', 'twinkle', 'uipho',
  'uni', 'vaez', 'varo', 'virgo', 'vizi', 'volno', 'volt', 'vord', 'vors', 'vox', 'vulo', 'vulpe', 'waaz', 'weap', 'wei', 'whistle',
  'wirya', 'wise', 'wisp', 'wix', 'wreph', 'wyv', 'yiryo', 'yrie', 'zaph', 'zulu', 'zzuk']

export const generate = (minSyl = 2, maxSyl = 6, maxLen = 8)=>{
  // generates a random name with a variable max length / syllable amount
  const sylAmount = Math.min(rndi(minSyl, maxSyl), rndi(minSyl, maxSyl))
  let n = ''
  for(let i = sylAmount; i > 0 && n.length < maxLen; --i)
    n += rndArray(syllables)
  return n.charAt(0).toUpperCase() + n.slice(1)
}
