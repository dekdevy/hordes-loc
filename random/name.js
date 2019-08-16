import { rndArray, rndi } from 'core/math/rnd.js'

// Syllables used for random player/monster name generation.
// These are not part of the localisation Please keep the total amount of syllables at 300.

const syllables = ['helm', 'stone', 'delra', 'staff', 'doom', 'flesh', 'eye', 'soul', 'claw', 'lynx', 'vang', 'blood',
  'lust', 'wing', 'night', 'dread', 'rune', 'dhai', 'morgh', 'craft', 'owl', 'reap', 'glow', 'ice', 'flame', 'blade',
  'ash', 'fang', 'scar', 'life', 'smith', 'drakh', 'bat', 'kar', 'daug', 'ghal', 'bird', 'myth', 'dead', 'myr', 'sau',
  'uth', 'urg', 'our', 'rof', 'azo', 'naul', 'shauz', 'olg', 'rol', 'reol', 'piol', 'cua', 'lumo', 'thual', 'saew', 'lith',
  'lanc', 'heim', 'dall', 'heif', 'heria', 'milui', 'amlug', 'ber', 'dhaye', 'erth', 'feira', 'dema', 'khon', 'xhan', 'xhi',
  'godh', 'rhor', 'cili', 'lenda', 'aist', 'nyel', 'nye', 'zal', 'zog', 'bhol', 'zul', 'dana', 'gun', 'arc', 'orb', 'trog',
  'vaz', 'zedh', 'zee', 'veba', 'storm', 'scare', 'zoti', 'nuk', 'zak', 'knod', 'stink', 'skin', 'hek', 'luim', 'hex',
  'woe', 'hong', 'vugz', 'zug', 'rift', 'rage', 'meph', 'max', 'gold', 'merc', 'zon', 'zvon', 'veda', 'fade', 'war', 'bound',
  'metal', 'aol', 'eal', 'xio', 'daz', 'gog', 'vat', 'heis', 'pain', 'vigo', 'ior', 'nyth', 'mydra', 'illae', 'ira', 'ida',
  'ali', 'yera', 'dusk', 'dawn', 'swift', 'luna', 'lance', 'raven', 'wild', 'yae', 'yia', 'jaed', 'cyra', 'light', 'vesla',
  'veni', 'tear', 'lach', 'bloch', 'utta', 'sys', 'frie', 'fire', 'kwyl', 'gax', 'qish', 'grel', 'eevo', 'kash', 'gaz',
  'iqri', 'ezni', 'uku', 'lozz', 'gnee', 'jui', 'drae', 'nai', 'eua', 'ravar', 'bain', 'bane', 'wokai', 'kohm', 'demo',
  'sil', 'stag', 'elys', 'sia', 'rhya', 'rynn', 'fael', 'fyn', 'lirai', 'ciea', 'chai', 'earl', 'baro', 'volo', 'riel',
  'dryn', 'rai', 'daar', 'sea', 'star', 'amber', 'bloom', 'syl', 'lenai', 'lead', 'rya', 'tarre', 'adrae', 'rius', 'niye',
  'fyre', 'daria', 'iraei', 'lase', 'mane', 'thera', 'dania', 'fog', 'dola', 'mydi', 'fai', 'lynn', 'lair', 'iyl', 'irius',
  'arido', 'lere', 'teria', 'vias', 'bais', 'rismo', 'ues', 'bith', 'raes', 'lieu', 'aucto', 'laude', 'deus', 'vitro',
  'tusso', 'vephie', 'mulae', 'qen', 'cill', 'tryl', 'vonth', 'morja', 'teu', 'thyn', 'taug', 'taur', 'gias', 'caen',
  'ieze', 'brieu', 'tae', 'borne', 'selta', 'sill', 'phyre', 'theia', 'thuen', 'maer', 'lys', 'esdye', 'niroi', 'cye',
  'arje', 'stris', 'andro', 'dae', 'lae', 'duirn', 'rienn', 'dysra', 'than', 'tilre', 'laeth', 'ilye', 'gaia', 'dya',
  'lanai', 'thras', 'dhar', 'raeth', 'ylla', 'raer', 'dryr', 'vaen', 'morl', 'miell', 'gley', 'iedra', 'pheia', 'dre',
  'phae', 'thye', 'ruth', 'mir', 'sauth']

export const generate = (minSyl = 2, maxSyl = 6, maxLen = 8)=>{
  // generates a random name with a variable max length / syllable amount
  const sylAmount = Math.min(rndi(minSyl, maxSyl), rndi(minSyl, maxSyl))
  let n = ''
  for(let i = sylAmount; i > 0 && n.length < maxLen; --i)
    n += rndArray(syllables)
  return n.charAt(0).toUpperCase() + n.slice(1)
}
