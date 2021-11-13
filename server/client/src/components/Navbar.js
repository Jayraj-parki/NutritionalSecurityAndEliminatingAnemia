import React from 'react'
import { NavLink } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';
import style from "./css/Navbar.module.scss"
import MenuIcon from "@material-ui/icons/Menu"
export default function Navbar() {
    return ( 
        <>
            <nav className={style.navbar + " navbar navbar-expand-lg p-0 "}>
                <div className={style.link_container + " container-fluid"}>
                    <NavLink to="/" className={style.logo + " col-2 me-auto  ms-xxl-5"}>KnowYourHealth</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span className="navbar-toggler-icon bg-info "></span> */}
                        <MenuIcon className={style.menu+ " navbar-toggler-icon"}/>
                    </button>
                    <div className={style.main_link + " collapse navbar-collapse  "} id="navbarSupportedContent">
                        <ul className={style.navbar_nav+ " col-auto   navbar-nav ms-auto mb-2 mb-lg-0 px-xxl-5"}>
                            <li className={style.nav_item + " nav-item col-5 col-sm-3 col-lg-auto "}>
                                <NavLink to="/" className={style.navlink + "  col-11 text-center"}>Home</NavLink>
                            </li>
                            <li className={style.nav_item + " nav-item col-5 col-sm-3 col-lg-auto"}>
                                <Link smooth to="./#tutorial" className={style.navlink +"  col-11 text-center"}>Tutorial</Link>
                            </li>
                            <li className={style.nav_item + " nav-item col-5 col-sm-3 col-lg-auto"}>
                                <Link smooth to="/#service" className={style.navlink+"  col-11 text-center"}>Services</Link>
                            </li>
                            <li className={style.nav_item + " nav-item col-5 col-sm-3 col-lg-auto"}>
                                <Link smooth to="/#recentMsg" className={style.navlink+"  col-11 text-center"}>Comments</Link>
                            </li>
                            <li className={style.nav_item + " nav-item col-5 col-sm-3 col-lg-auto"}>
                                <Link smooth to="#contact" className={style.navlink +"  col-11 text-center"}>Contact</Link>
                            </li>
                            <li className={style.nav_item + " nav-item col-5 col-sm-3 col-lg-auto"}>
                                <Link smooth to="/#guideline" className={style.navlink+"  col-11 text-center"}>Helpline</Link>
                            </li>
                            

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
