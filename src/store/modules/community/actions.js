import {
  SET_COMMUNITY,
  ADD_COMMUNITY,
  UPDATE_COMMUNITY,
  DELETE_COMMUNITY
} from './types'

import { useApi } from '@/api'
const setCommunities = ({ commit, state }, args) => {
  commit(SET_COMMUNITY, []) // quick update
  return new Promise((resolve, reject) => {
    useApi(
      '/community/communityList',
      'get',
      data => {
        commit(SET_COMMUNITY, data.data.items)
        resolve(data.data)
      },
      null, // use default reject
      args
    )
  })
}
const addCommunity = ({ commit, state }, args) => {
  return new Promise((resolve, reject) => {
    useApi(
      '/community/add',
      'post',
      data => {
        commit(ADD_COMMUNITY, args)
        resolve(args)
      },
      null, // use default reject
      args
    )
  })
}
const updateCommunity = ({ commit, state }, args) => {
  return new Promise((resolve, reject) => {
    useApi(
      '/community/update',
      'post',
      data => {
        commit(UPDATE_COMMUNITY, args)
        resolve(args)
      },
      null, // use default reject
      args
    )
  })
}
const deleteCommunity = ({ commit, state }, args) => {
  return new Promise((resolve, reject) => {
    useApi(
      '/community/delete',
      'post',
      data => {
        commit(DELETE_COMMUNITY, args.id)
        resolve(data.data)
      },
      null, // use default reject
      args
    )
  })
}
export default {
  setCommunities,
  addCommunity,
  deleteCommunity,
  updateCommunity
}
