import { Link } from "react-router-dom"
import { linksNavigate } from "../../components/auth/common/getLinkNavegate"
import { useState } from "react"
import { useAuth } from "../../context/AuthContext"

export default function Aside() {
    let { user } = useAuth();
    let role = user.rol;
    let roleRoutes = role ? [...(linksNavigate[role] || []), ...linksNavigate.all] : [];

    let [openSubMenu,setOpensetMenu] = useState(null);
    let toggleMenu =(label)=>{
        setOpensetMenu(openSubMenu === label ? null : label);
    }

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

            {
                roleRoutes.map((link , i) => (
                    link.children ? (
                        <li className="nav-item" key={i}>
                            <button onClick={() => toggleMenu(link.label)}
                                className="nav-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded={openSubMenu ===link.label ? "true" : "false"} aria-controls="collapseTwo">
                                <i className={link.icon}></i>   
                                <span>{link.label}</span>
                            </button>
                            <div id="collapseTwo" className={ `collapse ${openSubMenu === link.label  ? "show" : ""} `} aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Acciones:</h6>
                                    {
                                        link.children.map((subLink , subIndex)=>(
                                            <Link className="collapse-item" to={subLink.path} key={subIndex}>
                                                {subLink.label}
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </li>
                    ) : (
                        <li className="nav-item" key={i}>
                            <Link className="nav-link" to={link.path}>
                                <i className={link.icon}></i>   
                                <span>{link.label}</span>
                            </Link>
                        </li>
                    )
                ))
            }

            <hr className="sidebar-divider"/>

            {/*<!-- Sidebar Toggler (Sidebar) -->*/}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle"></button>
            </div>

        </ul>
        </>
    )
}
