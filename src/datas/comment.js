import { _users } from './data'

const _createCommentList = (count) => {
  let list = []
  for (let i = 0; i < count; i++) {
    list.push({
      name: `${_users[i]}`,
      comment: `真的还是假的啊，娱乐圈真实很耐人寻味啊！真的还是假的啊，娱乐圈真实很耐人寻味啊！真的还是假的啊，娱乐圈真实很耐人寻味啊！`,
      team: `中共大LP${i + 1}学员`,
      avatar: `http://cdn.qinmudi.cn/${_users[i]}.jpg`,
      datetime: `2019-01-${i + 1}`,
      praise: i + 1
    })
  }
  return list
}

export {
  _createCommentList
}
