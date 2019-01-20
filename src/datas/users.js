import { _users } from './data'

/**
 *
 * @param {Number} count 生成数量
 */
const _createTutorList = (count) => {
  let list = []
  for (let i = 0; i < count; i++) {
    list.push({
      name: `${_users[i]}`,
      src: `http://cdn.qinmudi.cn/${_users[i]}.jpg`,
      desc: `拥有四年多的课程开发开发经验，负责过很多大型项目。秉着“一个不放弃”的原则 ，对待每位学生。讲课通俗易懂，对于难理解的知识，通常会单独列出来， 分开讲解，一步一步让学生接受，化繁为简。踏实的她， 通常也会把“一步一个脚印”的教学理念贯穿给她的学生。拥有四年多的课程开发开发经验，负责过很多大型项目。秉着“一个不放弃”的原则 ，对待每位学生。讲课通俗易懂，对于难理解的知识，通常会单独列出来， 分开讲解，一步一步让学生接受，化繁为简。踏实的她， 通常也会把“一步一个脚印”的教学理念贯穿给她的学生。`
    })
  }
  return list
}

const _createCoachList = (count) => {
  let list = []
  for (let i = 0; i < count; i++) {
    list.push({
      name: `${_users[i]}`,
      src: `http://cdn.qinmudi.cn/${_users[i]}.jpg`,
      desc: `拥有四年多的课程开发开发经验，负责过很多大型项目。秉着“一个不放弃”的原则 ，对待每位学生。讲课通俗易懂，对于难理解的知识，通常会单独列出来， 分开讲解，一步一步让学生接受，化繁为简。踏实的她， 通常也会把“一步一个脚印”的教学理念贯穿给她的学生。拥有四年多的课程开发开发经验，负责过很多大型项目。秉着“一个不放弃”的原则 ，对待每位学生。讲课通俗易懂，对于难理解的知识，通常会单独列出来， 分开讲解，一步一步让学生接受，化繁为简。踏实的她， 通常也会把“一步一个脚印”的教学理念贯穿给她的学生。`
    })
  }
  return list.reverse()
}

export {
  _createTutorList,
  _createCoachList
}
