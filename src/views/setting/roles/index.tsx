import { useEffect, useState } from 'react'
import { Space, Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { getRoles } from '@/api/system'

interface RoleDataType {
  key: string;
  name: string;
  status: string;
  auth: string[];
  desc: string;
}

const columns: ColumnsType<RoleDataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'Auth',
    dataIndex: 'auth',
    key: 'auth'
  },
  {
    title: 'Desc',
    dataIndex: 'desc',
    key: 'desc'
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <a>Edit</a>
        <a>Delete</a>
      </Space>
    )
  }
]

const Roles = () => {
  const [roles, setRoles] = useState<RoleDataType[]>([])

  const getRoleList = async () => {
    const res = await getRoles<RoleDataType[]>()
    if (res.code !== 0) return
    setRoles(res.data)
  }

  useEffect(() => {
    getRoleList()
  }, [])

  return (
    <Table
      columns={columns}
      dataSource={roles}
      pagination={false}
      size="middle"
    />
  )
}

export default Roles
