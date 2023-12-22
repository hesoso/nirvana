import { useEffect, useState } from "react";
import { Space, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import sysApi from "@/api/system";
import IconFont from "@/components/iconfont";

const columns: ColumnsType<IMenu> = [
  {
    title: "名称",
    dataIndex: "label",
    key: "label",
  },
  {
    title: "路径",
    dataIndex: "key",
    key: "key",
  },
  {
    title: "图标",
    key: "icon",
    render: (_, { icon }) => (
      <>
        <IconFont
          type={icon}
          style={{
            fontSize: "16px",
            marginRight: "10px",
          }}
        ></IconFont>
        <span>{icon}</span>
      </>
    ),
  },
  {
    title: "操作",
    key: "action",
    render: () => (
      <Space size="middle">
        <Button>Edit</Button>
        <Button danger>Delete</Button>
      </Space>
    ),
  },
];

const Users = () => {
  const [menus, setMenus] = useState<IMenu[]>([]);

  const getMenuList = async () => {
    const res = await sysApi.getMenus();
    if (res.status === "success") setMenus(res.data.list);
  };

  useEffect(() => {
    getMenuList();
  }, []);

  return (
    <>
      <Table
        columns={columns}
        dataSource={menus}
        pagination={false}
        scroll={{ y: 660 }}
        size="middle"
      />
    </>
  );
};

export default Users;
