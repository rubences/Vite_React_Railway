import React from 'react'
import { ImgComponent } from './ImgComponent'

export const ColInfoComponent = ( {file} ) => {
  return (
    <div className="col-md-6">
                <p className="p2 yellow-text pb-4">¿QUE APRENDERAS EN ESTE CURSO?</p>
                <p className="text-light p2 pb-4">
                    <i className="fas fa-check-square text-success"></i> Programacion desde cero, desde lo basico<br/>
                    hasta los detalles con Python3 (POO)
                </p>
                <p className="text-light p2 pb-4">
                    <i className="fas fa-check-square text-success"></i> Aprenderas como diseñar e administrar<br/>
                    bases de datos relacionales con el lenguaje<br/>
                    de consultas SQL
                </p>
                <p className="text-light p2 pb-4">
                    <i className="fas fa-check-square text-success"></i> Aprenderas como utilizar un sistema de<br/>
                    control de versiones (GIT) para controlar<br/>
                    tu codigo en todo momento
                </p>
                <p className="text-light p2 pb-4">
                    <i className="fas fa-check-square text-success"></i> Aprenderas como crear el backend de una<br/>
                    aplicacion (creando una api-rest) es decir<br/>
                    toda la logica de un sistema que se lleva a<br/>
                    cabo en los servidores, esto incluye manejo<br/>
                    de datos, logica, seguirdad, conexiones, etc...
                </p>
                
                {
                    (file) 
                    && <ImgComponent file={file}/>
                }
                    
    
     </div>
  )
}
