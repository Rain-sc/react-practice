import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { links } from "@/router/links"
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Popconfirm } from 'antd'
import './index.scss'
const { Header, Sider } = Layout


const siderItems = [
  {
    label: 'Dashboard',
    key: links.dashboard,
    icon: <HomeOutlined />
  },
  {
    label: 'Article',
    key: links.article,
    icon: <DiffOutlined />
  },
  {
    label: 'Create',
    key: links.publish,
    icon: <EditOutlined />
  },
]

const MainLayout = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const onLogout = () => {

  }
  const onMenuClick = ({ key }: { key: string }) => {
    navigate(key)
  }
  return (
    <Layout className="h-full">
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{name}</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={onLogout}>
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            onClick={onMenuClick}
            selectedKeys={[pathname]}
            items={siderItems}
            style={{ height: '100%', borderRight: 0 }}></Menu>
        </Sider>
        <Layout className="layout-content p-5">
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default MainLayout