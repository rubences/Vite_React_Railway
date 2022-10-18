import React from 'react'

export const FooterComponent = () => {
  return (
    <>
        <div className="d-flex justify-content-center mt-4">
            <a href='#'>
            <div className="d-inline-flex py-3">
                     <svg className="align-self-center me-2 page-logo" width="165" height="165" viewBox="0 0 165 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6066 92.631C4.74874 86.7732 4.74874 77.2757 10.6066 71.4178L71.4178 10.6066C77.2756 4.74877 86.7731 4.74877 92.631 10.6066L101.823 19.799L19.799 101.823L10.6066 92.631Z" fill="#fff"/>
                        <path d="M92.631 153.442C86.7731 159.3 77.2756 159.3 71.4178 153.442L19.799 101.823L39.598 82.0244L101.823 144.25L92.631 153.442Z" fill="#fff"/>
                        <path d="M62.2182 82.0244L113.133 31.1092L132.932 50.9082L82.0172 101.823L62.2182 82.0244Z" fill="#fff"/>
                        <path d="M93.3309 113.137L144.246 62.2219L153.439 71.4142C159.296 77.2721 159.296 86.7696 153.439 92.6275L113.13 132.936L93.3309 113.137Z" fill="#fff"/>
                        <rect x="135.76" y="87.6789" width="28" height="24.0017" transform="rotate(-135 135.76 87.6789)" fill="#fff"/>
                      </svg>
                        <p className="logo align-self-center">Gaston Fenske</p>
                </div>
            </a>      
        </div>

        <div className="text-center text-light pb-3">
            <p>© todos los derechos reservados 2022</p>
        </div>
    </>
  )
}
