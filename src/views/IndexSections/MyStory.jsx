import React, { Component } from 'react';
import { Card, Container, Row, Col } from "reactstrap";
import { Drawer, Divider } from "antd";

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
        className="sf-pro-rounded"
        style={{
          fontSize: 14,
          lineHeight: '22px',
          marginBottom: 7,
          color: 'rgba(0,0,0,0.65)',
        }}
      >
        <p
          className="sf-pro-rounded"
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
                        <div className="card-profile-actions py-4 mt-lg-0 sf-pro-rounded">
                          <h3>
                            Muhamad Zaky{" "}
                            <span className="thin">, 21</span>
                          </h3>
                          <div className="h6 light">
                            <i className="ni ni-pin-3 mr-2" />
                            Bandung, Indonesia
                          </div>
                          <div className="h6 mt-3">
                            <i className="ni ni-briefcase-24 mr-2" />
                            Front End Developer (React JS), .NET Developer
                          </div>
                          <div>
                            <i className="ni ni-hat-3 mr-2" />
                            SMKN 4 Bandung
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="mt-5 py-5 border-top text-center sf-pro-rounded">
                      <Row className="justify-content-center">
                        <Col lg="9">
                          <p>
                          Hi! My name is <span className="semiBold">Muhamad Zaky</span>, you can call me <span className="semiBold">Zaky</span>, I'm a Front End Developer currently, using javascript framework <span className="semiBold">ReactJS</span> with speciality in <span className="semiBold">.NET (C#)</span> on the back.
                          </p>
                          <a href="#ModalProfile" onClick={this.drawerOnClick}>
                            Show more
                          </a>
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
          <p className="sf-pro-rounded bold" style={{ ...pStyle, marginBottom: 24 }}>User Profile</p>
          <p className="sf-pro-rounded semiBold" style={pStyle}>Personal</p>
          <Row className="sf-pro-rounded">
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
          <p className="sf-pro-rounded semiBold" style={pStyle}>Company</p>
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
                content="Javascript (React JS), Typescript, .NET, SQL Server"
              />
            </Col>
          </Row>
          <Divider />
          <p className="sf-pro-rounded semiBold" style={pStyle}>Contacts</p>
          <Row>
            <Col span={12}>
              <DescriptionItem title="Email" content="zakysteinfeld@outlook.com" />
            </Col>
            <Col span={12}>
              <DescriptionItem title="Phone Number" content="+62 819-0454-6023" />
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