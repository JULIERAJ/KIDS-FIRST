import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import '../css/dashboard.css'
import logo from '../img/kids_first_logo_beta.png'
import home_m_icon_a from '../img/dashboard/home_m_icon_a.png'
import cal_m_icon from '../img/dashboard/cal_m_icon.png'
import msg_m_icon from '../img/dashboard/msg_m_icon.png'
import todo_m_icon from '../img/dashboard/todo_m_icon.png'
import fin_m_icon from '../img/dashboard/fin_m_icon.png'
import rep_m_icon from '../img/dashboard/rep_m_icon.png'
import album_m_icon from '../img/dashboard/album_m_icon.png'
import settings_m_icon from '../img/dashboard/settings_m_icon.png'
import help_m_icon from '../img/dashboard/help_m_icon.png'

import user_a_icon_s from '../img/profile/user_a_icon_s.png'
import child_a_icon_s_1 from '../img/profile/child_a_icon_s_1.png'
import add_member_m_icon from '../img/dashboard/add_mem_m_icon.png'
import add_guest_m_icon from '../img/dashboard/add_guest_m_icon.png'
import option_m_icon from '../img/dashboard/option_m_icon.png'

export default function Dashboard() {
    return (
        <body class="dashboard">
            <nav class="dashboard">
                <div class="flex-menu">
                    <img src={logo} alt="" />
                    <Nav fill variant="pills" className="flex-column menu">
                        <Nav.Item>
                            <img src={home_m_icon_a} alt=""/>
                            <Nav.Link href="" className="active">Dashboard</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <img src={cal_m_icon} alt=""/>
                            <Nav.Link href="/dashboard/calendar">Calendar</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <img src={msg_m_icon} alt=""/>
                            <Nav.Link href="#">Messages</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <img src={todo_m_icon} alt=""/>
                            <Nav.Link href="#">To-do list</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <img src={fin_m_icon} alt=""/>
                            <Nav.Link href="#">Finances</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <img src={rep_m_icon} alt=""/>
                            <Nav.Link href="#">Reports</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <img src={album_m_icon} alt=""/>
                            <Nav.Link href="#">Album</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
                <Nav fill variant="pills" className="flex-column options">
                    <Nav.Item>
                        <img src={settings_m_icon} alt=""/>
                        <Nav.Link href="#">Settings</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <img src={help_m_icon} alt=""/>
                        <Nav.Link href="#">Help</Nav.Link>
                    </Nav.Item>
                </Nav>
            </nav>
            <main></main>
            <div class="dashboard-profile">
                <div class="dashboard-m1">
                    <div class="member-label user-label">
                        <img src={user_a_icon_s}/>Emma Clark
                    </div>
                </div>
                <div class="dashboard-m1">
                    <div class="profile-option">
                        <img src={add_member_m_icon}/>Add a co-parent
                    </div>
                </div>
                <div class="dashboard-m3">
                    <h1>Our kids</h1>
                    <div class="member-label">
                        <img src={child_a_icon_s_1}/>
                        <a href="/dashboard/childinfo">James</a>
                    </div>
                    <div class="profile-option">
                        <img src={add_member_m_icon}/>Add kid
                    </div>
                </div>
                <div class="dashboard-m2">
                    <h1>Guests</h1>
                    <div class="profile-option">
                        <img src={add_guest_m_icon}/>Add guest users
                    </div>
                </div>
                <div class="dashboard-m1">
                    <div class="profile-option">
                        <img class="profile-manage" src={option_m_icon}/>Manage family
                    </div>
                </div>
            </div>
        </body>
    )
}
