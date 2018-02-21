import {
  UPDATE_HEADLINE,
  GET_HEADLINE
} from '../mutation-types'

const state = {
  headline: ''
}

const getters = {
  headline: state => state.headline
}

const mutations = {
  [UPDATE_HEADLINE](state, value) {
    state.headline = value
  },
  [GET_HEADLINE](state) {
    return state.headline
  }
}

const actions = {
  //  获取标题, 更新标题
  getHeadline({
    dispatch,commit
  }) {
    commit(GET_HEADLINE)
  },
  updateHeadline({
    dispatch,commit
  }, value) {
    commit(UPDATE_HEADLINE, value)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}