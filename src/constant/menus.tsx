import type { MenuProps } from 'antd'
import {
  HomeOutlined,
  AppstoreOutlined,
  SettingOutlined,
  FormOutlined,
  BugOutlined,
  SmileOutlined,
  TeamOutlined,
} from '@ant-design/icons'

const siderMenus = [
  {
    key: 'home',
    label: '首页',
    icon: <HomeOutlined />,
  },
  {
    key: 'comp',
    label: '组件',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: 'comp/pinyin',
        label: '拼音',
      },
    ],
  },
  {
    key: 'editor',
    label: '编辑器',
    icon: <FormOutlined />,
  },
  {
    key: 'exception',
    label: '异常页面',
    icon: <BugOutlined />,
  },
  {
    key: 'tips',
    label: '结果页面',
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: 'auth',
    label: '权限测试',
    icon: <TeamOutlined />,
  },
  {
    key: 'setting',
    label: '系统设置',
    icon: <SettingOutlined />,
    children: [
      {
        key: 'setting/users',
        label: '用户管理',
      },
      {
        key: 'setting/roles',
        label: '角色管理',
      },
      {
        key: 'setting/menus',
        label: '菜单管理',
      },
    ],
  },
]

const userMenus: MenuProps['items'] = [
  {
    label: '江南无所有',
    key: '0',
  },
  {
    label: '聊赠一枝春',
    key: '1',
  },
  {
    label: '自定义主题',
    key: '2',
  },
  {
    type: 'divider',
  },
  {
    label: '退出登录',
    key: '3',
  },
]

export { siderMenus, userMenus }
