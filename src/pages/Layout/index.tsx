import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { links } from "@/router/links"
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Layout, Menu, Popconfirm } from 'antd'
import './index.scss'
import { useEffect } from "react"
import { UserStoreType, fetchUserInfo, fetchUserProfile, setLogout } from "@/store/modules/user"
import { useSelector } from "react-redux"
import logoAnimation from '@/assets/images/login/react-logo.json'
import useAnimation from "@/hooks/useAnimation"
import { useAppDispatch } from "@/store"

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
    label: 'Publish',
    key: links.publish,
    icon: <EditOutlined />
  },
  {
    label: 'Profile',
    key: links.profile,
    icon: <UserOutlined />
  }
]

const MainLayout = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const userProfile = useSelector((state: UserStoreType) => state.user.userProfile)

  const onLogout = () => {
    dispatch(setLogout())
    navigate(links.login)
  }

  const onMenuClick = ({ key }: { key: string }) => {
    navigate(key)
  }

  useEffect(() => {
    dispatch(fetchUserProfile())
    dispatch(fetchUserInfo())
    // const updateUserProfile = async () => {
    //   const param: UserProfilePramsType = {
    //     name: "rain",
    //     gender: 0,
    //     birthday: "1999-10-3",
    //     real_name: "rain",
    //     intro: "halo"
    //   }
    //   const res = await updateUserProfileAPI(param)
    //   console.log("res", res.data);

    // }
    // updateUserProfile()
  }, [dispatch])

  const logo = useAnimation(logoAnimation)

  return (
    <Layout className="h-full">
      <Header className="header">
        <div className="logo">
          {logo}
        </div>
        <div className="user-info">
          <span className="user-name">{userProfile.name}</span>
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
        <Layout className="layout-content p-5 bg-[#f0f2f5]">
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default MainLayout