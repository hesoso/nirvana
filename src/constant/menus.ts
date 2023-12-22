import type { MenuProps } from 'antd'

const menus = [
  {
    key: '/home',
    label: '首页',
    icon: 'icon-home',
  },
  {
    key: '/comp',
    label: '组件',
    icon: 'icon-layers',
    children: [
      {
        key: '/comp/pinyin',
        label: '拼音',
        icon: 'icon-image-text',
      },
      {
        key: '/comp/icons',
        label: '图标',
        icon: 'icon-modular',
      },
    ],
  },
  {
    key: '/editor',
    label: '编辑器',
    icon: 'icon-edit',
  },
  {
    key: '/exception',
    label: '异常页面',
    icon: 'icon-meh',
  },
  {
    key: '/tips',
    label: '结果页面',
    icon: 'icon-smile',
    disabled: true,
  },
  {
    key: '/auth',
    label: '权限测试',
    icon: 'icon-lock',
  },
  {
    key: '/setting',
    label: '系统设置',
    icon: 'icon-setting',
    children: [
      {
        key: '/setting/users',
        label: '用户管理',
        icon: 'icon-user',
      },
      {
        key: '/setting/roles',
        label: '角色管理',
        icon: 'icon-training',
      },
      {
        key: '/setting/menus',
        label: '菜单管理',
        icon: 'icon-file',
      },
    ],
  },
]

const dropdownMenus: MenuProps['items'] = [
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
    key: 'loginOut',
  },
]

export { menus, dropdownMenus }
