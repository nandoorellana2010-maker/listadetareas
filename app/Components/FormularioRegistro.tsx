'use client'
import React, { useEffect, useState } from 'react'
import { Tarea } from '../Models/Tarea'
import TablaTareas from './TablaTareas'

export default function FormularioRegistro() {
  const [id, setId]=useState<number>(0)
  const [titulo, setTitulo]=useState<string>('')
  const [descripcion, setDescripcion]=useState<string>('')
  const [estado, setEstado]=useState<"Pendiente"|"En proceso" |"Completada">('Pendiente')

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
    setMsj('Tarea guardada')
    setTitulo('')
    setDescripcion('')
    setEstado('Pendiente')
  }

  useEffect(()=>{
    console.log(listaTareas)
  },[listaTareas])

  return (
    <div>FormularioRegistro
      <form className='form'>
        <input type='text'placeholder='Ingrese el titulo de la tarea'className='form-control'value={titulo}onChange={(e)=>setTitulo(e.target.value)}/><br/>
        <input type='text'placeholder='Ingrese una descripción'className='form-control'value={descripcion}onChange={(e)=>setDescripcion(e.target.value)}/><br/>
        <input type='text'placeholder='Seleccione el estado (Pendiente, En Proceso o Terminado)'className='form-control'value={estado}onChange={(e)=>setEstado(e.target.value)}/><br/>
        <button type='button' className='btn-success'onClick={guardarTareas}>Guardar</button>
        <TablaTareas lista={listaTareas}></TablaTareas>

      </form>
      <div className='alert alert-success'>{msj}</div>
    </div>
  )
}
