import { SET_BANNERS, DELETE_BANNER, UPDATE_BANNERS } from './types'
import { useApi } from '@/api'
const setBanners = ({ commit, state }, args) => {
  commit(SET_BANNERS, []) // quick update
  return new Promise((resolve, reject) => {
    useApi(
      '/banner/bannerList',
      'get',
      data => {
        commit(SET_BANNERS, data.data.items)
        resolve(data.data)
      },
      data => {
        reject(data)
      },
      args
    )
  })
}
const deleteBanner = ({ commit, state }, id) => {
  return new Promise((resolve, reject) => {
    useApi(
      '/banner/delete',
      'get',
      data => {
        commit(DELETE_BANNER, id)
        resolve(data.data)
      },
      data => {
        reject(data)
      },
      id
    )
  })
}
const updateBanners = ({ commit, state }, items) => {
  return new Promise((resolve, reject) => {
    useApi(
      '/banner/delete',
      'get',
      data => {
        commit(UPDATE_BANNERS, items)
        resolve(data.data)
      },
      data => {
        reject(data)
      },
      items
    )
  })
}

export default {
  setBanners,
  deleteBanner,
  updateBanners
}
