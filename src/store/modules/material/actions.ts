import { SET_MATERIAL } from './types'
import { useApi } from '@/api'
const setMaterials = ({ commit, state }, args) => {
  commit(SET_MATERIAL,[])// quick update
  return new Promise((resolve, reject) => {
    useApi(
      '/admin/json/material/list',
      'get',
      data => {
        commit(SET_MATERIAL, data.data.items)
        resolve(data.data)
      },
      data => {
        reject(data)
      },
      args
    )
  })
}

export default {
  setMaterials
}
