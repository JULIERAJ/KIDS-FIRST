import {React, useState} from 'react';
import {CButton, CCol, CContainer, CRow} from '@coreui/react';
import {Container, Row, Col, Form} from 'react-bootstrap';

const ChildInformations = () =>{
  const [isDisabled, setIsDisabled ] = useState(true);

  const handleEdit = () =>{
    setIsDisabled(false);
  };

  return(
    <Container >
      <Row>
        <Col md={{ span: 11, offset: 11 }}>
          <CButton className="addButton">Add Child</CButton>
        </Col>
        </Row>
      <p className="header-profile-childInfo"><b>Hello 'Name'</b></p>
      <div className="childInfoBox">
        <Row>
        <Col md={{ span: 111, offset: 111}}>
            <p> Name Profile</p>
          </Col>
          <Col md={{ span: 11, offset: 11 }}>
            <CButton className="editButton" onClick={handleEdit}>Edit</CButton>
          </Col>
        </Row>
        <Row className="space-around">
          <Col md={4}>
          <div class="circle">
               kids Picture
          </div>
          </Col>
          <Col md={{ span: 2, offset: 1}}>
            <Form>
              <Form.Group>
                <Form.Label>Child Name</Form.Label>
                <div className="input-width">
                <Form.Control className="input-height" disabled={isDisabled}/>
                </div>
              </Form.Group>
            </Form> 
          </Col>
          <Col md={{ span: 2, offset: 2}}>
            <Form>
              <p>color</p>
            <div class="circle-color">
    
             </div>
            </Form> 
          </Col>
        </Row>
        <Row className="space-around">
          <Col md={4}>
            <Form>
               
            </Form>
          </Col>
          <Col md={{ span: 2, offset: 1}}>
            <Form>
              <Form.Group>
                <Form.Label>Date of Birth</Form.Label>
                <div className="input-width">
                <Form.Control className="input-height" disabled={isDisabled}/>
                </div>
              </Form.Group>
            </Form> 
          </Col>
          
        </Row>
        <Row className="space-around">
        <p><b>More informations </b></p>
        <p>Add information about allergies, interests fears of your kid by clicking the Edit button! </p>
          
           
        </Row>
         
         
      </div>
    </Container> 
  );
};

export default ChildInformations;
