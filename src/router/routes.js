import Channels from '@/views/Channels.vue'
import Comments from '@/views/Comments.vue'
import DashBoard from '@/views/DashBoard.vue'
import Insight from '@/views/Insight.vue'
import Reports from '@/views/Reports.vue'

export default [
  {
    path: '/',
    name: 'Dashboard',
    component: DashBoard,
  },
  {
    path: '/insight',
    name: 'Insight',
    component: Insight,
  },
  {
    path: '/report',
    name: 'Report',
    component: Reports,
  },
  {
    path: '/comment',
    name: 'Comment',
    component: Comments,
  },
  {
    path: '/channel',
    name: 'Channels',
    component: Channels,
  },

]
