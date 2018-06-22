import { SET_MATERIAL } from './types'

export default {
  [SET_MATERIAL] (state, items) {
    state.materials = items
  }
}
