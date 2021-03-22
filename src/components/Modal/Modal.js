import React from 'react'
import Logo from '../../images/cleantec-logo.png'
// import {policy} from '../Data/modalList';
export const Modal = ({ showModal, setShowModal}) => {
 
    return (
        <>
           <div className={showModal ? 'modal show' : 'modal'}>
                <div className="modal__wrapper">
                    <div className="modal__header">
                        <img src={Logo} alt="" />               
                    </div>
                    <div className="modal__body">
                        <h2>Privacy Policy</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum ex quidem repellat blanditiis. Sit saepe a ducimus, molestias impedit soluta!</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti sint nam iusto libero veniam voluptate ipsam sequi in minus cumque eum, quisquam ut. Debitis, esse iusto ad reprehenderit nostrum molestiae?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, corrupti.</p>
                    </div>
                    <div className="modal__footer">
                        <button onClick={ () => setShowModal(!showModal) }>Close</button>
                    </div>
                </div>
            </div> 
        </>
    )
}


