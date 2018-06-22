import { SET_CONTENT, DELETE_CONTENT, ADD_CONTENTS } from './types'

export default {
  [SET_CONTENT](state, items) {
    state.contents = items
  },
  [DELETE_CONTENT](state, id) {
    state.contents = state.contents.filter(v => v.id !== id)
  },
  [ADD_CONTENTS] (state, items) {
    state.contents = state.contents.concat(items)
  }
}
