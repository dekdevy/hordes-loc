// classes are exported as array since the game typically stores class as integer
import archer from './classes/archer.js'
import mage from './classes/mage.js'
import shaman from './classes/shaman.js'
import warrior from './classes/warrior.js'
const classes = [
  warrior,
  mage,
  shaman,
  archer ]

// Factions
import bloodlust from './factions/bloodlust.js'
import vanguard from './factions/vanguard.js'
const factions = {
  vanguard,
  bloodlust }

// User interface
import charmenu from './ui/charmenu.js'
import general from './ui/general.js'
const ui = {
  charmenu,
  ...general }

export default {
  classes,
  factions,
  ui
}