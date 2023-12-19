import { useState } from "react";
import { Layout, Menu } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

import { useAppDispatch } from "@/hooks";
import { setMenu } from "@/store/slice/menu";
import { siderMenus } from "@/constant/menus";

const Sider: React.FC<{ theme: BaseTheme }> = ({ theme }) => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  const dispatch = useAppDispatch();

  const menuClick = ({ key, keyPath }) => {
    navigate(`/${key}`);

    const breadcrumbs: Array<{ title: string; key: string }> = [];

    const setBreadcrumbs = (menus) => {
      const menuPath = keyPath.pop();
      menus.forEach(({ key, label, children }) => {
        if (key !== menuPath) return;
        breadcrumbs.push({ title: label, key });
        keyPath.length && setBreadcrumbs(children);
      });
    };

    setBreadcrumbs(siderMenus);

    dispatch(setMenu({ breadcrumbs }));
  };

  const currentKey = useLocation().pathname.slice(1);
  const defaultOpenKeys = [currentKey.split("/")[0]];
  const defaultSelectedKeys = [currentKey];

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
        style={{ height: "100%" }}
        theme={theme}
        mode="inline"
        items={siderMenus}
        defaultOpenKeys={defaultOpenKeys}
        defaultSelectedKeys={defaultSelectedKeys}
      />
    </Layout.Sider>
  );
};

export default Sider;
