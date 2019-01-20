import Vue from 'vue'
import CpHeader from '../components/header'
import CpUserBar from '../components/userBar'
import CpCarousel from '../components/carousel'
import CpLinkList from '../components/linkList'
import CpNewTeam from '../components/newTeam'
import CpImageText from '../components/imageText'
import CpLayout from '../components/layout'
import CpSider from '../components/sider'
import CpTemplate from '../components/template'
import CpUserList from '../components/userList'
import CpTabs from '../components/tabs'
import CpTabList from '../components/tabList'
import CpWheelNews from '../components/wheelNews'
import CpTeamList from '../components/teamList'
import CpTeamBanner from '../components/teamBanner'
import CpArticle from '../components/article'
import CpNoticeList from '../components/noticeList'
import CpLoginCon from '../components/loginCon'
import CpLogo from '../components/logo'
import CpWeekPlanList from '../components/weekPlanList'
import CpWidgetHeader from '../components/widgetHeader'
import CpFooter from '../components/footer'

let components = [CpHeader, CpUserBar, CpCarousel, CpLinkList, CpNewTeam, CpImageText, CpLayout, CpSider, CpTemplate, CpUserList, CpTabs, CpTabList, CpWheelNews, CpTeamList, CpTeamBanner, CpArticle, CpNoticeList, CpLoginCon, CpLogo, CpWeekPlanList, CpWidgetHeader, CpFooter]

components.map((item) => {
  if (typeof item.name !== 'undefined') {
    Vue.component(item.name, item)
  }
})
