import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker"; // Make sure to import DatePicker
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS
import BookNowContact from "./bookNowContact";

const Calendar: React.FC = () => {
    const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
    const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined);


    const bookedIntervals = [
        { start: new Date("2024-10-09"), end: new Date("2024-10-15") },
        // Add more booked intervals as needed
    ];

    const AddIntervals = (start:any, end:any) =>{

        (!isBooked)
          return bookedIntervals.push(({ start, end }));
        
         
    }
const openContactForm = () => {

    AddIntervals(checkInDate,checkOutDate);
    console.log("Requesting dates:", { checkInDate, checkOutDate });

     window.open(
        '/bookNowContact?${ checkInDate, checkOutDate }',
        '_blank',
        'width=850,height=720,top=100,left=600'
      );

      
    
    }

    const isBooked = (date: Date) => {

        return bookedIntervals.some(({ start, end }) => start <= date  && date <= end);
    };

    return (
        <Container className="mt-5">
        <Row>
            <Col md={6} className="mb-3">
                <Form.Group>
                    <Form.Label>Check-in</Form.Label>
                    <DatePicker
                        selected={checkInDate}
                        onChange={(date:any) => {
                            setCheckInDate(date);
                            if (date) {
                                setCheckOutDate(undefined);
                            }
                        }}
                        selectsStart
                        startDate={checkInDate}
                        endDate={checkOutDate}
                        filterDate={(date) => !isBooked(date)} // Disable booked dates
                        className="form-control"
                        placeholderText="Select Check-in Date"
                    />
                </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
                <Form.Group>
                    <Form.Label>Check-out</Form.Label>
                    <DatePicker
                        selected={checkOutDate}
                        onChange={(date:any) => setCheckOutDate(date)}
                        selectsEnd
                        startDate={checkInDate}
                        endDate={checkOutDate}
                        minDate={checkInDate ?? undefined}
                        filterDate={(date) => !isBooked(date)} // Disable booked dates
                        className="form-control"
                        placeholderText="Select Check-out Date"
                    />
                </Form.Group>
            </Col>
        </Row>
            <Button id="Button" variant="secondary" disabled={!checkInDate && !checkOutDate} onClick = {openContactForm}>
                Book Now
            </Button>
        </Container>
    );
};

export default Calendar;
