import React from 'react'

export  const linksNavigate ={
    "admin":[
        {
           "label":"libros",
           "icon":"fa-solid fa-book",
           "children":[
                {"path":"/dashboard/libros","label":"Ver Libros"},
                {"path":"/dashboard/libros/crear" , "label":"crear libro"}
            ]
           
        },
        {
           "label": "post",
           "icon": "fa-solid fa-pen-to-square",
           "children":[
                {"path":"/dashboard/post","label":"Ver publicaciones"},
                {"path":"/dashboard/post/crear" , "label":"crear publicaciones"}
            ]
           
        },
          {
           "label":"users",
           "icon":"fa-solid fa-user",
           "children":[
                {"path":"/dashboard/users","label":"Ver usuarios"},
                {"path":"/dashboard/users/crear" , "label":"crear usurios"}
            ]
           
        },  
        {
           "label":"reports",
           "icon":"fa-solid fa-chart-line",
           "children":[
                {"path":"/dashboard/reports","label":"Ver reportes"},
                {"path":"/dashboard/reports/crear" , "label":"crear reportes"}
            ]
           
        },
          {
           "label":"permissions",
           "icon":"fa-solid fa-shield-halved",
           "children":[
                {"path":"/dashboard/permissions","label":"Ver permisos"},
                {"path":"/dashboard/permissions/crear" , "label":"crear permisos"}
            ]
           
        },
        
        /*rutas no hijas  
          {
            "label":"profile",
           "icon":"fa-solid fa-id-badge",
           "path":"/dashboard/profile"
            
           
        }*/
    ],
    "customer":[
        {
            "label":"orders",
            "icon":"fa-solid fa-bag-shopping",
            "path":"/dashboard/orders"
        }
      
    ],
    "all":[
        {
           "label":"profile",
           "icon":"fa-solid fa-id-badge",
           "path":"/dashboard/profile"
            
           
        }
    ]
    
}
