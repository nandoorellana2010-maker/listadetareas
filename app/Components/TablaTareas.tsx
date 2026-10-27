import React from 'react'
import {listaTareas} from '../Models/ListaTareas'
import { Tarea } from '../Models/Tarea'
import  BotonEliminar from './BotonEliminar'

export default function TablaTareas(lista: listaTareas) {
  return (
    <div>
          <table className='table'>
              <thead>
                  <th>Id</th>
                  <th>Título</th>
                  <th>Descripción</th>
                  <th>Estado</th>
                  <th>Eliminar</th>
              </thead>
              <tbody>
                  {
                      lista.map((tarea: Tarea) => (
                          <tr key={tarea.id}>
                              <td>{tarea.id}</td>
                              <td>{tarea.titulo}</td>
                              <td>{tarea.descripcion}</td>
                              <td>{tarea.estado}</td>
                              <td><BotonEliminar/></td>
                          </tr>
                      ))
                  }
              </tbody>
          </table>
    </div>
  )
}
