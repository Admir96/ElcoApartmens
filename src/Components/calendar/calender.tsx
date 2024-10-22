import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import BookNowContact from "./bookNowContact";
import { toast } from "react-toastify";
import axios from "axios";
import { format } from "date-fns";

export interface BookingRequest {
    Id?: number;
    CustomerName: string;
    CustomerEmail: string;
    StartDate: string; 
    EndDate: string;   
    ApartmentId: number;
}

const bookedIntervals = [
    { start: new Date("2024-10-09"), end: new Date("2024-10-15") },
];

const Calendar: React.FC = () => {
    const [showContactForm, setShowContactForm] = useState(false);
    const [checkInDate, setCheckInDate] = useState<Date | undefined | null>(undefined);
    const [checkOutDate, setCheckOutDate] = useState<Date | undefined | null>(undefined);
    const { id } = useParams<{ id: string }>();

    const handleBookingSubmit = async (data: { name: string; email: string; }) => {

        if (!checkInDate || !checkOutDate) {
            toast.error('Both check-in and check-out dates are required!');
            return;
        }
        if (checkOutDate <= checkInDate) {
            toast.error('Check-out date must be after check-in date!');
            return;
        }
        if (isBooked(checkInDate) || isBooked(checkOutDate)) {
            toast.error('Selected dates are already booked!');
            return;
        }


        const bookingData: BookingRequest = {
            CustomerName: data.name,
            CustomerEmail: data.email,
            StartDate: format(checkInDate, 'yyyy-MM-dd'), 
            EndDate: format(checkOutDate, 'yyyy-MM-dd'),   
            ApartmentId: parseInt(id!),
        };

        try {
            console.log("Booking Data:", JSON.stringify(bookingData));

            const response = await axios.post(`http://localhost:5283/api/apartments/${id}/booking`, bookingData);

            console.log("Booking Data:", response.data);

            toast.success('Booking request submitted successfully!');
        } catch (error) {
            toast.error('Booking request failed!');
        } finally {
            setShowContactForm(false);
        }
    };

    const isBooked = (date: Date) => {
        return bookedIntervals.some(({ start, end }) => start <= date && date <= end);
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={6} className="mb-3">
                    <Form.Group>
                        <Form.Label>Check-in</Form.Label>
                        <DatePicker
                            selected={checkInDate}
                            onChange={(date: Date | null) => {
                                setCheckInDate(date);
                                if (date) {
                                    setCheckOutDate(undefined);
                                }
                            }}
                            selectsStart
                            startDate={checkInDate || undefined}
                            endDate={checkOutDate || undefined}
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
                            onChange={(date:Date | null ) => setCheckOutDate(date)}
                            selectsEnd
                            startDate={checkInDate || undefined}
                            endDate={checkOutDate || undefined}
                            minDate={checkInDate ?? undefined}
                            filterDate={(date) => !isBooked(date)} // Disable booked dates
                            className="form-control"
                            placeholderText="Select Check-out Date"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Button onClick={() => setShowContactForm(true)}>Book Now</Button>
            {showContactForm && (
                <BookNowContact onSubmit={handleBookingSubmit} 
                startDate={format(checkInDate!, 'yyyy-MM-dd')} 
                    endDate={format(checkOutDate!, 'yyyy-MM-dd')} />
               
            )}
        </Container>
    );
};

export default Calendar;
