import { _users } from './data'

/**
 *
 * @param {Number} count 生成条数
 */
const _createRandomList = (count) => {
  let list = []
  for (let i = 0; i < count; i++) {
    let str = Math.round(Math.random() * 1000)
    list.push({
      title: `${str}热烈庆祝做到文化管理平台正式上线正式上线正式上线正式上线`,
      url: '/',
      datetime: '2019-01-17 18:00'
    })
  }
  return list
}

const _createStarList = (count) => {
  let list = []
  for (let i = 0; i < count; i++) {
    list.push({
      title: `${_users[i]}`,
      avatar: `http://cdn.qinmudi.cn/${_users[i]}.jpg`,
      url: '/',
      team: `中公大LP${i + 5}学员`
    })
  }
  return list
}

const _createTeamList = (count) => {
  let list = []
  for (let i = 0; i < count; i++) {
    list.push({
      title: `${_users[i]}粉丝团`,
      logo: `http://cdn.qinmudi.cn/${_users[i]}.jpg`,
      href: '/'
    })
  }
  return list
}

export {
  _createRandomList,
  _createStarList,
  _createTeamList
}
