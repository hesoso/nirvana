import { useEffect, useState } from "react";
import { Space, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import sysApi from "@/api/system";

const columns: ColumnsType<IRole> = [
  {
    title: "角色",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "角色Code",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "状态",
    dataIndex: "disabled",
    key: "disabled",
    render: (_, { disabled }) => (
      <span>{disabled === 1 ? "正常" : "禁用"} </span>
    ),
  },
  {
    title: "权限",
    dataIndex: "presmission",
    key: "presmission",
  },
  {
    title: "描述",
    dataIndex: "desc",
    key: "desc",
  },
  {
    title: "操作",
    key: "action",
    width: 300,
    render: () => (
      <Space size="middle">
        <Button>Edit</Button>
        <Button danger>Delete</Button>
      </Space>
    ),
  },
];

const Roles = () => {
  const [roles, setRoles] = useState<IRole[]>([]);

  const getRoleList = async () => {
    const res = await sysApi.getRoles();
    if (res.status === "success") setRoles(res.data.list);
  };

  useEffect(() => {
    getRoleList();
  }, []);

  return (
    <Table
      rowKey="code"
      columns={columns}
      dataSource={roles}
      pagination={false}
      size="middle"
    />
  );
};

export default Roles;
