import { _users } from './data'

const _createTeamList = (count) => {
  let list = []
  for (let i = 0; i < count; i++) {
    list.push({
      name: `${_users[i]}粉丝团队`,
      src: `http://cdn.qinmudi.cn/${_users[i]}.jpg`,
      count: `${i + 10}`,
      organize: `中共大领导力培训`,
      createTime: `2019-01-${i}`,
      admin: `${_users[i]}`
    })
  }
  return list
}

export {
  _createTeamList
}
