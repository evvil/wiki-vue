import * as types from './mutation-types'
// import {
//   API_ROOT
// } from '../config'

const API_ROOT = "http://127.0.0.1:8000"

export default {


  //  获取标题, 更新标题
  getHeadline:function({
    commit
  }) {
    commit(types.GET_HEADLINE)
  },
  updateHeadline:function({
    commit
  }, value) {
    commit(types.UPDATE_HEADLINE, value)
  },

  getContentList:function({
    commit
  }) {
    // commit(types.REQUEST_CONTENT_LIST)
    // this.$http.get(API_ROOT + 'api/content-list').then(response => {
    //   commit(types.GET_CONTENT_LIST, JSON.parse(response.body))
    // }, error => {
    //   commit(types.GET_CONTENT_LIST_FAILURE, error)
    // })
    commit(types.GET_CONTENT_LIST, [{
        abstract: "最近两个月陆续拿到了一些 sp offer，也不负众望取得中期答辩不过的头彩，稀里糊涂的度过了九月十月，身体力量虽然小幅提高，但频率已经降到两天一练甚至两天都不能一练的境况，得过且过的现象简直抓瞎。",
        createdAt: "2016-11-13 22:31:15",
        objectId: "582879332e958a005eb464c1",
        title: "2016.11 9周减脂计划"}]
    )
  },


  //  获取文章内容, 清除文章
  getArticle: function ({
    commit
  }, id) {
    this.$http.get(API_ROOT + 'api/article/' + id).then(response => {
      commit(types.GET_ARTICLE, JSON.parse(response.body))
    }, error => {
      commit(types.GET_ARTICLE_FAILURE, error)
    })
  },
  clearArticle: function ({
    commit
  }) {
    commit(types.CLEAR_ARTICLE)
  },
  // 获取标签集, 获取指定标签列表
  getTags: function ({
    commit
  }) {
    this.$http.get(API_ROOT + 'api/tags').then(response => {
      commit(types.GET_TAGS, JSON.parse(response.body))
    }, error => {
      commit(types.GET_TAGS_FAILURE, error)
    })
  },
  getTagContentList: function ({
    commit
  }, tagId) {
    this.$http.get(API_ROOT + 'api/tags/' + tagId).then(response => {
      commit(types.GET_TAG_CONTENT_LIST, JSON.parse(response.body), tagId)
    }, error => {
      commit(types.GET_TAG_CONTENT_LIST_FAILURE, error)
    })
  },
  // 根据 文章 id 获取 comments
  getCommentsList: function ({
    commit
  }, articleId) {
    this.$http.get(API_ROOT + 'api/comments/' + articleId).then(response => {
      commit(types.GET_COMMENTS_LIST, JSON.parse(response.body), error => {
        commit(types.GET_COMMENTS_LIST_FAILURE, error)
      })
    })
  }, // 提交评论
  submitComment: function ({
    commit
  }, data) {
    this.$http.post(API_ROOT + 'api/comments/submitComment', data).then(response => {
      commit(types.SUBMIT_COMMENT, JSON.parse(response.body), error => {
        commit(types.SUBMIT_COMMENT_FAILURE, error)
      })
    })
  }
}