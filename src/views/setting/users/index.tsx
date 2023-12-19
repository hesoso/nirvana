import { useEffect, useState } from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { getUsers } from "@/api/user";

interface UserDataType {
  key: string;
  username: string;
  age: number;
  address: string;
  phone: string;
  tags: string[];
}

const columns: ColumnsType<UserDataType> = [
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Password",
    dataIndex: "password",
    key: "password",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag === "master" ? "green" : "geekblue";
          if (tag === "matainer") color = "orange";
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const Users = () => {
  const [users, setUsers] = useState<UserDataType[]>([]);

  const getUserList = async () => {
    const res = await getUsers<UserDataType[]>();
    if (res.code !== 0) return;
    setUsers(res.data);
  };

  useEffect(() => {
    getUserList();
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={users}
      pagination={{ pageSize: 20 }}
      scroll={{ y: 600 }}
      size="middle"
    />
  );
};

export default Users;
