
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';import logo from '../img/kids_first_logo_beta.png'
import coparent_info_placeholder from '../img/coparent-info-placeholder.png'
import { registerCoparent } from '../actions/userActions';

export default function CoParentInfo(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [is_co_parent, setIs_co_parent] = useState(true);
  const [invite_link, setInvite_link] = useState('');
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;
  const dispatch = useDispatch();
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  //const createBy  = userInfo._id;

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch(registerCoparent(firstName, lastName, email, is_co_parent,createBy));
    props.history.push('/ChildInfo');

  };

  const handleBack = (e) => {
    e.preventDefault();
    props.history.push('/MyInfo');
  };

  const handleCheckBox = (e) => {
    if(e.target.checked){
    setCheckBoxValue(true);
    }else{
    setCheckBoxValue(false);
    }
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
            <button className="nav-link disabled profile-header" id="my_info_tab" data-bs-toggle="tab" data-bs-target="#"
              type="button" role="tab" aria-controls="my_info" aria-selected="true">My Information</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link active profile-header" id="co-parent_info_tab" data-bs-toggle="tab"
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
          <div className="tab-pane show active" id="co-parent_info" role="tabpanel" aria-labelledby="co-parent_info_tab">
            <div className="profile-form col-4">
              <form className="info-form" onSubmit={submitHandler}>
                <div className="flex-item">
                  <div className="mb-2">
                    <label for="co-parentFirstName" className="form-label-profile">First name</label>
                    <input type="text"  minlength={1} maxLength={16} className="form-control form-input-profile" id="co-parentFirstName" disabled={checkBoxValue} onChange={(e) => setFirstName(e.target.value)} />
                  </div>
                  <div className="mb-2">
                    <label for="co-parentLastName" className="form-label-profile">Last name</label>
                    <input type="text" minlength={1} maxLength={16} className="form-control form-input-profile" id="co-parentLastName" disabled={checkBoxValue} onChange={(e) => setLastName(e.target.value)}  />
                  </div>
                  <div className="mb-2">
                    <label for="co-parentEmail" className="form-label-profile">Email</label>
                    <input type="email" className="form-control form-input-profile" id="co-parentEmail"  placeholder="example@email.com" disabled={checkBoxValue} onChange={(e) => setEmail(e.target.value)} />
                  </div>


                  <div className="mb-3 form-check-invite">
                    <input type="checkbox" className="form-check-input" id="co-parentCheck" checked={checkBoxValue} onChange={handleCheckBox}/>
                    <label className="form-check-label" for="co-parentCheck">Skip this step and invite co-parent</label>
                  </div>
                </div>
                <div className="profile-nav-buttons">
                  <button type="button" className="btn" id="back-btn" onClick={handleBack}> Back</button>
                  <button type="submit" className="btn" id="next-btn" disabled={!((firstName && lastName && email) ||checkBoxValue)} >Next step</button>
                </div>
              </form>
            </div>
            <div className="placeholder-photo col-8">
              <img src={coparent_info_placeholder} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
