import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";
import "./style/MainForm.css";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const MainForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3 margin-element" controlId="formName">
        <Form.Label className="mb-2">Name </Form.Label>
        <Form.Control
          type="text"
          className="adjust-element"
          placeholder="Enter name"
        />
      </Form.Group>
      <Form.Group className="mb-3 margin-element" controlId="formEmail">
        <Row>
          <Form.Label className="mb-2">Email </Form.Label>
          <Form.Control
            type="email"
            className="adjust-element"
            placeholder="Enter email"
          />
        </Row>
        <Row>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Row>
      </Form.Group>
      <Form.Group className="mb-3 margin-element" controlId="formAddress">
        <Form.Label className="mb-2">Address </Form.Label>
        <Form.Control
          type="text"
          className="adjust-element"
          placeholder="Enter address"
        />
      </Form.Group>
      <Form.Group className="mb-3 margin-element" controlId="formPhone">
        <Form.Label className="mb-2">Phone </Form.Label>
        <Form.Control
          type="text"
          className="adjust-element"
          placeholder="Enter phone"
        />
      </Form.Group>
      <Form.Group className="mb-3 margin-element" controlId="formGender">
        <Form.Label className="mb-2">Gender </Form.Label>
        <FormCheck
          type="radio"
          label="Male"
          name="gender"
          id="formMale"
          value="male"
        />
        <FormCheck
          type="radio"
          label="Female"
          name="gender"
          id="formFemale"
          value="female"
        />
      </Form.Group>

      <Form.Group className="mb-3 margin-element" controlId="formActivity">
        <Form.Label className="mb-2">Activities</Form.Label>
        <Form.Check type="checkbox" label="Strength training" name="activity" />
        <Form.Check type="checkbox" label="Cardio" name="activity" />
        <Form.Check type="checkbox" label="Yoga" name="activity" />
        <Form.Check type="checkbox" label="Cycling" name="activity" />
        <Form.Check type="checkbox" label="Running" name="activity" />
      </Form.Group>

      <Form.Group className="mb-3 margin-element" controlId="formRating">
        <Form.Label className="mb-2">Rating </Form.Label>
        <Form.Select
          className="adjust-element"
          aria-label="Default select example"
        >
          <option></option>
          <option value="very low">Very Low</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="very high">Very High</option>
        </Form.Select>
      </Form.Group>

      <Form.Group
        className="mb-3 margin-element center-element"
        controlId="formComments"
      >
        <Form.Control
          className="mb-3"
          as="textarea"
          placeholder="Leave a comment here"
          style={{ width: "320px", height: "100px" }}
        />
      </Form.Group>
      <InputGroup
        className="mb-3 margin-element center-element"
        id="formSubmit"
      >
        <Button className="button-element" type="submit">
          Submit
        </Button>
      </InputGroup>
    </Form>
  );
};

export default MainForm;
