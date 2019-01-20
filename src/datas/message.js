import { _users } from './data'

const _createMessageList = (count) => {
  let list = []
  for (let i = 0; i < count; i++) {
    list.push({
      title: `Snap自上市来市值蒸发超200亿美元【${i + 1}】`,
      desc: `阅后即焚应用Snapchat母公司Snap的股票已如同明日黄花一般。在2017年3月上市时，Snap的市值曾高达310亿美元，但如今这家公司的市值已不足80亿美元。Snap的股价在周三又遭遇重创。在宣布上任刚8个月的首席财务官蒂姆·斯通(Tim Stone)将从公司离职之后，Snap股价暴跌13%，创出自去年5月以来的单日最大跌幅。Snap的股价在周三又遭遇重创。在宣布上任刚8个月的首席财务官蒂姆·斯通(Tim Stone)将从公司离职之后，Snap股价暴跌13%，创出自去年5月以来的单日最大跌幅。`,
      avator: `http://cdn.qinmudi.cn/${_users[i]}.jpg`,
      username: `${_users[i]}`,
      datetime: '2019-01-19 19:00'
    })
  }
  return list
}

export {
  _createMessageList
}
