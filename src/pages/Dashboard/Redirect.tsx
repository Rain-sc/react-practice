import { links } from "@/router/links"
import useStore from "@/store"
import { Navigate } from "react-router-dom"

const Redirect = () => {
  const { token } = useStore()
  return (
    <Navigate to={token ? links.dashboard : links.login} replace />
  )
}

export default Redirect