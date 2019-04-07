// classes are exported as array since the game typically stores class as integer
import archer from './classes/archer.js'
import mage from './classes/mage.js'
import shaman from './classes/shaman.js'
import warrior from './classes/warrior.js'
const classes = [warrior, mage, shaman, archer]

export default {
  classes
}