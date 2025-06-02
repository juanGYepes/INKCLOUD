import '../../../assets/css/estilos.css';

export default function LoadingSpinner() {
   return ( <div className="d-flex justify-content-center align-items-center flex-column cargar-spinner">
        <div className="spinner-border text-warning" role="status">
        </div>
        <p className="text-center"> Cargando... </p>
    </div>
   )
}
