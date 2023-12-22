import { useNavigate } from "react-router-dom";
import {
  Layout,
  Flex,
  Breadcrumb,
  Switch,
  Dropdown,
  Button,
  MenuProps,
} from "antd";
import { dropdownMenus as items } from "@/constant/menus";
import { useAppSelector } from "@/hooks";
import IconFont from "@/components/iconfont";
import userApi from "@/api/user";

type Props = {
  theme: BaseTheme;
  onThemeChange: (theme: BaseTheme) => void;
};

const handleIcon = (breadcrumbsItems) => {
  return breadcrumbsItems.map((menu) => {
    const newMenu = {
      ...menu,
      title: (
        <>
          <IconFont style={{ fontSize: "14px" }} type={menu.icon} />
          <span>{menu.title}</span>
        </>
      ),
    };
    return newMenu;
  });
};

const Header: React.FC<Props> = ({ theme, onThemeChange }) => {
  const changeTheme = (checked) => {
    const theme = checked ? "dark" : "light";
    onThemeChange(theme);
    localStorage.setItem("LOCAL_BASE_THEME", theme);
  };

  const breadcrumbsItems = handleIcon(
    useAppSelector((state) => state.menu.value.breadcrumbs),
  );

  const navigate = useNavigate();
  const loginOut = async () => {
    const res = await userApi.loginOut();
    if (res.status === "success") navigate("/login");
  };

  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "loginOut") loginOut();
  };

  return (
    <Layout.Header>
      <Flex justify="space-between" align="center">
        <Breadcrumb items={breadcrumbsItems} style={{ marginLeft: "-25px" }} />
        <Flex align="center" gap="large">
          <Switch
            checkedChildren="🌛"
            unCheckedChildren="🌞"
            defaultChecked={theme === "dark"}
            onChange={changeTheme}
          />
          <Dropdown menu={{ items, onClick }}>
            <div>
              <Button type="text">sosohe</Button>
            </div>
          </Dropdown>
        </Flex>
      </Flex>
    </Layout.Header>
  );
};

export default Header;
