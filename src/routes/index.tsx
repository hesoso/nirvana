import { lazy, Suspense, ReactNode } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { Result } from "antd";

import Layout from "../views/layout";
import Login from "@/views/login";
import Home from "@/views/home";

import Fallback from "@/components/Fallback";

// 编辑器
const LazyEditor = lazy(() => import("../views/editor"));
// 异常页面
const LazyException = lazy(() => import("../views/exception"));
// 权限测试页面
const LazyAuth = lazy(() => import("../views/auth"));
// 组件 - 拼音
const LazyPinyin = lazy(() => import("../views/comp/pinyin"));
// 设置 - 用户管理
const LazyUsers = lazy(() => import("../views/setting/users"));
// 设置 - 角色管理
const LazyRoles = lazy(() => import("../views/setting/roles"));
// 设置 - 菜单管理
const LazyMenus = lazy(() => import("../views/setting/menus"));

const lazyLood = (element: ReactNode) => {
  return <Suspense fallback={<Fallback />}>{element}</Suspense>;
};

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/comp/pinyin",
        element: lazyLood(<LazyPinyin />),
      },
      {
        path: "/editor",
        element: lazyLood(<LazyEditor />),
      },
      {
        path: "/exception",
        element: lazyLood(<LazyException />),
      },
      {
        path: "/auth",
        element: lazyLood(<LazyAuth />),
      },
      {
        path: "/setting/users",
        element: lazyLood(<LazyUsers />),
      },
      {
        path: "/setting/roles",
        element: lazyLood(<LazyRoles />),
      },
      {
        path: "/setting/menus",
        element: lazyLood(<LazyMenus />),
      },
    ],
  },
  {
    path: "*",
    element: <Result status="404" title="404" subTitle="我的兜里一无所有" />,
  },
];

const WrapperRoutes = () => useRoutes(routes);

export default WrapperRoutes;
