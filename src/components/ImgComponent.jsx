import React from 'react'

export const ImgComponent = ( {file} ) => {
  return (
    <div className="text-center my-4">
        <img src={file}/>
    </div>
  )
}
