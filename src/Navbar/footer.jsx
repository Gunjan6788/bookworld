import React from 'react'
import Style from './footer.module.css'

const Footer = () => {
    return(
        <>
             <hr/>
                <footer>
                    <div className='container'>
                        <div className='row mb-5 p-4'>
                            <div className='col-3 pt-4'>
                                <img src='/logo.png' alt='logo' style={{ marginBottom: '15px', width: '100px' }} />

                                <div>
                                    <img src='/tele.png' alt='telephone' className={Style.social} />
                                +91 99 9999 1888
                            </div><br />

                                <div>
                                    <img src='/c.png' alt='copyright' className={Style.social} />
                                    <small> Bookworld Ltd.<br />All rights reversed.</small>
                                </div><br />

                                <div className='container'>
                                    <div className='row'>
                                        <div className='col-2'>
                                            <img src='twitter.png' alt='twitter' className={Style.social} />
                                        </div>
                                        <div className='col-2'>
                                            <img src='f.png' alt='facebook' className={Style.social} />
                                        </div>
                                        <div className='col-2'>
                                            <img src='i.png' alt='instagram' className={Style.social} />
                                        </div>
                                        <div className='col-2'>
                                            <img src='l.png' alt='linkedin' className={Style.social} />
                                        </div>
                                        <div className='col-2'>
                                            <img src='t.png' alt='telegram' className={Style.social} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='col-3  pt-4'>
                                <h5 className={Style.footer}>Company</h5><br />
                                <p>About</p>
                                <p>New Arrival</p>
                                <p>Category</p>
                               
                            </div>

                            <div className='col-3  pt-4'>
                                <h5 className={Style.footer}>Support</h5><br />
                                <p>Contact</p>
                                <p>Support portal</p>
                                <p>List of charges</p>
                                <p>Open an account</p>
                            </div>

                            <div className='col-3  pt-4'>
                                <h5 className={Style.footer}>Account</h5><br />
                                <p>Referral programme</p>
                                <p>Careers</p>
                            </div>
                        </div>

                    </div>
                </footer>
        </>
    )
}

export default Footer