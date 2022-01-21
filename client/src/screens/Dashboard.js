import React from 'react'
import logo from '../img/kids_first_logo_beta.png'

export default function Dashboard() {
    return (
        <>
            <nav class="navbar navbar-expand-lg dashboard-nav">
                <div class="container-fluid">

                    <button type="button" id="sidebarCollapse" class="navbar-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ">



                            <div className="dropdown-img">
                                <a href="#" className="d-flex align-items-center text-dark text-decoration-none " id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <p className="pt-2">Alexandra Roy</p>

                                    <img class="avatar avatar-15  rounded-circle "
                                        src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg" alt=""></img>

                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                                    <li><a className="dropdown-item" href="#">New project...</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                                </ul>
                            </div>


                            {/* <li class="nav-item">

                                <div class="dropdown-img ">
                                    <button class="dropBtn " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                        <img class="avatar avatar-15  rounded-circle text-white p-1"
                                            src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg" alt=""></img>
                                    </button>

                                </div>

                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            <main>
                <h1 className="visually-hidden">Sidebars examples</h1>

                <div className=" dashboard-sidebar d-flex flex-column flex-shrink-0 p-3 text-dark ">
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        {/* <svg className="bi me-2" width="40" height="32"></svg> */}
                        <img className="logo-dashboard" src={logo} alt="" />
                        {/* <span className="fs-4">Sidebar</span> */}
                    </a>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link " aria-current="page">
                                <svg className="bi me-2" width="16" height="16"></svg>
                                My Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="/dashboard/calender" className="nav-link text-dark">
                                <svg className="bi me-2" width="16" height="16"></svg>
                                Calender
                            </a>
                        </li>
                        <li>
                            <a  href="/dashboard/childinfo" className="nav-link text-dark">
                                <svg className="bi me-2" width="16" height="16"></svg>
                                Child info
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-dark">
                                <svg className="bi me-2" width="16" height="16"></svg>
                                Family info
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-dark">
                                <svg className="bi me-2" width="16" height="16"></svg>
                                Messaging
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-dark">
                                <svg className="bi me-2" width="16" height="16"></svg>
                                To do list
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-dark">
                                <svg className="bi me-2" width="16" height="16"></svg>
                                Finance tracker
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-dark">
                                <svg className="bi me-2" width="16" height="16"></svg>
                                Reports
                            </a>
                        </li>
                    </ul>

                </div>



                <div className="b-example-divider"></div>
            </main>
        </>
    )
}
