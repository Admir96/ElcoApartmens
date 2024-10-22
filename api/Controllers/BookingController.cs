using api.Data;
using api.Modal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


[Route("api/apartments/{apartmentId}/[controller]")] 
[ApiController]
public class BookingController : ControllerBase
{
    private readonly DBContext _context;

    public BookingController(DBContext context)
    {
        _context = context;
    }

    // GET: api/apartments/{apartmentId}/Booking
    [HttpGet]
    public async Task<ActionResult<IEnumerable<BookingRequests>>> GetBookings(int apartmentId)
    {

        return await _context.BookingRequest
            .Where(b => b.ApartmentId == apartmentId)
            .ToListAsync();
    }

    // GET: api/apartments/{apartmentId}/Booking/5
    [HttpGet("{id}")]
    public async Task<ActionResult<BookingRequests>> GetBooking(int apartmentId, int id)
    {
        var booking = await _context.BookingRequest
            .FirstOrDefaultAsync(b => b.Id == id && b.ApartmentId == apartmentId);

        if (booking == null)
        {
            return NotFound();
        }

        return booking;
    }

    // POST: api/apartments/{apartmentId}/Booking
    [HttpPost]
    public async Task<ActionResult<BookingRequests>> PostBooking(BookingRequests booking)
    {

        booking.ApartmentId = booking.ApartmentId; 

        _context.BookingRequest.Add(booking);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetBooking", new { apartmentId = booking.ApartmentId, id = booking.Id }, booking);
    }

    // PUT: api/apartments/{apartmentId}/Booking/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutBooking(int apartmentId, int id, BookingRequests booking)
    {
        if (id != booking.Id)
        {
            return BadRequest();
        }

        booking.ApartmentId = apartmentId; 

        _context.Entry(booking).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!BookingExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    // DELETE: api/apartments/{apartmentId}/Booking/5
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
