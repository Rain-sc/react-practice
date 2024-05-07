import { links } from "@/router/links"
import { UserStoreType } from "@/store/modules/user"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const Redirect = () => {
  const { token } = useSelector((state: UserStoreType) => state.user)
  return (
    <Navigate to={token ? links.dashboard : links.login} replace />
  )
}

export default Redirect