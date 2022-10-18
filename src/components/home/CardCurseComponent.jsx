import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const CardCurseComponent = ({ img, title, subtitle, description, type, date, icon }) => {

    const card = (
    <NavLink
        to="/programacion-desde-cero-con-python"
    >
        <div className="d-flex flex-column mb-4 bg-card card-own animate__animated animate__backInLeft">
            <img src={img} className="card-image"/>
            <div className="p-2">
                <h2 className="text-light bold text-start title-card">{title}</h2>
                <p className='text-light regular mb-4 text-start text-sm mt-2'>{subtitle}</p>
                <p className="card-text text-light text-card text-sm regular text-start">{description}</p>
            </div>
            <div className='d-flex justify-content-between mt-2 bg-footer p-2'>
                <div className='d-flex'>
                    {icon}
                    <p className='text-light semi-bold align-self-center text-sm'>{type}</p>
                </div>
                <p className='text-light regular align-self-center date-card align-item-center text-sm bold'>{date}</p>
            </div>
        </div>
    </NavLink>
    )

    const card2 = (
    <div className="d-flex flex-column mb-4 bg-card card-own">
        <img src={img} className="card-image"/>
        <div className="p-2">
            <h2 className="text-light bold text-start title-card">{title}</h2>
            <p className='text-light regular mb-4 text-start text-sm mt-2'>{subtitle}</p>
            <p className="card-text text-light text-card text-sm regular text-start">{description}</p>
        </div>
        <div className='d-flex justify-content-between mt-2 bg-footer p-2'>
            <div className='d-flex'>
                {icon}
                <p className='text-light semi-bold align-self-center text-sm'>{type}</p>
                <p className='text-light regular align-self-center date-card align-item-center text-sm bold'>{date}</p>
            </div>
        </div>
    </div>
    )

  return (
    card
  );
}
