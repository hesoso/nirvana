import { useEffect, useState, useCallback } from "react";
import { Table, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import userApi from "@/api/user";

const columns: ColumnsType<IUser> = [
  {
    title: "用户ID",
    dataIndex: "userId",
    key: "userId",
  },
  {
    title: "用户名",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "密码",
    dataIndex: "password",
    key: "password",
  },
  {
    title: "性别",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "地址",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "状态",
    dataIndex: "disabled",
    key: "disabled",
    render: (_, { disabled }) => (
      <span>{disabled === 1 ? "启用" : "禁用"}</span>
    ),
  },
  {
    title: "角色",
    key: "roles",
    dataIndex: "roles",
    render: (_, { roles }) => (
      <>
        {roles.map(({ code, name }) => {
          const color =
            name === "master"
              ? "orangered"
              : name === "guest"
                ? "green"
                : "geekblue";
          return (
            <Tag color={color} key={code}>
              {name.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "操作",
    key: "action",
    render: (_, { disabled }) => (
      <Button disabled={disabled === 0}>Edit</Button>
    ),
  },
];

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 30,
    total: 0,
  });
  const { current, pageSize } = pagination;

  const getUserList = useCallback(async () => {
    setLoading(true);
    const res = await userApi.getUsers({ current, pageSize });
    setLoading(false);
    if (res.status === "error") return;
    setUsers([...res.data.list]);
    setPagination((prev) => ({ ...prev, total: res.data.total }));
  }, [current, pageSize]);

  useEffect(() => {
    getUserList();
  }, [getUserList]);

  return (
    <Table
      rowKey="userId"
      columns={columns}
      dataSource={users}
      pagination={pagination}
      onChange={({ current, pageSize }) => {
        setPagination({
          ...pagination,
          current: current || pagination.current,
          pageSize: pageSize || pagination.pageSize,
        });
      }}
      loading={loading}
      scroll={{ y: 650 }}
      size="middle"
    />
  );
};

export default Users;
