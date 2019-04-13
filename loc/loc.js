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

// Items
import armlet from './items/armlet.js'
import armor from './items/armor.js'
import boot from './items/boot.js'
import bow from './items/bow.js'
import chest from './items/chest.js'
import gloves from './items/gloves.js'
import hammer from './items/hammer.js'
import quiver from './items/quiver.js'
import ring from './items/ring.js'
import shield from './items/shield.js'
import staff from './items/staff.js'
import sword from './items/sword.js'
import talisman from './items/talisman.js'
const items = {
  armlet,
  armor,
  boot,
  bow,
  chest,
  gloves,
  hammer,
  quiver,
  ring,
  shield,
  staff,
  sword,
  talisman
}

// Factions
import bloodlust from './factions/bloodlust.js'
import vanguard from './factions/vanguard.js'
const factions = [
  vanguard,
  bloodlust]

// User interface
import charmenu from './ui/charmenu.js'
import clan from './ui/clan.js'
import general from './ui/general.js'
import inventory from './ui/inventory.js'
import settings from './ui/settings.js'
const ui = {
  charmenu,
  clan,
  inventory,
  settings,
  ...general }

export default {
  classes,
  items,
  factions,
  ui
}
