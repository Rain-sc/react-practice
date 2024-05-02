import useStore from "@/store"
import { Navigate } from "react-router-dom"
import { links } from "./links"

interface RequiredAuthProps {
  children: JSX.Element
}

const RequiredAuth = ({ children }: RequiredAuthProps) => {
  const { token } = useStore()
  if (!token) {
    return <Navigate to={links.login} replace />
  }
  return children
}

export default RequiredAuth