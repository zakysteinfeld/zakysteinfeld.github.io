import React, { Component } from 'react'
import {
  Container,
  Row,
  Col
} from "reactstrap"
import { HeartFilled } from '@ant-design/icons';
import { Link } from "react-router-dom"

export default class Footer extends Component {
  render () {
    const { uri } = this.props
    return (
      <footer className="footer google-sans">
        <Container>
            <hr/>
            <Row className="align-items-center justify-content-md-between">
              <Col className="text-center">
                © {new Date().getFullYear()}{" "} • Developed with <HeartFilled /> by Muhamad Zaky
              </Col>
            </Row>
          </Container>
      </footer>
    )
  }
}