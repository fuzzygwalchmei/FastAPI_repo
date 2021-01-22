import React from 'react'
import { Link, withRouter } from "react-router-dom";

function Header(props) {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="http://localhost:3000">Fuzzle Folio</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="http://localhost:3000">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="http://localhost:3000">About Me</a>
                            </li> */}
                            <li class={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`}>
                                <Link class="nav-link" to="/">Home<span class="sr-only">(current)</span></Link>
                            </li>
                            <li class={`nav-item  ${props.location.pathname === "/about" ? "active" : ""}`}>
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class={`nav-item  ${props.location.pathname === "/contact" ? "active" : ""}`}>
                                <Link class="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                    </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="http://localhost:3000">Education</a></li>
                                    <li><a class="dropdown-item" href="http://localhost:3000">Gaming</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="http://localhost:3000">Repositories</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="http://localhost:3000" tabindex="-1" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    )
}
export default withRouter(Header);
