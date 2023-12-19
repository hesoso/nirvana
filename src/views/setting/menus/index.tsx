import { useEffect, useState } from 'react'
import { Space, Table, Tag, Button } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { getMenus } from '@/api/system'

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
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'Password',
    dataIndex: 'password',
    key: 'password',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag === 'master' ? 'green' : 'geekblue'
          if (tag === 'matainer') color = 'orange'
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          )
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    ),
  },
]

const Users = () => {
  const [menus, setMenus] = useState<UserDataType[]>([])

  const getMenuList = async () => {
    const res = await getMenus<UserDataType[]>()
    if (res.code !== 0) return
    setMenus(res.data)
  }

  useEffect(() => {
    getMenuList()
  }, [])

  return (
    <>
      <Button onClick={getMenuList}>调用接口</Button>
      <Table
        columns={columns}
        dataSource={menus}
        pagination={{ pageSize: 20 }}
        scroll={{ y: 600 }}
        size="middle"
      />
    </>
  )
}

export default Users
