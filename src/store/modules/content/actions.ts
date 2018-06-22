import { SET_CONTENT, DELETE_CONTENT, ADD_CONTENTS } from './types'

import { useApi } from '@/api'
const setContents = ({ commit, state }, args) => {
  commit(SET_CONTENT, []) // quick update
  return new Promise((resolve, reject) => {
    useApi(
      '/post/postList',
      'get',
      data => {
        commit(SET_CONTENT, data.data.items)
        resolve(data.data)
      },
      null, // use default reject
      args
    )
  })
}
const deleteContent = ({ commit, state }, id) => {
  return new Promise((resolve, reject) => {
    useApi(
      '/post/delete',
      'get',
      data => {
        commit(DELETE_CONTENT, id)
        resolve(data.data)
      },
      null, // use default reject
      { id }
    )
  })
}

const addContents = ({ commit, state }, item) => {
  return new Promise((resolve, reject) => {
    useApi(
      '/post/postList',
      'post',
      data => {
        commit(ADD_CONTENTS, data.data.items)
        resolve(data.data)
      },
      null, // use default reject
      item
    )
  })
}

export default {
  setContents,
  deleteContent,
  addContents
}
