import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Content() {
  return (
    <>
      {/*<!-- Content Wrapper -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Main Content -->*/}
        <div id="content">
          <Header />
          
            {/*AQUI VA EL CONTENIDO DEL DASHBOARD*/}
            <Outlet />
        </div>
          <Footer />
        </div>
      
    </>
  );
}
