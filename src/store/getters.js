
export default {
    contentList: ({contentList}) => contentList.contentList,

    headline: state => state.headline.headline,

    article : ({ article }) => article,

    tags : ({ tags }) => tags.tagSet,
    tagContentList : ({ tagContentList }) => tagContentList.tagContentList,
    tagContentListId : ({ tagContentList }) => tagContentList.tagId,

    commentsList : ({ commentsList }) => commentsList.commentsList,
}
