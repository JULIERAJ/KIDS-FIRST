import React, { useState } from 'react';
import { Navbar, Tabs, Tab, ButtonGroup, Button, Form } from 'react-bootstrap';
import child_info_placeholder from '../img/child-info-placeholder.png'
import logo from '../img/kids_first_logo_beta.png'
import { useDispatch, useSelector } from 'react-redux';
import { registerChild } from '../actions/userActions';

export default function ChildInfo(props) {
    const [firstName, setFirstName] = useState('');
    const [is_child, setIs_child] = useState(true);
    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo } = userRegister;
    const dispatch = useDispatch();
    /* const createBy = userInfo._id; */

    const submitHandler = (e) => {
        e.preventDefault();
        /* dispatch(registerChild(firstName, is_child, createBy)); */
        props.history.push('/dashboard');
    };

    const handleBack = (e) => {
        e.preventDefault();
        props.history.push('/CoParentInfo');
    };

    return (
        <>
            <Navbar>
                <Navbar.Brand href="/" className="profile-update-header"><img src={logo} className="logo" alt="" />Welcome!</Navbar.Brand>
            </Navbar>
            <Tabs fill justify defaultActiveKey="childInfo" className="profile-tabs">
                <Tab eventKey="myInfo" title="My Information" className="profile-header" disabled></Tab>
                <Tab eventKey="coParentInfo" title="Invite Co-parent" className="profile-header" disabled></Tab>
                <Tab eventKey="childInfo" title="Child Information" className="profile-header">
                    <Tab.Pane className="active-profile-update" id="childInfo" active>
                        <div className="profile-form col-4">
                            <ChildInfoForm />
                        </div>
                        <div className="placeholder-photo placeholder-photo-center col-8">
                            <img src={child_info_placeholder} alt="" />
                        </div>
                    </Tab.Pane>
                </Tab>
            </Tabs>
        </>
    )
}

class ChildInfoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "",
            extraChildCount: 0,
            invalidForm: true
        };
    }

    nameHandle(e) {
        this.setState({ name: e.target.value })
        this.setState({ invalidForm: !this.state.name })
    }

    addChildHandle() {
        this.setState({ extraChildCount: this.state.extraChildCount + 1 })
    }

    deleteChildHandle() {
        this.setState({ extraChildCount: this.state.extraChildCount - 1 })
    }

    render() {
        return (
            <Form className="info-form" method="post">
                <div>
                    <Form.Group className="form-inputs mb-2">
                        <label className="form-label">Child name</label>
                        <input type="text" className="form-input" id="childName"  placeholder="Enter your Child's Name" value={this.state.name} onChange={this.nameHandle.bind(this)} required />
                    </Form.Group>
                    {
                        new Array(this.state.extraChildCount).fill(0).map((_, index) =>
                            <div className="extra-child">
                                <hr />
                                <div className="delete-child">
                                    <input type="button" id="deleteChildCheck" onClick={this.deleteChildHandle.bind(this)} />
                                </div>
                                <Form.Group className="form-inputs mb-2">
                                    <label className="form-label">Child name</label>
                                    <input type="text" className="form-input" />
                                </Form.Group>
                            </div>
                        )
                    }
                    <div className="mb-3">
                        <input type="button" id="addChildCheck" onClick={this.addChildHandle.bind(this)} />
                        <label className="add-child-label" for="addChildCheck">Add another child</label>
                    </div>
                </div>
                <ButtonGroup className="profile-nav-buttons">
                    <Button className="back-btn" href="/CoParentInfo">Back</Button>
                    <Button type="submit" className="next-btn" href='/dashboard' disabled={this.state.invalidForm}>Done</Button>
                </ButtonGroup>
            </Form>
        )
    }
}