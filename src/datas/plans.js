import { _users } from './data'

const _createPlanList = (count) => {
  let list = []
  for (let i = 0; i < count; i++) {
    list.push({
      title: `吴宣仪第${i + 1}周周计划`,
      avatar: `http://cdn.qinmudi.cn/吴宣仪.jpg`,
      superviser: `${_users[i]}`,
      datetime: `2019-01-${i + 10}`,
      progress: {
        achievement: (40 + i * 2),
        call: (10 + i * 3),
        service: (20 + i * 1)
      }
    })
  }
  return list
}

export {
  _createPlanList
}
