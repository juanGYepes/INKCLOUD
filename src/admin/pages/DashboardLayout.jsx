import Content from "../components/Content"
import Aside from "../components/Aside"
import { Outlet } from "react-router-dom"

export default function DashboardLayout() {
  return (
    <div>
      <div id="page-top">
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        <Aside/>
        {/* Contenido que cambia por ruta */}
        <Content>
            <Outlet />
        </Content>
      </div>
    </div>
    </div>
  )
}
