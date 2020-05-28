import React, { Component } from 'react';
import { Card, Container, Row, Col, Button } from "reactstrap";
import { Drawer, Divider, Progress } from "antd";
import Mailto from "react-protected-mailto";

export default class MyStory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  drawerOnClick = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  skills = () => {
    return (
      <div>
        <Row><Col lg={1}>Javascript (React JS)</Col> <Col lg={5}><Progress strokeColor={{ from: '#108ee9', to: '#87d068' }} percent={89} status="active" /></Col></Row>
        <Row><Col lg={1}>.NET</Col> <Col lg={5}><Progress strokeColor={{ from: '#108ee9', to: '#87d068' }} percent={69} status="active" /></Col></Row>
        <Row><Col lg={1}>SQL Server</Col> <Col lg={5}><Progress strokeColor={{ from: '#108ee9', to: '#87d068' }} percent={60} status="active" /></Col></Row>
        <Row><Col lg={1}>Corel DRAW</Col> <Col lg={5}><Progress strokeColor={{ from: '#108ee9', to: '#87d068' }} percent={90} status="active" /></Col></Row>
        <Row><Col lg={1}>Photoshop</Col> <Col lg={5}><Progress strokeColor={{ from: '#108ee9', to: '#87d068' }} percent={60} status="active" /></Col></Row>
      </div>
    )
  }
  
  render () {
    const pStyle = {
      fontSize: 16,
      color: 'rgba(0,0,0,0.85)',
      lineHeight: '24px',
      display: 'block',
      marginBottom: 16,
    };
    
    const DescriptionItem = ({ title, content }) => (
      <div
        className="google-sans"
        style={{
          fontSize: 14,
          lineHeight: '22px',
          marginBottom: 7,
          color: 'rgba(0,0,0,0.65)',
        }}
      >
        <p
          className="google-sans"
          style={{
            marginRight: 8,
            display: 'inline-block',
            color: 'rgba(0,0,0,0.85)',
          }}
        >
          {title}:
        </p>
        {content}
      </div>
    );

    return (
      <>
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              {/* <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span /> */}
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section" style={{ paddingBottom: "1rem" }}>
            <Container>
              <div>
                <Card className="card-profile shadow mt--500">
                  <div className="px-4 mt-5">
                    <Row className="justify-content-center">
                      <Col className="order-lg-1" lg="3">
                        <img
                          alt="..."
                          className="img-fluid rounded-circle shadow-lg"
                          src={require("assets/img/pict-square.jpg")}
                        />
                      </Col>
                      <Col
                        className="order-lg-2 text-lg-left align-self-lg-center"
                        lg="8"
                      >
                        <div className="card-profile-actions py-4 mt-lg-0 google-sans">
                          <h3>
                            Muhamad Zaky<span className="thin">, 21</span>
                          </h3>
                          <div className="h6 light">
                            <i className="ni ni-pin-3 mr-2" />
                            <a href="https://goo.gl/maps/U2rgpzzyYUrNeXMg6" target="_blank" rel="noopener noreferrer" style={{ color: "#35325D" }}>
                              Bandung, Indonesia
                            </a>
                          </div>
                          <div className="h6 mt-3">
                            <i className="ni ni-briefcase-24 mr-2" />
                            Front End Developer (React JS), .NET Developer
                          </div>
                          <div className="h6 mt-3">
                            <i className="ni ni-hat-3 mr-2" />
                            <a href="https://goo.gl/maps/sSjg8HbzJPdhePgR7" target="_blank" rel="noopener noreferrer" style={{ color: "#35325D" }}>
                              SMKN 4 Bandung
                            </a>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="mt-5 py-5 border-top text-center google-sans">
                      <Row className="justify-content-center">
                        <Col lg="9">
                          <p>
                          Hi! My name is <span className="semiBold">Muhamad Zaky</span>, you can call me <span className="semiBold">Zaky</span>, I'm a Front End Developer currently, using javascript framework <span className="semiBold">ReactJS</span> with speciality in <span className="semiBold">.NET (C#)</span> on the back.
                          </p>
                          <Button color="primary" type="button" onClick={this.drawerOnClick}>
                            Show more
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Card>
              </div>
            </Container>
          </section>
        </main>
        <Drawer
          height={680}
          placement="bottom"
          closable={false}
          onClose={this.drawerOnClick}
          visible={this.state.visible}
          drawerStyle={{ borderTopLeftRadius: "25px", borderTopRightRadius: "25px" }}
        >
          <p className="google-sans bold" style={{ ...pStyle, marginBottom: 24 }}>Profile</p>
          <p className="google-sans semiBold" style={pStyle}>Personal</p>
          <Row className="google-sans">
            <Col span={12}>
              <DescriptionItem title="Full Name" content="Muhamad Zaky" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Birthday" content="October 23,1998" />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <DescriptionItem title="City" content="Bandung" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Country" content="Indonesia" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Message"
                content="もっと自分を信じろよ！ - Believe in yourself more! - Lebih percaya kepada diri sendiri!"
              />
            </Col>
          </Row>
          <Divider />
          <p className="google-sans semiBold" style={pStyle}>Company</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Position" content="Programmer" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Responsibilities" content="Coding" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Skills"
                content={this.skills()}
              />
            </Col>
          </Row>
          <Divider />
          <p className="google-sans semiBold" style={pStyle}>Contacts</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Email" content={<Mailto email='zakysteinfeld@outlook.com' headers={ {subject:'Hi!'}, {cc:'zakysteinfeld@gmail.com'} }/>} />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Phone Number" content={<Mailto tel='+62 819-0454-6023'/>} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <DescriptionItem
                title="Github"
                content={
                  <a href="https://github.com/zakysteinfeld">
                    github.com/zakysteinfeld
                  </a>
                }
              />
            </Col>
          </Row>
        </Drawer>
      </>
    )
  }
}