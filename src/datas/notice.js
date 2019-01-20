import { _users } from './data'

const _createNoticeList = (count) => {
  let list = []
  for (let i = 0; i < count; i++) {
    list.push({
      avatar: `http://cdn.qinmudi.cn/${_users[i]}.jpg`,
      name: `${_users[i]}`,
      notice: `创建了团队${_users[i]}粉丝团队`,
      isRead: (i % 3 === 0),
      href: '/'
    })
  }
  return list
}

export {
  _createNoticeList
}
