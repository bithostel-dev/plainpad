import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';
import {inject, observer} from 'mobx-react';

class Login extends Component {
  render() {
    const {
      accountStore
    } = this.props;

    const {
      user,
      profile
    } = accountStore;

    const {
      email,
      password
    } = profile;

    return (
      <div className="app flex-row align-items-center">
        {user !== null ? <Redirect to="/notes"/> : ''}

        <Container>
          <Row className="justify-content-center">
            <Col md="8" lg="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={(event) => {
                      event.preventDefault();
                      this.props.accountStore.login();
                    }}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Email" autoComplete="email" value={email}
                               onChange={(event) => profile.email = event.target.value}/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"/>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" value={password}
                               onChange={(event) => profile.password = event.target.value}/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Link to={'/recover-password'} className="px-0">
                            Forgot password?
                          </Link>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default inject('accountStore')(
  observer(Login)
);
