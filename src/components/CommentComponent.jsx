import React from 'react'

export const CommentComponent = ({ id, name, comment }) => {
  return (
    <div className="card cardfeed mb-4">
        <div className="card-body">
            <div className="d-flex">
                <p className="text-light fs-3 circle-name align-self-center me-2">{id}</p>
                <div className="align-self-center">

                    <h5 className="card-title bold">{name}</h5>
                    <div className="d-flex">
                        <i className="fas fa-star text-star me-1 align-self-center"></i>
                        <i className="fas fa-star text-star me-1 align-self-center"></i>
                        <i className="fas fa-star text-star me-1 align-self-center"></i>
                        <i className="fas fa-star text-star me-1 align-self-center"></i>
                        <i className="fas fa-star text-star me-1 align-self-center"></i>
                        <p className="light align-self-center">Hace 5 meses</p>
                    </div>
                </div>
            </div>
        <p className="card-text">{comment}</p>
        </div>
    </div>
  )
}
