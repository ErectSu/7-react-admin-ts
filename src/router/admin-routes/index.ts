import { IRouteModule } from '@/global/interface'
import AdminHome from '@/pages/admin-system/home'
import UiAntd from '@/pages/admin-system/ui-antd'
import UiAntdForm from '@/pages/admin-system/ui-antd-form'
import UiVant from '@/pages/admin-system/ui-vant'
import JsEs6 from '@/pages/admin-system/js-es6'

const adminRoutes: IRouteModule[] = [{
  title: '首页',
  icon: 'anticon-home--line',
  key: '/admin-home',
  path: '/admin-home',
  component: AdminHome,
  meta: {
    needLoginAuth: true,
    rolesAuth: ['user', 'admin']
  },
}, {
  title: 'UI',
  icon: 'anticon-uikit',
  key: '/admin-ui',
  meta: {
    needLoginAuth: true,
    rolesAuth: ['user', 'admin']
  },
  subs: [{ // subs用于注册路由，并且用于menu树形菜单
    title: 'Antd',
    icon: 'anticon-ant-design',
    key: '/admin-ui/antd',
    meta: {
      needLoginAuth: true,
      rolesAuth: ['admin']
    },
    subs: [{
      title: '首页',
      icon: 'anticon-codev1',
      key: '/admin-ui/antd/index',
      path: '/admin-ui/antd/index',
      component: UiAntd,
      meta: {
        needLoginAuth: true,
        rolesAuth: ['admin']
      },
    }, {
      title: 'Form表单',
      icon: 'anticon-yewubiaodan',
      key: '/admin-ui/antd/form',
      path: '/admin-ui/antd/form',
      component: UiAntdForm,
      meta: {
        needLoginAuth: true,
        rolesAuth: ['admin']
      },
    }]
  }, {
    title: 'Vant',
    icon: 'anticon-relevant-outlined',
    key: '/admin-ui/vant',
    path: '/admin-ui/vant',
    component: UiVant,
    meta: {
      needLoginAuth: true,
      rolesAuth: ['user', 'admin']
    },
  }]
}, {
  title: 'JS',
  icon: 'anticon-js',
  key: '/admin-js',
  meta: {
    needLoginAuth: true,
    rolesAuth: ['admin']
  },
  subs: [{
    title: 'ES6',
    icon: 'anticon-6',
    key: '/admin-js/es6',
    path: '/admin-js/es6',
    component: JsEs6,
    meta: {
      needLoginAuth: true,
      rolesAuth: ['admin']
    },
  }, {
    title: 'ES5',
    icon: 'anticon-js',
    key: '/admin-js/es5',
    path: '/admin-js/es5',
    component: UiAntd,
    meta: {
      needLoginAuth: true,
      rolesAuth: ['admin']
    },
  }]
}]

export default adminRoutes