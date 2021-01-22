import React from "react";
import { ListGroup } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";

function ContainerItem() {
  const showModal = () => {
    return (
      <Modal show={this.state.showPopup}>
        <Modal.Header>
          <Modal.Title>
            {this.state.incomeType ? "Add Spended Money" : "Add Received Money"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={this.handleFormSubmit}>
            <label>
              {this.state.incomeType ? "Spended Money" : "Add Money"} :{" "}
              <input
                name="addedMoney"
                type="number"
                onChange={this.handleInput}
              />
            </label>
            <label>
              Add Description:{" "}
              <input
                name="description"
                type="text"
                onChange={this.handleInput}
              />
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => this.setState({ showPopup: false })}
          >
            Close
          </Button>
          <Button variant="primary" onClick={this.handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <Container>
      {this.showModal()}
      <Row>
        <Col style={{ backgroundColor: "#c3c3c3", height: "100px" }}>
          <div>
            <Col style={{ textAlign: "start", marginTop: "35px" }}>
              <label>
                <b>Balance: </b> Rs. {localStorage.getItem("currentBalance")}
              </label>
              <div>
                <Row>
                  <Col>
                    <label>Income: {localStorage.getItem("income")}</label>
                  </Col>
                  <Col>
                    <label>
                      Spended: {localStorage.getItem("spendedMoney")}
                    </label>
                  </Col>
                </Row>
              </div>
            </Col>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col style={{ backgroundColor: "white" }}>
          <ListGroup />
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col>
          <Button variant="success" onClick={() => this.popShow("Add")}>
            Add Money (+)
          </Button>
        </Col>
        <Col>
          <Button variant="danger" onClick={() => this.popShow()}>
            Spended Money (-)
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerItem;
