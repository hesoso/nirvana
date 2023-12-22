import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { ConfigProvider, Layout, theme } from 'antd'
import type { MappingAlgorithm, ThemeConfig } from 'antd'

import Header from './Header'
import Sider from './Sider'
import './index.scss'

const Layouts = () => {
  const color = localStorage.getItem('LOCAL_BASE_THEME') || 'light'
  const [baseTheme, setBaseTheme] = useState<BaseTheme>(color as BaseTheme)

  // const themeConfig = { algorithm: themeAlgorithm, cssVar: true, hashed: false }
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>()

  function getThemeAlgorithm(baseTheme: BaseTheme): MappingAlgorithm {
    const isDark = baseTheme === 'dark'
    return (seedToken, mapToken) => {
      const baseToken = isDark
        ? theme.darkAlgorithm(seedToken, mapToken)
        : theme.defaultAlgorithm(seedToken)
      return {
        ...baseToken,
        // colorBgLayout: '#fafafc', // Layout 背景色
        // colorBgContainer: '#fafafc', // 组件容器背景色
        // colorBgElevated: '#32363e', // 悬浮容器背景色
        // fontSize: 14,
        colorPrimary: 'green',
      }
    }
  }

  useEffect(() => {
    let compConfig: ThemeConfig['components'] = {
      Layout: {
        headerHeight: 50,
      },
    }
    if (baseTheme === 'light') {
      compConfig = {
        Layout: { headerBg: '#fafafc', headerHeight: 50 },
        Menu: { itemBg: '#fafafc' },
      }
    }
    const config: ThemeConfig = {
      algorithm: getThemeAlgorithm(baseTheme),
      components: { ...compConfig },
    }
    setThemeConfig(config)
  }, [baseTheme])

  return (
    <ConfigProvider theme={themeConfig}>
      <Layout className="layout-wapper">
        <Sider theme={baseTheme} />
        <Layout>
          <Header theme={baseTheme} onThemeChange={setBaseTheme} />
          <Layout.Content className="content-wrapper">
            <Outlet />
          </Layout.Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default Layouts
