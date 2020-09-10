import React from 'react';
import '../footer/style.css';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

function Footer() {
  return (
    <Container className="footer" fluid={true}>
      <Row >
        <Col xl={12}>
        Created by © 2018-{(new Date().getFullYear())} <strong>Tran Quang Tien</strong>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
