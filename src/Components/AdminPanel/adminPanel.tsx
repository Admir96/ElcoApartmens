import React, { useEffect, useState } from 'react';


export interface bookingData  {
    Id:number
    CustomerName:string,
    CustomerEmail:string,
    PhoneNumber:string,
    StartDate:string,
    EndDate: string,
    ApartmentId:number 
}

const AdminPanel: React.FC = () => {
    const [bookings, setBookings] = useState(Object);

    useEffect(() => {
        const fetchBookings = async () => {
            const response = await fetch('/api/bookingrequests');
            const data = await response.json();
            setBookings(data);
        };

        fetchBookings();
    }, []);

    return (
        <div>
            <h1>Booking Requests</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking:bookingData) => (
                        <tr key={booking.Id}>
                            <td>{booking.Id}</td>
                            <td>{booking.CustomerName}</td>
                            <td>{booking.CustomerEmail}</td>
                            <td>{booking.PhoneNumber}</td>
                            <td>{booking.StartDate}</td>
                            <td>{booking.EndDate}</td>
                            <td>
                             
                                <button>Approve</button>
                                <button>Decline</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPanel;
