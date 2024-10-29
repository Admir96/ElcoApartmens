using api.Data;
using api.Modal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


[Route("api/[controller]")]
[ApiController]
public class BookingController : ControllerBase
{
    private readonly DBContext _context;

    public BookingController(DBContext context)
    {
        _context = context;
    }


 
    [HttpGet]
    public async Task<ActionResult<BookingRequests>> GetAllBookingRequests()
    {
         var bookings = await _context.BookingRequest.ToListAsync();
         
           if (bookings == null || !bookings.Any())
         return NotFound(); 
        

       return Ok(bookings);
    }

   
    [HttpGet("apartments/{apartmentId}")]
    public async Task<ActionResult<IEnumerable<BookingRequests>>> GetBookings(int apartmentId)
    {
        return await _context.BookingRequest
            .Where(b => b.ApartmentId == apartmentId)
            .ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<BookingRequests>> GetBooking(int id)
    {
        var booking = await _context.BookingRequest.FindAsync(id);
            

        if (booking == null)
        {
            return NotFound();
        }

        return booking;
    }


    [HttpPost]
    public async Task<ActionResult<BookingRequests>> PostBooking(BookingRequests booking)
    {

         if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        booking.ApartmentId = booking.ApartmentId; 

        _context.BookingRequest.Add(booking);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetBooking", new { apartmentId = booking.ApartmentId, id = booking.Id }, booking);
    }

         [HttpPut("{id}")]
    public async Task<IActionResult> ApproveBookingRequest(int id, [FromBody] bool isApproved)
    {
       
    
        var request = await _context.BookingRequest.FindAsync(id);
        
        if (request == null)
        {
            return NotFound();
        }

        request.IsApproved = isApproved;
        await _context.SaveChangesAsync();
        return NoContent();
    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBooking(int apartmentId, int id)
    {
        var booking = await _context.BookingRequest
            .FirstOrDefaultAsync(b => b.Id == id && b.ApartmentId == apartmentId);
        
        if (booking == null)
        {
            return NotFound();
        }

        _context.BookingRequest.Remove(booking);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool BookingExists(int id)
    {
        return _context.BookingRequest.Any(e => e.Id == id);
    }
}
