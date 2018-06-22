import { SET_COMMUNITY, DELETE_COMMUNITY, ADD_COMMUNITY, UPDATE_COMMUNITY } from './types'

export default {
  [SET_COMMUNITY] (state, items) {
    state.communities = items
  },
  [DELETE_COMMUNITY] (state, id) {
    state.communities = state.communities.filter((v) => v.id !== id)
  },
  [ADD_COMMUNITY] (state, items) {
    state.communities .push(items)
  },
  [UPDATE_COMMUNITY] (state, items) {
    state.communities = state.communities.map((v) => {
      if (v.id === items.id) {
        for (let key in v) {
          v[key] = items[key]
        }
      }
    })
  }
}
