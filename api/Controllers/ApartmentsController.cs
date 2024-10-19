using Microsoft.AspNetCore.Mvc;
using api.Modal;
using Microsoft.EntityFrameworkCore;
using api.Data;


 [ApiController]
[Route("api/apartments")]
public class ApartmentsController : ControllerBase
{

   private readonly DBContext _context;

     public ApartmentsController(DBContext context)
        {
            _context = context;
        }

    
        // GET: api/apartments
        [HttpGet]
        public async  Task<ActionResult>  GetApartments()
        {
            var apartments = await _context.Apartments
        .ToListAsync();
            return Ok(apartments);
        
        }

        // GET: api/apartments/{id}
        [HttpGet("{id}")]
        public async Task<IActionResult> GetApartment(int id)
        {
            var apartment = await _context.Apartments.FindAsync(id);
            if (apartment == null)
            {
                return NotFound();
            }
            return Ok(apartment);
        }

        // POST(add): api/apartments
        [HttpPost]
        public async Task<IActionResult> CreateApartment([FromBody] Apartment apartment)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Apartments.Add(apartment);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetApartment), new { id = apartment.Id }, apartment);
        }

        // PUT(update): api/apartments/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateApartment(int id, [FromBody] Apartment apartment)
        {
            if (id != apartment.Id)
            {
                return BadRequest();
            }

            _context.Entry(apartment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ApartmentExists(id))
                {
                    return NotFound();
                }
                throw;
            }

            return NoContent();
        }

        // DELETE: api/apartments/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteApartment(int id)
        {
            var apartment = await _context.Apartments.FindAsync(id);
            if (apartment == null)
            {
                return NotFound();
            }

            _context.Apartments.Remove(apartment);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        private bool ApartmentExists(int id) => _context.Apartments.Any(e => e.Id == id);
    
}
