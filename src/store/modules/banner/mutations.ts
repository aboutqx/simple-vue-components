import { SET_BANNERS, DELETE_BANNER, UPDATE_BANNERS } from './types'

export default {
  [SET_BANNERS] (state, items) {
    state.banners = items
  },
  [DELETE_BANNER] (state, id) {
    state.banners = state.banners.filter((v) => v.id !== id)
  },
  [UPDATE_BANNERS] (state, items) {
    state.banners = items
  }
}
