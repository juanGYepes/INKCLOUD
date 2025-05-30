
export function getDashboardRoutes(rol) {
 switch (rol) {
        case "admin": return "/dashboard/admin";
        case "customer": return"/dashboard/customer";
        default: return "/dashboard";
    }
}