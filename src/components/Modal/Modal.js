import React from 'react'
import Logo from '../../images/cleantec-logo.png'

export const Modal = ({showModal, setShowModal}) => {
    return (
        <>
           <div className={showModal ? 'modal show' : 'modal'}>
                <div className="modal__wrapper">
                    <div className="modal__header">
                        <img src={Logo} alt=""/>
                
                    </div>
                    <div className="modal__body">
                        <h2>Terms of Use</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iste voluptatum consequatur.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, repellat! Voluptatum quos corporis quibusdam fugiat repellat iste velit temporibus. Soluta error, distinctio fugiat ducimus molestias pariatur. Culpa, impedit tenetur? Dolor.</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, repellat! Voluptatum quos corporis quibusdam fugiat repellat iste velit temporibus. Soluta error, distinctio fugiat ducimus molestias pariatur. Culpa, impedit tenetur? Dolor.</p>
                    </div>
                    <div className="modal__footer">
                        <button onClick={ () => setShowModal(!showModal) }>Close</button>
                    </div>
                </div>
            </div> 
        </>
    )
}


