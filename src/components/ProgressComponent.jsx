import React from 'react'

export const ProgressComponent = () => {
  return (
    <>
      <h2 className="text-light my-4">CUPOS VENDIDOS 96%</h2>
      <div className="progress my-2">
        <div className="progress-bar" role="progressbar" aria-valuenow="96" aria-valuemin="96" aria-valuemax="100">96%</div>
      </div>
    </>
  )
}
