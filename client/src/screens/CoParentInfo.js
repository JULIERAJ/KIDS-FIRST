import React, { useState } from 'react'
import { Navbar, Tabs, Tab, ButtonGroup, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../img/kids_first_logo_beta.png'
import coparent_info_placeholder from '../img/coparent-info-placeholder.png'
import { registerCoparent } from '../actions/userActions'

export default function CoParentInfo(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [is_co_parent, setIs_co_parent] = useState(true);
    const [invite_link, setInvite_link] = useState('');
    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo } = userRegister;
    const dispatch = useDispatch();
    /* const createBy = userInfo._id; */
    const submitHandler = (e) => {
        e.preventDefault();
        /* dispatch(registerCoparent(firstName, lastName, email, is_co_parent, createBy)); */
        props.history.push('/ChildInfo');

    };

    const handleBack = (e) => {
        e.preventDefault();
        props.history.push('/MyInfo');
    };

    return (
        <>
            <Navbar>
                <Navbar.Brand href="/" className="profile-update-header"><img src={logo} className="logo" alt="" />Welcome!</Navbar.Brand>
            </Navbar>
            <Tabs fill justify defaultActiveKey="coParentInfo" className="profile-tabs">
                <Tab eventKey="myInfo" title="My Information" className="profile-header" disabled></Tab>
                <Tab eventKey="coParentInfo" title="Invite Co-parent" className="profile-header">
                    <Tab.Pane className="active-profile-update" id="coParentInfo" active>
                        <div class="profile-form col-4">
                            <CoParentInfoForm />
                        </div>
                        <div class="placeholder-photo placeholder-photo-bottom col-8">
                            <img src={coparent_info_placeholder} alt="" />
                        </div>
                    </Tab.Pane>
                </Tab>
                <Tab eventKey="childInfo" title="Child Information" className="profile-header" disabled></Tab>
            </Tabs>
        </>
    )
}

class CoParentInfoForm extends React.Component {
    constructor() {
        super();
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          skipForm: false,
          invalidForm: true
        };
    }

    firstNameHandle(e) {
        this.setState({ firstName: e.target.value })
        this.setState({
            invalidForm : !((this.state.firstName && this.state.lastName && this.state.email) || this.state.skipForm)
        })
    }

    lastNameHandle(e) {
        this.setState({ lastName: e.target.value })
        this.setState({
            invalidForm : !((this.state.firstName && this.state.lastName && this.state.email) || this.state.skipForm)
        })
    }

    emailHandle(e) {
        this.setState({ email: e.target.value })
        this.setState({
            invalidForm : !((this.state.firstName && this.state.lastName && this.state.email) || this.state.skipForm)
        })
    }

    skipFormHandle(e) {
        this.setState(({ skipForm }) => ({ skipForm: !skipForm }))
        this.setState(({ invalidForm }) => ({ invalidForm: !invalidForm }))
    }

    render() {
        return (
            <Form className="info-form" method="post">
                <fieldset disabled={this.state.skipForm}>
                    <Form.Group className="form-inputs mb-2">
                        <label for="co-parentFirstName" class="form-label">First name</label>
                        <input type="text" class="form-input" id="co-parentFirstName"  placeholder="Enter your First Name" value={this.state.firstName} onChange={this.firstNameHandle.bind(this)}/>
                    </Form.Group>
                    <Form.Group className="form-inputs mb-2">
                        <label for="co-parentLastName" class="form-label">Last name</label>
                        <input type="text" class="form-input" id="co-parentLastName"   placeholder="Enter your Last Name"value={this.state.lastName} onChange={this.lastNameHandle.bind(this)}/>
                    </Form.Group>
                    <Form.Group className="form-inputs mb-2">
                        <label for="co-parentEmail" class="form-label">Email address</label>
                        <input type="email" class="form-input" id="co-parentEmail"  placeholder="abc@example.com" value={this.state.email} onChange={this.emailHandle.bind(this)}/>
                    </Form.Group>
                </fieldset>
                <div>
                    <Form.Check type="checkbox" checked={this.state.skipForm} onChange={this.skipFormHandle.bind(this)} className="co-parentCheck" label="I want to invite co-parent later"/>    
                    <ButtonGroup className="profile-nav-buttons">
                        <Button className="back-btn" href="/MyInfo">Back</Button>
                        <Button type="submit" className="next-btn" href="/ChildInfo" disabled={this.state.invalidForm}>Next step</Button>
                    </ButtonGroup>
                </div>
          </Form>
        )
    }
}