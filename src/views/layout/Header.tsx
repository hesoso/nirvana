import { Layout, Flex, Breadcrumb, Switch, Dropdown, Button } from 'antd'

import { userMenus } from '../../constant/menus'
import { useAppSelector } from '../../hooks'

type Props = {
  theme: BaseTheme;
  onThemeChange: (theme: BaseTheme) => void
}

const Header: React.FC<Props> = ({ theme, onThemeChange }) => {
  const changeTheme = (checked) => {
    const theme = checked ? 'dark' : 'light'
    onThemeChange(theme)
    localStorage.setItem('LOCAL_BASE_THEME', theme)
  }

  const breadcrumbsItems = useAppSelector(
    (state) => state.menu.value.breadcrumbs
  )

  return (
    <Layout.Header>
      <Flex justify="space-between" align="center">
        <Breadcrumb items={breadcrumbsItems} style={{ marginLeft: '-25px' }} />
        <Flex align="center" gap="large">
          <Switch
            checkedChildren="🌛"
            unCheckedChildren="🌞"
            defaultChecked={theme === 'dark'}
            onChange={changeTheme}
          />
          <Dropdown menu={{ items: userMenus }}>
            <div>
              <Button type="text">sosohe</Button>
            </div>
          </Dropdown>
        </Flex>
      </Flex>
    </Layout.Header>
  )
}

export default Header
