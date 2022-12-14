import React from 'react'
import { CounterBuyComponent } from './CounterBuyComponent'
import { Link, NavLink } from 'react-router-dom'

export const BuyActionComponent = () => {
  return (
    // <div className="align-self-center col">
    // <div className="col-md-6">
    <>
                <div className="text-center">
                      <p className="text-light fs-4"><del>$99.99 USD</del></p>
                      <p className="text-light fs-4">$47.99 USD</p>
                      <p className="text-danger fs-4">OFERTA DISPONIBLE</p>
                    </div>
      
                    <div className="text-center my-4 pay-action">

                            <Link
                              to="/"
                            >
                              <div className="btn-action d-flex justify-content-center">
                                  <svg className="align-self-center" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z" fill-rule="nonzero"/></svg>
                                  <h2 className="pay-action-title align-self-center">INSCRIBITE AL PROGRAMA AQUI</h2>
                                  <svg className="align-self-center" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.978 14.999v3.251c0 .412-.335.75-.752.75-.188 0-.375-.071-.518-.206-1.775-1.685-4.945-4.692-6.396-6.069-.2-.189-.312-.452-.312-.725 0-.274.112-.536.312-.725 1.451-1.377 4.621-4.385 6.396-6.068.143-.136.33-.207.518-.207.417 0 .752.337.752.75v3.251h9.02c.531 0 1.002.47 1.002 1v3.998c0 .53-.471 1-1.002 1z" fill-rule="nonzero"/></svg>
                              </div>
                            </Link>

                            <svg className='bg-credit-card' viewBox="0 0 40 26" xmlns="http://www.w3.org/2000/svg"><path d="m24.05 6.72h-8.05v13.21h8.1z" fill="#ff5f00"/><path d="m16.79 13.33a8.35 8.35 0 0 1 3.21-6.61 8.41 8.41 0 0 0 -12.32 11.07 8.46 8.46 0 0 0 3.45 3.1 8.46 8.46 0 0 0 8.87-.95 8.39 8.39 0 0 1 -3.21-6.61z" fill="#eb001b"/><path d="m33.6 13.33a8.4 8.4 0 0 1 -13.6 6.6 8.42 8.42 0 0 0 2.37-10.28 8.56 8.56 0 0 0 -2.37-2.94 8.46 8.46 0 0 1 8.87-1 8.4 8.4 0 0 1 4.73 7.56z" fill="#f79e1b"/></svg>
                            <svg className='bg-credit-card' viewBox="0 0 40 26" xmlns="http://www.w3.org/2000/svg"><clipPath id="a"><path d="m3.72 7.69h32.06v10.42h-32.06z"/></clipPath><g clip-path="url(#a)"><g fill="#00579f"><path d="m17.61 18h-2.61l1.64-10.13h2.6z"/><path d="m27 8.11a6.51 6.51 0 0 0 -2.33-.42c-2.56 0-4.37 1.37-4.38 3.33 0 1.45 1.29 2.26 2.27 2.74s1.35.81 1.35 1.25c0 .68-.81 1-1.56 1a5.24 5.24 0 0 1 -2.44-.53l-.34-.17-.36 2.27a7.85 7.85 0 0 0 2.9.53c2.72 0 4.49-1.35 4.52-3.44 0-1.15-.69-2-2.18-2.75-.91-.46-1.47-.77-1.47-1.24s.47-.87 1.5-.87a4.32 4.32 0 0 1 1.93.39l.24.1z"/><path d="m30.48 14.38c.22-.58 1-2.82 1-2.82l.34-1 .18.87s.49 2.42.6 2.92zm3.21-6.51h-2a1.29 1.29 0 0 0 -1.36.83l-3.87 9.3h2.73s.45-1.24.54-1.51h3.34c.07.36.31 1.51.31 1.51h2.4z"/><path d="m12.85 7.87-2.54 6.88-.31-1.4a7.74 7.74 0 0 0 -3.56-4.23l2.33 8.82h2.74l4.08-10.07z"/></g><path d="m7.94 7.87h-4.17v.2a8.73 8.73 0 0 1 6.23 5.28l-.88-4.63a1.07 1.07 0 0 0 -1.18-.85z" fill="#faa61a"/></g></svg>
                            <svg className='bg-credit-card' viewBox="0 0 40 26" xmlns="http://www.w3.org/2000/svg"><path d="m0 26h40v-26h-40z" fill="#016fd0"/><path d="m30.71 13.64v1.64h-4.17v1.14h4.07v1.64h-4.07v1.12h4.17v1.66l3.38-3.6zm-1.1-6.14-1.4-3.19h-4l-4.1 9.32h3.33v8.27h10.28l1.61-1.8 1.67 1.81h3v-2.63l-1.9-2.06 1.92-2v-2.64h-1.93v-5l-1.81 5h-1.76l-1.86-5v5h-4.2l-.6-1.46h-3.3l-.56 1.47h-2.26l3.26-7.27h2.55l3.19 7.21v-7.22h3.1l1.6 4.47 1.56-4.47h3v-1h-3.75l-.85 2.39-.85-2.39h-4.94zm-5.06 6.11v7.27h8.7l2.1-2.32 2.12 2.32h2.53v-.1l-3.34-3.53 3.34-3.59v-.05h-2.5l-2.1 2.3-2.08-2.3zm.7-4.11 1-2.31 1 2.31z" fill="#fff" fill-rule="evenodd"/></svg>

                            {/* <svg class="me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.662 11.156l.375 1.716h-1.344l.645-1.661.215-.567.109.512zm4.338-6.156v14c0 1.104-.896 2-2 2h-20c-1.104 0-2-.896-2-2v-14c0-1.104.896-2 2-2h20c1.104 0 2 .896 2 2zm-17.146 9.971l2.549-5.929h-1.715l-1.585 4.051-.169-.823-.568-2.73c-.098-.377-.383-.489-.734-.502h-2.611l-.021.123c.635.154 1.203.376 1.701.651l1.44 5.16 1.713-.001zm4.823-5.934h-1.619l-1.012 5.941h1.619l1.012-5.941zm4.625 3.999c.006-.676-.425-1.19-1.359-1.614-.566-.275-.913-.458-.909-.736 0-.247.293-.511.927-.511.53-.008.913.107 1.212.228l.145.068.219-1.287c-.321-.121-.824-.25-1.451-.25-1.6 0-2.727.806-2.737 1.961-.009.854.805 1.33 1.419 1.614.63.291.842.477.839.737-.004.398-.503.58-.969.58-.648 0-.992-.09-1.524-.312l-.209-.095-.227 1.33c.378.166 1.078.31 1.804.317 1.702 0 2.807-.797 2.82-2.03zm5.698 1.944l-1.311-5.937h-1.251c-.388 0-.678.106-.848.493l-2.405 5.444h1.7l.341-.893 2.074.003.197.89h1.503z"/></svg> */}
                            {/* <svg class="me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.465 16.444c0 .193-.128.339-.319.339-.199 0-.321-.153-.321-.339 0-.186.122-.339.321-.339.19.001.319.147.319.339zm-6.814-.338c-.199 0-.321.153-.321.339 0 .186.122.339.321.339.19 0 .319-.146.319-.339 0-.193-.128-.339-.319-.339zm3.391-.011c-.164 0-.257.104-.281.257h.549c-.024-.164-.119-.257-.268-.257zm5.24.011c-.199 0-.321.153-.321.339 0 .186.122.339.321.339.19 0 .319-.146.319-.339 0-.193-.129-.339-.319-.339zm6.718-10.106v12c0 1.104-.896 2-2 2h-20c-1.104 0-2-.896-2-2v-12c0-1.104.896-2 2-2h20c1.104 0 2 .896 2 2zm-18.456 4.985c0 2.201 1.784 3.985 3.985 3.985.769 0 1.487-.219 2.096-.596-.967-.813-1.582-2.03-1.582-3.389s.616-2.576 1.582-3.389c-.609-.377-1.326-.596-2.096-.596-2.2 0-3.985 1.784-3.985 3.985zm2.346 5.324c0-.25-.159-.418-.416-.421-.135-.002-.274.04-.372.188-.073-.117-.188-.188-.35-.188-.113 0-.224.033-.31.157v-.131h-.23v1.058h.232v-.587c0-.184.102-.281.259-.281.153 0 .23.1.23.279v.589h.232v-.587c0-.184.106-.281.259-.281.157 0 .232.1.232.279v.589h.234v-.663zm1.297-.394h-.23v.128c-.073-.095-.184-.155-.334-.155-.297 0-.529.232-.529.556 0 .324.232.556.529.556.151 0 .261-.06.334-.155v.128h.23v-1.058zm1.164.74c0-.186-.139-.283-.37-.317l-.108-.016c-.1-.013-.179-.033-.179-.104 0-.078.075-.124.201-.124.135 0 .266.051.33.091l.1-.186c-.111-.073-.263-.111-.432-.111-.268 0-.44.128-.44.339 0 .173.128.279.365.312l.108.016c.126.018.186.051.186.111 0 .082-.084.128-.241.128-.159 0-.274-.051-.352-.111l-.108.179c.126.094.285.138.458.138.305 0 .482-.144.482-.345zm1.025.263l-.066-.197c-.069.04-.144.06-.204.06-.115 0-.153-.071-.153-.177v-.478h.376v-.21h-.376v-.321h-.232v.321h-.215v.21h.215v.483c0 .246.095.392.367.392.1-.001.215-.032.288-.083zm1.173-.474c-.002-.33-.206-.556-.503-.556-.31 0-.527.226-.527.556 0 .336.226.556.542.556.159 0 .305-.04.434-.148l-.113-.17c-.089.071-.201.111-.308.111-.148 0-.283-.069-.317-.259h.786l.006-.09zm.908-.526l-.164-.029c-.133 0-.219.062-.279.155v-.128h-.228v1.058h.23v-.594c0-.175.075-.272.226-.272l.144.027.071-.217zm.308.526c0-.204.135-.336.319-.339.1 0 .19.033.277.095l.111-.186c-.115-.091-.221-.126-.381-.126-.341 0-.564.235-.564.556s.222.556.563.556c.159 0 .266-.035.381-.126l-.111-.186c-.086.062-.177.095-.277.095-.183-.002-.318-.135-.318-.339zm1.916-.529h-.23v.128c-.073-.095-.184-.155-.334-.155-.297 0-.529.232-.529.556 0 .323.232.556.529.556.151 0 .261-.06.334-.155v.128h.23v-1.058zm.974.003l-.164-.029c-.133 0-.219.062-.279.155v-.128h-.228v1.058h.23v-.594c0-.175.075-.272.226-.272l.144.027.071-.217zm1.162-.428h-.23v.553c-.073-.095-.184-.155-.334-.155-.297 0-.529.232-.529.556 0 .323.232.556.529.556.151 0 .261-.06.334-.155v.128h.23v-1.483zm.639-4.505c0-2.201-1.785-3.985-3.985-3.985s-3.985 1.784-3.985 3.985c0 2.201 1.784 3.985 3.985 3.985s3.985-1.784 3.985-3.985z"/></svg> */}
                            <svg class="me-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 4h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm-11.292 11.11h-1.33c-.122 0-.219-.103-.212-.224.024-.383.246-1.641 1.014-6.586.026-.173.173-.3.346-.3h2.448c1.31 0 2.277.769 2.01 2.147-.275 1.433-1.15 2.13-2.674 2.13l-.753.001c-.309.001-.423.118-.462.393l-.387 2.439zm5.069-3.314c-.282 1.473-1.249 1.982-2.483 1.982h-.191c-.151 0-.279.111-.303.263l-.268 1.697c-.023.151-.151.262-.302.262h-.912c-.13 0-.229-.116-.209-.244l.462-2.96.021-.019h.718c1.745 0 2.836-.873 3.158-2.523.271.272.366.626.366 1-.001.178-.022.361-.057.542z"/></svg>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.53 10.339l-1.009 1.091-.978-1.091h-3.197v3.329h3.147l1.016-1.103.978 1.103h1.022l-1.486-1.655 1.486-1.674h-.979zm-2.439 2.639h-1.956v-.665h1.743v-.677h-1.743v-.608h1.994l.871.972-.909.978zm-8.715-2.752l-.01-.02h.01v.02zm2.997 2.37l-1.041-2.257h-1.298v3.147l-1.348-3.147h-1.184l-1.423 3.329h.865l.307-.746h1.655l.307.746h1.618v-2.608l1.154 2.608h.702l1.147-2.608.006 2.608h.784v-3.329h-1.292l-.959 2.257zm-4.84-.364l.545-1.329.545 1.329h-1.09zm16.467-8.232h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm-1 10.32h-2.859l-.633-.721-.677.721h-10.107l-.301-.74h-.69l-.301.74h-2.432l2.031-4.64h4.771l.533 1.198.52-1.198h6.056l.614.708.658-.708h2.817l-2.038 2.332 2.038 2.308z"/></svg> */}


                    </div>
        

        {/* <div className="text-center my-4">
            <a href="#">
                <img src="/src/assets/inscribeteaqui-min-1.png" alt=""/>
            </a>
        </div> */}

        <CounterBuyComponent />
    </>
  )
}
