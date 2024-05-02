import { Outlet } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"

const Layout = () => {
  return (
    <Fragment>
      <div>Layout
        <Outlet />
      </div>
    </Fragment>
  )
}

export default Layout