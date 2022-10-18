import React from 'react'

export const SkillComponent = ({svg, name}) => {
  return (                 
        <div class="col-md-6 col-lg-3 mt-3 animate__animated">
            <div class="d-grid bg-card">
                <div>
                    <div class="icon-card rounded btn-own p-2 d-flex justify-content-between">
                        <div class="d-flex justify-content-start align-items-center">
                            <div>  
                                {svg}
                            </div>
                            <div>
                                <p class="mb-0 ms-2 text-light fs-5">{name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
