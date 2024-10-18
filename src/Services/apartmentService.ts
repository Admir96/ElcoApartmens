import axios from 'axios';

const API_URL = 'http://localhost:5283/api/apartments';

export interface BookingRequest {
    id: number;
    customerName: string;
    customerEmail: string;
    phoneNumber: string;
    startDate: string; // Use string for date if you are working with ISO format
    endDate: string;   // Same as above
    apartmentId: number;
}

export interface Apartment {
    id: number;
    price: number;
    header: string;
    description: string;
    description2: string;
    amenities: string[];
    bookingRequests: BookingRequest[]; // Use the BookingRequest interface here
    imageUrls: string[];
}


const fetchApartments = async (): Promise<Apartment[]> => {

    try {
        
        const response = await axios.get(API_URL);
        return response.data;


    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || 'Error fetching apartments');
        }
        throw new Error('An unexpected error occurred');
    }
};

export default fetchApartments;