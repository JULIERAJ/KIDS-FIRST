import {React, useState} from 'react';
import {CButton, CCol, CContainer, CRow} from '@coreui/react';
import {Container, Row, Col, Form} from 'react-bootstrap';

const AccessChildInfo = () =>{
  const [isDisabled, setIsDisabled ] = useState(true);

  const handleEdit = () =>{
    setIsDisabled(false);
  };

  return(
    <Container>
      <Row>
        <Col md={{ span: 11, offset: 11 }}>
          <CButton className="addButton">Add Child</CButton>
        </Col>
        </Row>
      <p className="dashboardChildinfo"><b>My Children</b></p>
      <div className="childInfoBox">
        <Row>
          <Col md={{ span: 11, offset: 11 }}>
            <CButton className="editButton" onClick={handleEdit}>Edit</CButton>
          </Col>
        </Row>
        <Row className="space-around">
          <Col md={4}>
            <Form>
              <Form.Group>
                <Form.Label>First Name</Form.Label>
                <div className="input-width">
                <Form.Control className="input-height" disabled={isDisabled}/>
                </div>
              </Form.Group>
            </Form>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
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
          <Col md={4}>
            <Form>
              <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <div className="input-width">
                <Form.Control className="input-height" disabled={isDisabled}/>
                </div>
              </Form.Group>
            </Form>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <Form>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <div className="input-width">
                <Form.Control className="input-height" disabled={isDisabled}/>
                </div>
              </Form.Group>
            </Form> 
          </Col>
        </Row>
        <Row className="space-around">
        <p><b>General Status</b></p>
          <Col md={{ span: 2, offset: 0 }}>
            <Form>
              <Form.Group>
                <div className="input-one">
                <Form.Control className="input-height" disabled={isDisabled}/>
                </div>
              </Form.Group>
            </Form>
          </Col>
          <Col md={{ span: 2, offset: 0 }}>
            <Form>
              <Form.Group>
                <div className="input-one">
                <Form.Control className="input-height" disabled={isDisabled}/>
                </div>
              </Form.Group>
            </Form> 
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <div className="input-two">
                <Form.Control className="input-height" disabled={isDisabled}/>
                </div>
              </Form.Group>
            </Form> 
          </Col>
        </Row>
        <Row className="space-around">
          <Col md={{ span: 2, offset: 0 }}>
            <Form>
              <Form.Group>
                <div className="input-one">
                <Form.Control className="input-height" disabled={isDisabled}/>
                </div>
              </Form.Group>
            </Form>
          </Col>
          <Col md={{ span: 2, offset: 0 }}>
            <Form>
              <Form.Group>
                <div className="input-one">
                <Form.Control className="input-height" disabled={isDisabled}/>
                </div>
              </Form.Group>
            </Form> 
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <div className="input-two">
                <Form.Control className="input-height" disabled={isDisabled}/>
                </div>
              </Form.Group>
            </Form> 
          </Col>
        </Row>
        <Row className="space-around">
          <Col md={{ span: 2, offset: 0 }}>
            <Form>
              <Form.Group>
                <div className="input-one">
                <Form.Control className="input-height" disabled={isDisabled}/>
                </div>
              </Form.Group>
            </Form>
          </Col>
          <Col md={{ span: 2, offset: 0 }}>
            <Form>
              <Form.Group>
                <div className="input-one">
                <Form.Control className="input-height" disabled={isDisabled}/>
                </div>
              </Form.Group>
            </Form> 
          </Col>
          <Col  >
            <Form>
              <Form.Group>
                <div className="input-two">
                <Form.Control className="input-height" disabled={isDisabled}/>
                </div>
              </Form.Group>
            </Form> 
          </Col>
        </Row>
      </div>
    </Container> 
  );
};

export default AccessChildInfo;
