import { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'

import { useAppDispatch } from '@/hooks'
import { setMenu } from '@/store/slice/menu'
import { menus } from '@/constant/menus'
import IconFont from '@/components/iconfont'

const handleIcon = (menus) => {
  return menus.map((menu) => {
    const newMenu = {
      ...menu,
      icon: <IconFont style={{ fontSize: '16px' }} type={menu.icon} />,
    }
    if (menu.children?.length) {
      newMenu.children = handleIcon(menu.children)
    }
    return newMenu
  })
}

const getBreadcrumbsByPath = (menus, path) => {
  let results: BaseBreadcrumbType[] = []
  menus.forEach(({ key, label, icon, children }) => {
    if (key === path) {
      results.push({ key, title: label, icon })
      return
    }
    if (!children?.length) return
    const childResults = getBreadcrumbsByPath(children, path)
    if (childResults.length) {
      results = [...childResults, { key, title: label, icon }]
    }
  })
  return results
}

const Sider: React.FC<{ theme: BaseTheme }> = ({ theme }) => {
  const navigate = useNavigate()

  const [collapsed, setCollapsed] = useState(false)

  const dispatch = useAppDispatch()

  const menuClick = ({ key, keyPath }) => {
    navigate(key)

    const breadcrumbs: Array<BaseBreadcrumbType> = []

    const setBreadcrumbs = (menus) => {
      const menuPath = keyPath.pop()
      menus.forEach(({ key, label, icon, children }) => {
        if (key !== menuPath) return
        breadcrumbs.push({ key, title: label, icon })
        keyPath.length && setBreadcrumbs(children)
      })
    }

    setBreadcrumbs(menus)
    dispatch(setMenu({ breadcrumbs }))
  }

  const currentKey = useLocation().pathname
  const defaultOpenKeys = ['/' + currentKey.split('/')[1]]
  const defaultSelectedKeys = [currentKey]

  useEffect(() => {
    const breadcrumbs = getBreadcrumbsByPath(menus, currentKey)
    dispatch(setMenu({ breadcrumbs }))
  }, [dispatch, currentKey])

  return (
    <Layout.Sider
      width={200}
      breakpoint="xl"
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
    >
      <Menu
        onClick={menuClick}
        style={{ height: '100%' }}
        theme={theme}
        mode="inline"
        items={handleIcon(menus)}
        defaultOpenKeys={defaultOpenKeys}
        defaultSelectedKeys={defaultSelectedKeys}
      />
    </Layout.Sider>
  )
}

export default Sider
