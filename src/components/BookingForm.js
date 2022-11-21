import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";

const BookingForm = props => {
  const handleBookingForm = event => {
    event.preventDefault();
    const newBooking = {
      firstName: event.target.firstName.value,
      surname: event.target.surname.value,
      title: event.target.title.value,
      roomId: event.target.roomId.value,
      checkInDate: event.target.checkInDate.value,
      checkOutDate: event.target.checkOutDate.value
    };
    props.setBookings(props.bookings.concat(newBooking));
  };

  return (
    <div>
      <Form onSubmit={handleBookingForm}>
        <Container>
          <Row>
            <Col>
              <input type="text" name="firstName" placeholder="First Name" />
            </Col>
            <Col>
              <input type="text" name="surname" placeholder="Surname" />
            </Col>
            <Col>
              <input type="text" name="title" placeholder="Title" />
            </Col>

            <Col>
              <input type="text" name="roomId" placeholder="Room Id" />
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                type="date"
                name="checkInDate"
                placeholder="Check-in Date"
              />
            </Col>
            <Col>
              <input
                type="date"
                name="checkOutDate"
                placeholder="Check-out Date"
              />
            </Col>
            <Col>
              <Button variant="primary" type="submit" className="mb-3">
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default BookingForm;
