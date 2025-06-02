import { Link } from "react-router-dom"

export default function Aside() {
  return (
    <>
      <ul className="navbar-nav bg-warning sidebar sidebar-dark accordion" id="accordionSidebar">

           {/*<!-- Sidebar - Brand -->*/}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">Libreria</div>
            </Link>

            {/*<!-- Divider -->*/}
            <hr className="sidebar-divider my-0"/>

           {/*<!-- Nav Item - Dashboard -->*/}
            <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            {/*<!-- Divider -->*/}
            <hr className="sidebar-divider"/>

            {/*<!-- Heading -->*/}
            <div className="sidebar-heading">
                Modulos
            </div>

            {/*<!-- Nav Item - Pages Collapse Menu -->*/}
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fa-solid fa-book"></i>   
                    <span>Libros</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Acciones:</h6>
                        <a className="collapse-item" href="listado-pro.html">Ver Libros</a>
                        <a className="collapse-item" href="crear-pro.html">Crear Libro</a>
                    </div>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i class="fa-solid fa-layer-group"></i>  
                    <span>Categorias</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Acciones:</h6>
                        <a className="collapse-item" href="listado-pro.html">Ver categorias</a>
                        <a className="collapse-item" href="crear-pro.html">Crear Categoria</a>
                    </div>
                </div>
            </li>


            {/*<!-- Divider -->*/}
            <hr className="sidebar-divider"/>

            {/*<!-- Sidebar Toggler (Sidebar) -->*/}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
    </>
  )
}
