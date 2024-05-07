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
import { useEffect } from "react"
import { UserStoreValue, fetchUserInfo, setLogout } from "@/store/modules/user"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
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
  const dispatch = useDispatch()
  const userInfo = useSelector((state: UserStoreValue) => state.user.userInfo)

  const onLogout = () => {
    dispatch(setLogout())
    navigate(links.login)
  }

  const onMenuClick = ({ key }: { key: string }) => {
    navigate(key)
  }

  useEffect(() => {

    dispatch(fetchUserInfo())

  }, [dispatch])

  return (
    <Layout className="h-full">
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{userInfo.name}</span>
          <span className="user-logout">
            <Popconfirm title="Are you logout?" okText="Yes" cancelText="No" onConfirm={onLogout}>
              <LogoutOutlined /> Logout
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