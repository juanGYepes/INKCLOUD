import axios from "axios";

// URL base de tu API
const api = "http://localhost:8080/usuarios";

// Obtener todos los usuarios
export const obtenerUsuarios = () => axios.get(api);

// Obtener un usuario por ID
export const obtenerUsuarioPorId = (idusuario) =>
  axios.get(`${api}/${idusuario}`);

// Crear un nuevo usuario
export const crearUsuario = (usuario) =>
  axios.post(api, usuario);

// Modificar un usuario existente
export const modificarUsuario = (idusuario, usuarioActualizado) =>
  axios.put(`${api}/${idusuario}`, usuarioActualizado);

// Eliminar un usuario por ID
export const eliminarUsuario = (idusuario) =>
  axios.delete(`${api}/${idusuario}`);
