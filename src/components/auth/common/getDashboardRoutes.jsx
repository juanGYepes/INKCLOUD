
export function getDashboardRoutes(rol) {
 switch (rol) {
        case "admin": return "/dashboard/admin";
        case "seller": return "/dashboard/seller";
        case "customer": return"/dashboard/customer";
            
       default: return "/dashboard";
    }
}