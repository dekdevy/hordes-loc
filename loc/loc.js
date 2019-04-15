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
import bag from './items/bag.js'
import boot from './items/boot.js'
import bow from './items/bow.js'
import chest from './items/chest.js'
import gem from './items/gem.js'
import glove from './items/glove.js'
import hammer from './items/hammer.js'
import quiver from './items/quiver.js'
import ring from './items/ring.js'
import shield from './items/shield.js'
import staff from './items/staff.js'
import sword from './items/sword.js'
import talisman from './items/talisman.js'
const items = {
  armlet,
  bag,
  boot,
  bow,
  chest,
  gem,
  glove,
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

// Npcs
import conjurer from './npcs/conjurer.js'
import trader from './npcs/trader.js'
const npcs = {
  conjurer,
  trader
}

// User interface
import charmenu from './ui/charmenu.js'
import chat from './ui/chat.js'
import clan from './ui/clan.js'
import general from './ui/general.js'
import inventory from './ui/inventory.js'
import settings from './ui/settings.js'
const ui = {
  charmenu,
  chat,
  clan,
  inventory,
  settings,
  ...general }

export default {
  classes,
  items,
  factions,
  npcs,
  ui
}
