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
  CardBody,
  CardTitle,
  CardText,
  CardDeck,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Badge,
  Modal
} from "reactstrap";
import { Icon } from "antd"
import dataJSON from "../../commons/json/project.json"

class CardsFooter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalStatus: false,
      modalContent: {
        name: "",
        year: "",
        desc: "",
        tech: "",
        appImg: ""
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
        appImg: response.appImg
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
        tech: "",
        appImg: ""
      }
    })
  }

  renderModal = () => {
    if (this.state.modalStatus === true) {
      const { modalContent } = this.state
      console.log("hiyahiya", modalContent)
      return (
        <Modal
          className="modal-dialog-centered sf-pro-rounded"
          // contentClassName="bg-gradient-info"
          isOpen={this.state.modalStatus}
          toggle={this.openModal}
        >
          <div className="modal-body">
            <Row>
              <Col lg="6">
                <h6 className="modal-title" id="modal-title-notification">
                  <b>{ modalContent.name }</b>
                </h6>
              </Col>
              <Col lg="6" style={{ display: "flex", justifyContent: "flex-end" }}>
                <h6 className="modal-title" style={{ borderRadius: "50px", backgroundColor: "#eaeaea", color: "#1174ef", padding: "3px 10px" }}>
                    { modalContent.year }
                </h6>
              </Col>
            </Row>
            <Row style={{ marginTop: "20px" }}>
              { modalContent.appImg ? <img src={require('./../../assets/img/' + modalContent.appImg)} alt={modalContent.image} className='card-img' /> : null}
            </Row>
            <Row className="text-center" style={{ marginTop: "20px" }}>
              <p>
                <i class="fa fa-quote-left" aria-hidden="true" style={{ marginBottom: "5px" }}></i>
                &nbsp;&nbsp;&nbsp;&nbsp;{ modalContent.desc }
                <i class="fa fa-quote-right" aria-hidden="true" style={{ marginTop: "5px" }}></i>
              </p>
            </Row>
            <Row>
              Tech: { modalContent.tech }
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
        <footer className="footer has-cards sf-pro-rounded">
          <Container className="container-lg">
            <Row>
              { 
                dataJSON.map(function (response, index) {
                  return (
                    <Col key={index} className="mb-5 mb-md-0" md="4" style={{ marginTop: "30px" }}>
                        <Card className="card-lift--hover shadow border-0" onClick={() => _this.openModal(response)}>
                          <CardImg 
                            alt="..."
                            src={require("assets/img/" + response.image + ".png")}
                            className="project-card-image"
                          />
                        </Card>
                    </Col>
                  )
                }) 
              }
            </Row>
            { this.renderModal() }
          </Container>
        </footer>
      </>
    );
  }
}

export default CardsFooter;
