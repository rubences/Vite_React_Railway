import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { cursoPython } from '../constants/Images'

export const CardViewComponent = () => {
  return (
    <Link 
      to="/programacion-desde-cero-con-python" 
      className="col-md-6 text-center"
    >
        <div className="card d-inline-flex mb-4 card-size border-card">
        <img src={cursoPython} className="card-img-top margin-image"/>
        <div className="card-body">
            <h5 className="card-title text-light title-card semi-bold text-start">Python</h5>
            <p className='text-light regular mb-4 text-start'>Curso backend python3 desde cero con
            proyecto real, APIs, JWT, SQL y GIT</p>
            <p className="card-text text-light text-card regular text-start">Aprende a programar desde cero con
            Python y conviertete en desarrollador
            backend con Python y SQL creando una
            api rest</p>
            <div className='d-flex justify-content-between my-2'>
            <div className='d-flex'>
                <i className="fab fa-python text-light fs-1 align-self-center me-3 circle-radius"></i>
                <p className='text-light semi-bold align-self-center'>Curso</p>
            </div>
            <p className='text-light regular px-4 py-1 align-self-center date-card align-item-center'>20/08/2022</p>
            </div>
        </div>
        </div>
    </Link>
  )
}
