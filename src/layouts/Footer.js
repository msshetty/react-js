import React from 'react'
import './layout.css';

function Footer() {
    return (
        <div>
            <footer className="page-footer font-small lighten-5 bg-warning1 py-2">
                <div className="container text-center text-md-left">
                    <div className="row mt-3 dark-grey-text">
                        <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                            <h6 className="text-uppercase font-weight-bold">React App</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width:'60px'}} />
                            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                            consectetur
                            adipisicing elit.</p>
                            <div className="">
                                <a className="fb-ic">
                                <i className="fa fa-facebook-f white-text mr-4"> </i>
                                </a>
                                <a className="tw-ic">
                                <i className="fa fa-twitter white-text mr-4"> </i>
                                </a>
                                <a className="gplus-ic">
                                <i className="fa fa-google-plus white-text mr-4"> </i>
                                </a>
                                <a className="li-ic">
                                <i className="fa fa-linkedin white-text mr-4"> </i>
                                </a>
                                <a className="ins-ic">
                                <i className="fa fa-instagram white-text"> </i>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Products</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width:'60px'}} />
                            <p><a className="dark-grey-text" href="#!">Web Application</a></p>
                            <p><a className="dark-grey-text" href="#!">Mobile App</a></p>
                            <p><a className="dark-grey-text" href="#!">SEO and Marketing</a></p>
                            <p><a className="dark-grey-text" href="#!">Artificial Intelligence</a></p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width:'60px'}} />
                            <p><a className="dark-grey-text" href="#!">Mongo DB</a></p>
                            <p><a className="dark-grey-text" href="#!">React Js</a></p>
                            <p><a className="dark-grey-text" href="#!">Express Js</a></p>
                            <p><a className="dark-grey-text" href="#!">Node Js</a></p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" style={{ width:'60px'}} />
                            <p>
                            <i className="fa fa-home mr-3"></i> Bengaluru, Karnataka, India</p>
                            <p>
                            <i className="fa fa-envelope mr-3"></i> info@example.com</p>
                            <p>
                            <i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p>
                            <i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">© {new Date().getFullYear()} Copyright:
                    <a className="dark-grey-text" href="#"> React App</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer
