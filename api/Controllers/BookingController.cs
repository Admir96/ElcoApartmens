using Microsoft.AspNetCore.Mvc;
using api.Data; 
using api.Modal;
using Microsoft.EntityFrameworkCore;

namespace YourNamespace.Controllers
{
    [ApiController]
    [Route("api/bookings")]
    public class BookingController : ControllerBase
    {
        private readonly DBContext _context;

        public BookingController(DBContext context)
        {
            _context = context;
        }

        // POST: api/bookings
        [HttpPost]
        public async Task<IActionResult> CreateBooking([FromBody] BookingRequests request)
        {
            if (request.StartDate >= request.EndDate)
            {
                return BadRequest("End date must be after start date.");
            }

            var apartment = await _context.Apartments
                .Include(a => a.BookingRequest)
                .FirstOrDefaultAsync(a => a.Id == request.ApartmentId);

            if (apartment == null)
            {
                return NotFound("Apartment not found.");
            }

            var overlappingBookings = apartment.BookingRequest
                .Any(b => (b.StartDate < request.EndDate && b.EndDate > request.StartDate));

            if (overlappingBookings)
            {
                return BadRequest("Requested dates are not available.");
            }

            // Saving the booking request
            apartment.BookingRequest.Add(request);
            await _context.SaveChangesAsync();

            return Ok(request);
        }

                // DELETE: api/bookings
    [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBooking(int id){
             var BookingRequest = await _context.BookingRequest.FindAsync(id);

             if(BookingRequest == null)
             return NotFound();

              _context.BookingRequest.Remove(BookingRequest);    
              await _context.SaveChangesAsync();
              return NoContent();    
           }

         
}
}
