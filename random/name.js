import { rndArray, rndi } from 'core/math/rnd.js'

// Syllables used for random player/monster name generation.
// These are not part of the localisation, no more syllables are needed.

const syllables = ['bow', 'hammer', 'sword', 'staff', 'doom', 'flesh', 'eye', 'soul', 'claw', 'lynx', 'vang', 'blood',
  'lust', 'wing', 'strong', 'gem', 'rune', 'dhai', 'morgh', 'craft', 'owl', 'reap', 'glob', 'ice','flame', 'blade',
  'ash', 'fang', 'scar', 'life', 'smith', 'drakh', 'bat', 'kar', 'daug', 'ghal']

export const generate = (minSyl = 2, maxSyl = 6, maxLen = 8)=>{
  // generates a random name with a variable max length / syllable amount
  const sylAmount = Math.min(rndi(minSyl, maxSyl), rndi(minSyl, maxSyl))
  let n = ''
  for(let i = sylAmount; i > 0 && n.length < maxLen; --i)
    n += rndArray(syllables)
  return n.charAt(0).toUpperCase() + n.slice(1)
}
