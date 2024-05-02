import useStore from "@/store"
import { useEffect } from "react"
import { Fragment } from "react/jsx-runtime"

const Dashboard = () => {
  const { fetchUserInfo, userInfo } = useStore()
  useEffect(() => {

    const getUserInfo = async () => {
      try {
        const res = await fetchUserInfo()
      } catch (error) {
        throw new Error("fetch user information error")
      }
    }
    getUserInfo()
  }, [userInfo])
  return (
    <Fragment>
      <div>Dashboard</div>
    </Fragment>
  )
}

export default Dashboard