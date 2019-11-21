import React, { Component } from 'react'
import {
  Container,
  Row,
  Col
} from "reactstrap"
import { Icon } from "antd"
import { Link } from "react-router-dom"

export default class Footer extends Component {
  render () {
    const { uri } = this.props
    return (
      <footer className="footer sf-pro-rounded">
        <Container>
            <hr/>
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                    • Developed with <Icon type="heart" theme="filled" /> by Muhamad Zaky.
                </div>
              </Col>
              <Col md="6" className="textLink" style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link
                  to={uri + "MyStory"}
                >
                  My Story
                </Link>
              </Col>
            </Row>
          </Container>
      </footer>
    )
  }
}