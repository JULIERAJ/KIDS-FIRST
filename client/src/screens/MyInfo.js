import React, { useState } from 'react';
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
        //dispatch(updateUserInfo({ id: userInfo._id, firstName, lastName, dateOfBirth }));
        props.history.push('/CoParentInfo');
    };

    const handleBack = (e) => {
        e.preventDefault();
        props.history.push('/Signup');
    };


    return (
        <div>
            <header className="header-profile">
                <div className="site-header">
                    <img src={logo} alt="" />
                    <div className="header-title">Welcome!</div>
                </div>
            </header>
            <div className="profile-tabs">
                <ul className="nav nav-tabs nav-fill" id="accountInfoTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active profile-header" id="my_info_tab" data-bs-toggle="tab" data-bs-target="#"
                            type="button" role="tab" aria-controls="my_info" aria-selected="true">My Information</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link disabled profile-header" id="co-parent_info_tab" data-bs-toggle="tab"
                            data-bs-target="#profile" type="button" role="tab" aria-controls="co-parent_info"
                            aria-selected="false">Invite Co-parent</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link disabled profile-header" id="child_info_tab" data-bs-toggle="tab"
                            data-bs-target="#contact" type="button" role="tab" aria-controls="child_info" aria-selected="false">Child
                            Information</button>
                    </li>
                </ul>
                <div className="tab-content" id="accountInfoTabContent">
                    <div className="tab-pane show active" id="my_info" role="tabpanel" aria-labelledby="my_info_tab">
                        <div className="profile-form col-4">
                            <form className="info-form" onSubmit={submitHandler}>
                                <div className="flex-item">
                                    <div className="mb-2">
                                        <label for="userFirstName" className="form-label">First name</label>
                                        <input 
                                            type="text" minlength={1} maxLength={16} 
                                            className="form-control form-input-profile" 
                                            id="userFirstName"  
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required/>
                                    </div>
                                    <div className="mb-2">
                                        <label for="userLastName" className="form-label">Last name</label>
                                        <input type="text" minlength={1} maxLength={16} className="form-control form-input-profile" id="userLastName"  onChange={(e) => setLastName(e.target.value)} required />
                                    </div>
                                    <div className="mb-2">
                                        <label for="userDob" className="form-label">Date of birth (optional)</label>
                                        <input type="date" className="form-control"  id="userDob" onChange={(e) => setDateOfBirth(e.target.value)} />
                                    </div>
                                </div>
                                <div className="profile-nav-buttons">
                                    <button type="button" className="btn" id="back-btn" disabled>Back</button>
                                    <button type="submit" className="btn" id="next-btn" disabled={!(firstName && lastName)} >Next step</button>
                                </div>
                            </form>
                        </div>
                        <div className="placeholder-photo col-8">
                            <img src={my_info_placeholder} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
