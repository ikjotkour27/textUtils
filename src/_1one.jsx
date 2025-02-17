import { useState } from 'react';
import './styles.css'
import _3three from './_3three';
import { useEffect } from 'react';
function _1one() {
    const [checked, setChecked]=useState(false)
    function theme(){
        setChecked(c=>!c)
    }
    useEffect(()=>{
        if(checked){
            document.body.style.backgroundColor="white"
            document.body.style.color="black"
            const x = document.body.querySelector("nav")
            x.style.backgroundColor="black"
            x.style.color="white"
            const button = document.body.querySelectorAll("button")
            button.forEach(element => {
                element.style.backgroundColor="rgb(240, 222, 222)"
                element.style.color="black"
            });
            document.body.querySelector("textarea").style.backgroundColor="rgb(240, 222, 222)"
            document.body.querySelector("textarea").style.color="black"
        }
        else{
            document.body.style.backgroundColor="#606060"
            document.body.style.color="white"
            const button = document.body.querySelectorAll("button")
            button.forEach(element => {
                element.style.backgroundColor="gray"
                element.style.color="white"
            });
            
            document.body.querySelector("textarea").style.backgroundColor="#808080"
            document.body.querySelector("textarea").style.color="white"
        }
    },[checked])
    return (
        <>
        <nav className="navbar bg-white sticky-top">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">TextUtils</a>
            <div className="form-check form-switch">
                <input className="form-check-input" checked={checked} onChange={theme} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            </div>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
            >
                <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    DashBoard
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
                </div>
                <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                        Home
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="https://www.instagram.com/direct/inbox/">
                        Link
                    </a>
                    </li>
                    <li className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Choose Country
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                        <a className="dropdown-item" href="#">India</a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">India</a>
                        </li>
                        <li>
                        <hr className="dropdown-divider" />
                        </li>
                        <li>
                        <a className="dropdown-item" href="#">
                            India , se hi hu bhai
                        </a>
                        </li>
                    </ul>
                    </li>
                </ul>
                <form className="d-flex mt-3" role="search">
                    <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                    Search India 
                    </button>
                </form>
                </div>
            </div>
            </div>
        </nav>
        
        </>
    );
    }
  export default _1one
  