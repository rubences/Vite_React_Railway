import React from 'react'

export const CategoryComponent = ({name, active=false, svg}) => {
  return (
    <div className={"category" + (active ? " active" : "")}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"> <path d={svg}/> </svg>
        <p className="">{name}</p>
    </div>
  )
}
