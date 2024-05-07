import { Navigate } from "react-router-dom"
import { links } from "./links"

type RequiredAuthProps = {
  children: JSX.Element
}

const RequiredAuth = ({ children }: RequiredAuthProps) => {
  const token = localStorage.getItem('token')

  if (!token) {
    return <Navigate to={links.login} replace />
  }
  return children
}

export default RequiredAuth