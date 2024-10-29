import React from 'react';
import { useLocation } from 'react-router-dom';
import userPic from "../../../assets/img/user.png";

function Header() {

    const location = useLocation();

    return (
        <>
            <section className="page_404">
                <nav className="navbar navbar-expand-lg bgTheme">
                    <div className="container-fluid">
                        <a className="navbar-brand text-white" href="#">Drive</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Learn more</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">List your car</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">inbox</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-disabled="true">
                                        <img src={userPic} alt='' className='img25' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Header