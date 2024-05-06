import { Navigate } from "react-router-dom"
import { links } from "./links"
import { useSelector } from "react-redux"

interface RequiredAuthProps {
  children: JSX.Element
}

const RequiredAuth = ({ children }: RequiredAuthProps) => {
  const token = useSelector((state) => state.user.token)
  if (!token) {
    return <Navigate to={links.login} replace />
  }
  return children
}

export default RequiredAuth