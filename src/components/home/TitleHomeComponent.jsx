import React from 'react'
import Typed from 'react-typed'

export const TitleHomeComponent = () => {
  return (
    <h1 class="text-primary animate__animated animate__bounce">
      <Typed 
        strings={[
          'gastonfenske.com'
        ]} 
        typeSpeed={80}  
        backSpeed={80}
        loop
      />
    </h1>
  )
}
