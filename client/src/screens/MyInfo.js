import React, { useState } from 'react';
import { Navbar, Tabs, Tab, ButtonGroup, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../img/kids_first_logo_beta.png'
import my_info_placeholder from '../img/my-info-placeholder.png'
import { updateUserInfo } from '../actions/userActions';

export default function MyInfo(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo } = userRegister;
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(updateUserInfo({ id: userInfo._id, firstName, lastName, dateOfBirth }));
        props.history.push('/CoParentInfo');
    };

    const handleBack = (e) => {
        e.preventDefault();
        props.history.push('/Signup');
    };

    return (
        <>
            <Navbar>
                <Navbar.Brand href="/" className="profile-update-header"><img src={logo} className="logo" alt="" />Welcome!</Navbar.Brand>
            </Navbar>
            <Tabs fill justify defaultActiveKey="myInfo" className="profile-tabs">
                <Tab eventKey="myInfo" title="My Information" className="profile-header">
                    <Tab.Pane className="active-profile-update" id="myInfo" active>
                        <div class="profile-form col-4">
                            <MyInfoForm />
                        </div>
                        <div class="placeholder-photo placeholder-photo-bottom col-8">
                            <img src={my_info_placeholder} alt="" />
                        </div>
                    </Tab.Pane>
                </Tab>
                <Tab eventKey="coParentInfo" title="Invite Co-parent" className="profile-header" disabled></Tab>
                <Tab eventKey="childInfo" title="Child Information" className="profile-header" disabled></Tab>                
            </Tabs>
        </>
    )
}

class MyInfoForm extends React.Component {
    constructor() {
        super();
        this.state = {
          firstName: "",
          lastName: "",
          dateOfBirth: "",
          invalidForm: true
        };
    }

    firstNameHandle(e) {
        this.setState({ firstName: e.target.value })
        this.setState({ invalidForm: !(this.state.firstName && this.state.lastName) })
    }

    lastNameHandle(e) {
        this.setState({ lastName: e.target.value })
        this.setState({ invalidForm: !(this.state.firstName && this.state.lastName) })
    }
    
    dateOfBirthHandle(e) {
        this.setState({ dateOfBirth: e.target.value })
    }

    render() {
        return (
            <Form className="info-form" method="post">
                <div>
                    <Form.Group className="form-inputs mb-2">
                        <label for="userFirstName" class="form-label">First name</label>
                        <input type="text" class="form-input" id="userFirstName" placeholder="Enter your First Name" value={this.state.firstName} onChange={this.firstNameHandle.bind(this)} required />
                    </Form.Group>
                    <Form.Group className="form-inputs mb-2">
                        <label for="userLastName" class="form-label">Last name</label>
                        <input type="text" class="form-input" id="userLastName" placeholder="Enter your Last Name" value={this.state.lastName} onChange={this.lastNameHandle.bind(this)} required />
                    </Form.Group>
                    <Form.Group className="form-inputs mb-2">
                        <label for="userDob" class="form-label"  >Date of birth (optional)</label>
                        <input type="date" class="form-input" id="userDob" value={this.state.dateOfBirth} onChange={this.dateOfBirthHandle.bind(this)} />
                    </Form.Group>
                </div>
                <ButtonGroup className="profile-nav-buttons">
                    <Button className="back-btn" disabled>Back</Button>
                    <Button type="submit" className="next-btn" href="/CoParentInfo" disabled={this.state.invalidForm}>Next step</Button>
                </ButtonGroup>
            </Form>
        )
    }
}