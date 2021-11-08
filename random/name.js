import { rndArray, rndi } from 'core/math/rnd.js'

// Syllables used for random player/monster name generation.

const syllables = ['acaru', 'achi', 'acti', 'ael', 'aelle', 'aelo', 'aer', 'aeri', 'aero',
  'aesh', 'aez', 'aias', 'aid', 'aien', 'aile', 'aist', 'akda', 'ale', 'alle', 'alpha', 'ambi', 'amlug', 'amne', 'amni', 'amo', 'amoe', 'amu', 'ana', 'andro', 'ani',
  'anke', 'anse', 'anti', 'aol', 'aqua', 'arae', 'arc', 'argo', 'aria', 'ariel', 'aries', 'arius', 'arje', 'arrow', 'arti', 'arvel', 'zxym'
  'arye', 'aryn', 'ash', 'astri', 'athen',
  'aukh', 'aura', 'aveni', 'axe', 'axna', 'az', 'azci', 'azo', 'azri', 'azu', 'azure', 'bag', 'bain', 'bais', 'bando', 'bane', 'baph', 'bard', 'baro', 'baron', 'bat', 'battle', 'beef',
  'ber', 'bhol', 'bhul', 'bik', 'bird', 'bith', 'blade', 'blaze', 'bloch', 'blok', 'blood', 'bloom', 'bo', 'boink', 'bokh', 'bomb', 'bone', 'bonk', 'bore', 'borne',
  'boro', 'bound', 'bow', 'brain', 'brass', 'brie', 'brir', 'bris', 'broke', 'bry', 'bryr', 'bubble', 'bugo', 'caen', 'calm', 'canis', 'cape', 'capri', 'carp', 'cary',
  'cassi', 'cat', 'cavi', 'celo', 'cern', 'charm', 'chea', 'chef', 'cherry', 'ciea', 'cili', 'cill', 'ciri', 'claw', 'clear', 'cone', 'contra', 'copi', 'corba', 'corn',
  'craft', 'cri', 'cris', 'cry', 'cryo', 'crypt', 'cua', 'cya', 'cye', 'cygni', 'cyra', 'daar', 'dae', 'daemo', 'dagg', 'dakk', 'dale', 'dali', 'dalia', 'dall', 'dane',
  'dania', 'danus', 'dao', 'daru', 'dawn', 'daz', 'dazar', 'dead', 'deaf', 'deci', 'deer', 'dei', 'delia', 'delra', 'delta', 'dema', 'demo', 'deo', 'dero', 'deus', 'deux',
  'dhai', 'dhar', 'dhrar', 'dhug', 'dhyl', 'dia', 'dieri', 'dio', 'doe', 'dog', 'dohr', 'doom', 'dorr', 'down', 'drae', 'drakh', 'drakk', 'dran', 'dre', 'drea', 'dread', 'dream', 'dris',
  'drop', 'druk', 'dryd', 'dryn', 'dryr', 'dryt', 'duin', 'duirn', 'duke', 'duo', 'dusk', 'dy', 'dya', 'dyas', 'dysra', 'eago', 'eal', 'earl', 'eas', 'echo', 'ecto', 'edo', 'eerie', 'eevo', 'egg',
  'ego', 'eina', 'eine', 'eiri', 'elia', 'elle', 'elma', 'elo', 'elyo', 'elyor', 'elys', 'endo', 'equi', 'equu', 'erdy', 'eris', 'erra', 'erri', 'erth', 'ervi', 'essa',
  'eua', 'euda', 'eudo', 'eumo', 'evack', 'eve', 'eye', 'eyre', 'fa', 'fade', 'fael', 'fai', 'fang', 'far', 'fare', 'fauca', 'feia', 'filau', 'fire', 'fish', 'fizz',
  'flame', 'flesh', 'flock', 'foe', 'fois', 'forh', 'fous', 'fray', 'frost', 'fulvu', 'fume', 'fur', 'fyn', 'fyr', 'fyre', 'gabo', 'gaia', 'galaz', 'gali', 'galo', 'gami', 'gamma',
  'gax', 'gaz', 'gecko', 'geo', 'ghal', 'ghaz', 'ghi', 'ghiri', 'ghost', 'ghyr', 'gias', 'giko', 'gin', 'gio', 'giri', 'giu', 'glass', 'glee', 'glerk', 'gley', 'glio',
  'gloo', 'glow', 'gnci', 'gnorr', 'godh', 'gog', 'gogu', 'gold', 'gonda', 'goner', 'gonzu', 'gore', 'grand', 'grape', 'gras', 'grauf', 'graz', 'grel', 'grex', 'grim',
  'groku', 'gru', 'guac', 'gui', 'guiza', 'guke', 'gulum', 'gun', 'gurk', 'guru', 'gwen', 'gyn', 'gyrna', 'hag', 'haju', 'hammer', 'hari', 'hatch', 'hate', 'heim', 'heir',
  'heis', 'hek', 'hell', 'helm', 'hera', 'hercu', 'heria', 'hex', 'hexa', 'hexi', 'hexo', 'hirt', 'hole', 'homa', 'hong', 'horn', 'horo', 'howl', 'hydra', 'hysta', 'iar', 'ice', 'ida',
  'idra', 'iele', 'ievi', 'ieze', 'igni', 'ikto', 'ilae', 'ili', 'illae', 'ilno', 'ilye', 'inde', 'ink', 'int', 'inte', 'intra', 'intro', 'iola', 'iope', 'ior', 'iqra',
  'ira', 'iraei', 'irag', 'irius', 'iuna', 'iyja', 'iyra', 'jaed', 'jard', 'jasia', 'jassi', 'jerky', 'jiji', 'jinx', 'joy', 'juan', 'jui', 'jurio', 'kae', 'kaga', 'kai',
  'kar', 'kash', 'kaz', 'kei', 'kery', 'key', 'khad', 'khon', 'khuza', 'khyr', 'klee', 'knod', 'kom', 'kotr', 'krata', 'kreo', 'kriod', 'kron', 'krono', 'kuhr', 'kuvok', 'kwyl', 'kyri', 'kyto',
  'la', 'lach', 'lae', 'laea', 'laer', 'laeth', 'lair', 'lamb', 'lanc', 'lase', 'laude', 'laza', 'lea', 'lee', 'lei', 'leif', 'lenai', 'lenda', 'lene', 'leo', 'lere',
  'lessa', 'lethe', 'lex', 'lhor', 'li', 'lia', 'libra', 'liel', 'lieu', 'life', 'light', 'limbo', 'limp', 'lingo', 'lio', 'lirai', 'liro', 'lith', 'llien', 'lloe', 'lo',
  'lock', 'lofty', 'loi', 'lone', 'lopo', 'lore', 'love', 'low', 'lozz', 'lua', 'luim', 'lumo', 'luna', 'lush', 'lust', 'lya', 'lymph', 'lynx', 'lyre', 'lys', 'lyvi', 'mae', 'mage',
  'magi', 'magno', 'maie', 'major', 'mali', 'malo', 'manca', 'mane', 'mango', 'manto', 'marco', 'marrow', 'marsh', 'max', 'medi', 'medu', 'meen', 'mel', 'melia', 'mell', 'melng',
  'melon', 'meph', 'merc', 'mese', 'meso', 'metal', 'miki', 'mince', 'mini', 'miri', 'misia', 'mistra', 'mizu', 'mmior', 'mo', 'mock', 'moi', 'moor', 'morb', 'more', 'morgh', 'morja',
  'morl', 'moss', 'moza', 'mozo', 'mroer', 'mua', 'muami', 'mugg', 'muku', 'mulae', 'muno', 'muo', 'mutt', 'muzor', 'mydra', 'myr', 'myri', 'myth', 'nae', 'nai', 'nail',
  'nando', 'nari', 'naul', 'nava', 'naz', 'neazu', 'ned', 'neia', 'neme', 'nemo', 'neo', 'nera', 'nero', 'night', 'nill', 'niroi', 'nise', 'niye', 'nobnar', 'noi', 'nose',
  'nox', 'noxi', 'nua', 'nuanyi', 'nuck', 'nuk', 'numzu', 'nye', 'nyel', 'nymph', 'nyri', 'nyx', 'oah', 'oak', 'ocea', 'ocia', 'octa', 'octo', 'odd', 'odin', 'odio', 'odis',
  'odru', 'oghm', 'ogu', 'oia', 'oisse', 'ola', 'olg', 'olle', 'omni', 'oni', 'only', 'onos', 'onty', 'ophe', 'ophi', 'opi', 'orb', 'orc', 'ordi', 'ore', 'orio', 'orlo', 'ouch',
  'our', 'outro', 'over', 'owl', 'ozy', 'pain', 'pais', 'pale', 'paleo', 'path', 'paw', 'paylo', 'peak', 'pear', 'pearl', 'pecto', 'peia', 'peli', 'pemo', 'pepe', 'peri',
  'perlo', 'perse', 'pery', 'peso', 'phae', 'phar', 'phau', 'pheh', 'pheia', 'pheus', 'phi', 'phiel', 'phine', 'phio', 'phoi', 'phono', 'phy', 'phyr', 'phyre', 'pika',
  'pilia', 'pine', 'piol', 'piuc', 'plor', 'pluto', 'poe', 'pore', 'pox', 'prae', 'prio', 'pseu', 'psy', 'purla', 'py', 'pyro', 'pytho', 'pyxi', 'qaas', 'qae', 'qama', 'qas', 'qash',
  'qasi', 'qaso', 'qasu', 'qi', 'qindi', 'qis', 'qish', 'qisi', 'qo', 'qos', 'qoui', 'qry', 'qu', 'qua', 'quas', 'quasi', 'quaso', 'quila', 'quo', 'quoi', 'quon', 'qurza',
  'quti', 'quul', 'qyph', 'rael', 'raer', 'raes', 'raesh', 'raeth', 'rage', 'rai', 'raor', 'rash', 'rath', 'raven', 'razz', 'reap', 'reav', 'reens', 'reme', 'reo', 'rethe',
  'reve', 'rhor', 'rhya', 'riad', 'riel', 'rienn', 'rift', 'rine', 'ring', 'rio', 'rismo', 'rissa', 'riznu', 'roar', 'rock', 'roe', 'rof', 'rog', 'rol', 'roll', 'rolu', 'rone'                  
,
  'rori', 'rose', 'rosi', 'roth', 'rune', 'runi', 'ruth', 'rya', 'ryas', 'rym', 'rynn', 'ryo', 'sael', 'saew', 'sai', 'sale', 'salt', 'salty', 'sarya', 'sau', 'sauce',
  'sauth', 'scaf', 'scar', 'sces', 'schi', 'scia', 'scorp', 'scum', 'sea', 'see', 'seir', 'sela', 'semi', 'seus', 'shade', 'shard', 'shear', 'shemu', 'shie', 'shine', 'shrub', 'shuk', 'shur', 'sia', 'sie',
  'sigma', 'sil', 'silk', 'sill', 'sima', 'sirie', 'skin', 'skull', 'sky', 'smith', 'so', 'soi', 'solar', 'soul', 'spear', 'speed', 'splint', 'spring', 'stag', 'star',
  'stone', 'storm', 'stout', 'stra', 'strau', 'stris', 'styx', 'sub', 'swift', 'sword', 'sya', 'syl', 'sys', 'tae', 'taer', 'tala', 'tale', 'tali', 'talle', 'tan', 'tango',
  'tarmi', 'tarre', 'tau', 'taug', 'tear', 'teava', 'teni', 'terra', 'teu', 'teus', 'thae', 'than', 'thano', 'thau', 'theia', 'theo', 'thera', 'thin', 'thorn', 'thras',
  'thro', 'thry', 'thual', 'thuen', 'thye', 'thyn', 'tia', 'tiara', 'tiik', 'tike', 'tilre', 'tima', 'timni', 'tiri', 'to', 'tona', 'tone', 'tor', 'toxi', 'tree', 'tren', 'tri', 'trila', 'trin', 'tris',
  'triss', 'trith', 'trog', 'troll', 'trove', 'true', 'tryl', 'tryn', 'tusk', 'tusso', 'tuts', 'tyr', 'tyra', 'tyrg', 'ues', 'ugly', 'ui', 'uie', 'uipho', 'ujuy', 'uku', 'ulvu', 'under',
  'uni', 'uozi', 'up', 'urlu', 'uro', 'us', 'uth', 'utha', 'utta', 'uugu', 'uvy', 'vaal', 'vae', 'vaen', 'vaez', 'vain', 'vang', 'varo', 'varr', 'vat', 'vayne', 'vazu',
  'veba', 'veda', 'veni', 'vephie', 'vesla', 'veth', 'vigo', 'virgo', 'vitro', 'vizi', 'vlor', 'voda', 'void', 'vois', 'volno', 'volo', 'volt', 'vomi', 'vonth', 'vord', 'vors',
  'vox', 'vugz', 'vulen', 'vulpe', 'waaz', 'wake', 'war', 'wasu', 'weap', 'wei', 'wenk', 'wert', 'willo', 'wind', 'wing', 'wirya', 'wise', 'witch', 'wix', 'wolf', 'world', 'wrath', 'xas',
  'xhan', 'xhi', 'xih', 'xilo', 'xio', 'xiza', 'xor', 'xugu', 'xuk', 'xuxu', 'xyli', 'yae', 'yare', 'yari', 'yeno', 'yir', 'yiryo', 'ylla', 'yo', 'yoer', 'yore', 'yrgo', 'yrie',
  'yrni', 'ytia', 'zak', 'zal', 'zaph', 'zaro', 'zedh', 'zee', 'zel', 'zele', 'zeli', 'zelph', 'zera', 'zest', 'zhem', 'zia', 'zog', 'zoi', 'zon', 'zort', 'zoti', 'zug', 'zul', 'zur',
  'zutu', 'zuvi', 'zvon', 'zzuk']
export const generate = (minSyl = 2, maxSyl = 6, maxLen = 8)=>{
  // generates a random name with a variable max length / syllable amount
  const sylAmount = Math.min(rndi(minSyl, maxSyl), rndi(minSyl, maxSyl))
  let n = ''
  for(let i = sylAmount; i > 0 && n.length < maxLen; --i)
    n += rndArray(syllables)
  return n.charAt(0).toUpperCase() + n.slice(1)
}
