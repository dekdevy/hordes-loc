// classes are exported as array since the game typically stores class as integer
import archer from './classes/archer.js'
import mage from './classes/mage.js'
import monster from './classes/monster.js'
import npc from './classes/npc.js'
import shaman from './classes/shaman.js'
import warrior from './classes/warrior.js'
const classes = [
  warrior,
  mage,
  archer,
  shaman,
  npc,
  monster]

// Items
import amulet from './items/amulet.js'
import armlet from './items/armlet.js'
import armor from './items/armor.js'
import bag from './items/bag.js'
import book from './items/book.js'
import boot from './items/boot.js'
import bow from './items/bow.js'
import box from './items/box.js'
import glove from './items/glove.js'
import hammer from './items/hammer.js'
import misc from './items/misc.js'
import mount from './items/mount.js'
import orb from './items/orb.js'
import quiver from './items/quiver.js'
import ring from './items/ring.js'
import rune from './items/rune.js'
import shield from './items/shield.js'
import staff from './items/staff.js'
import sword from './items/sword.js'
import totem from './items/totem.js'
const items = {
  amulet,
  armlet,
  bag,
  book,
  boot,
  bow,
  armor,
  glove,
  hammer,
  misc,
  orb,
  quiver,
  ring,
  rune,
  shield,
  staff,
  sword,
  mount,
  totem,
  box
}

// Factions
import bloodlust from './factions/bloodlust.js'
import vanguard from './factions/vanguard.js'
const factions = [
  vanguard,
  bloodlust,
  { name: {$$: 'Neutral'} }]

// Npcs
import blacksmith from './npcs/blacksmith.js'
import conjurer from './npcs/conjurer.js'
import merchant from './npcs/merchant.js'
import sage from './npcs/sage.js'
import stash from './npcs/stash.js'
import trader from './npcs/trader.js'
const npcs = {
  conjurer,
  trader,
  sage,
  merchant,
  stash,
  blacksmith
}

// User interface
import * as merchantui from './ui/merchant.js'
import * as stashui from './ui/stash.js'
import charmenu from './ui/charmenu.js'
import chat from './ui/chat.js'
import clan from './ui/clan.js'
import death from './ui/death.js'
import general from './ui/general.js'
import hiddenskills from './ui/hiddenskills.js'
import inventory from './ui/inventory.js'
import messages from './ui/messages.js'
import party from './ui/party.js'
import settings from './ui/settings.js'
import stats from './ui/stats.js'
import tutorial from './ui/tutorial.js'
const ui = {
  charmenu,
  chat,
  clan,
  inventory,
  merchant: merchantui.default,
  settings,
  party,
  stash   : stashui.default,
  stats,
  death,
  tutorial,
  messages,
  hiddenskills,
  ...general }

export default {
  classes,
  items,
  factions,
  npcs,
  ui
}
