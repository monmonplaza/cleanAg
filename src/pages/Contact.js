import React from 'react'
import Banner from '../components/Banner/Banner';
import {Input, TextArea, Submit} from '../components/Form/Input'
const Contact = () => {
    return (
        <div>
            <Banner title="Contact" />
            <section className="page__contact">
                <div className="container">
                    <div className="page__contact__grid">
                        <div className="page__contact__grid__items">
                            <h2>asdasdasdas</h2>
                            <div className="contact__info">
                                <div className="contact__info__item">
                                    <h3>Email</h3>
                                    <ul>
                                        <li>support@ulticlean.net</li>
                                        <li>info@ulticlean.net</li>
                                    </ul>
                                </div>

                                <div className="contact__info__item">
                                    <h3>Phone</h3>
                                    <ul>
                                        <li>+(029) 123 1234</li>
                                        <li>+(029) 325 3215</li>
                                    </ul>
                                </div>

                                <div className="contact__info__item">
                                    <h3>Phone</h3>
                                    <ul>
                                        <li>43 Panama Street Rd, CA 9022109, USA </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="page__contact__grid__items">
                           <div className="wrapper">
                           <h3>Get in touch</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <form action="">
                                <Input label="Fullname" type="text"/>
                                <Input label="Email" type="email"/>
                               
                               
                                <TextArea label="Message"/>
                                <Submit text="Send Message" />
                            </form>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
