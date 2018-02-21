import {
  REQUEST_CONTENT_LIST,
  GET_CONTENT_LIST,
  GET_CONTENT_LIST_FAILURE
} from '../mutation-types'

const state = {
  isFetching: false,
  contentList: []
}

const getters = {
  contentList: state => state.contentList
}

const mutations = {
  [REQUEST_CONTENT_LIST](state) {
    state.isFetching = true
  },
  [GET_CONTENT_LIST](state, items) {
    state.isFetching = false
    state.contentList = items
  },
  [GET_CONTENT_LIST_FAILURE](state) {
    state.isFetching = false
  }
}
const actions = {
  getContentList({
    commit
  }) {
    commit(GET_CONTENT_LIST, [{
        abstract: "最近两个月陆续拿到了一些 sp offer，也不负众望取得中期答辩不过的头彩，稀里糊涂的度过了九月十月，身体力量虽然小幅提高，但频率已经降到两天一练甚至两天都不能一练的境况，得过且过的现象简直抓瞎。",
        createdAt: "2016-11-13 22:31:15",
        objectId: "582879332e958a005eb464c1",
        title: "2016.11 9周减脂计划"}]
    )
  }
}

export default {
  state,
  getters,
  mutations,actions
}