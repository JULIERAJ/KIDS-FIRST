import React, { useState } from 'react';
import child_info_placeholder from '../img/child-info-placeholder-1.png'
import logo from '../img/kids_first_logo_beta.png'
import { useDispatch, useSelector } from 'react-redux';
import { registerChild } from '../actions/userActions';

export default function ChildInfo(props) {
  const [formValues, setFormValues] = useState([{childFirstName: "" }]);
  const [is_child, setIs_child] = useState(true);
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;
  const dispatch = useDispatch();
  //const createBy = userInfo._id;

  const maxChild= formValues.length===5;

  const handleChange = (i, e) => {
      const newFormValues = [...formValues];
      newFormValues[i][e.target.name] = e.target.value;
      setFormValues(newFormValues);
    }
  
  const addFormFields = () => {
    if(!maxChild)
      setFormValues([...formValues, {childFirstName: ""}])
    }
  
  const removeFormFields = (i) => {
      const newFormValues = [...formValues];
      newFormValues.splice(i, 1);
      setFormValues(newFormValues)
    }
    

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch(registerChild(firstName,is_child, createBy));
    props.history.push('/dashboard');
  };

  const handleBack = (e) => {
    e.preventDefault();
    props.history.push('/CoParentInfo');
  };

  return (
    <div>
      <header className="header-profile">
        <div className="site-header">
          <img src={logo} alt="" /> 
          <div className="header-title">Welcome!</div>
        </div>
      </header >
      <div className="profile-tabs">
        <ul className="nav nav-tabs nav-fill" id="accountInfoTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link disabled profile-header" id="my_info_tab" data-bs-toggle="tab" data-bs-target="#"
              type="button" role="tab" aria-controls="my_info" aria-selected="true">My Information</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link disabled profile-header" id="co-parent_info_tab" data-bs-toggle="tab"
              data-bs-target="#profile" type="button" role="tab" aria-controls="co-parent_info"
              aria-selected="false">Invite Co-parent</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link active profile-header" id="child_info_tab" data-bs-toggle="tab"
              data-bs-target="#contact" type="button" role="tab" aria-controls="child_info" aria-selected="false">Child
              Information</button>
          </li>
        </ul>
        <div className="tab-content" id="accountInfoTabContent">
          <div className="tab-pane show active" id="child_info" role="tabpanel" aria-labelledby="child_info_tab">
            <div className="profile-form col-4">
              <form className="info-form" onSubmit={submitHandler}>
                <div className="info-form-child">
              {formValues.map((element, index) => (
                <div className="flex-item" key={index}>
                                {
                index ? 
                <div className="extra-child ">

                <div className="delete-child ">
                    <input type="button" id="deleteChildCheck"onClick={() => removeFormFields(index)} />
                </div>
                </div>
                : null
              }
                  <div className="mb-2 form-inputs-profile">
                    <label for="childFirstName" className="form-label">Child name</label>
                    <input className="form-input" type="text" name="childFirstName" minlength={1} maxLength={20} id="childFirstName"  onChange={e => handleChange(index, e)} />
                  </div>
            </div>
          ))}
              <div className="mb-3 form-check-addchild">
                    <input type="button" className="form-check-input-addchild" id="childCheck" onClick={() => addFormFields()} />
                    <label className="form-check-label-addchild"  for="childCheck">Add another child</label>
              </div>
              </div>
           
                <div className="profile-nav-buttons">
                  <button type="button" className="btn" id="back-btn-addchild" onClick={handleBack}>Back</button>
                  <button type="submit" className="btn" id="next-btn-addchild" disabled={!(formValues[0].childFirstName)} >Done</button>
                </div>
              </form>
            </div>
            <div className="placeholder-photo col-8">
              <img src={child_info_placeholder} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}