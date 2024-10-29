import React, { useEffect, useState } from 'react';
import axios from 'axios';

export interface bookingData {
    Id?: number;
    CustomerName: string;
    CustomerEmail: string;
    StartDate: string;
    EndDate: string;
    ApartmentId: number;
    IsApproved: boolean;
}

const AdminPanel: React.FC = () => {
    const [bookings, setBookings] = useState<bookingData[]>([]);
  

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get<bookingData[]>('http://localhost:5283/api/booking');
            
              setBookings(response.data);
    
            } catch (error) {
                console.error('Error fetching bookings:', error);
            }
      
        };

        fetchBookings();
    }, []);


    const handleApproval = async (request: bookingData, isApproved: boolean) => {

        if(!request.Id){
             console.error('ID request errror!');


        }
        
        try{
        await axios.put(`http://localhost:5283/api/booking/${request.Id}`, isApproved, {
            headers: {
                'Content-Type': 'application/json',
    }});
        
        
        const updatedBookings = bookings.filter((booking) => booking.Id !== request.Id);
        setBookings(updatedBookings); 

  } 
      catch(error)
        {
           console.error('handleApproval error :' + error)
           }
    

};

    return (
        <div>
          <h1>Booking Requests</h1>
<ul className="booking-list">
    {bookings.map((booking: bookingData, index:number) => (
        <li key={index} className="booking-item">
            <div className="booking-details">
                <span><strong>ID:</strong> {booking.Id ?? 'N/A'}</span>
                <span><strong>Customer Name:</strong> {booking.CustomerName ?? 'N/A'}</span>
                <span><strong>Email:</strong> {booking.CustomerEmail ?? 'N/A'}</span>
                <span><strong>Start Date:</strong> {booking.StartDate ? new Date(booking.StartDate).toLocaleDateString() : 'N/A'}</span>
                <span><strong>End Date:</strong> {booking.EndDate ? new Date(booking.EndDate).toLocaleDateString() : 'N/A'}</span>
                <span><strong>Status:</strong> {booking.IsApproved ? 'Approved' : 'Not Approved'}</span>
            </div>
            <div className="booking-actions">
                <button onClick={() => handleApproval(booking, true)}>Approve</button>
                <button onClick={() => handleApproval(booking, false)}>Decline</button>
            </div>
        </li>
    ))}
</ul>

        </div>
    );
};

export default AdminPanel;
