/*!

=========================================================
* Argon Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardImg,
  Container,
  Row,
  Col,
  Modal
} from "reactstrap";
import { Avatar, Tag } from "antd"
import dataJSON from "../../commons/json/project.json"
import Mailto from "react-protected-mailto"

class CardsFooter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalStatus: false,
      modalContent: {
        name: "",
        year: "",
        desc: "",
        tech: [],
        appImg: "",
        appIcon: "",
        borderColor: "",
        backgroundColor: "",
        color: "",
        confidental: 0,
        role: ""
      }
    }
  }

  openModal = (response) => {
    this.setState({ 
      modalStatus: !this.state.modalStatus,
      modalContent: {
        name: response.name,
        year: response.year,
        desc: response.desc,
        tech: response.tech,
        appImg: response.appImg,
        appIcon: response.image,
        borderColor: response.borderColor,
        backgroundColor: response.backgroundColor,
        color: response.color,
        confidental: response.confidental,
        role: response.role
      }
    })
  }

  closeModal = () => {
    this.setState({ 
      modalStatus: !this.state.modalStatus,
      modalContent: {
        name: "",
        year: "",
        desc: "",
        tech: [],
        appImg: "",
        appIcon: "",
        borderColor: "",
        backgroundColor: "",
        color: "",
        confidental: 0,
        role: ""
      }
    })
  }

  renderModal = () => {
    if (this.state.modalStatus === true) {
      const { modalContent } = this.state
      return (
        <Modal
          className="modal-dialog-centered google-sans work"
          isOpen={this.state.modalStatus}
          toggle={this.openModal}
        >
          {/* <div id="wave"></div> */}
          <div className="modal-body">
            <Row>
              <Col lg="1" className="pl-0">
                <Avatar src={require('./../../assets/img/' + modalContent.appIcon)} size={45} className="client-img" style={{ border: `2px solid ${modalContent.borderColor}` }} />
              </Col>
              <Col lg={modalContent.confidental === 1 ? 9 : 11} className="pl-0">
                <p className="project-name-modal">{ modalContent.name }</p>
                <p className="project-year-modal">{ modalContent.year }</p>
              </Col>
              { modalContent.confidental === 1 ? <Col lg="2" className="pr-0" style={{ color: "red", fontWeight: "bold", textAlign: "end" }}>Confidental</Col> : null}
            </Row>
            <Row style={{ marginTop: "20px" }}>
              { modalContent.appImg ? <img src={require(`./../../assets/img/${modalContent.appImg}`)} alt={modalContent.image} className='card-img' style={{ borderRadius: "5px" }} /> : null}
            </Row>
            <Row style={{ marginTop: "20px" }}>
              <Col lg="8">
                <span>
                  <p>
                    <i class="fa fa-quote-left" aria-hidden="true" style={{ marginBottom: "5px" }}></i>
                    &nbsp;&nbsp;&nbsp;&nbsp;{ modalContent.desc }&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa fa-quote-right" aria-hidden="true" style={{ marginTop: "5px" }}></i>
                  </p>
                </span>
                <span>
                  <b>Role: </b>
                  { modalContent.role ? modalContent.role.map((response, index) => { return (<Tag key={index} color={modalContent.backgroundColor}>{response}</Tag>)}) : "N/A" }
                </span>
              </Col>
              <Col lg="4">
                <span>
                  <b>Tech:</b> <br/>{ modalContent.tech.map((response, index) => {return ( <Tag key={index} color={modalContent.backgroundColor}>{response}</Tag> )}) }
                </span>
              </Col>
            </Row>
          </div>
        </Modal>
      )
    }
  }

  render() {
    let _this = this

    return (
      <>
        <footer className="footer has-cards google-sans">
          <Container className="container-lg">
            <Row>
              { 
                dataJSON.map(function (response, index) {
                  console.log(`${response.name}`, response)
                  return (
                    <Col key={index} className="mb-5 mb-md-0" md="4" style={{ marginTop: "30px" }}>
                        <Card className="card-lift--hover shadow border-0" onClick={() => _this.openModal(response)}>
                          <CardImg 
                            alt="..."
                            src={require(`assets/img/${response.image}`)}
                            className="project-card-image"
                          />
                          { response.confidental === 1 ? <div className="confidental-project">Confidental</div> : null }
                        </Card>
                    </Col>
                  )
                }) 
              }
            </Row>
            <Row className="pl-3 mt-5">
              <span>*Flag indicates client regions.</span>
            </Row>
            {/* <Row>
              <Col className="d-flex justify-content-center" style={{ marginTop: "50px" }}>
                Want to talk with me? Hit button bellow!
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center mt-1">
                <div className="mailme mt-1">
                  <Mailto
                    email='zakysteinfeld@outlook.com'
                    headers={
                      {subject:'Hi!'},
                      {cc:'zakysteinfeld@gmail.com'}
                  }/>
                </div>
              </Col>
            </Row> */}
            { this.renderModal() }
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
