'use client'
import React, { useEffect, useState } from 'react'
import { Tarea } from '../Models/Tarea'
import TablaTareas from './TablaTareas'
import type { EstadoTarea } from '../Models/Tarea'

export default function FormularioRegistro() {
  const [id, setId]=useState<number>(0)
  const [titulo, setTitulo]=useState<string>('')
  const [descripcion, setDescripcion]=useState<string>('')
  const [estado, setEstado]=useState<"Pendiente"|"En proceso" |"Completada">('Pendiente')
  const estados: EstadoTarea[]=["Pendiente", "En proceso", "Completada"]

  const [listaTareas, setListaTareas]=useState<Tarea[]>([]);
  const [msj, setMsj]=useState<string>('')

  function guardarTareas(){
    const tarea:Tarea={
      id:listaTareas.length+1,
      titulo:titulo,
      descripcion:descripcion,
      estado:estado                                     
    }

    
    setListaTareas([...listaTareas, tarea]);
    setId(id+1)
    setMsj('Tarea guardada')
    setTitulo('')
    setDescripcion('')
    setEstado('Pendiente')
  }
  useEffect(()=>{
    console.log(listaTareas)
  },[listaTareas])

  return (
    <div>
      <h1 className='text-center'>Registro de Tareas</h1>
      <br></br>
      <br></br>
      <form className='form'>
        <input type='text'placeholder='Ingrese el titulo de la tarea'className='form-control'value={titulo}onChange={(e)=>setTitulo(e.target.value)}/><br/>
        <input type='text'placeholder='Ingrese una descripción'className='form-control'value={descripcion}onChange={(e)=>setDescripcion(e.target.value)}/><br/>
        <select className='form-select'value={estado}onChange={(e)=>setEstado(e.target.value as EstadoTarea)}>
          {estados.map((est) => (
            <option key={est} value={est}>
              {est}
            </option>
          ))}
        </select>
        <br></br>
        <button type='button' className='btn btn-success btn-sm'onClick={guardarTareas}>Guardar</button>
        <hr></hr>
        <TablaTareas lista={listaTareas}></TablaTareas>

      </form>
      <div className='alert alert-success'>{msj}</div>
    </div>
  )
}
